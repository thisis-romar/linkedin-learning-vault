---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-restful-web-apis-with-django
url: "https://www.linkedin.com/learning/building-restful-web-apis-with-django"
duration_minutes: 94
duration: 1h 34m
level: Intermediate
updated: 9/5/2024
learners: 5617
skills:
  - REST APIs
  - Django
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHIo6Q4XqxI9g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568058527575?e=2147483647&amp;v=beta&amp;t=Xplpddmmv6CJUm18RUjsO9vi09QQGftb99tNVUGDXLQ"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills as a Django Developer]]'
prev_courses:
  - '[[Building Angular and Django Apps]]'
next_courses:
  - '[[Building a Paid Membership Site with Django]]'
path_nav: '[{"path":"Advance Your Skills as a Django Developer","position":3,"total":6,"prev":"Building Angular and Django Apps","next":"Building a Paid Membership Site with Django"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/rest-apis
  - skill/django
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20RESTful%20Web%20APIs%20with%20Django.md)

![Building RESTful Web APIs with Django](https://media.licdn.com/dms/image/v2/C4E0DAQHIo6Q4XqxI9g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568058527575?e=2147483647&amp;v=beta&amp;t=Xplpddmmv6CJUm18RUjsO9vi09QQGftb99tNVUGDXLQ)

# Building RESTful Web APIs with Django

> APIs are a crucial technology for delivering data to applications—from front-end ecommerce sites to iOS and Android apps. The Django REST framework is the natural choice for Python and Django developers who want to create their own RESTful back-end APIs. In addition to its rapid prototyping tools, the framework includes authentication schemes, serialization for parsing complex data into Python-fri

> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django) | 1h 34m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Serializing, Listing, Filtering, and Paginating Models** (6 videos)
- **3. 2. Create, Retrieve, Update, and Delete (CRUD) Operations for Models** (6 videos)
- **4. 3. Managing Serializer Fields, Relations, and Validation** (6 videos)
- **5. 4. Testing API Views** (5 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### Create a REST API with Django and Django REST framework
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/create-a-rest-api-with-django-and-django-rest-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/create-a-rest-api-with-django-and-django-rest-framework?u=76281980&t=0)** - [Rudolf] REST APIs are everywhere.
>
> **[0:02](https://www.linkedin.com/learning/building-restful-web-apis-with-django/create-a-rest-api-with-django-and-django-rest-framework?u=76281980&t=2)** They are used ever day by front-end web apps and smart phone mobile apps.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-web-apis-with-django/create-a-rest-api-with-django-and-django-rest-framework?u=76281980&t=6)** Have you ever wanted to create your own REST API that can power an Android, iPhone, and web app, such as an e-commerce store?
>
> **[0:13](https://www.linkedin.com/learning/building-restful-web-apis-with-django/create-a-rest-api-with-django-and-django-rest-framework?u=76281980&t=13)** With Django REST framework, we can create that REST API backend.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-web-apis-with-django/create-a-rest-api-with-django-and-django-rest-framework?u=76281980&t=17)** Django REST framework enables rapid prototyping, so you will get up and running quickly, with model serialization, validation, searching and filtering of data, and unit testing.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-web-apis-with-django/create-a-rest-api-with-django-and-django-rest-framework?u=76281980&t=28)** Hi, I'm Rudolf Olah, I've been working with Python projects for over 10 years and have been using Django since version 0.96.
>
> **[0:36](https://www.linkedin.com/learning/building-restful-web-apis-with-django/create-a-rest-api-with-django-and-django-rest-framework?u=76281980&t=36)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** rest (5), api (2)
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** iphone (1)
> **Versions:** version 0 (1)
> **Analogies:** such as (1)
> **Speakers:** - [rudolf] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/what-you-should-know?u=76281980&t=0)** - [Instructor] Before getting started with Django REST API, here's what you should know.
>
> **[0:04](https://www.linkedin.com/learning/building-restful-web-apis-with-django/what-you-should-know?u=76281980&t=4)** If you know how to write Python code you should already know how to write a basic Python program and how to install and import Python libraries and modules.
>
> **[0:13](https://www.linkedin.com/learning/building-restful-web-apis-with-django/what-you-should-know?u=76281980&t=13)** But what if you don't know Python?
>
> **[0:15](https://www.linkedin.com/learning/building-restful-web-apis-with-django/what-you-should-know?u=76281980&t=15)** Well, if you know how to write code for Node.js, or JavaScript, or another programming language checkout these courses and start from there.
>
> **[0:23](https://www.linkedin.com/learning/building-restful-web-apis-with-django/what-you-should-know?u=76281980&t=23)** Another resource would be the book Learn Python the Hard Way, which is available online for free and is a great introduction to Python.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-web-apis-with-django/what-you-should-know?u=76281980&t=32)** With some Python knowledge you will also have to know how the following concepts work in the Django Web Framework: Models, views, templates, URL configuration, and how to create new model fields and how to create a view that displays or modifies a model instance.

> [!info]- Semantic Content
>
> **CLI Commands:** python (7), node (1)
> **Env Vars:** rest (1), api (1), url (1)
> **Prerequisites:** getting started (1), install (1)
> **File Paths:** node.js (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Demo project overview
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980&t=0)** - [Instructor] We are going to be building an e-commerce store with a few products that can display more details about each product and has a shopping cart for users to add items to.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980&t=14)** In this project the following modules are installed.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980&t=17)** Django, Django REST framework Django-filter, Mock and Pillow.
>
> **[0:23](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980&t=23)** In the project we already have models for products ShoppingCarts, and ShoppingCartItems.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980&t=28)** We also have database migrations for creating the models and loading some sample product data into the SQL-like database.
>
> **[0:36](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980&t=36)** This way we will have some data ready for the REST API to return.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980&t=40)** The views and the URLs that point to views that already exist are the show all products view, the show details view and the shopping cart view.
>
> **[0:50](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980&t=50)** There are templates already created for each of these views along with a base template to create more views and templates.
>
> **[0:58](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980&t=58)** By the end of the course, we will have built a REST API that shows a list of products with their data, along with filtering and search options to narrow down the product list.
>
> **[1:09](https://www.linkedin.com/learning/building-restful-web-apis-with-django/demo-project-overview?u=76281980&t=69)** We will also be building the REST API that shows details about each product along with the ability to create, update, or delete a product.

> [!info]- Semantic Content
>
> **Env Vars:** rest (4), api (3), sql (1)
> **Code Keywords:** return. (1), delete (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Serializing, Listing, Filtering, and Paginating Models

#### Creating a Django Rest framework serializer to serialize a model
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=0)** - [Instructor] Let's get started by writing a serializer to serialize a model.
>
> **[0:04](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=4)** In general, serializing means to convert an object into format like JSON, YAML, or XML.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=11)** Specifically, we want to take the product model in this project and serialize it to a JSON format that is served through Our REST API.
>
> **[0:20](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=20)** This class will mock the fields from a Django model into the serialization format.
>
> **[0:25](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=25)** We're going to serialize the id, name, price, and product sales dates.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=33)** Let's create the serializer .py file, and from rest_framework, we import serializers, and we also import our Product model.
>
> **[0:53](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=53)** We create a model serializer
>
> **[1:01](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=61)** and it has a Meta class and the model is set to Product and the fields that we want to serialize.
>
> **[1:22](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=82)** Let's do something a bit more complicated.
>
> **[1:25](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=85)** Let's modify this serialized representation and add a few extra fields to it.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=91)** To do this, we override the to_representation method.
>
> **[1:41](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=101)** We call the parent classes to_representation implementation, and then we add our extra fields, in this case, is_on_sale, so we know whether the product is on sale or not, and this will just be a Boolean value, true or false.
>
> **[1:59](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=119)** And then we have our current_price, which is either the sale price or the regular price, depending on whether the product is currently on sale.
>
> **[2:09](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=129)** And we return the data.
>
> **[2:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=131)** So with that, we've serialized the fields and we've also added two extra customized fields to the serialization representation.
>
> **[2:21](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=141)** So now we can go to the Django shell and try this out and see what happens.
>
> **[2:31](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=151)** So we activate virtual env, and then we get into the Django shell.
>
> **[2:43](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=163)** I'm going to maximize the terminal so that we can focus on the Django shell and testing this out.
>
> **[2:50](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=170)** We're going to import our model and take the first product in the database, and then we're going to import the serializer that we just created, and create it, and then we serialize the product, to_representation.
>
> **[3:21](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=201)** And now to actually get this into a JSON format, we're going to be importing and using the JSONRenderer.
>
> **[3:39](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=219)** We create the renderer and then we actually render the serialized data.
>
> **[3:54](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=234)** So as you can see, we serialized the product and then it became JSON with a JSONRenderer.
>
> **[3:59](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=239)** The Django shell is a very important tool for rapid prototyping and testing.
>
> **[4:04](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-django-rest-framework-serializer-to-serialize-a-model?u=76281980&t=244)** In production environments, it's common to use the Django shell for debugging problems as well.

> [!info]- Semantic Content
>
> **Env Vars:** json (4), yaml (1), xml (1), rest (1), api (1)
> **Code Keywords:** let (4), this, (1), override (1), case, (1)
> **Code Identifiers:** to_representation (3), rest_framework (1), is_on_sale (1), current_price (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating a ListAPIView subclass
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=0)** - [Instructor] We have a Serializer for products.
>
> **[0:02](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=2)** Now let's create a List API View to use the Product Serializer.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=6)** The API is going to return the list of products and render them into JSON.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=12)** A ListAPIView is a generic class-based view.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=16)** Django REST Framework provides a number of generic API Views and mixins that can help speed up development.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=24)** We create the API View's file.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=27)** From rest_framework.generics we import ListAPIView.
>
> **[0:36](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=36)** We import our Serializer, and we import our model.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=49)** Now we can create our ProductList Api View.
>
> **[0:56](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=56)** Set the queryset to all products that exist in our database, and the Serializer class is the Product Serializer, which we created.
>
> **[1:09](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=69)** And that's it.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=70)** By using the generic ListAPIView, we only need to define a few configuration fields.
>
> **[1:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=76)** The API View will take care of the rendering of the serialized data into the JSON format.
>
> **[1:22](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=82)** The generic views in Django REST framework will cover what you need from a REST API in many cases.
>
> **[1:28](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=88)** There are rare cases where you will want to use the base APIView to build up an API.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-listapiview-subclass?u=76281980&t=94)** One of those cases is if you really do not need, or want, any of the functionality that the generic API views provide.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), rest (3), json (2)
> **Code Keywords:** let (1)
> **Code Identifiers:** rest_framework (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Connecting an APIView to a route
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=0)** - [Instructor] Presently we are taking a look at how to connect the product list API view to a URL route.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=6)** We start by opening up the URL's Configuration for the web app and we see some URLs are already in there.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=14)** And now we have to connect our List API view, the Product List API view, to a route.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=27)** And we are going to use api_views.ProductList.as_view.
>
> **[0:37](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=37)** And we have to import store.api_views.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=41)** That's all there is to it.
>
> **[0:42](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=42)** This will let us send a GET request to the API V1 product's URL, and get back a JSON response that shows a list of products.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=51)** To run the server, you have to be in the top level directory.
>
> **[0:59](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=59)** So we activate virtualenv, and then we run the server.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=70)** Now here's a cool way of testing to make sure the product's List API view is working.
>
> **[1:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=76)** We switch to the browser, and we can actually try out the REST API, from the browser.
>
> **[1:28](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=88)** This is what makes Django REST framework different from all other REST API frameworks.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=94)** If you add a docstring to your API view subclass, it will actually show up in the web browser as documentation for the API.
>
> **[1:43](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-apiview-to-a-route?u=76281980&t=103)** We can see that the list of products is showing up correctly with the model fields, and additional fields we added to the product serializer.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), url (3), rest (3), json (1)
> **Code Identifiers:** api_views (2), as_view (1)
> **Code Keywords:** let (1), switch (1)
> **CLI Commands:** make (1)
> **API Endpoints:** get  (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### Filter back ends with URL query parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=0)** - [Instructor] Now that we have a REST API that lists products, we can add product filtering using URL query parameters.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=7)** In particular, we are going to be filtering products by whether they match a specific product ID, or whether they are on sale or not.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=17)** We import Django-filters, rest framework, filter backend,
>
> **[0:26](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=26)** and then we add it to the product list.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=30)** We set filter backends to the DjangoFilterBackend, and we set the filter fields to just the ID.
>
> **[0:42](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=42)** The filter fields variable is the setting for Django-filters that will enable filtering by specific fields in the data.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=49)** Right now, we just have it enabled for the ID field.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=52)** Let's see how this looks like in the browser with the server running.
>
> **[0:57](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=57)** We refresh, and we can now see a new button called filters.
>
> **[1:02](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=62)** We open it up, and now we can filter by the ID.
>
> **[1:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=65)** So let's try that out.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=67)** You can see only one product is returned, and we can also do this from the URL itself.
>
> **[1:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=76)** And again, you can see the products are filtered by the specific ID.
>
> **[1:21](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=81)** Let's return to the code and do something a little bit more complex.
>
> **[1:25](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=85)** Let's filter the product by whether they are on sale or not.
>
> **[1:30](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=90)** For this, we have to override the get queryset method.
>
> **[1:37](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=97)** We're going to extract the URL parameter from the request.
>
> **[1:50](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=110)** If the filter is set to none, we won't be doing any filtering.
>
> **[2:03](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=123)** But if the on sale filter is set, we're going to be filtering all the products by whether they are on sale or not.
>
> **[2:20](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=140)** We import django.utils.timezone so that we can get the current time, and then we apply the sales dates filters.
>
> **[2:55](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=175)** Now let's try this in the browser.
>
> **[3:02](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=182)** On sale equals true, and you can see only two products are returned, which have is on sale set to true.
>
> **[3:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=191)** If we set this to false, you can see all products are returned.
>
> **[3:17](https://www.linkedin.com/learning/building-restful-web-apis-with-django/filter-back-ends-with-url-query-parameters?u=76281980&t=197)** And that's how we can filter a product queryset using URL query parameters.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (1), override (1)
> **Env Vars:** url (4), rest (1), api (1)
> **Speakers:** - [instructor] (1)

#### Enabling full-text search filter back end
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=0)** - [Instructor] We have a list of products that can be filtered by ID, or whether they're on sale or not.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=6)** Now let's enable full text search so we can search through product names and descriptions.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=11)** We are going to use the SearchFilter, which is a filter back end built into Django REST framework.
>
> **[0:18](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=18)** We use it in the same way as the Django filter back end, by adding it to the product list's filter back ends list.
>
> **[0:26](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=26)** We import it, from REST framework filters.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=34)** And add it as a filter back end.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=41)** And set up the search fields.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=49)** This setting is used by the search filter back end to map from the URL query parameters, to the model fields of the serialized model.
>
> **[0:59](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=59)** Let's test it out.
>
> **[1:01](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=61)** When we refresh the page with the server running, and click filters, we see a new filter option has appeared. We can type in mineral water, and search for product names and descriptions that match.
>
> **[1:19](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=79)** Let's clear the search and try another option.
>
> **[1:24](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=84)** And now we want to search for another word in the product description, "foo," as in food.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=91)** Click filters, search, type in "foo" and you see that the product appears, and is filtered out. Through the search fields variable we can also control how the search for matching text is conducted.
>
> **[1:47](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=107)** The default matching is a case insensitive partial match. We can add an equals sign if we wanted to do an exact match on the search term instead of a partial match.
>
> **[1:58](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-full-text-search-filter-back-end?u=76281980&t=118)** It's also possible to use Regular Expressions for matching. For example, with a partial, we could find the word ear in the middle of the word appearance. With an exact match, no match will be found for the word ear. With a regular expression, we can match for the word ear at the end of the word appear.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), match. (3), match, (1)
> **Env Vars:** rest (2), url (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Enabling pagination of querysets in API responses
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=0)** - [Instructor] Sometimes we may have a lot of results to return from the query set in our API response.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=6)** Django REST framework provides three ways to paginate results: by PageNumber, by Limit OffSet, and by Cursor.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=14)** The PageNumber pagination defaults to using Django's built-in paginator class and let's API consumers pass in a page number to get a page of results.
>
> **[0:26](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=26)** The LimitOffset pagination is more nuanced and let's API consumers pass in two query parameters.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=34)** The Limit which controls how many items appear on a page and the OffSet which controls which page appears.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=41)** The Cursor pagination uses the database cursor for paginating results.
>
> **[0:47](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=47)** The key reason to use this is when you have very large datasets and using the other paginator types would be to inefficient.
>
> **[0:56](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=56)** Now let's add pagination to our product list API view.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=60)** From REST framework, we import the pagination type we're going to use which is Limit OffSet pagination.
>
> **[1:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=71)** And we create our own new pagination subclass ProductsPagination.
>
> **[1:23](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=83)** We set a default limit of 10 search results and a max limit of 100.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=91)** The max limit is the maximum size of a page that can be set by the API client.
>
> **[1:38](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=98)** Now we can use this custom pagination class for the product list API view.
>
> **[1:50](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=110)** This will add support for the Limit and OffSet URL query parameters which we can adjust in order to show fewer or more products.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=121)** With the server already running, we can try this out in the browser.
>
> **[2:06](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=126)** We can see the full list of products.
>
> **[2:08](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=128)** Now let's see what happens when we set the URL parameter Limit to one.
>
> **[2:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=136)** We narrow the view to just one product per page.
>
> **[2:21](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=141)** The other thing to notice is that the next field provides a link to the next page of results.
>
> **[2:28](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=148)** Now let's try setting the Limit to two and the OffSet to one.
>
> **[2:38](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=158)** We can see that we are actually between two pages.
>
> **[2:41](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=161)** So you can see with the Limit and OffSet pagination style, we have more control over the number of items appearing in the results and which set of products appears.
>
> **[2:52](https://www.linkedin.com/learning/building-restful-web-apis-with-django/enabling-pagination-of-querysets-in-api-responses?u=76281980&t=172)** And that's how we paginate an API view with Django REST framework.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), rest (3), url (2)
> **Code Keywords:** let (5), pass (2)
> **Speakers:** - [instructor] (1)


### 3. 2. Create, Retrieve, Update, and Delete (CRUD) Operations for Models

#### Creating a CreateAPIView subclass
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=0)** - [Instructor] Now we want the ability to create new products through the API.
>
> **[0:04](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=4)** In the API views we will create the product creation API view.
>
> **[0:10](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=10)** From REST framework we're going to import the exceptions that we need, and import the create API view.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=24)** The bottom of the file we're going to create our new product creation, API view.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=34)** Reusing our serialiser class.
>
> **[0:39](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=39)** And then overwriting the creating method.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=49)** We're going to extract the price from the parameters.
>
> **[0:59](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=59)** We're going to ensure that the price is set And that the price is above $0, so that it is not free.
>
> **[1:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=71)** If either of these conditions fail, we just raise a validation error on the price field, saying must be above $0.
>
> **[1:26](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=86)** We also ... cache the value error exception just in case parsing the price doesn't work.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=94)** And then we'll erase another validation error, and we say that the price needs to be a number.
>
> **[1:45](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=105)** After that we just call super and create.
>
> **[1:55](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=115)** The validation of the price is to prevent anyone using the REST API from accidentally creating a product that's free.
>
> **[2:03](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=123)** Note that when raising a validation error, you can attach a custom error message to a specific field.
>
> **[2:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=131)** This is why REST APIs are powerful.
>
> **[2:13](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=133)** Instead of creating models through the admin interface, we can use the API to build new interfaces that are very specific to certain scenarios.
>
> **[2:23](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=143)** Once scenario that I have encountered many times in real world projects, has been importing products from an Excel spreadsheet.
>
> **[2:31](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=151)** It's possible to load product data from each row in a spreadsheet and simply use the REST API to create the product.
>
> **[2:38](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=158)** REST APIs can be used to create a lot of data much more quickly than through our user-friendly web interface.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-createapiview-subclass?u=76281980&t=166)** You can check out course called Learning REST APIs in the library if you want to learn more.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), rest (6)
> **Code Keywords:** interface (2), class. (1), raise (1), super (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Connecting a CreateAPIView to the router
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=0)** - [Narrator] Now we can create a route in the URL configuration for creating a product through the product create API view.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=8)** We add a new URL path
>
> **[0:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=16)** that points to the product create view.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=24)** With that done, let's run the server.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=32)** To test the API to create a new product, let's use the curl command on the console.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=40)** We set the method to post and point to the API URL that we just added.
>
> **[0:56](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=56)** We set the price to one dollar, set the product name to 'My Product', and set the description 'Hello World'.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=72)** As you can see we get a response from the API indicating that the product was created.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=78)** This is something I do very often when I work with Rust APIs.
>
> **[1:22](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=82)** The development team shares the curl scripts with each other so we can quickly create new models and test APIs to make sure they are working correctly.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=91)** Now, let's see how this looks in the browser.
>
> **[1:33](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=93)** Django REST Framework provides a nice interface that makes it easy for us to test creating new products.
>
> **[1:43](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-createapiview-to-the-router?u=76281980&t=103)** So you can see we have a nice form with multiple fields for the product model that we can enter and then create another product.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), url (3), rest (1)
> **Code Keywords:** let (3), interface (1)
> **CLI Commands:** curl (2), make (1)
> **Speakers:** - [narrator] (1)

