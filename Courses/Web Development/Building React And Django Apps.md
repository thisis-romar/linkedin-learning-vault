---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-react-and-django-apps
url: "https://www.linkedin.com/learning/building-react-and-django-apps"
level: Intermediate
updated: 12/4/2019
learners: 5617
skills:
  - Django
  - React.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE3ZPEPGGQhTQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1575482817132?e=2147483647&amp;v=beta&amp;t=FxUZUssqRVxIovN5XmfE2NvZQyiQ3PGQONsF0zuuMRk"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills as a Django Developer]]'
next_courses:
  - '[[Building Angular and Django Apps]]'
path_nav: '[{"path":"Advance Your Skills as a Django Developer","position":1,"total":6,"prev":null,"next":"Building Angular and Django Apps"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/django
  - skill/react-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20React%20And%20Django%20Apps.md)

![Building React And Django Apps](https://media.licdn.com/dms/image/v2/C4E0DAQE3ZPEPGGQhTQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1575482817132?e=2147483647&amp;v=beta&amp;t=FxUZUssqRVxIovN5XmfE2NvZQyiQ3PGQONsF0zuuMRk)

# Building React And Django Apps

> Discover how to combine the robust front-end functionality of the React framework with the best of the Django back end to build full-stack applications. In this course, join Rudolf Olah as he demonstrates how to wire together the two frameworks, add pagination, secure, and test your applications. Throughout the course, discover how to prepare your React code for production and communicate between 

> [LinkedIn Learning](https://www.linkedin.com/learning/building-react-and-django-apps) | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Create a full-stack React app with Django REST framework](#create-a-full-stack-react-app-with-django-rest-framework)
  - [What you should know](#what-you-should-know)
  - [Demo project overview](#demo-project-overview)
- [**1. Django and React Preparation**](#1-django-and-react-preparation) (4 videos)
  - [Running the React and Django development servers](#running-the-react-and-django-development-servers)
  - [Preparing React code for production](#preparing-react-code-for-production)
  - [Serving React code through Django's static files](#serving-react-code-through-djangos-static-files)
  - [Navigating between React components using React Router](#navigating-between-react-components-using-react-router)
- [**2. Filtering and Pagination with Django and React**](#2-filtering-and-pagination-with-django-and-react) (8 videos)
  - [Creating a ViewSet with Django](#creating-a-viewset-with-django)
  - [Displaying a list of items with React](#displaying-a-list-of-items-with-react)
  - [Deleting an item using React and Django](#deleting-an-item-using-react-and-django)
  - [Partially updating an item using React](#partially-updating-an-item-using-react)
  - [Pagination with Django](#pagination-with-django)
  - [Pagination with React](#pagination-with-react)
  - [Filtering with Django](#filtering-with-django)
  - [Filtering with React](#filtering-with-react)
- [**3. Forms with React and Django**](#3-forms-with-react-and-django) (7 videos)
  - [Handling creating models with Django REST framework](#handling-creating-models-with-django-rest-framework)
  - [Creating a REST API Service class with React and Axios](#creating-a-rest-api-service-class-with-react-and-axios)
  - [Creating a basic form as a React component](#creating-a-basic-form-as-a-react-component)
  - [Creating form fields for basic form](#creating-form-fields-for-basic-form)
  - [Connecting a React component to a service](#connecting-a-react-component-to-a-service)
  - [Validating form data with Django REST framework](#validating-form-data-with-django-rest-framework)
  - [Displaying validation errors with React](#displaying-validation-errors-with-react)
- [**4. Refactoring React with Hooks and Higher-Order Components**](#4-refactoring-react-with-hooks-and-higher-order-components) (4 videos)
  - [Using timers with state to display data](#using-timers-with-state-to-display-data)
  - [Creating a higher-order component with React](#creating-a-higher-order-component-with-react)
  - [Using React hooks and refactoring a component to use hooks](#using-react-hooks-and-refactoring-a-component-to-use-hooks)
  - [Refactoring a higher-order component to use hooks](#refactoring-a-higher-order-component-to-use-hooks)
- [**5. Testing React and Django**](#5-testing-react-and-django) (7 videos)
  - [Unit testing a component](#unit-testing-a-component)
  - [Unit testing two React routes and navigation between components](#unit-testing-two-react-routes-and-navigation-between-components)
  - [End2End testing the form submission process](#end2end-testing-the-form-submission-process)
  - [End2End testing the filtered data table](#end2end-testing-the-filtered-data-table)
  - [Unit testing caching with Django REST framework](#unit-testing-caching-with-django-rest-framework)
  - [Unit testing sorting and filtering](#unit-testing-sorting-and-filtering)
  - [Unit testing validation for the REST API](#unit-testing-validation-for-the-rest-api)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a full-stack React app with Django REST framework](https://www.linkedin.com/learning/building-react-and-django-apps/create-a-full-stack-react-app-with-django-rest-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/create-a-full-stack-react-app-with-django-rest-framework?u=76281980&t=0)** - [Rudolf] Learning [[React.js|React]] is straight forward and gives you the skills to become a full stack developer. By working with [[Representational State Transfer (REST)|rest]] API's through [[Django]] and [[Python (Programming Language)|Python]] you can build front end interfaces with React. You'll use Axious to communicate between the front end and the back end server. [[React Hooks]] are the latest evolution in React component implementation and we build our own custom hook then we'll make our app production ready with unit tests and end to end tests. Hi, I'm Rudolf. I've been optimizing developer feedback loops for the past 10 years. Join me in my [[LinkedIn]] learning course to create a full stack app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Django]] (1), [[Python (Programming Language)|Python]] (1), [[React Hooks]] (1)
> **CLI Commands:** python (1), make (1)
> **Env Vars:** api (1)
> **Speakers:** - [rudolf] (1)

#### [What you should know](https://www.linkedin.com/learning/building-react-and-django-apps/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/what-you-should-know?u=76281980&t=0)** - [Instructor] Before getting started with [[React.js|React]] and [[Django]] [[Representational State Transfer (REST)|REST]] framework here is what you should know. To work with Django and Django REST framework, you should know how to program basic programs with the [[Python (Programming Language)|Python]] programming language. The book, Learn Python the Hard Way, is an especially good book. You can watched a [[LinkedIn]] Learning course, Learning Python, too. If you know [[JavaScript]] already, Python is a bit different, but you should be able to pick it up with some help from these courses. When working with Django, you should know how to create models of use, how to launch the development server, how to set up URL configuration patterns. To work with Django REST framework, there is a LinkedIn course that you can watch, [[Building RESTful Web APIs with Django]]. It will show you how to build a REST API and how to how use Django REST frameworks, serializers, filters, and API views. To work with React, you will need to know some JavaScript. We are using ES6, which is one of the latest versions of the JavaScript language. You will want to check out the [[ECMAScript]] 6 LinkedIn Learning course and the [[React.js]] Essential Training course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (7), [[Representational State Transfer (REST)|Rest]] (5), [[Python (Programming Language)|Python]] (4), [[LinkedIn]] (3), [[JavaScript]] (3)
> **Env Vars:** rest (5), api (2), url (1), es6 (1)
> **CLI Commands:** python (4)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** getting started (1), set up (1)
> **File Paths:** react.js (1)
> **Speakers:** - [instructor] (1)

#### [Demo project overview](https://www.linkedin.com/learning/building-react-and-django-apps/demo-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/demo-project-overview?u=76281980&t=0)** - [Narrator] In this project, we have the following libraries installed to be able to use [[Django]]. Django itself, Django [[Representational State Transfer (REST)|REST]] framework, Django-filter, for filtering querysets and models and the Django OAuth Toolkit for OAuth2 authentication. For the front end, we have these other modules installed. We have [[React.js]], [[React.js|React]] Router, Jest for [[Unit Testing]] and Cypress for [[End-to-end Testing]]. For this project, we have already built some Django models for packages, bookings and wishlist items. We've also built some methods for React to interact with the API server. We also have some pre-built React components for you to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (6), [[React.js|React]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[React.js]] (1), [[Unit Testing]] (1)
> **Env Vars:** rest (1), api (1)
> **File Paths:** react.js (1)
> **Speakers:** - [narrator] (1)


### 1. Django and React Preparation

[↑ Back to Table of Contents](#table-of-contents)

#### [Running the React and Django development servers](https://www.linkedin.com/learning/building-react-and-django-apps/running-the-react-and-django-development-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/running-the-react-and-django-development-servers?u=76281980&t=0)** - [Instructor] To run the [[Django]] development server we have to activate the [[Python (Programming Language)|Python]] virtual environment. Then we have to enter the project directory and run the server. In the browser, you can see that Django is running and you can see that we have access to the admin. For the [[React.js|React]] development server to work we first have to add the proxy configuration to package.[[JSON]]. On the command line we enter the front end directory and simply type in [[npm]] start to start the React development server. It will automatically launch a new browser window pointing to your React app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[Django]] (2), [[Python (Programming Language)|Python]] (1), [[JSON]] (1), [[npm]] (1)
> **CLI Commands:** python (1), npm (1)
> **File Paths:** package.json (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Preparing React code for production](https://www.linkedin.com/learning/building-react-and-django-apps/preparing-react-code-for-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/preparing-react-code-for-production?u=76281980&t=0)** - [Instructor] When a [[React.js|React]] app is built and complied for production, it needs to know which browsers will be supported. We can adjust this using the browser list configuration and package [[JSON]]. That's lines 23 to 28. Browser's list is used by React [[Angular]] and other frameworks, to allow [[Java]] script compilers such as Bable and TypeScript, know which [[JavaScript]] features should be polyfilled, or are natively supported by browsers. The most modern web browsers will be the fastest to compile production builds for us since there is no need for poly fields or any other transformations. Then we use React's built in build script to create a production build. As you can see, the build didn't take too long, and it resulted in a production-ready React app in the build directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[JSON]] (1), [[Angular]] (1), [[Java]] (1), [[JavaScript]] (1)
> **Env Vars:** json (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Serving React code through Django's static files](https://www.linkedin.com/learning/building-react-and-django-apps/serving-react-code-through-django-s-static-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/serving-react-code-through-django-s-static-files?u=76281980&t=0)** - [Instructor] To serve the production build of our [[React.js|React]] app, we have to add the front end route to our [[Django]] app settings file. The path will point to the React apps production files. Then in the Django URLs configuration we import serve and we add a catch all regular expression matcher that will serve the front end production code. Then we run the Django development server and we can see the production ready version of a React app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[Django]] (3)
> **Speakers:** - [instructor] (1)

#### [Navigating between React components using React Router](https://www.linkedin.com/learning/building-react-and-django-apps/navigating-between-react-components-using-react-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/navigating-between-react-components-using-react-router?u=76281980&t=0)** - [[React.js|React]] Router turns react into web application framework rather than a component library by providing a browser router, routes, and navigation links, as we can see in line two. With these tools, you can turn a component into a page that is routed to. To use React Router with our app, we need to wrap the whole app component in the browser router. We can see that on line 97, in the render method. As you can see, online 101, we are already linking to the home component using NavLink. We're going to define additional routes that will display specific page components around line 112. Whenever the route exactly matches the slash we'll display the list component. Whenever the URL matches details with an ID, we will render the details component. Additionally, we will be rendering a checkout page with the checkout component. Now, when we display the list of items, we want each item to link to the details page. We're going to import the link component from React Router,
>
> **[1:27](https://www.linkedin.com/learning/building-react-and-django-apps/navigating-between-react-components-using-react-router?u=76281980&t=87)** and then we're going to wrap the name of the item with the link component that points to the passed-in route.
>
> **[1:38](https://www.linkedin.com/learning/building-react-and-django-apps/navigating-between-react-components-using-react-router?u=76281980&t=98)** And we do the same for the Learn more text around line 30.
>
> **[1:47](https://www.linkedin.com/learning/building-react-and-django-apps/navigating-between-react-components-using-react-router?u=76281980&t=107)** We also give it a class name, and that's it for this one. We also want the shopping cart to link to the checkout page. We replace the span with the link component, and we add the route. And now we can start the react development server. As you can see, we have an item loading up and when we click Learn More, it goes to the item's detail page. We click Explore Our Tours, it goes to the home page, and when we click Checkout, it goes to that checkout page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5)
> **Env Vars:** url (1)
> **Speakers:** - react (1)


### 2. Filtering and Pagination with Django and React

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a ViewSet with Django](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-viewset-with-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-viewset-with-django?u=76281980&t=0)** - [Instructor] We're going to create a view set for the tour packages by reusing the existing package serializer. We already have a view set for creating and updating packages, but that's for administrative users to use. What we want is a public list of packages for anyone to access. We create a public package view set, and with the permission classes, set to token has scope. All users will have permission to access the list and they will only need the read scope on their Oauth token. All packages will be returned from this API end point in descending order by price and here's where we reuse the package serializer class. Now in the URLs configuration, we add a new route to the [[Django]] [[Representational State Transfer (REST)|rest]] framework default router.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Displaying a list of items with React](https://www.linkedin.com/learning/building-react-and-django-apps/displaying-a-list-of-items-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/displaying-a-list-of-items-with-react?u=76281980&t=0)** - [Instructor] We want our list to display more than one item. So, let's create a new default exported component. The list component will be using the same context as other pages in our app, the AppContext. We set that with a static variable. In the constructor, we keep track of the list of items and the total number of items. Then, we update the list, which means, sending the retrieveList method in the service API and sending that HTTP request to the [[Django]] [[Representational State Transfer (REST)|REST]] Framework endpoint. The data we receive contains results and the number of items. We set the state and update those. In the render method, we're going to use some of the app context for the tour package wishlist and we'll need the list data to display. Create a section and the data-testId will come in handy, later, when we write unit tests for this component. Then, for each item in the list, we use the Item component,
>
> **[1:34](https://www.linkedin.com/learning/building-react-and-django-apps/displaying-a-list-of-items-with-react?u=76281980&t=94)** where the key is a unique key. Route is set to the details pitch, the item is set to item. We pass on the wishlist and the toggleWishlist callback. Then, we need to add the REST API call. Go to the bottom of the file. We're adding a new call here, retrieveList. We use getConfig to get the [[React.js|react]] (mumbles) app token and we're going to send that along, when we make the REST API call, to get the public packages. Then, the response will be resolved with the response.data Let's run the web server. As you can see, we have a whole list of packages. If we open up the browser panel and record the network activity, we can see that the API is being hit and that many packages are being returned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Django]] (1), [[React.js|React]] (1)
> **Env Vars:** api (4), rest (3), http (1)
> **Code Identifiers:** retrievelist (2), testid (1), togglewishlist (1), getconfig (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Deleting an item using React and Django](https://www.linkedin.com/learning/building-react-and-django-apps/deleting-an-item-using-react-and-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/deleting-an-item-using-react-and-django?u=76281980&t=0)** - [Instructor] Right now the wishlist functionality only allows adding items to the wishlist. We're going to change this toggle a wishlist method, to allow deleting wishlist items. In the service API class, we update the wishlist delete method, we reuse the configuration, for sending http requests, which includes the ilog token, and then we return the resulting promise from the Axios, delete method. Now we need to override the destroy method of the wishlist item view set, on the [[Django]] side of things. We use pk, the primary key, as the package id, and then we search for the wishlist item, we delete the item, we delete the item from cache, and then we return a two hundred okay response with a short message. Now we run the development servers, we open up the network panel network panel, the dev tools, and so when we click to add a wishlist item, we see the request go through, the icon changes, we can see the response there, and then when we delete the item from the wishlist, we see
>
> **[1:34](https://www.linkedin.com/learning/building-react-and-django-apps/deleting-an-item-using-react-and-django?u=76281980&t=94)** the corresponding delete method. We can also check the Django admin, to see what wishlist items there are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (2)
> **Env Vars:** api (1)
> **UI Navigation:** toggle (1)
> **Speakers:** - [instructor] (1)

#### [Partially updating an item using React](https://www.linkedin.com/learning/building-react-and-django-apps/partially-updating-an-item-using-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/partially-updating-an-item-using-react?u=76281980&t=0)** - [Instructor] When a tour package is added to a user's wishlist we also want to know if they have tried to reserve that tour as well. When they click reserve on a tour the order item is set with the setOrderItem method in the App. And we are going to be calling a service API method to update the wishlist cart status. We pass in the item ID and true to indicate that this wishlist item has been added to the cart. And then we do the same thing as before. We update the state and we resolve with the item. Now we have to do something similar in case the user removes that tour package but leaves it on their wishlist. This time we're sending in false because it's been removed from the cart. And the [[Representational State Transfer (REST)|rest]] of the code here is the same. Now we open up ServiceApi and update that method. We're going to reuse the config and the data we are going to be sending with our HTTP PATCH request is the id and added_to_cart. Then we return the promise that is returned by Axios.patch. We start the development servers. We can open up the dev tools to the network panel. With the XHR request filter on. We click an item that has already been added to the wishlist
>
> **[1:35](https://www.linkedin.com/learning/building-react-and-django-apps/partially-updating-an-item-using-react?u=76281980&t=95)** click Reserve, it's added to the cart at the checkout. And we can see that it has been updated with a PATCH method. Now when we remove it it is again PATCHed and it has been removed from the cart.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** patch (2), api (1), http (1), xhr (1)
> **Code Identifiers:** setorderitem (1), added_to_cart (1)
> **API Endpoints:** patch  (2)
> **Speakers:** - [instructor] (1)

#### [Pagination with Django](https://www.linkedin.com/learning/building-react-and-django-apps/pagination-with-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/pagination-with-django?u=76281980&t=0)** - [Instructor] [[Django]] [[Representational State Transfer (REST)|REST]] framework provides multiple ways of paginating lists of items. There are three ways to do this with LimitOffset, Cursor, and PageNumber. We're going to keep things simple and use PageNumber pagination. We create a subclass called PackagePagination and we set the page size to nine, so we have a nice grid pattern on the front end. Then, in the PublicPackageViewSet, we set the pagination class to PackagePagination, and we're all done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1), [[Representational State Transfer (REST)|Rest]] (1), cursor (1)
> **Env Vars:** rest (1)
> **Speakers:** - [instructor] (1)

#### [Pagination with React](https://www.linkedin.com/learning/building-react-and-django-apps/pagination-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/pagination-with-react?u=76281980&t=0)** - [Narrator] Let's create the [[React.js|react]] pagination component which will keep track of the current page index. How many items there are in total, number of items to display per page, and the next and previous page callbacks. We calculate the last page and whether or not there's a previous or a next button to display. Do the same for the next button and then we build out the components for the pagination component. We have the previous and the next button here, and then we display some stats about the page such as the current page number, the last page number, and how many items we're displaying per page. Then in the list component we import the pagination component. In the constructor of the list page we need to add the page index as part of the list page's state we need to keep track of the page index. Set it to one for the first page and then in the update list method, we're going to be passing that along to the server's API retrievalist method. And since we changed jango to paginate the results, we're going to be extracting the results and the count directly from the data. That is returned for the HTTP call.
>
> **[1:35](https://www.linkedin.com/learning/building-react-and-django-apps/pagination-with-react?u=76281980&t=95)** Now we need to add the previous page callback which will set the state and update the page index to the current page index minus one. And then it will update the list and we're going to do the same for the next page except instead of decrementing, we're going to be incrementing by one. Now under render method we can add the page index and the total items and actually insert the pagination element. Set the page index, set the total to the total items, per page we have nine items, and our callback needs to be bound to the next page function and we do the same for the previous page function. In the service API we go to retreievalist, we have to add the next page index argument and then we have to update the query parameters that we're going to be sending over to include that page number. Now we can run the servers. We can see that there are far fewer items showing up in the list and we see nine items per page. Page one of 56, press next, page two.
>
> **[3:11](https://www.linkedin.com/learning/building-react-and-django-apps/pagination-with-react?u=76281980&t=191)** Now we can see that the items are indeed changing, and when we inspect a network request being made, we can see that we are sending in the page parameter and we're getting the count and the results from the API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Env Vars:** api (3), http (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Filtering with Django](https://www.linkedin.com/learning/building-react-and-django-apps/filtering-with-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/filtering-with-django?u=76281980&t=0)** - [Male Speaker] Now we want to be able to narrow down the user search for the perfect tour package. We're going to do this by using the base filter, which we import from [[Representational State Transfer (REST)|REST]] framework. And we also use the search filter. We're going to filter tour packages by their price. So, we create a new package price filter backend. And we define the queryset filter. And the current filters are empty. And we are going to check the query parameters of the incoming request, "searching for price min," and the default will be "none." And if the minimum price is set, we're going to add that filter. The price has to be greater than or equal to the minimum price. We're going to do the same for the maximum price. Difference is, that the price has to be less than or equal to the maximum price. After we've set up these filters, we can return the queryset filtered by those filters. Now, in the Public Package View set, we have to set up the filter backends that we will be using. The first one, is the package price filter backend and the second is the search filter.
>
> **[1:36](https://www.linkedin.com/learning/building-react-and-django-apps/filtering-with-django?u=76281980&t=96)** We're going to configure the search filter to use the name of the package and the promo description as search fields. So, if we type in "hiking," packages with the [[Microsoft Word|word]] "hiking" in their name or description will appear in the search results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1)
> **Prerequisites:** set up (2), configure (1)
> **Env Vars:** rest (1)
> **Speakers:** - [male (1)

#### [Filtering with React](https://www.linkedin.com/learning/building-react-and-django-apps/filtering-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/filtering-with-react?u=76281980&t=0)** - [Instructor] On the [[React.js|React]] front end our filter component will keep track of the price minimum and maximum and search text. We're going to store that in the state of the component. We implement an update field method to make updating filters simpler. And then when we actually apply the filter we're actually calling the onFilterUpdate callback and passing in the state of the filters. Notice that the component is unaware of any network calls that need to be made because those will be handled in the onFilterUpdate callback. Now let's update the render method and display the fields. First we're going to be binding all of the fields with the updateFilter method. We do the same for the maximum price. And we're going to do the same for the search field. We're also going to bind the apply filter callback. Let's extract the current values for the filters from the state. And then we can start displaying things. We've got the price. We have input fields for the minimum price. The name of this field will be price_min. Value is from the (muffled voice) and it's price_min as well. And on any change to this input we're going to call updatePriceMin. We're going to do the same for the maximum price.
>
> **[1:39](https://www.linkedin.com/learning/building-react-and-django-apps/filtering-with-react?u=76281980&t=99)** Placeholder will be Maximum. Instead of price_min it'll be price_max, and we use the updatePriceMax callback. For the search we have a new label. And then we have a new input field with a placeholder. The name is search, the value is search as well. And on any change to this field we call updateSearch. And finally we have the apply button. On clicking this button we call the Apply method, that's all there is to it to create the filter component. Now on the list page we need to first import the filters component. And in the constructor we need to add some additional state, specifically the filters. Then in the updateList method we're going to be extracting the filters from the state, and we're going to use it to build up the query parameters we're sending over to the server. Going to check if the price_min is set. And if it is we update the query parameters. Going to do the same for price_max. And we're going to do something similar for the search fields. Now that we've constructed the query params we're going to pass them up to the retrieve list method. After this we can define the update filters callback.
>
> **[3:17](https://www.linkedin.com/learning/building-react-and-django-apps/filtering-with-react?u=76281980&t=197)** So whenever a filter is updated we set the state and immediately after setting the state we will be updating the list so that it is filtered. In the render method, we're going to add a header and it will contain the filters component. So we pass in the onFilterUpdate callback that we're using here. updateFilters, we bind it, and that's it. Now, in service API we have to go to retrieveList add queryParams as a new argument to the method, and substitute the queryParams for the empty object we had before. So we'll have the filters as query parameters in addition to the page number. Now we start the servers. As you can see the three fields show up, minimum, maximum, and search fields. We're going to try typing in 100. Pressing apply you can see that the maximum price now is $100 for all the packages. And we can also type in wine country in the search field, and you can see that the results have changed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Code Identifiers:** price_min (4), onfilterupdate (3), price_max (2), queryparams (2), updatefilter (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 3. Forms with React and Django

[↑ Back to Table of Contents](#table-of-contents)

#### [Handling creating models with Django REST framework](https://www.linkedin.com/learning/building-react-and-django-apps/handling-creating-models-with-django-rest-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/handling-creating-models-with-django-rest-framework?u=76281980&t=0)** - [Instructor] We're going to be creating a new view set so that we can save the reservation booking from a customer. We need to import the booking model, and the booking serializer. At the bottom of the views file we can create the new model view set, using [[Django]] [[Representational State Transfer (REST)|REST]] frameworks built in API view. And the query set will be all booking objects. Serializer class will be set to the booking serializer. And then the permission classes will be set to the base permission. And that's so we don't have to check for a lot of [[Tokens]] in other permissions. In the serializer's file we're going to be creating the booking serializer. We need to import the booking model. And then create the serialzier itself. It's a model serializer. We set the class meta with the booking model, and we will serialize all fields. Then in the URL configuration, we need to register the bookings path as a new route in the Django REST framework default router. We can run the Django server, and check the browser, by using Django REST framework's built in [[HTML]] views for APIs. So you can see we have the list of bookings,
>
> **[1:34](https://www.linkedin.com/learning/building-react-and-django-apps/handling-creating-models-with-django-rest-framework?u=76281980&t=94)** and we have a forum to create new reservation bookings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (4), [[Representational State Transfer (REST)|Rest]] (3), [[Tokens]] (1), [[HTML]] (1)
> **Env Vars:** rest (3), api (1), url (1), html (1)
> **Speakers:** - [instructor] (1)

#### [Creating a REST API Service class with React and Axios](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-rest-api-service-class-with-react-and-axios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-rest-api-service-class-with-react-and-axios?u=76281980&t=0)** - We've already worked on the ServiceApi class, so let's update the retrieveWishList method to properly return all the items that are on the user's wish list. Going to be using the config for HTP request methods
>
> **[0:19](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-rest-api-service-class-with-react-and-axios?u=76281980&t=19)** and then returning a new Promise called Axios.get method pointing to the wish lists API URL. And when we get a response from this API call, we're going to be resolving with the response data. We've used the get config method a few times before, so let's dig in and see what it actually does. First, it asynchronously retrieves the application OAuth access token, then it sets up the authorization field of the header with the given access token. Finally, it resolves the promise with the config. Let's see what getAccessToken does. As you can see, it resolves this promise immediately if the access token has already been set. Otherwise, we're going to be using a grant type of client_credentials passing in the client_ID and the client_secret for this OAuth app. And the scope for the token will be a read scope. Then with Axios we post to the OAuth token API endpoint, which is actually provided by [[Django]] OAuth and with that response we will get an access token and we'll store that access token and resolve this promise. The two main grant types we use are client credentials and password. Client credentials is good for front end web apps like ours that are accessing Django [[Representational State Transfer (REST)|rest]] framework APIs.
>
> **[1:54](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-rest-api-service-class-with-react-and-axios?u=76281980&t=114)** Password is great for web apps where the user has to log in with their username and password. Knowing all of that, let's implement another API method for creating bookings. We call it createBooking. We get the config as usual and then we return a new promise. And the result of hosting to the bookings endpoint will be how we resolve this promise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (4), htp (1), url (1)
> **Code Identifiers:** retrievewishlist (1), getaccesstoken (1), client_credentials (1), client_secret (1), createbooking (1)
> **Speakers:** - we (1)

#### [Creating a basic form as a React component](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-basic-form-as-a-react-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-basic-form-as-a-react-component?u=76281980&t=0)** - [Narrator] The Checkout form needs to be implemented. It's going to use the AppContext. In the render method. these are the methods and data we're going to need from that context. We're going to be displaying four input fields. One for the users name, another for their email address, their street address and their city. Now let's render each form field by mapping the input fields and using the formField component. The field value comes from the booking model and whenever we update this form field we're going to use the updateField callback from the AppContext. And then we pass in the [[Representational State Transfer (REST)|rest]] of the field properties. We're going to display the item that is about to be ordered along with a button to remove it. Here's the Remove button and when we click, we use the AppContext clearOrderItem method and we pass in the item.id. And within this button, we're also going to have a nice icon that comes from the Font Awesome Library included with [[React.js|React]] icons.
>
> **[1:33](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-basic-form-as-a-react-component?u=76281980&t=93)** After that, we display the item's information.
>
> **[1:42](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-basic-form-as-a-react-component?u=76281980&t=102)** Now let's assemble this Checkout page. We have a header that says Checkout and it has a summary section underneath it displaying the item that will be ordered. And below that will be the form and that's where we put all the formFields. Below that section, we will have the actions that you can take which will be the Place order button. And that's it for our Checkout form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[React.js|React]] (1)
> **Code Identifiers:** formfield (1), updatefield (1), clearorderitem (1), formfields (1)
> **Speakers:** - [narrator] (1)

#### [Creating form fields for basic form](https://www.linkedin.com/learning/building-react-and-django-apps/creating-form-fields-for-basic-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/creating-form-fields-for-basic-form?u=76281980&t=0)** - Now let's update the form field component. It's a self contained component where data is passed in for display and changes to the field are propagated upwards to the containing checkout component. We're going to display the name, the label, and the value. And propagate changes up through the onUpdate callback. We're going to create the onChange callback which will call onUpdate with the field name and the updated value. We rendered the label and then the input for the form field. The name, the value, and the onChange callback. Let's run the development servers. We can see how this looks by adding an item to the cart and you can see that our checkout form has all the fields there and it shows the item that we will be ordering. But it doesn't have any styling, so let's fix that. We open checkout.css for the checkout [[Forms]] styling. We're going to set it up using a flex layout, the direction will be column and we set up some margins around it, then we setup the flex width for the header and the summary and also for the form itself along with another flex layout for the form. We also setup the layout for the form actions
>
> **[1:38](https://www.linkedin.com/learning/building-react-and-django-apps/creating-form-fields-for-basic-form?u=76281980&t=98)** and the place order button. Now we can style the icon for the package remove button. And then style the place order button. We also add a hover effect for the place order button. Let's see how this updated styling looks like in the browser. It looks much better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Code Identifiers:** onupdate (2), onchange (2)
> **Prerequisites:** setup (2), set up (1)
> **File Paths:** checkout.css (1)
> **Speakers:** - now (1)

#### [Connecting a React component to a service](https://www.linkedin.com/learning/building-react-and-django-apps/connecting-a-react-component-to-a-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/connecting-a-react-component-to-a-service?u=76281980&t=0)** - [Instructor] In the service API we already created the createBooking method. However, when we connect it to the checkout page component, we need to pass back any validation errors that happen. We can do this by adding reject to the promise, and by catching any errors returned from the API, and then passing them back. On the checkout page, we can keep track of whether or not the order was placed. We create the constructor in order to have the orderPlaced field as part of our state. And then we define the placeOrder method which will call back up to the app context, to actually place the order. And then when it is completed, we update the state. And the same is true if there are validation errors. We update the state again, but this time the order is not placed if there are any errors in the form. Now in the render method of the checkout page, we're going to need that data. And right before we create any form fields, we're going to be checking if an order was placed or not. If it was placed, we're just going to return a nice thank you message. And now we also have to update the place order button.
>
> **[1:39](https://www.linkedin.com/learning/building-react-and-django-apps/connecting-a-react-component-to-a-service?u=76281980&t=99)** Whenever it is clicked, we're going to call the placeOrder method, and we're also going to want to disable this button, if there is no item added to the cart. Let's run the [[Web Servers]]. Let's open up the dev tools to the network tab and the XHR requests. We're going to click a package, reserve it so we can get to the checkout page. And then we're going to try submitting the form. And you can see that there are errors being returned. And when we fill out the form correctly and place the order we can see our thank you message showing up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (1)
> **Code Identifiers:** placeorder (2), createbooking (1), orderplaced (1)
> **Env Vars:** api (2), xhr (1)
> **Speakers:** - [instructor] (1)

#### [Validating form data with Django REST framework](https://www.linkedin.com/learning/building-react-and-django-apps/validating-form-data-with-django-rest-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/validating-form-data-with-django-rest-framework?u=76281980&t=0)** - [Instructor] Right now, the validation is simple, whether or not a form is filled out. Let's do something a bit more useful. Let's check for a specific street address format. In the booking serializer, we're going to add a street address error message. In a [[Django]] [[Representational State Transfer (REST)|REST]] framework serializer, you only have to prefix the field name with validate in order to implement custom validation for the field. We can define a regular expression that we want to match, which will be a number followed by a street name and any other suffix and if the street address that's filled out matches, we simply return that value. Otherwise, we raise a validation error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** rest (1)
> **Speakers:** - [instructor] (1)

#### [Displaying validation errors with React](https://www.linkedin.com/learning/building-react-and-django-apps/displaying-validation-errors-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/displaying-validation-errors-with-react?u=76281980&t=0)** - [Instructor] Now that we're attaching validation errors, we can display them in the checkout page. We add the list of errors to the component's state. Then, whenever we place an order, we clear out the validation errors if the order is placed successfully, or we will be displaying those validation errors if the order is not placed successfully. Then when we render the checkout form we will need to extract the validation errors from the state and build up the list of errors that we will display. We're going to check each field that we have to see if there's an error for it. If there is an error we're going to add it to the list and then we're going to insert that list of errors right before we display the form fields. Now let's run the dev servers. Let's add a package to the cart and try and reserve it. If we click place order, it will show the usual error messages that none of the fields can be blank. We fill them out and we see the additional validation that we added for the street address.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Refactoring React with Hooks and Higher-Order Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Using timers with state to display data](https://www.linkedin.com/learning/building-react-and-django-apps/using-timers-with-state-to-display-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/using-timers-with-state-to-display-data?u=76281980&t=0)** - [Narrator] Whenever the user in on the checkout page, we want to introduce some urgency that they should place the order. We can do this with a countdown. When the component is mounted, we create a timer that counts down every second. If the user switches the page, the countdown is cleared. When they come back to the page, it'll be reset. The component does not render when time has run out. That while the countdown is on, it shows a message. Now on the checkout page, we import that component and we add it to the render method, specifically the checkout summary section. And it's a one minute countdown. Now let's run the dev servers. Let's reserve a package. And we can see that the countdown has begun.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [Creating a higher-order component with React](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-higher-order-component-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-higher-order-component-with-react?u=76281980&t=0)** - We have form field validation on the back end. Let's add it to the front end with a higher-order component. The higher-order component maintains its own state, which is the error and it provides a field validation method. Simply checking for an empty field, and sending the appropriate error message, and if there's no error, clearing that message. Afterward, it propagates this change up through the onUpdate property of the wrapped component. When we render it, then we are substituting its update callback with our validate callback. And we pass through the other properties and below that, we display any error message. On the checkout page, we import the higher-order component and we create a new component using it. Then, in the render method, we find the form fields and we substitute form field with validated field. Now, let's run the dev server. Add an item to the checkout. And if we enter something here, we can see that front-end validation
>
> **[1:35](https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-higher-order-component-with-react?u=76281980&t=95)** works with our higher order component.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Identifiers:** onupdate (1)
> **Speakers:** - we (1)

#### [Using React hooks and refactoring a component to use hooks](https://www.linkedin.com/learning/building-react-and-django-apps/using-react-hooks-and-refactoring-a-component-to-use-hooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/using-react-hooks-and-refactoring-a-component-to-use-hooks?u=76281980&t=0)** - [Speaker] We're going to Refactor the Countdown Timer component to use [[React Hooks]]. React hooks are a new feature that represent an evolution in the design of [[React.js|React]] components. Think of a React component as a composition in assembly of various hooks. The useState hook maintains State separately from a component. So, instead of using a constructor in setState, you set the specific State field, directly. The useEffect hook is a replacement for any actions that need to be taken when Mounting and Unmounting a component. In our re-factored component, we don't need a class-based component, just a function. We're going to use the useState hook to store the remaining countdown number. Then, we use the useEffect hook to store the timer, itself. We use setRemaining instead of setState, here. And, we trigger the countdown every second, as before. We no longer need to use an Interval Timer because each time a State update is triggered the component will be Rerendered. This means, this function call-back, given to useEffect, will be called along with the Cleanup method here. The [[Representational State Transfer (REST)|rest]] of the Render function will be the same as before. Except, of course, we don't need this sought State anymore. And, we no longer want the previous component as a default exported component.
>
> **[1:35](https://www.linkedin.com/learning/building-react-and-django-apps/using-react-hooks-and-refactoring-a-component-to-use-hooks?u=76281980&t=95)** We start the Depth server. Let's see how it looks in the browser. As you can see, it works the same as before, but now the code uses React hooks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Hooks]] (3), [[React.js|React]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** useeffect (3), usestate (2), setstate (2), setremaining (1)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)

#### [Refactoring a higher-order component to use hooks](https://www.linkedin.com/learning/building-react-and-django-apps/refactoring-a-higher-order-component-to-use-hooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/refactoring-a-higher-order-component-to-use-hooks?u=76281980&t=0)** - [Instructor] We're going to create a custom hook, useValidation, that will replace our FormField validation higher-order component. For this we need the useState hook. A custom hook is simply any function that begins with the [[Microsoft Word|word]] use. We're going to maintain the error state within this hook and create a validate callback. Then we create an ErrorDisplay component within this hook. If there is an error, we will return a div displaying it, and otherwise, will return null. And our hook will be returning the errorDisplay component and the validate method. Now, in the FormField, we're going to create a new component which uses this useValidation hook. Let's import the hook, and let's create our new FormField. So we use destructuring for this, and we get the ErrorDisplay component and the validate method. And now, we do what we did before, where we're getting the values that we need for display from the component props,
>
> **[1:33](https://www.linkedin.com/learning/building-react-and-django-apps/refactoring-a-higher-order-component-to-use-hooks?u=76281980&t=93)** and creating our onChange callback, which will call validate from the useValidation hook. And then, it will call onUpdate from props. And when we render this field, we'll do something similar to what we did before, where we have the label and the input, but we'll also render the ErrorDisplay component from the useValidation hook. Now, on our Checkout page, we find the validated field in the render function, and we're going to be replacing it with our FormFieldUsingHooks component, which we will have to import from the FormField file. As you can see, this is a refactor that didn't require many changes. Let's start the dev servers, let's add an item to the cart, and let's try out the new FormField validation. Seems to work the same as before, except now, it's using hooks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** usevalidation (4), usestate (1), errordisplay (1), onchange (1), onupdate (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 5. Testing React and Django

[↑ Back to Table of Contents](#table-of-contents)

#### [Unit testing a component](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-a-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-a-component?u=76281980&t=0)** - Now we're going to unit test the filters component using jest. Make sure you import, render, clean up and fire event from testing library. These are core tools for testing reactive components. After each test we're going to call clean up. Which will clean up the dom and unmount the [[React.js|react]] component. Our unit test will be asynchronous, because we're testing a call back. In the call back, we will ensure that the state changes. Then we call done, to let jest know that the test has finished running. We can use render to mount the component into the dom. We pass in our call back here. Now we check that the rendering of the component has worked. By querying for the price label. Then we query by place holder text for the minimum price field. We expect that the field will start off empty. After checking the initial state we fire a change event. That changes the minimum price field. And we confirm that the field has indeed changed in the dom. Then we fire the click event, on the apply filter button. If it works we'll see that minimum price value
>
> **[1:36](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-a-component?u=76281980&t=96)** was passed along through to the filter update call back above. Now let's run this unit test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - now (1)

#### [Unit testing two React routes and navigation between components](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-two-react-routes-and-navigation-between-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-two-react-routes-and-navigation-between-components?u=76281980&t=0)** - [Instructor] Now, let's use a unit test to confirm that navigation in our app is working correctly with [[React.js|react]] router. Before we write the test, notice that we have provided mock data in functions using jest. These mock at the service API HTTP responses. Now let's begin writing the test. It will be an async test, and we start by rendering the component, and then we use the wait function to wait until it is fully rendered in the dom, so that all the data that is loaded from service API is displayed. The testing library for react provides several utilities such as render, fire event, cleanup, and wait. These make it very simple to write unit tests using jest for react. We've seen cleanup, render, and fire event before, and in this unit test, we're using wait. Back to the unit test. Now we check that the service API's method has been called and we make sure that some data has loaded. Then we fire a click event to navigate back to the home page. And again, we expect data to be loaded. When testing library for react, we can use query by test ID to look for elements that have a data dash test ID attribute. We can use get by text to find dom elements
>
> **[1:36](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-two-react-routes-and-navigation-between-components?u=76281980&t=96)** that have matching text. After the data loads and is displayed, we fire another event, this time to navigate to the details of one of the items. We expect a different service API call to be made. Retrieve details. And we expect to no longer be on the list page. And we should instead be on the details page. Now let's run the tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4)
> **Env Vars:** api (4), http (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [End2End testing the form submission process](https://www.linkedin.com/learning/building-react-and-django-apps/end2end-testing-the-form-submission-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/end2end-testing-the-form-submission-process?u=76281980&t=0)** - We're using Cyprus for end to end testing and we're going to ensure that the check out form is working properly. We first, start by visiting the home page and then we use contains, to find an element that has the learn more text. Then we click on it. So that should bring us to the details page and then we click reserve. Now we should be on the check out page. So we can fill in the form by using type. We have to get the, element first and then we type in name for the name field, get the next input field which is email address and we type in email at local host and then we do the same for street address and recall that street address has a unique format that we have to match. So we type in, this and finally the city field. After the form is filled out, we can click the place order button and then we can confirm that there are no errors. We also ensure that the thank you page is being displayed. End to end tests are a bit more complicated to run. First we need the [[Django]] development server running. Then we need the [[React.js|React]] server running and then finally we can run the end to end tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1), [[React.js|React]] (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Speakers:** - we (1)

#### [End2End testing the filtered data table](https://www.linkedin.com/learning/building-react-and-django-apps/end2end-testing-the-filtered-data-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/end2end-testing-the-filtered-data-table?u=76281980&t=0)** - [Instructor] Let's end to end test the data we're displaying. We visit the home page, check for the existence of a tour package difficulty rating, and then we look for the Learn More button as well. This indicates that tour packages have been loaded on the page. Then we find the search input field, type in a search term such as hiking, and then we apply the filter. And then we make sure that there is still some data being displayed. Again, we run through the same process of running the [[Django]] dev server, running the [[React.js|React]] dev server, and then finally running the end to end tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1), [[React.js|React]] (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Unit testing caching with Django REST framework](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-caching-with-django-rest-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-caching-with-django-rest-framework?u=76281980&t=0)** - [Instructor] There's some caching being used in the wish list code. Let's write a test to make sure it's working properly. We start by creating a package for testing and we test to make sure the wish list cache starts as empty and we also need to check the API response to ensure that the wish list is empty there as well. Then we're going to add the package to the wish list by posting to the wish list API end point. The cache will be empty at this point and then we're going to retrieve the list and at this point the cache should have the package that we added in it. Now let's run the tests.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** api (2)
> **Speakers:** - [instructor] (1)

#### [Unit testing sorting and filtering](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-sorting-and-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-sorting-and-filtering?u=76281980&t=0)** - [Instructor] Before we test sorting and filtering, we have to make sure there are no packages in the database. Now, we create two specific packages we will use to test that sorting and filtering are working. Then we create a user. And their access token for API requests. Then we check the public packages list to ensure that all packages are returned. Recall that the sort order is by price in descending order, so the expense package should show up first. Then we're going to search through the package list for the discount_package which has the name a. And again, we map the IDs that are returned. And we're going to do a list equal, and there should only be one package returned. We're going to do something similar, but this time we're going to be filtering by the minimum price. We map the IDs of the package results again. And then this time we are making sure that only the expensive package shows up because its price is above the minimum of 50. Now let's run the test.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** discount_package (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Unit testing validation for the REST API](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-validation-for-the-rest-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/unit-testing-validation-for-the-rest-api?u=76281980&t=0)** - [Instructor] Let's write a unit test to test the custom street address validation we added earlier. We have to set up the invalid form data first, then we confirm that submitting this invalid data will return the street address error message. We post to the bookings api endpoint with this invalid data and we make sure that the response code is a 400, and we also make sure that the error message matches the street address error message. And then, when we submit the correct data, we want to make sure that the booking model is created. So we post again to bookings with this valid data and then we assert that the status code is a 201. Now we run the tests.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-react-and-django-apps/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-react-and-django-apps/next-steps?u=76281980&t=0)** - [Rudolf] Thanks for watching the videos and if you would like to learn more about [[React.js|React]] you can watch the React: React Router course on [[LinkedIn]] Learning or the [[React.js- Building an Interface]] LinkedIn Learning course. And if you'd liked to learn more about [[Django]] and become a Django developer you can watch the LinkedIn learning path Become a Django Developer. Thanks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[LinkedIn]] (3), [[Django]] (3), [[React.js]] (1)
> **File Paths:** react.js (1)
> **Speakers:** - [rudolf] (1)


## Resources

- Exercise files available

## Skills Covered

- Django
- React.js

## Path Context

### In [[Advance Your Skills as a Django Developer]]
**1 of 6** | [[Building Angular and Django Apps]] →

## Appears In

- [[Advance Your Skills as a Django Developer]]

## Related Courses

_Courses sharing skills:_

- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js

---

[↑ Back to top](#)