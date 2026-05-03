---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: securing-django-applications
url: "https://www.linkedin.com/learning/securing-django-applications"
duration_minutes: 87
duration: 1h 27m
level: Advanced
updated: 9/9/2024
learners: 38191
skills:
  - Django
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF8NWzeyXK4_w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1601591246933?e=2147483647&amp;v=beta&amp;t=EOeGxWQEE_x-6t2Sr5sVavcnrGlYm9berwUVWLPsje8"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills as a Django Developer]]'
prev_courses:
  - '[[Building a Paid Membership Site with Django]]'
next_courses:
  - '[[Advanced Django Project- Build High-Traffic Websites with Django]]'
path_nav: '[{"path":"Advance Your Skills as a Django Developer","position":5,"total":6,"prev":"Building a Paid Membership Site with Django","next":"Advanced Django Project- Build High-Traffic Websites with Django"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/django
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Securing%20Django%20Applications.md)

![Securing Django Applications](https://media.licdn.com/dms/image/v2/C4E0DAQF8NWzeyXK4_w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1601591246933?e=2147483647&amp;v=beta&amp;t=EOeGxWQEE_x-6t2Sr5sVavcnrGlYm9berwUVWLPsje8)

# Securing Django Applications

> The protection of user privacy and data is a clear mandate for business success. In this course, learn how to protect your Django web app using essential security and authentication measures. Using a sample project—a pre-built Django web app and a REST API for that web app—instructor Rudolf Olah shows how to add code that keeps your app safe from cyberattacks. Discover how to add SMS two-factor au

> [LinkedIn Learning](https://www.linkedin.com/learning/securing-django-applications) | 1h 27m | Advanced | 38K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [Security and Django](#security-and-django)
  - [What you should know](#what-you-should-know)
  - [What's included in the project](#whats-included-in-the-project)
  - [Installing the project](#installing-the-project)
  - [Running the server](#running-the-server)
- [**1. Permissions, Access Controls, and Activity Logs**](#1-permissions-access-controls-and-activity-logs) (7 videos)
  - [Setting up per-object permissions in Django](#setting-up-per-object-permissions-in-django)
  - [Enabling per-object permissions in Django](#enabling-per-object-permissions-in-django)
  - [Unit test for per-object permissions in Django](#unit-test-for-per-object-permissions-in-django)
  - [Creating a group permissions model](#creating-a-group-permissions-model)
  - [Unit test for access control and group permissions](#unit-test-for-access-control-and-group-permissions)
  - [Adding activity logs for auditing](#adding-activity-logs-for-auditing)
  - [Deleting objects in an audit/compliance-compatible way](#deleting-objects-in-an-auditcompliance-compatible-way)
- [**2. Throttling a Flood of Requests**](#2-throttling-a-flood-of-requests) (5 videos)
  - [Using ApacheBench to simulate a flood of requests](#using-apachebench-to-simulate-a-flood-of-requests)
  - [How to ensure actions happen only once](#how-to-ensure-actions-happen-only-once)
  - [Unit testing idempotent actions that should only happen once](#unit-testing-idempotent-actions-that-should-only-happen-once)
  - [Using background queues to throttle floods of requests](#using-background-queues-to-throttle-floods-of-requests)
  - [Unit testing background queue flood prevention](#unit-testing-background-queue-flood-prevention)
- [**3. Protecting Data and Data Privacy**](#3-protecting-data-and-data-privacy) (5 videos)
  - [Per-field encryption of data in Django](#per-field-encryption-of-data-in-django)
  - [Unit testing per-field encryption](#unit-testing-per-field-encryption)
  - [Zero knowledge encryption of data in Django](#zero-knowledge-encryption-of-data-in-django)
  - [Unit testing zero knowledge encryption](#unit-testing-zero-knowledge-encryption)
  - [Packaging user data for download](#packaging-user-data-for-download)
- [**4. 2FA: Two-Factor Authentication**](#4-2fa-two-factor-authentication) (4 videos)
  - [Using Twilio to send an SMS code](#using-twilio-to-send-an-sms-code)
  - [Confirming SMS code and enabling 2FA](#confirming-sms-code-and-enabling-2fa)
  - [Validating 2FA login before performing actions in Django](#validating-2fa-login-before-performing-actions-in-django)
  - [Unit testing 2FA login requirement for Django REST API](#unit-testing-2fa-login-requirement-for-django-rest-api)
- [**5. CSRF: Cross-Site Request Forgery Protection**](#5-csrf-cross-site-request-forgery-protection) (2 videos)
  - [Enabling CSRF tokens in Django](#enabling-csrf-tokens-in-django)
  - [Unit testing Django forms that use CSRF](#unit-testing-django-forms-that-use-csrf)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Security and Django](https://www.linkedin.com/learning/securing-django-applications/security-and-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/security-and-django?u=76281980&t=0)** - [Instructor] Have you ever wondered how the largest WebApps prevent security issues and cyber attacks? Have you ever wanted to know how two-factor authentication works, and how you can fully encrypt user data? In this course, we work with a prebuilt [[Django]] [[Representational State Transfer (REST)|REST]] API and add code to it so it is more secure and safe from cyber attacks. You will use [[Python (Programming Language)|Python]] and Django and its cache layer with [[Redis]] and Celery background worker. You will create audit logs for compliance and two factor auth codes using [[Twilio]]'s API. On top of that, you will be able to encrypt user data on the server and within zero knowledge client side encryption method. Hi, I'm Rudolf software developer for over 10 years with experience in creating Django WebApps and increasing their [[Scalability]] and security. Join me in this [[LinkedIn]] course where we increase the security of a Django REST API WebApp.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (4), [[Representational State Transfer (REST)|Rest]] (2), [[Python (Programming Language)|Python]] (1), [[Redis]] (1), [[Twilio]] (1)
> **Env Vars:** api (3), rest (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/securing-django-applications/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/what-you-should-know?u=76281980&t=0)** - [Narrator] Here's what you should know for the course. You should know some [[Python (Programming Language)|Python]], you can check out this [[LinkedIn]] learning course to learn more about the Python programming language. You should also know how to use the [[Django]] web app framework and you can learn some of the basics of cyber security and encryption from another LinkedIn learning course, Cyber Security for IT Professionals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (2), [[Django]] (1)
> **CLI Commands:** python (2)
> **Speakers:** - [narrator] (1)

#### [What's included in the project](https://www.linkedin.com/learning/securing-django-applications/what-s-included-in-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/what-s-included-in-the-project?u=76281980&t=0)** - [Narrator] What's included in the project is a [[Django]] web app for booking a travel tour experience. There is also a Django [[Representational State Transfer (REST)|REST]] API for the web app and there is sample data for the [[SQL]] database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[SQL]] (1)
> **Env Vars:** rest (1), api (1), sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Installing the project](https://www.linkedin.com/learning/securing-django-applications/installing-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/installing-the-project?u=76281980&t=0)** - [Instructor] To install the project, we first have to install the [[Redis]] server, and the Apache utils package, which contains Apache Benchmark. Then we have to create a virtual environment for [[Python (Programming Language)|Python]], where we're using Python 3, we're creating the env folder and then we have to source the activation script so that we're in this Python environment and then we have to install the dependencies of the project.
>
> **[0:49](https://www.linkedin.com/learning/securing-django-applications/installing-the-project?u=76281980&t=49)** And now you should be able to run the [[Django]] Code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Redis]] (1), [[Django]] (1)
> **CLI Commands:** python (3), apache (2)
> **Prerequisites:** install (3)
> **Versions:** python 3 (1)
> **Speakers:** - [instructor] (1)

#### [Running the server](https://www.linkedin.com/learning/securing-django-applications/running-the-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/running-the-server?u=76281980&t=0)** - [Instructor] To run the [[Django]] server, we have to activate the virtual environment. Then we have to go into demo folder, and then we have to run the migration script, and then we have to run the server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1)
> **Speakers:** - [instructor] (1)


### 1. Permissions, Access Controls, and Activity Logs

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up per-object permissions in Django](https://www.linkedin.com/learning/securing-django-applications/setting-up-per-object-permissions-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/setting-up-per-object-permissions-in-django?u=76281980&t=0)** - When you have data models in [[Django]], the permissions to add, modify or delete that data depends on the logic you implement in your views. Without fine grain security checks, any user could access another user's data and even modify it if the security check is poorly coded. We're going to begin by adding the guardian app to the installed apps list, in our settings file. And we're going to scroll down to the authentication backends, and we're going to be adding the object permission backend from guardian,
>
> **[0:45](https://www.linkedin.com/learning/securing-django-applications/setting-up-per-object-permissions-in-django?u=76281980&t=45)** and then ,we're going to be running the migrations. As you can see, guardian is part of the list of migrations, it provides its own migrations for object permissions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - when (1)

#### [Enabling per-object permissions in Django](https://www.linkedin.com/learning/securing-django-applications/enabling-per-object-permissions-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/enabling-per-object-permissions-in-django?u=76281980&t=0)** - [Instructor] Now that we have per object permissions enabled we need to assign permissions to model whenever a user creates it. When a user books a tour package, a booking model instance is created. It is logical that the user is the only one that can modify their own booking. So we're going to start by importing the receiver decorator. And then we're going to be importing the post save signal. And from guardian, we are going to be importing the shortcut for assigning permission. Now we scroll down to after the booking model definition and we're going to be using the receiver and we are going to be acting on the post save signal, for the booking and we call it set booking permissions.
>
> **[1:11](https://www.linkedin.com/learning/securing-django-applications/enabling-per-object-permissions-in-django?u=76281980&t=71)** And the user is based on the email address of the booking. And we're going to assign permission for the API change booking permission. We're going to assign it to the user and that's the model level permission. And now we're going to assign the per object permission by specifying the instance as well. Now we can go to the [[Django]] shell. And from there we can import time zone.
>
> **[2:05](https://www.linkedin.com/learning/securing-django-applications/enabling-per-object-permissions-in-django?u=76281980&t=125)** And from the API models we're going to import booking and package. And from django, we're importing the user model and we're going to find two users, user A and then user B.
>
> **[2:41](https://www.linkedin.com/learning/securing-django-applications/enabling-per-object-permissions-in-django?u=76281980&t=161)** And then we're going to select a tour package and then we're going to be creating a booking. So this booking has a package. The start is right now, the name is adventure, and the email address will be user A's email address. Now we're going to save that booking. And now we can check if user A has permission to change that booking. And then we're going to check if user B has permission to change that booking. So we're confirming that only user A has permission to change your own booking while other users do not have that permission. And it looks like that's exactly what we need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (2)
> **Env Vars:** api (2)
> **UI Navigation:** scroll down (1), go to (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Unit test for per-object permissions in Django](https://www.linkedin.com/learning/securing-django-applications/unit-test-for-per-object-permissions-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/unit-test-for-per-object-permissions-in-django?u=76281980&t=0)** - [Instructor] Let's unit test the per object permission testing. We already have the setup for the test. It shows that there's a package already existing, and two users have been created. In our test, we're going to try updating a booking, made by one user and updating it from a second user. So we're to create the booking. (keyboard stroking)
>
> **[0:39](https://www.linkedin.com/learning/securing-django-applications/unit-test-for-per-object-permissions-in-django?u=76281980&t=39)** The email address will be the email address of the first user. (keyboard stroking) And then we're going to save the booking. (keyboard stroking) And we're going to assert that our post save signal is working correctly, by asserting that the first user has permission to change the booking. (keyboard stroking) Then we're going to make sure that the second user, (keyboard stroking) does not have permission to change that booking. (keyboard stroking) Then we're going to be making an API call. (keyboard stroking)
>
> **[1:37](https://www.linkedin.com/learning/securing-django-applications/unit-test-for-per-object-permissions-in-django?u=76281980&t=97)** And we're going to be updating the name of that booking. (keyboard stroking) And we're making a patch request on behalf of the first user using the auth_user header. And we're going to make sure that the response is a 200, okay. They were able to modify the booking. And now we're going to try again, this time with the second user, who did not create the booking. And we just changed the auth_header here. (keyboard stroking) And it should not be a 200. It will be a 403 status code. So that means, the second user cannot modify the booking. So let's save that, and try running the test. (keyboard stroking) Cool.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Identifiers:** auth_user (1), auth_header (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Creating a group permissions model](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=0)** - Using [[Django]] Guardian, you can split read write modification, delete permissions into different roles groups. To make sure groups were correctly, you have to create them in a data migration, we're going to be creating two groups. First we need to get the model from the auth app.
>
> **[0:29](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=29)** And then we need to actually create the group. And the first one is for account manager. And the second one is the customer's support group.
>
> **[0:47](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=47)** This will be run as part of the data migration here. And then to actually assign the permissions we need to go into apps. And we need to use the post migrate signal.
>
> **[1:11](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=71)** And whenever the data migration is run, we're going to be making sure that we set up the group permissions. So the groups are created, and then we're going to be assigning the permissions using a small utility function, which is based on django guardians assign perm function.
>
> **[1:47](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=107)** And for the accounts manager, they will have permission to change a package and view a package
>
> **[2:05](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=125)** [[Customer Support]] will be helping customers so they need permission to view the package
>
> **[2:20](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=140)** and permission to change your booking that was created by a customer. And then permission to view a booking as well. Now we can write a test to make sure all this works. So this is part of booking per object permission test case. And we are going to call it test group permissions. And the permission we are testing is API Change Package.
>
> **[3:00](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=180)** Get the account manager group.
>
> **[3:11](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=191)** And then we make sure that this group has permission
>
> **[3:20](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=200)** to change that package. And then we make sure that an ordinary user who did not create that package does not have that permission.
>
> **[3:42](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=222)** However, when we add the other user
>
> **[3:51](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=231)** to the account manager group, that's when they should have permission to change that package. And we just confirm again, that the camp manager group still has permission to change that package as well. And that's it, So we're going to try running this test here.
>
> **[4:25](https://www.linkedin.com/learning/securing-django-applications/creating-a-group-permissions-model?u=76281980&t=265)** Looks like it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (2), [[Customer Support]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** api (1)
> **Prerequisites:** set up (1)
> **Speakers:** - using (1)

#### [Unit test for access control and group permissions](https://www.linkedin.com/learning/securing-django-applications/unit-test-for-access-control-and-group-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/unit-test-for-access-control-and-group-permissions?u=76281980&t=0)** - [Instructor] Let's write another access control test to ensure group permissions are working properly. Before we get started, Let's take a look at this sign permission, shortcut function we used. As you can see the function imports the group model and then imports the assigned permission function from [[Django]] guardian. And then for every group and the permissions, we are getting the group model instance. And then assigning each permission using the django guardian shortcut. Next, we have a function that checks whether a given group has permission to access a given object. We [[Fetch]] the group model instance. And then we use the get objects for group django guardian shortcut to check whether out of the set of all objects that this group has permission to whether the given object is in that set. And lastly, we have the user has group perm function. Which will check whether a user has permission to access through their group permissions, a specific object. Remember that you can write shortcuts and helper functions like this to simplify how you write unit tests. So let's create another test here. And this test will be to test the [[Customer Support]] group permissions.
>
> **[1:38](https://www.linkedin.com/learning/securing-django-applications/unit-test-for-access-control-and-group-permissions?u=76281980&t=98)** We're going to create a booking.
>
> **[1:58](https://www.linkedin.com/learning/securing-django-applications/unit-test-for-access-control-and-group-permissions?u=76281980&t=118)** That belongs to the user. Going to save that booking. And the permission we're going to check is the change booking permission. So we get the customer support group.
>
> **[2:22](https://www.linkedin.com/learning/securing-django-applications/unit-test-for-access-control-and-group-permissions?u=76281980&t=142)** And then we assert that the group has permission to change that booking. And then we're going to update the other user who did not create this booking and add them as a customer support staff. We're going to assert that our current user has permission to change the booking. And then we're going to assert that the other user does not have permission to change the booking. However, the other user will have access
>
> **[3:21](https://www.linkedin.com/learning/securing-django-applications/unit-test-for-access-control-and-group-permissions?u=76281980&t=201)** through the group that they're assigned to. The customer support group. Now let's run the test. Cool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Customer Support]] (4), [[Django]] (3), [[Fetch]] (1)
> **Speakers:** - [instructor] (1)

#### [Adding activity logs for auditing](https://www.linkedin.com/learning/securing-django-applications/adding-activity-logs-for-auditing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/adding-activity-logs-for-auditing?u=76281980&t=0)** - [Instructor] Whenever a user changed some model in our system, we want to make sure that we log this action. The idea is that if there ever is a need for auditing, we have a log of activity that took place on the user's account or on their data. We start by creating the activity log model. The user is a foreign key to the user instance that modified or updated or performed whatever action it is we're logging here. And the action is a description of the action that took place. So, whenever we save a booking,
>
> **[0:59](https://www.linkedin.com/learning/securing-django-applications/adding-activity-logs-for-auditing?u=76281980&t=59)** we're going to be creating an activity log.
>
> **[1:07](https://www.linkedin.com/learning/securing-django-applications/adding-activity-logs-for-auditing?u=76281980&t=67)** The user is the user who created the booking,
>
> **[1:20](https://www.linkedin.com/learning/securing-django-applications/adding-activity-logs-for-auditing?u=76281980&t=80)** and then we actually create the activity log, and the action description will be user with an ID and email address, saved a booking with this particular ID.
>
> **[1:41](https://www.linkedin.com/learning/securing-django-applications/adding-activity-logs-for-auditing?u=76281980&t=101)** So we have the user ID, their email address, and then the booking ID. And then we add the activity log model to the Jango admin.
>
> **[2:00](https://www.linkedin.com/learning/securing-django-applications/adding-activity-logs-for-auditing?u=76281980&t=120)** Create the activity log model admin as list display of the ID and the action. Then we register the model admin for activity log,
>
> **[2:25](https://www.linkedin.com/learning/securing-django-applications/adding-activity-logs-for-auditing?u=76281980&t=145)** then we're going to run the Jango web server. The Jango web server is running, now we can log in to the Jango admin with the username and password set to admin. And we can go to booking, click it, and we can update it,
>
> **[2:50](https://www.linkedin.com/learning/securing-django-applications/adding-activity-logs-for-auditing?u=76281980&t=170)** and then we can go here to activity logs, and we can see that we have performed this action of saving this booking.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Deleting objects in an audit/compliance-compatible way](https://www.linkedin.com/learning/securing-django-applications/deleting-objects-in-an-audit-compliance-compatible-way?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/deleting-objects-in-an-audit-compliance-compatible-way?u=76281980&t=0)** - [Instructor] When deleting data in a [[Django]] app we need to be aware of compliance requirements and whether the data can be truly deleted. We create a new data model, which will store a copy of the deleted data. So we need to store the model type that was deleted.
>
> **[0:25](https://www.linkedin.com/learning/securing-django-applications/deleting-objects-in-an-audit-compliance-compatible-way?u=76281980&t=25)** And then we have to store the ID of the model that was deleted. And then we store the actual data. And now whenever we delete a booking model instance,
>
> **[0:47](https://www.linkedin.com/learning/securing-django-applications/deleting-objects-in-an-audit-compliance-compatible-way?u=76281980&t=47)** we're going to be archiving it, and storing it in the DeletedData model. Now we do this by using DJango serializers and we're going to store a [[JSON]] copy of this instance that was deleted, and then we're going to store it in the DeletedData objects. So the model type is booking. The model ID is the instance ID, and the data is the serialized version of that data. Later on, if we ever need to recover this data, and restore it, we can do that just given the ID. We can find it in deleted data. Say that the model tape is booking model ID is the given ID. And then for every instance that we find, we're going to deserialize it, and then we're going to be saving it. And of course removing it from the objects that were deleted. Now to test this, we're going to import DeletedData and the restore booking function.
>
> **[2:23](https://www.linkedin.com/learning/securing-django-applications/deleting-objects-in-an-audit-compliance-compatible-way?u=76281980&t=143)** And we're going to go down to the delete and restore booking test case, and the delete and restore test. We'll have a model ID of the booking ID. And we're going to assert that right now we have
>
> **[2:48](https://www.linkedin.com/learning/securing-django-applications/deleting-objects-in-an-audit-compliance-compatible-way?u=76281980&t=168)** one booking object in the database. And we're going to assert that we have no DeletedData.
>
> **[3:00](https://www.linkedin.com/learning/securing-django-applications/deleting-objects-in-an-audit-compliance-compatible-way?u=76281980&t=180)** However, after we delete the booking,
>
> **[3:08](https://www.linkedin.com/learning/securing-django-applications/deleting-objects-in-an-audit-compliance-compatible-way?u=76281980&t=188)** we're going to do those assertions again but this time the number of bookings should be zero. So it is deleted, but it is stored in DeletedData. Then, when we call restore booking with the model ID, and we should get back to her original state where there is a booking but there is no DeletedData. Now let's run the test, see how this works. Cool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (2), [[JSON]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** json (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 2. Throttling a Flood of Requests

[↑ Back to Table of Contents](#table-of-contents)

#### [Using ApacheBench to simulate a flood of requests](https://www.linkedin.com/learning/securing-django-applications/using-apachebench-to-simulate-a-flood-of-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/using-apachebench-to-simulate-a-flood-of-requests?u=76281980&t=0)** - [Instructor] Apache Bench is used as a benchmarking tool to let you know how many requests your Apache web server can handle. However, it can be used to test any other web server too. In one terminal, we're going to be running the [[Django]] web server. In another terminal, we're going to be running AB, which is the command to run Apache Bench. We use the N option, which is the number of requests to make. And then we're going to be hitting the Django web server at the index. And we can see that there are five completed requests and the requests per second are 292. So it looks like we can handle a lot of requests when using the Django web server. Let's try that again with more requests and this time pointing to our [[Representational State Transfer (REST)|REST]] API URL. Instead, so he used the T flag to set the content type to [[JSON]]. We're going to make 200 requests and we are going to be hitting the API V1 public packages endpoint. So when we run this,
>
> **[1:36](https://www.linkedin.com/learning/securing-django-applications/using-apachebench-to-simulate-a-flood-of-requests?u=76281980&t=96)** we see that 200 requests were made and we were able to handle 294 requests per second. We need to confirm that we are sending the right data. So we're going to be using the T flag again. And then we're going to use V for verbosity, set it to the highest level. And then we send just one request and we're going to send it to the same API V1 public packages endpoint. So we can see by scrolling up a little bit, the data we sent and received and the response code and we can see everything with this verbosity flag. Now let's add more concurrency and more requests. So again, we use the T flag and then we say C, which is concurrency and we said to 30, so there'll be 30 concurrent processes. And then we run it with 2000 requests. So again, we're hitting the same endpoint.
>
> **[3:12](https://www.linkedin.com/learning/securing-django-applications/using-apachebench-to-simulate-a-flood-of-requests?u=76281980&t=192)** So you can see that the number of requests per second is slightly lower than before. And this is with 30 concurrent processes. And 2000 requests being made. There is another API method that we want to test. It's one that will create new objects in the database. So we set the content type to JSON again, set the verbosity to five. We're going to make just one request and we're going to use the P flag, which will load post data from a text file. And the post data we're setting is a JSON string. And we're going to be sending it to this other endpoint.
>
> **[4:02](https://www.linkedin.com/learning/securing-django-applications/using-apachebench-to-simulate-a-flood-of-requests?u=76281980&t=242)** Create package. So you can see the number of completed requests is one. And then when we scroll up, we can see from the log what happened. So he got a 201 HTTP status code, which means that the object was indeed created. Now we're going to try and flood the creation of new objects through the API. We're going to send a 100 requests. We're going to use the same post data. I am.. we're going to make the request to API V1 create package. So we made a 100 requests. They were all completed successfully, and that means a 100 new objects were created in the database. So that's definitely a flood of requests and we definitely do not want to be creating so many objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (3), [[JSON]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (6), json (3), rest (1), url (1), http (1)
> **CLI Commands:** make (4), apache (3)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### [How to ensure actions happen only once](https://www.linkedin.com/learning/securing-django-applications/how-to-ensure-actions-happen-only-once?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/how-to-ensure-actions-happen-only-once?u=76281980&t=0)** - [Instructor] We're going to be using Jingles built in caching to add a throttle so that whenever a new package is created we do not allow more of them to be created for a short period of time.
>
> **[0:19](https://www.linkedin.com/learning/securing-django-applications/how-to-ensure-actions-happen-only-once?u=76281980&t=19)** And in the Package Create View we're going to override the post method so that we check the cache for the package created key. And if that key has already been set we just return it 200. We did not create a new package object but the request is okay. However, if this key does not exist we are going to call, super post with the arguments and keyword arguments so that we actually create the object and we check the response and the status code to make sure that it did work correctly and if it did we're going to set the package created hit to true and it should time out in 300 seconds. After that we returned a response, okay. Let's run the Jingle web server. Now let's switch to a new terminal and we going to try running the Apache benchmark again and we're going to try and create multiple objects through the API and see if our flood protection
>
> **[2:01](https://www.linkedin.com/learning/securing-django-applications/how-to-ensure-actions-happen-only-once?u=76281980&t=121)** and our throttle link works. So, we have 30 concurrent processes, a thousand requests the post data is this and then we are hitting the API view one create package and point. So, as you can see, we had a thousand requests go through and we only created one object. So, with the cash key we were able to throttle with the number of objects created so that the responses are even faster because they are basically a no-op.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), apache (1)
> **Env Vars:** api (2)
> **Tools:** terminal (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Unit testing idempotent actions that should only happen once](https://www.linkedin.com/learning/securing-django-applications/unit-testing-idempotent-actions-that-should-only-happen-once?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/unit-testing-idempotent-actions-that-should-only-happen-once?u=76281980&t=0)** - [Instructor] Let's open the test file and write a test case for the cooldown throttling period. We already have the [[Django]] cache imported, and we have our package create view test case with some sample data. So before we start testing, we need to setup what are the expectations here, which is that after we make a request, we're going to be seeing that one additional object was created. So before the request, we want to make sure that the cache key package created has not been set. Now, we're going to make our first request, which is to create a new package, going to use that sample data. And we're going to make sure that right after this first request, the cache key has been set,
>
> **[1:10](https://www.linkedin.com/learning/securing-django-applications/unit-testing-idempotent-actions-that-should-only-happen-once?u=76281980&t=70)** and then we're going to make sure that the response was also 201 to indicate that the object was created. And then we're going to make sure that the number of objects in the database has actually been updated. Now in our second request,
>
> **[1:42](https://www.linkedin.com/learning/securing-django-applications/unit-testing-idempotent-actions-that-should-only-happen-once?u=76281980&t=102)** we're going to use the same sample data, and we're going to make sure that the status code is a 200 instead of a 201. The cache key is still set because this request follows immediately after, and then the number of objects will remain the same. So there should be no change after the second request, let's save that open a terminal and run the test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1)
> **CLI Commands:** make (7)
> **Prerequisites:** before we start (1), setup (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using background queues to throttle floods of requests](https://www.linkedin.com/learning/securing-django-applications/using-background-queues-to-throttle-floods-of-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/using-background-queues-to-throttle-floods-of-requests?u=76281980&t=0)** - In our web app, users want the ability to post comments several times a day, about the tour packages offered. It's possible that this could lead to a flood of requests from millions of users or from very active users. Our background task will create a new comment for the user, which allows us to scale up and handle more requests. So we're going to import the comment model. And we're going to define a new background task, called create comment. That is given a user ID and the text of the comment. And we're going to define a cache key, for the user. And if the cache key is already set, then we going to say we need to retry this task later. So this will only work, if the task is bound. This is why we have bind equals true while we're defining the task. So, if the key does not exist, that means we are free to create, our new comment. And we use the user ID to get the user
>
> **[1:37](https://www.linkedin.com/learning/securing-django-applications/using-background-queues-to-throttle-floods-of-requests?u=76281980&t=97)** and the text of the comment will be the given text. And then we save the object. And of course, we have to set the cache key, to the object ID. So we know which comment was last graded. And we have a timeout of 300 seconds. Now, in the views, we're going to be overriding the Create comment view. And specifically, we're overriding the post method.
>
> **[2:15](https://www.linkedin.com/learning/securing-django-applications/using-background-queues-to-throttle-floods-of-requests?u=76281980&t=135)** We're going to be using our create comment, task. And we're going to providing, the.. user ID and the.. text of the comment. And then we're going to say that we want to allow retrying. And the retry policy is.. three retries. And we allow, retrying every 60 seconds. And then, we have.. an interval of 30 seconds, which actually extends the delay, up until a maximum of 300 seconds. And then we just say that everything is okay and we assume the comment will be created. So when, we hit our API to create a new comment for the user, the comment is queued up and we just assume it will be created and if not, it will be put back into the queue and created a little later.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - in (1)

#### [Unit testing background queue flood prevention](https://www.linkedin.com/learning/securing-django-applications/unit-testing-background-queue-flood-prevention?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/unit-testing-background-queue-flood-prevention?u=76281980&t=0)** - [Narrator] Our first test case, we'll test the celery task that was created. In the setup method we have to first clear the cache, and then in our first test, we're going to be asserting that the cache does not have any key set, specifically the key for this user ID. And then we're going to call our background task, with that user ID and the text. And then we're going to be checking that the comment was created. We make sure the text is equal to example, and we also make sure that the cache was set for this cache key and that the cache value was set to the comment ID. For our next task, we're going to be marking out the retry function of create comment, and we're going to be making sure that retrying and queuing up this background task for later can be done. We have the create comment retry lock here, and our user ID will be the first user's ID. And then we're going to call create comment with that user ID,
>
> **[1:39](https://www.linkedin.com/learning/securing-django-applications/unit-testing-background-queue-flood-prevention?u=76281980&t=99)** just like in the first test case. And then we're going to be setting retry to have a side effect. And now we make sure that the retry is raised.
>
> **[2:01](https://www.linkedin.com/learning/securing-django-applications/unit-testing-background-queue-flood-prevention?u=76281980&t=121)** So when we call a create comment right away, the user won't be able to create this comment and it will be retried later. Now in the terminal, we have to make sure that [[Redis]] server is running. It looks like it is. And we just have to run test UGC, looks like the tests are passing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** ugc (1)
> **Tools:** terminal (1)
> **Analogies:** just like (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)


### 3. Protecting Data and Data Privacy

[↑ Back to Table of Contents](#table-of-contents)

#### [Per-field encryption of data in Django](https://www.linkedin.com/learning/securing-django-applications/per-field-encryption-of-data-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/per-field-encryption-of-data-in-django?u=76281980&t=0)** - To increase security, we're going to be creating a custom model field that automatically encrypts a field. The idea is that if an attacker accesses the database, they will not be able to access sensitive data without the encryption key. Right now the encryption key will be set to hello world 256. We have a special utility function called making encryption key to ensure that the key has a length of 32. The encrypt function will be taking the encoded value and then returning the encrypted value. Going to be using the encryption key with that and then calling encrypt on encoded value. So Fernet is one encryption algorithm provided by the [[Python (Programming Language)|Python]] [[Cryptography]] library. There are other [[Algorithms]] that you can choose but this one is the simplest and easiest to use for this case. And now for decryption, we're going to be again using Fernet with our same encryption key so this is symmetric encryption where we're using the same key or decrypting the value and then we have to encode it
>
> **[1:35](https://www.linkedin.com/learning/securing-django-applications/per-field-encryption-of-data-in-django?u=76281980&t=95)** as UTF8. So now that we have these two functions, we can create our encrypted text field custom field. So we have to override from db_value which provides us with a value on expression and a connection and we just use decrypt with the value and then we have to override to Python, which provides us with a value and again we are decrypting that value and we also have to override the get_prep value method.
>
> **[2:21](https://www.linkedin.com/learning/securing-django-applications/per-field-encryption-of-data-in-django?u=76281980&t=141)** And this will be encrypted so that when the database value is being returned and being deserialized into the field so that we can access it, we have to decrypt it and the prep value is used right before we insert it or update the database field itself. So that's where we have to encrypt it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Cryptography]] (1), [[Algorithms]] (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** db_value (1), get_prep (1)
> **Env Vars:** utf8 (1)
> **Speakers:** - to (1)

#### [Unit testing per-field encryption](https://www.linkedin.com/learning/securing-django-applications/unit-testing-per-field-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/unit-testing-per-field-encryption?u=76281980&t=0)** - [Tutor] We're going to test the per field encryption by storing the secret code ABC123. So our secret code goes here, and a payment is made by the user,
>
> **[0:26](https://www.linkedin.com/learning/securing-django-applications/unit-testing-per-field-encryption?u=76281980&t=26)** and the password confirmation code is our secret code right here. We are going to make sure that the payment passport confirmation is equal to the secret code, and this field is in memory, so it's unencrypted, and then we're going to be using the database connection cursor, so that we can make a direct [[SQL]] query
>
> **[1:14](https://www.linkedin.com/learning/securing-django-applications/unit-testing-per-field-encryption?u=76281980&t=74)** from the model and select that field and make sure it is encrypted.
>
> **[1:33](https://www.linkedin.com/learning/securing-django-applications/unit-testing-per-field-encryption?u=76281980&t=93)** And then we get the result of this query using [[Fetch]] one. We can print the encrypted string, and then we can make sure that it's not equal to our secret code, because it is encrypted, and we also in to test the deserialization, and for that we get the object from the database through Djangos ORM.
>
> **[2:18](https://www.linkedin.com/learning/securing-django-applications/unit-testing-per-field-encryption?u=76281980&t=138)** Again comparing it. That way, and now we can run the tests, so we open up the terminal, and as you can see, the field has been properly encrypted. So our short secret code turned into a long encrypted string. And that is what's stored in the Sequel database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1), [[SQL]] (1), [[Fetch]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** abc123 (1), sql (1), orm (1)
> **Tools:** terminal (1)
> **Speakers:** - [tutor] (1)

#### [Zero knowledge encryption of data in Django](https://www.linkedin.com/learning/securing-django-applications/zero-knowledge-encryption-of-data-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/zero-knowledge-encryption-of-data-in-django?u=76281980&t=0)** - [Narrator] Before we get into the code. Remember that encryption and [[Cryptography]] and security are tough subjects to be an expert at. For example, spider Oak uses multiple sets of encryption [[Algorithms]] for their zero knowledge storage, while we are only using one algorithm. If you are asked to use the code, we write here in a production setting, hire a [[Cybersecurity]] expert to audit the code. So, here we have a new model for users to be able to store a travel journal and descriptions of their trip. This is data that should always be kept private, but that is convenient for us to hold onto for the user. We are acting as data custodians. (mouse clicking) We're going to create a custom permission, called only creator permission. It is a subclass of [[Django]] [[Representational State Transfer (REST)|rest]] frameworks based permission, and, we are overriding the has permission method. (keyboard keys clicking) And we want to allow only post or get methods
>
> **[1:21](https://www.linkedin.com/learning/securing-django-applications/zero-knowledge-encryption-of-data-in-django?u=76281980&t=81)** on this data. The has object permission, is what we use to check if the requesting user was the one who created this object.
>
> **[1:42](https://www.linkedin.com/learning/securing-django-applications/zero-knowledge-encryption-of-data-in-django?u=76281980&t=102)** So the user creates a journal entry and neither us on the server side should be able to read their journal data. And they should be the only ones that are able to access it when they request it from the API. So now in the views, we're going to define a new journal view set. So we imported our only creator permission here, and we can scroll down and create a new journal view set. (keyboard keys clicking) Query set is all the serializer class already exists.
>
> **[2:33](https://www.linkedin.com/learning/securing-django-applications/zero-knowledge-encryption-of-data-in-django?u=76281980&t=153)** And our permission class will be just only crater.
>
> **[2:41](https://www.linkedin.com/learning/securing-django-applications/zero-knowledge-encryption-of-data-in-django?u=76281980&t=161)** And we have to define a custom query set. So we override get query set. And if the, requesting user is anonymous, then we will return no results. Otherwise we will be returning, all the results where the user created the journal entry, and created the model. Remember that the encrypted data here is encrypted on the client's side and that the Django server only stores it. So we're not using our encryption field. We're going to to be encrypting on the client side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (2), [[Cryptography]] (1), [[Algorithms]] (1), [[Cybersecurity]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Non-Speech:** (keyboard keys clicking) (2), (mouse clicking) (1)
> **Env Vars:** api (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Unit testing zero knowledge encryption](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980&t=0)** - [Instructor] We're going to unit test the creation of a new journal entry. Recall that journal entries are encrypted on the client's side. To test Zero-knowledge encryption, we start by creating the client's side key. And we have to pad the key
>
> **[0:34](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980&t=34)** for this particular algorithm. And we also have to be 64 encoding
>
> **[0:51](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980&t=51)** a mobile app client or web browser client or desktop client can generate the private key used to encrypt this message. So this client side key outside of tests will be generated on the client side. So our plain text message will just be "hello world" and we have to encode it. And our encrypted text, which will be encrypted on the client side, using the client side key will be done like this using Fornet. You can use any other algorithm on the client side, as long as the user has that key. We also need to make sure that the encrypted text is a list of bytes.
>
> **[1:52](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980&t=112)** And then we're ready to assemble the [[Representational State Transfer (REST)|rest]] API data we're going to send over. That's created by the user and then the encrypted text is this encrypted text. And now we can make the post request to the rest API. It's the API V1 journal and the data is the above data. And we're going to be logged in as the user. We're going to make sure that the status code was still one, which means the new journal entry was created. And we also want to make sure that the activity log is zero. That no new activity log entries were created. It's up to the user to keep track of their private key and the data they keep in there, and on the server side, we want to have zero knowledge even about when they're creating these pieces of data. We don't want to have any plain text data and so on. So now let's make sure that the journal entry has the encrypted text only. So we want to make sure
>
> **[3:34](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980&t=214)** that the created by user is that user. And then let's make sure that journal encrypted text matches.
>
> **[3:53](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980&t=233)** Now we're going to decrypt what was actually stored in the database, sorting get the bytes of the encrypted version
>
> **[4:09](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980&t=249)** and then decrypt it using the Fernet algorithm
>
> **[4:18](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980&t=258)** and the client side key.
>
> **[4:26](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980&t=266)** And then we want to make sure that the decrypted message is "hello world." Remember that the encryption key for zero-knowledge work is always stored in the client side. The algorithm they choose again is selected on the client side. And that's what makes it zero-knowledge. On the server side we're storing as little as possible, we're just acting as custodians for the data that the user wants to store here. So we're going to print out the plain text, the encrypted text and the decrypted text, just so we can see what happens when we're running the tests. So let's run the tests now, open a terminal and run the tests.
>
> **[5:31](https://www.linkedin.com/learning/securing-django-applications/unit-testing-zero-knowledge-encryption?u=76281980&t=331)** So the tests are passing. We can see our plain text message was hello world. And that is the encrypted form that was stored. And then the decrypted form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **CLI Commands:** make (8)
> **Env Vars:** api (3)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Packaging user data for download](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=0)** - [Instructor] [[Data Privacy]] regulations such as GDPR in the European Union and CCPA in the State of California make it more important than ever to give users a way to download all of the data that they have put into your web app. So we're going to give them the ability to download a csv file. So let's start by writing a unit test. So we're going to make a request to get the csv file for this particular user. And of course, the response status code should be a 200
>
> **[0:42](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=42)** and we're going to get the content from the response.
>
> **[0:51](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=51)** And we want to make sure the csv file has a particular format.
>
> **[1:01](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=61)** The first line will be data for user at local host. The second line will have a section heading comments. There are no comments made by the user, but there are bookings. So in this section we print out all the field names
>
> **[1:26](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=86)** and then the data related to that user action. And this is a custom date format and then the booking name.
>
> **[1:42](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=102)** Now there's another section for the activity log where the user, with a particular ID and a particular email address has saved a booking. And now we just need to add the format string
>
> **[2:15](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=135)** and that's it. So that's how our csv should look like when we download it. So let's go to the views and implement that. So we have user data download view. It's a protected resource so the user has to be logged in. And we see that the response will be an HTTP response where the content type is a csv and the content disposition is an attachment
>
> **[2:51](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=171)** with file name of data.csv. And we're going to create our csv.writer and I'll write directly to the response and it will use the unix dialect. The first row is the data for with the user's email address. The next row is the common setting and we're going to get all the comments made by user
>
> **[3:39](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=219)** and we filter by the request user and then we just write the rows. And we're just printing out the comment text. After that we have our bookings and we write out the fields
>
> **[4:14](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=254)** and we get our bookings
>
> **[4:24](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=264)** and then we are going to use writerows and a list comprehension here. So we get the package name from the booking, the package price, the start date, and the name.
>
> **[4:53](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=293)** After that we have the activity log and we need to [[Fetch]] all the objects and actions done by the user. And then we have writerows
>
> **[5:19](https://www.linkedin.com/learning/securing-django-applications/packaging-user-data-for-download?u=76281980&t=319)** I'm getting that for log in logs. And then we return the response. Let's run the test by opening the terminal, going to the folder and then running test api. So as you can see we have a small error here, so let's fix that. And it looks like it's just in our test where we have a small typo. So let's run the test again and we're good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Privacy]] (1), [[Fetch]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** gdpr (1), ccpa (1), http (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** data.csv (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)


### 4. 2FA: Two-Factor Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Twilio to send an SMS code](https://www.linkedin.com/learning/securing-django-applications/using-twilio-to-send-an-sms-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/using-twilio-to-send-an-sms-code?u=76281980&t=0)** - [Instructor] We're going to be using [[Twilio]] to send a two-factor SMS code. So we're going to to start by importing the trace function from the random model so that we can generate the SMS code. And we have to import the [[Representational State Transfer (REST)|REST]] client for Twilio. And we already have a model here. So what we're going to do is create a class method to send the code. And we're passing in the class at the user and the phone number that we're going to send the code to. Before we do anything else, we need the account SID and the auth token. You can get the account SID and the auth token and the phone number from the Twilio Dashboard. You can sign up for a Twilio trial account and create an SMS account. You can paste in the account SID and auth token and then we can create the Twilio Client using the account SID and the auth token. We're going to generate the code using these digits.
>
> **[1:26](https://www.linkedin.com/learning/securing-django-applications/using-twilio-to-send-an-sms-code?u=76281980&t=86)** And we use choice to select random digit for a six-digit code. And we're going to be creating a two-factor auth code object for this user with this particular randomly generated code. And then we're going to be sending the message using the Twilio Client. We have to provide the phone number that we're sending it to and the from phone number, which in this case is this one. For your own account, it will be something else. And then the body of the message that we're sending, which will be your auth code plus the code. Now let's save this and let's switch to Terminal and see this in action. We can go into the [[Django]] shell and we import the user model. And then from our two-factor auth app, we import the two-factor auth code model. We're going to get the last user and then create a two-factor auth code
>
> **[3:03](https://www.linkedin.com/learning/securing-django-applications/using-twilio-to-send-an-sms-code?u=76281980&t=183)** by sending a code to that user to whichever number you want to type in. And as soon as you send it, you should receive this in a few seconds if you've set up your Twilio account credentials properly. So you should see the auth code and an SMS message show up on your phone. And that's all it takes to send a message using Twilio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Twilio]] (8), [[Representational State Transfer (REST)|Rest]] (1), [[Django]] (1)
> **Env Vars:** sms (4), sid (4), rest (1)
> **Tools:** terminal (1)
> **UI Navigation:** switch to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Confirming SMS code and enabling 2FA](https://www.linkedin.com/learning/securing-django-applications/confirming-sms-code-and-enabling-2fa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/confirming-sms-code-and-enabling-2fa?u=76281980&t=0)** - To confirm and validate the two factor auth code, we need to define a new class method called validate code. So it's a class method, called validate code. And we pass in the user and the code. And we're going to first check if the user is anonymous. And if that is the case, we return False, then we check if there is an existing auth code that matches
>
> **[0:37](https://www.linkedin.com/learning/securing-django-applications/confirming-sms-code-and-enabling-2fa?u=76281980&t=37)** by matching against the user, and the code that was given. And sorting by the sent on date, so that we are matching against the most recently issued two factor auth code. If existing is None, there is no match then we create an activity log. For this user, where the action is, they entered, an incorrect two factor auth code. And then we return False. And the last case here, is that the authentication code they entered is valid so we're going to delete this auth code so it can't be re-used. And then we're going to create a log for the user. An action is that they entered a correct two factor auth code and then we return True.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - to (1)

#### [Validating 2FA login before performing actions in Django](https://www.linkedin.com/learning/securing-django-applications/validating-2fa-login-before-performing-actions-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/validating-2fa-login-before-performing-actions-in-django?u=76281980&t=0)** - [Tutor] To use two factor authentication with [[Django]] and Django [[Representational State Transfer (REST)|REST]] framework, we need a way to confirm and validate an action. Therefore, we need to create a permission class. We're going to be importing permissions from Django REST framework, and we're going to be importing our TwoFactorAuthCode model. And the permission class will be called, TwoFactorAuthRequired. Inheriting from BasePermission, and it will be operating at the has_permission level instead of has object permission. So we're going to extract the code from any request_data,
>
> **[0:57](https://www.linkedin.com/learning/securing-django-applications/validating-2fa-login-before-performing-actions-in-django?u=76281980&t=57)** and the parameter will be called auth code. So all requests that require twofactorauth will have this additional auth code parameter. And then we're going to be using the TwoFactorAuthCode, validate_code class method. So we pass in the request_user and then we pass in the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (3), [[Representational State Transfer (REST)|Rest]] (2)
> **Code Identifiers:** has_permission (1), request_data (1), validate_code (1), request_user (1)
> **Env Vars:** rest (2)
> **Speakers:** - [tutor] (1)

#### [Unit testing 2FA login requirement for Django REST API](https://www.linkedin.com/learning/securing-django-applications/unit-testing-2fa-login-requirement-for-django-rest-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/unit-testing-2fa-login-requirement-for-django-rest-api?u=76281980&t=0)** - [Narrator] We're going to unit test two-factor auth. So we need to create an auth code for the user in this test case. So we use two factor auth code object star create, pass in the user that we're using for tests, and the code will be a simple one. And now in our first test, we're going to be (keyboard clunking) making a post request to this validate API URL.
>
> **[0:39](https://www.linkedin.com/learning/securing-django-applications/unit-testing-2fa-login-requirement-for-django-rest-api?u=76281980&t=39)** This is just a convenient view that we're using simply to validate the auth code. And we pass in the auth code as a data parameter, and we pass in the authenticated user headers as part of the request. The request response should be an okay,
>
> **[1:07](https://www.linkedin.com/learning/securing-django-applications/unit-testing-2fa-login-requirement-for-django-rest-api?u=76281980&t=67)** and the two factor auth code should have been deleted. (keyboard clunking) We also need to check that an activity log was created, (keyboard clunking)
>
> **[1:30](https://www.linkedin.com/learning/securing-django-applications/unit-testing-2fa-login-requirement-for-django-rest-api?u=76281980&t=90)** and that the action of this log entry was user entered correct two factor auth code.
>
> **[1:44](https://www.linkedin.com/learning/securing-django-applications/unit-testing-2fa-login-requirement-for-django-rest-api?u=76281980&t=104)** In the second test here, we have an invalid auth code, so it's something similar to the first test, (keyboard clunking) but the response code will be a four or a three. The two factor auth code will still exist and the activity log will say incorrect instead of correct. So an invalid code will generate this log entry that says incorrect, the two factor auth code will still exist. So let's open up a terminal and run the test. (keyboard clunking)

> [!info]- Semantic Content
>
> **Env Vars:** api (1), url (1)
> **Tools:** terminal (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)


### 5. CSRF: Cross-Site Request Forgery Protection

[↑ Back to Table of Contents](#table-of-contents)

#### [Enabling CSRF tokens in Django](https://www.linkedin.com/learning/securing-django-applications/enabling-csrf-tokens-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/enabling-csrf-tokens-in-django?u=76281980&t=0)** - CSRF attacks also known as, cross-site request forgery attacks. Allow an attacker to automatically execute code in a web browser on behalf of a user. The danger of a CSRF attack is that it can be invisible to the user. For example, an attacker could attempt to transfer money on a bank website on behalf of the user. Another type of attack could attempt to change a user's email address, or password to something that the attacker knows. Here we have our journal view which will list a bunch of journal entries for the user, and this is the zero knowledge journal view. And we want to make sure, that whenever any request is sent to this view, that it is protected with a CSRF token. So, we going to use CSRF protect, and [[Django]] has another decorator called CSRF exempt, In case you do want a view that is exempt from CSRF [[Tokens]]. In this case, we want the CSRF token to be there for any post request. And then we can go to the journal template, where we can see there's a form for adding a new journal entry for the user, So they're going to be entering plain text. It's converted into encrypted text, which is then submitted to our web app. So, to make sure that an attacker can't,
>
> **[1:37](https://www.linkedin.com/learning/securing-django-applications/enabling-csrf-tokens-in-django?u=76281980&t=97)** fill their journal with random entries, we need to provide a CSRF token. Here in the existing entry section, we list a bunch of existing entries, so this is the decrypted text, that the user can see, that is encrypted on the server. For an attacker, they may want to delete all the user's journal entries. So we need a CSRF token here, and we make the delete a post request, so that the CSRF token is checked for in the view.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1), [[Tokens]] (1)
> **Env Vars:** csrf (10)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - csrf (1)

#### [Unit testing Django forms that use CSRF](https://www.linkedin.com/learning/securing-django-applications/unit-testing-django-forms-that-use-csrf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/unit-testing-django-forms-that-use-csrf?u=76281980&t=0)** - [Instructor] We're going to test the CSRF protection for the journal view. Specifically, we're testing to see what happens where we delete a journal entry. In this test, a user and a journal entry already exist. We need to create a new HTTP client and we need to make sure that it enforces CSRF checks. Usually [[Django]] will skip these to make testing easier. And then we are going to use Force Login to login as the user. So let's try, deleting, this journal entry we're going to make a POST request. And the data we're providing is the entry to delete and that is the journal entry ID. And we do not expect this to work. So the response status code should be a four or a three, and the journal entry should still exist.
>
> **[1:16](https://www.linkedin.com/learning/securing-django-applications/unit-testing-django-forms-that-use-csrf?u=76281980&t=76)** And the reason this won't work, and why we want it to fail is because the CSRF token is not included as part of the request. So, let's try again. We have the response of getting the journal entries and on that page, the two [[Forms]] that exist are the add new entry form and the delete entry forms. And as part of those forms, there are CSRF [[Tokens]]. So we want to make sure that this response returns to 200 as a status code. And then we're going to be extracting the CSRF token.
>
> **[2:06](https://www.linkedin.com/learning/securing-django-applications/unit-testing-django-forms-that-use-csrf?u=76281980&t=126)** So we use this regular expression to do that. And you can see why Django usually skips the CSRF check.
>
> **[2:20](https://www.linkedin.com/learning/securing-django-applications/unit-testing-django-forms-that-use-csrf?u=76281980&t=140)** And we're searching for it in the response content. And then we're going to try and make that POST request again. And we're going to say that we want to delete an entry but this time, we also have CSRF middle where token included so that's the CSRF token there. And after this, we expect that the response status code will be at 302. So it will delete the entry and then redirect. And then we want to make sure that the number of journal objects is zero.
>
> **[3:17](https://www.linkedin.com/learning/securing-django-applications/unit-testing-django-forms-that-use-csrf?u=76281980&t=197)** Let's run the tests and see what happens. Open a new terminal and then run manage test UGC. Awesome. Now we can be sure that our Django views are protected from CSRF attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (3), [[Forms]] (3), [[Tokens]] (1)
> **Env Vars:** csrf (9), post (2), http (1), ugc (1)
> **CLI Commands:** make (6)
> **API Endpoints:** post  (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/securing-django-applications/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-django-applications/next-steps?u=76281980&t=0)** - [Instructor] The next steps you can take after watching this course are learning more about [[Django]] [[Representational State Transfer (REST)|REST]] APIs with the [[LinkedIn]] Learning course "[[Building RESTful Web APIs with Django]]," and you can further your [[Cybersecurity]] knowledge as well and your web app security knowledge with the "Online [[Application Security]] Testing Essentials" course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[LinkedIn]] (1), [[Cybersecurity]] (1), [[Application Security]] (1)
> **Env Vars:** rest (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Rudolf Olah]]

## Resources

- Exercise files available

## Skills Covered

- Django

## Path Context

### In [[Advance Your Skills as a Django Developer]]
← [[Building a Paid Membership Site with Django]] | **5 of 6** | [[Advanced Django Project- Build High-Traffic Websites with Django]] →

## Appears In

- [[Advance Your Skills as a Django Developer]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Django Project- Build High-Traffic Websites with Django]] — Django
- [[Building a Paid Membership Site with Django]] — Django
- [[Building RESTful Web APIs with Django]] — Django
- [[Building Angular and Django Apps]] — Django
- [[Building React And Django Apps]] — Django

---

[↑ Back to top](#)