#### Creating a DestroyAPIView subclass
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=0)** - We can list products, and create them, but what about if we want to delete products from the database?
>
> **[0:07](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=7)** We can use the generic view DestroyAPIView to create an API for that.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=12)** We import it, and then we create our DestroyView.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=27)** We set the queryset to All Products and the lookup_field to id.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=41)** There isn't much to creating an API View to destroy an object.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=44)** We just need to set the queryset and the lookup field.
>
> **[0:48](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=48)** In a real world situation, however, a product being destroyed may also mean that all caches that store data related to that product have to be cleared.
>
> **[0:57](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=57)** Clearing the cache when a model is destroyed frees up cache space for other objects that are more likely to be used.
>
> **[1:04](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=64)** Let's see how that looks.
>
> **[1:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=65)** We override the delete method,
>
> **[1:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=76)** we extract the product_id from the request,
>
> **[1:26](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=86)** we proceed with deleting the object,
>
> **[1:35](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=95)** and if the product was deleted successfully,
>
> **[1:44](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=104)** we're going to import the django.cache and delete the product_data from the cache.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=125)** Then we just return to response, as per usual, and that's it.
>
> **[2:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-a-destroyapiview-subclass?u=76281980&t=131)** And that's how we create a DestroyAPIView with additional complex logic in the delete method.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (1), override (1)
> **Code Identifiers:** lookup_field (1), product_id (1), product_data (1)
> **Env Vars:** api (2)
> **Speakers:** - we (1)

#### Connecting a DestroyAPIView to the router
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=0)** - [Instructor] Let's connect the destroy product API view to the router, so that we can start using it in our API.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=7)** In the URL's configuration we add a new URL path
>
> **[0:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=16)** with the lookup field so that we can destroy a product using the ProductDestroy API view.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=30)** With the server running let's try this out on the browser.
>
> **[0:35](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=35)** First we find the ID of an existing product, and then we can delete the product.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=49)** We click the destroy button and confirm the action.
>
> **[0:54](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=54)** We can also delete products through a curl command on the command line.
>
> **[0:59](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=59)** Let's create a new product and then delete it.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=63)** We use the POST method to create the product as we did before.
>
> **[1:28](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=88)** The product is created, so now we can use the returned ID and delete it.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=94)** So, we use the DELETE method with our URL for product deletion.
>
> **[1:54](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=114)** And then hit enter, and it looks like the product is deleted now.
>
> **[2:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-a-destroyapiview-to-the-router?u=76281980&t=120)** And that's how we delete a product through the browser, and through the command line using the REST API.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), url (3), post (1), delete (1), rest (1)
> **Code Keywords:** delete (6), let (3)
> **CLI Commands:** find (1), curl (1)
> **API Endpoints:** post  (1), delete  (1)
> **Tools:** command line (2)
> **Speakers:** - [instructor] (1)

#### Creating an UpdateAPIView subclass
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=0)** - [Narrator] Right now we can delete individual products.
>
> **[0:03](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=3)** That happens through the DestroyAPIView, but what if we wanted to retrieve an individual product's data?
>
> **[0:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=11)** We would have to create a new RetrieveAPIView to handle the Get HTTP method.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=17)** And what if we also wanted to update and individual products data, whether fully updating it or partially updating it?
>
> **[0:25](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=25)** We would again have to create another APIView this time using UpdateAPIView.
>
> **[0:31](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=31)** But why do all of that when we can just use Django rest frameworks generic view that combines all of those.
>
> **[0:38](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=38)** With the RetrieveUpdateDestroyAPIView we cam reuse code and configuration.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=44)** For example, the serialiszer_class or queryset and other configuration options for generic views.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=51)** And on top of that we can use One URL to handle multiple HTTP methods.
>
> **[0:58](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=58)** To allow for this combination of actions we're going to re-factor the ProductDestroyAPIView into the RetrieveUPdateDestroyAPIView.
>
> **[1:09](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=69)** We need to import it and then re-factor the ProductDestroy class.
>
> **[1:23](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=83)** We rename it to ProductRetrieveUpdateDestroy to ProductRetrieveUpdateDestroy and we also change the parent class and we also add the serializer class.
>
> **[1:45](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=105)** The delete method will stay the same, but we want it to update the product.
>
> **[1:58](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=118)** So, we override the update method.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=121)** We call the super update method and if the product was updated correctly we're going to use the cache again to mirror what we did in the delete method.
>
> **[2:29](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=149)** So, you use cache.set to store product data in the cache.
>
> **[2:45](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=165)** We store the name of the product, the description of the product and its price.
>
> **[3:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=191)** Then we return the response.
>
> **[3:21](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=201)** Cool.
>
> **[3:22](https://www.linkedin.com/learning/building-restful-web-apis-with-django/creating-an-updateapiview-subclass?u=76281980&t=202)** Now that we re-factored the DestroyAPIView we can have one RestAPIN point to interact with the product where we can retrieve update or destroy it.

> [!info]- Semantic Content
>
> **Non-Speech:** (typing) (12)
> **Code Keywords:** delete (3), class. (2), override (1), super (1)
> **Env Vars:** http (2), url (1)
> **Code Identifiers:** serialiszer_class (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Connecting an UpdateAPIView to the router
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980&t=0)** - [Instructor] We refactored the destroy API view and now we have to update the URL configuration to reflect the refactoring.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980&t=7)** In our URL patterns configuration, we are going to remove the destroy API view and replace it with the retrieve update destroy API view.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980&t=17)** First we replace the view and we update the URL and that's it.
>
> **[0:29](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980&t=29)** Now let's see how this looks in the browser.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980&t=33)** Go to one product and retrieve its data.
>
> **[0:36](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980&t=36)** As you can see, we have retrieve, update, and destroy.
>
> **[0:39](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980&t=39)** Let's try changing the name.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980&t=52)** So we renamed the product and we can also change the price.
>
> **[1:02](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980&t=62)** And now let's delete this product.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-web-apis-with-django/connecting-an-updateapiview-to-the-router?u=76281980&t=70)** As you can see, we use Django REST framework's built in views, to make implementing common REST API operations very quick and easy to do.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), url (3), rest (2)
> **Code Keywords:** let (3), delete (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Managing Serializer Fields, Relations, and Validation

#### Serializer with only selected fields
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=0)** - In the product serializer, we already have selected some fields for rendering through the serializer.
>
> **[0:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=5)** However, we can do a little bit of refactoring to simplify how we added custom field data.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=12)** We can take the attributes that we set in the two representation method and refactor them using serializer fields.
>
> **[0:26](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=26)** We have a boolean field for is on sale.
>
> **[0:29](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=29)** It is a read-only field.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=33)** And for the current price, we have a float field which is also read-only.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=44)** We can now delete two representation and add the fields to metafields so that they appear in the serializer.
>
> **[1:04](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=64)** The read-only serializer field configuration parameter sets whether or not we can write to the field through the serializer.
>
> **[1:13](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=73)** Another example of a serializer field configuration is the source keyword argument.
>
> **[1:20](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=80)** This can be used if you want to rename a field.
>
> **[1:23](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=83)** For instance, if you want the rest API to return a field called 'product name' rather than just 'name'.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=91)** Back to the code, we can add a description field that overrides the serializer field for description with a char field.
>
> **[1:43](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=103)** We set the minimum length to two and the max length to 200.
>
> **[1:48](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=108)** So now we have validation for this field and the field is already in metafields and we can try this out in the browser.
>
> **[1:57](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=117)** So if we look at the product here, we have is on sale in current price still there and we have the description field and now we can try and change the description to a single letter A and see that it fails with the proper validation.
>
> **[2:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-only-selected-fields?u=76281980&t=132)** It has to be at least two characters and we can say hello world and see that it still works.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - in (1)

#### Serializer that shows model relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=0)** - [Man] For each user shopping on our e-commerce site they will be putting products into shopping carts.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=6)** But from a developer perspective, we have multiple shopping carts to look at.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=12)** We have some questions, we want to answer, so that we can build a sales report.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=16)** Questions, such as "How many vitamins were sold in total?"
>
> **[0:21](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=21)** and "What was the average number of mineral water bottles added to a shopping cart?"
>
> **[0:27](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=27)** Now imagine trying to do this for thousands of shopping carts.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=33)** We need to first create a Shopping Cart Item Serializer.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=41)** It is also a Model Serializer.
>
> **[0:45](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=45)** And in the Meta, we set up the Model, as the Shopping Cart Item.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=52)** And the Fields, as the Product and the Quantity.
>
> **[0:59](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=59)** We import Shopping Cart Item from the models, then we add Cart Items, as a Field to the Product Serializer.
>
> **[1:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=71)** And it is a Serializer Method Field.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=78)** We add this new Field to the Meta Fields variable.
>
> **[1:24](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=84)** And then we define the method that will actually return the Shopping Cart Items where this Cart Items' Field.
>
> **[1:37](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=97)** So the Items all belong to this Product.
>
> **[1:48](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=108)** And then we return the Cart Item Serializer with those Items serialiazed into a list.
>
> **[1:59](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=119)** The Serializer Method Field will by default call the method, Get "underscore" cart item.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=125)** For other fields, it will use the Get "underscore" as a prefix to the field name.
>
> **[2:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=131)** In the Get cart item's method, the Many parameter is used to control whether one cart item is serialized or whether a list serializer is automatically created to serialize a collection of cart items.
>
> **[2:25](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=145)** Now let's try this out in the Django shell.
>
> **[2:30](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=150)** We import Json, we import our Models, and we import our Serializers.
>
> **[2:40](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=160)** We're going to use the first Product.
>
> **[2:47](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=167)** And create a Shopping Cart, save the Cart, and then create an Item in that Shopping Cart.
>
> **[3:03](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=183)** For this specific Product, and the quantity is set to five.
>
> **[3:08](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=188)** We're going to save the item.
>
> **[3:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=191)** And then use our Product Serializer to serialize the Product with the Shopping Cart Item.
>
> **[3:19](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=199)** We're going to print this out and let's see how that looks.
>
> **[3:27](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=207)** So we can see the Product and its usual data, the name, description, price, and so on.
>
> **[3:33](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=213)** And then we can also see this new field, the Cart Items, where each Shopping Cart that contains this Product will be displayed.
>
> **[3:40](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=220)** With this quick spot check, we can look at the pretty printed Json, and see that this Product has serialized, and all Carts containing that Item will be here.
>
> **[3:50](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-that-shows-model-relationships?u=76281980&t=230)** From there, we will have enough data for our sales report or for a good frontend dashboard.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Analogies:** such as (1), imagine (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [man] (1)

#### Number fields with serializers
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=0)** - [Lecturer] We are now going to use number fields with the product serializer.
>
> **[0:04](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=4)** Let's update the CartItemSerializer first with an IntegerField for the quantity.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=17)** We're going to ensure that only between one and 100 items of a particular type can be added to the shopping cart.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=30)** And now for products, we want to ensure that whenever we create or update them through the API, that the minimum price is set to at least $1 and the maximum price is never more than $100,000.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=44)** We can do this through the FloatField Configuration keyword arguments, min_value and max_value.
>
> **[0:53](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=53)** For example, most e-commerce sites will only allow free items through 100% off coupons and discount codes, such as the Bungie store website for the Destiny game which uses a very large price for products that require a discount code.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=70)** Now let's implement the FloatField for the product price.
>
> **[1:21](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=81)** We set the min_value to $1 and the max_value to 100,000.
>
> **[1:32](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=92)** The DecimalField is more powerful than the FloatField and actually is in better alignment with what we want to do when storing prices.
>
> **[1:40](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=100)** The configuration for the FloatField only allows a minimum and maximum value to be validated.
>
> **[1:46](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=106)** In contrast, the configuration for the DecimalField allows the control of the resolution of the number and whether there's rounding of the number and the number of decimal places.
>
> **[1:58](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=118)** So we copy this over and we change FloatField to DecimalField
>
> **[2:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=132)** and we set the max_digits to none and the decimal_places to two.
>
> **[2:24](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=144)** Now let's try and update a product price in the browser.
>
> **[2:29](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=149)** So we can see our current price is 100.
>
> **[2:32](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=152)** And now we're going to set it to 299.999, which is three decimal places and recall that we just set it to a maximum of two decimal places and we can see an error message shows up, exactly in that field, so we'll just remove one and set it and now our price is correctly updated, and we tested the validation.
>
> **[2:57](https://www.linkedin.com/learning/building-restful-web-apis-with-django/number-fields-with-serializers?u=76281980&t=177)** Exactly what we want.

> [!info]- Semantic Content
>
> **Code Identifiers:** min_value (2), max_value (2), max_digits (1), decimal_places (1)
> **Code Keywords:** let (3), require (1)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** api (1)
> **Versions:** 299.999 (1)
> **Speakers:** - [lecturer] (1)

#### Date and time fields with serializers
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=0)** - [Narrator] Now we want to be able to set the sales dates for our product through the REST API.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=6)** We are going to use the DateTime field to set the start and end dates of a sale.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=11)** A Date/Time field can be configured with its input format, the output format, the help text, and style.
>
> **[0:19](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=19)** Let's override the sales start and sale end fields in the Product Serializer.
>
> **[0:26](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=26)** So the sale start is a DateTimeField, and we're setting the input formats.
>
> **[0:48](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=48)** I'm setting the format to None, and we will allow null, it's not a required field, and we are also setting up the help text with the accepted format,
>
> **[1:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=71)** and the style that will render this field
>
> **[1:22](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=82)** with a nice placeholder
>
> **[1:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=94)** and then we'd do the same for the sale end field.
>
> **[1:44](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=104)** The output format is set to none, so that the sale start date and end date are always DateTime objects.
>
> **[1:53](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=113)** The input formats list can contain any custom format that is accepted by Python's string to time conversion function.
>
> **[2:02](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=122)** The default is iso-8601, but we are using a custom format that accepts the hour, minute, whether it's the AM or PM for the hour, and then the day, month, and year, in that order.
>
> **[2:19](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=139)** Let's try it out in the browser.
>
> **[2:23](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=143)** We can see that the sale start and end here are set to null.
>
> **[2:28](https://www.linkedin.com/learning/building-restful-web-apis-with-django/date-and-time-fields-with-serializers?u=76281980&t=148)** And in the field here we have the placeholder, and we also have our help text, and now we can enter 12:01 AM and 11:59 PM and so the sale here will run for one day, and we save it and we can see that when it is stored, it's stored in the iso-8601 format, and here again our accepted format is our custom format.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), override (1), function (1)
> **Ports:** :01 (1), :59 (1)
> **Env Vars:** rest (1), api (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Lists, dicts, and JSON objects
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=0)** - [Instructor] In order to gather daily, weekly, or monthly product and shopping cart data for our sales report, we need to create a new serializer that uses composite fields.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=11)** We start by creating the new serializer.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=16)** It is not a model serializer.
>
> **[0:22](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=22)** It's just a plain serializer, because it's not tied to any specific model.
>
> **[0:29](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=29)** So, it only contains one field.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=34)** It's a DictField, which has the child parameter set to a ListField, which has its own child parameter set to an IntegerField.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=52)** So, this is a composite of a composite field.
>
> **[0:54](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=54)** The dictionary keys will be the date as a string.
>
> **[0:57](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=57)** For each value in the dictionary, we're expecting a list of numbers which is the quantity from each shopping cart that the product appeared in.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=67)** Next, we create a generic API view.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=72)** We import GenericAPIView.
>
> **[1:20](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=80)** We import the rest_framework_response object.
>
> **[1:27](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=87)** And then, we also import our ProductStatSerializer.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=95)** Now we can create our stat API view, ProductStats
>
> **[1:45](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=105)** The lookup field is the product id.
>
> **[1:51](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=111)** The serializer class is the ProductStatSerializer.
>
> **[1:59](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=119)** And the queryset is all products.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=125)** We override the get method.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=135)** We get the object, which is a product.
>
> **[2:22](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=142)** We load up the serializer and provide it with our fake sales data.
>
> **[2:33](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=153)** And then the stats field, and then we have the date key with the sales data, list of numbers.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=166)** And another date.
>
> **[2:49](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=169)** And another list of numbers.
>
> **[2:55](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=175)** And then we return a response with that serialized data.
>
> **[3:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=185)** Now we add the APIView to our URLs.
>
> **[3:09](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=189)** We create a new path with the lookup ID,
>
> **[3:19](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=199)** and ending with stats.
>
> **[3:32](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=212)** With the server already running, let's see how these composite fields look like in the browser.
>
> **[3:42](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=222)** As you can see, the data that comes back is structured as a dictionary with a list of numbers.
>
> **[3:48](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=228)** It's also all stored under the stats field.
>
> **[3:53](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=233)** With the data we have here, there's no one-to-one mapping between the sales data and the product model, or the shopping cart item model.
>
> **[4:01](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=241)** For example, we can group sales data from multiple product categories rather than for just one product like this.
>
> **[4:08](https://www.linkedin.com/learning/building-restful-web-apis-with-django/lists-dicts-and-json-objects?u=76281980&t=248)** Composite fields are highly useful when you're trying to return data that needs to be structured in a specific way that may not map to any model.

> [!info]- Semantic Content
>
> **Code Keywords:** override (1), let (1), this. (1)
> **Env Vars:** api (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** rest_framework_response (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Serializer with ImageField and FileField
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=0)** - [Narrator] Through the REST API we should be able to update existing product images or upload new product photos.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=6)** So, let's add the photo field.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=8)** Go to the product serializer.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=12)** We add the photo field.
>
> **[0:20](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=20)** And we add it to the list of fields... in meta.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=28)** Recall that serializer fields can be set as read-only.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=32)** They can also be set as write-only.
>
> **[0:35](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=35)** This means that when we write to the field the data does not get saved to the model.
>
> **[0:42](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=42)** Now let's do something more interesting.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=44)** We're going to allow the uploading of a warranty file for a product.
>
> **[0:54](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=54)** We use the file field for this, but since the product model does not have a warranty file field in the model itself, we're going to be adding the write-only configuration option.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=78)** We're going to override... the update method, so that we can make use of the warranty field.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=95)** If a warranty file is supplied, we're going to add it to the description of the product.
>
> **[2:04](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=124)** We read-in all the lines from the file,
>
> **[2:14](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=134)** and then we return the instance.
>
> **[2:17](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=137)** Validated data in the update method is the data that will be used to update the model.
>
> **[2:22](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=142)** It is safe to access because it is already passed through the validation process.
>
> **[2:27](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=147)** So we know, for example, that the price of the product here is between $1 and $100,000 and that the description is between two and 200 characters.
>
> **[2:37](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=157)** Cool, let's try this out in the browser.
>
> **[2:41](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=161)** So, as you can see right now we don't have the photo or warranty fields.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=166)** When we reload we have the photo field appearing.
>
> **[2:49](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=169)** And now let's upload a warranty file.
>
> **[2:57](https://www.linkedin.com/learning/building-restful-web-apis-with-django/serializer-with-imagefield-and-filefield?u=76281980&t=177)** As you can see the product description has been updated with the warranty information.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), override (1)
> **Env Vars:** rest (1), api (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 5. 4. Testing API Views

#### Test case for a CreateAPIView subclass
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=0)** - [Instructor] Testing Django REST framework API views is a bit different compared to testing Django views.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=6)** Django REST framework provides test case classes.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=11)** Each of the test case classes implements the same interface as Django's test cases.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=16)** However, they use Django REST framework's HTTP client instead of Django's client to specifically test API views.
>
> **[0:26](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=26)** We are going to write a unit test for the create product API.
>
> **[0:29](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=29)** Instead of importing test case from Django we import API test case from REST framework.
>
> **[0:43](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=43)** We import our product model, and then we begin to write our test.
>
> **[1:04](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=64)** We keep track of the initial product count,
>
> **[1:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=72)** and we're going to be creating a new product with a specific name, description, and a price.
>
> **[1:33](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=93)** We're going to be checking the response from the client, and POSTing to the product's new endpoint.
>
> **[1:48](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=108)** If for whatever reason we couldn't create a new product, we're going to print out whatever response we got, so that we can see if there's an invalid field or any other information.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=125)** We're going to make sure a new product was created, by checking the count of all products, against initial product count, and then we're going to be checking the values that were set for the product,
>
> **[2:36](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=156)** and making sure they're set exactly right.
>
> **[2:50](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=170)** We also have some custom fields, so we want to make sure they're values are correct as well.
>
> **[2:56](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=176)** The product is not on sale, so this should be false, and the product's current price
>
> **[3:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=192)** should be equal to the price we initially set.
>
> **[3:21](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=201)** In the real world, with customized REST APIs, there could be a lot of additional custom fields added.
>
> **[3:27](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=207)** This is done so that clients of the API have access to more data.
>
> **[3:32](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=212)** However, we need to thoroughly test this custom data that's added to API responses to ensure that API consumers do not fail, or crash.
>
> **[3:43](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=223)** So now let's run the test and see what happens.
>
> **[3:50](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=230)** So we can see that the tests are failing, and the product is not created because the sale start and sale end fields are required.
>
> **[4:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=240)** So let's fix this by going to the serializers file, and making both of those fields optional, by setting required is false.
>
> **[4:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=256)** We do the same for sale end, and then we go back here and run the test again.
>
> **[4:25](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=265)** So it looks like we have a new error, and this time it's the warranty field that is affected and the error is that the warranty is not part of product creation.
>
> **[4:38](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=278)** So we have to go back to the serializer and implement the create method, and the new implement the create method which is similar to the update method.
>
> **[4:54](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=294)** We're going to remove the warranty from the validated data, and then return the product as created without that warranty field.
>
> **[5:12](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-createapiview-subclass?u=76281980&t=312)** So now let's try running the tests again, It looks like everything passes, awesome.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), rest (5), http (1)
> **Code Keywords:** let (3), implements (1), interface (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Test case for a DestroyAPIView subclass
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-destroyapiview-subclass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-destroyapiview-subclass?u=76281980&t=0)** - [Narrator] We tested creating products through the API, so let's test destroying and deleting products through the API.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-destroyapiview-subclass?u=76281980&t=9)** We write a new test case for ProductDestroy.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-destroyapiview-subclass?u=76281980&t=14)** We're going to be checking the product count... and making sure that the product doesn't exist anymore after we delete it.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-destroyapiview-subclass?u=76281980&t=44)** So we use the client, called the delete method, on it, and then we make sure that there's one less object in the database.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-destroyapiview-subclass?u=76281980&t=63)** And we also make sure that if we try and retrieve that particular product, it no longer exists.
>
> **[1:22](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-destroyapiview-subclass?u=76281980&t=82)** In the real world, we would also check to ensure that caches or any other data related to the product model are also destroyed and cleaned up.
>
> **[1:50](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-destroyapiview-subclass?u=76281980&t=110)** So now let's run the test.
>
> **[1:54](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-destroyapiview-subclass?u=76281980&t=114)** It looks like all test paths and products can be deleted.

> [!info]- Semantic Content
>
> **Non-Speech:** (typing) (8)
> **Code Keywords:** let (2), delete (2), case
( (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (2)
> **Speakers:** - [narrator] (1)

#### Test case for a ListAPIView subclass
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-listapiview-subclass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-listapiview-subclass?u=76281980&t=0)** - [Instructor] Let's write a test case for the list of products from the API.
>
> **[0:10](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-listapiview-subclass?u=76281980&t=10)** ProductListTestCase is the name and it also uses the APITestCase.
>
> **[0:22](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-listapiview-subclass?u=76281980&t=22)** We're going to keep track of the product's count.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-listapiview-subclass?u=76281980&t=30)** And we are checking the response for call and get on the products list.
>
> **[0:43](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-listapiview-subclass?u=76281980&t=43)** And we are asserting that all the pagination fields exist and that they are the right values.
>
> **[1:01](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-listapiview-subclass?u=76281980&t=61)** And we're checking that the number of products is correct,
>
> **[1:11](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-listapiview-subclass?u=76281980&t=71)** not only in the count but in the results themselves.
>
> **[1:33](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-listapiview-subclass?u=76281980&t=93)** Notice that we don't have to check each product, because we are already testing the product serializer in another test case.
>
> **[1:42](https://www.linkedin.com/learning/building-restful-web-apis-with-django/test-case-for-a-listapiview-subclass?u=76281980&t=102)** Now we run the tests and it looks like they all passed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### Unit test for an UpdateAPIView subclass
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=1)** - [Narrator] Now let's test updating a product.
>
> **[0:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=5)** We write another API test case.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=16)** And this one is going to be using the PATCH method for partially updating the model.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=28)** Going to grab the first product, and then, we call PATCH from the client, pointing to that specific product's API URL.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=51)** We're going to be updating the name to new product, updating the description, and then updating the price.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=70)** Format of the request is JSON, and then we retrieve the updated product
>
> **[1:25](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=85)** from the database, and we're going to make sure that the name has actually updated.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=99)** Now let's run the test and see what happens.
>
> **[1:45](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=105)** It looks like the product's data doesn't update.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=112)** So let's try and fix this.
>
> **[1:58](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=118)** Let's go to the serializers, and it looks like an issue with the product serializer, and in the UPDI method, it looks like we update the data with the warranty information, but then we actually forget to call the super method, so that the product is updated correctly.
>
> **[2:19](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=139)** So let's do that now.
>
> **[2:25](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=145)** Now with this change, let's try running the tests again.
>
> **[2:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/unit-test-for-an-updateapiview-subclass?u=76281980&t=154)** Looks like it works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case. (1), this. (1), super (1)
> **Env Vars:** api (2), patch (2), url (1), json (1), updi (1)
> **API Endpoints:** patch  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Handling image uploads in a unit test
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=0)** - [Man] We're able to update the product, so let's test updating a product with a new product image upload.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=7)** We begin by importing OS.Path, since we are dealing with files and images.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=15)** And we're going to import Django settings.
>
> **[0:23](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=23)** And then we go to the product update Test Case, and we add a New Test Case to it, for Upload Product Photo.
>
> **[0:37](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=37)** We're going to use the first product in the database.
>
> **[0:42](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=42)** We're going to store the original photo.
>
> **[0:47](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=47)** And then we're going to create the Path to the new photo, and just re-use an existing product photo from our Media Root.
>
> **[1:08](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=68)** And then, with that photo, Path open,
>
> **[1:17](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=77)** going to to store that photo data, and use it to update the product photo.
>
> **[1:46](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=106)** And the format is not Json, but it is Multipart because it is an upload.
>
> **[1:53](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=113)** And immediately after that, we're going to be checking to ensure that the Response Status Code was a 200 and okay.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=125)** After that, we want to make sure that the photo from the response is no longer the original photo.
>
> **[2:20](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=140)** We also want to try an assertion here, we're going to check the updated product from the database.
>
> **[2:32](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=152)** And we're going to construct the Expected Photo Path.
>
> **[2:54](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=174)** And then we're going to try and assert that the new Updated Photo Path starts with the Expected Photo Path.
>
> **[3:07](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=187)** And finally, if we had any issues with this, we want to make sure that the new photo, the newly update photo is always deleted.
>
> **[3:26](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=206)** Let's try running the test.
>
> **[3:32](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=212)** As you can see, it works.
>
> **[3:34](https://www.linkedin.com/learning/building-restful-web-apis-with-django/handling-image-uploads-in-a-unit-test?u=76281980&t=214)** For your own projects, it's very important to check file and image uploads are working because failed uploads are very noticeable and can cause a bad user experience.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), assert (1), finally, (1), this, (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [man] (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-web-apis-with-django/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-web-apis-with-django/next-steps?u=76281980&t=0)** - [Rudolf] Thanks for joining me on this journey to create REST APIs with Django REST framework.
>
> **[0:05](https://www.linkedin.com/learning/building-restful-web-apis-with-django/next-steps?u=76281980&t=5)** From here you can learn how to design RESTful APIs.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-web-apis-with-django/next-steps?u=76281980&t=8)** Then you can learn to optimize your environment with Advanced Web Development with Django.
>
> **[0:13](https://www.linkedin.com/learning/building-restful-web-apis-with-django/next-steps?u=76281980&t=13)** And then you can learn out to create front-end code for consuming the REST API using React.
>
> **[0:19](https://www.linkedin.com/learning/building-restful-web-apis-with-django/next-steps?u=76281980&t=19)** You can connect with me on LinkedIn or on my website, [neverfriday.com](https://neverfriday.com).
>
> **[0:24](https://www.linkedin.com/learning/building-restful-web-apis-with-django/next-steps?u=76281980&t=24)** Thanks for watching.
>
> **[0:25](https://www.linkedin.com/learning/building-restful-web-apis-with-django/next-steps?u=76281980&t=25)** Go out there and create more awesome APIs.

> [!info]- Semantic Content
>
> **Env Vars:** rest (3), api (1)
> **URLs:** [neverfriday.com](https://neverfriday.com) (1)
> **Speakers:** - [rudolf] (1)


## Instructor

- [[Rudolf Olah]]

## Resources

- Exercise files available

## Skills Covered

- REST APIs
- Django

## Path Context

### In [[Advance Your Skills as a Django Developer]]
← [[Building Angular and Django Apps]] | **3 of 6** | [[Building a Paid Membership Site with Django]] →

## Appears In

- [[Advance Your Skills as a Django Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building RESTful APIs in Laravel]] — REST APIs
- [[WordPress- REST API]] — REST APIs
- [[Advanced Django Project- Build High-Traffic Websites with Django]] — Django
- [[Securing Django Applications]] — Django
- [[Building a Paid Membership Site with Django]] — Django

---

[↑ Back to top](#)