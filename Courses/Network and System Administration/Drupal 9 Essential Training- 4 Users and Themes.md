---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: drupal-9-essential-training-4-users-and-themes
url: "https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes"
duration_minutes: 35
duration: 35m
level: Beginner
updated: 3/11/2021
skills:
  - Drupal
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQERTuy6ZiCz5A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615309636107?e=2147483647&amp;v=beta&amp;t=MnDHzHCAn8VbrFsYXAdrByFew4Fk09Lg3zRRQ3xVe4w"
linkedin_topic: Network and System Administration
learning_paths:
  - Build Your Drupal Skills
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/web-development
  - skill/drupal
status: not-started
created: 2026-04-20
---

![Drupal 9 Essential Training: 4 Users and Themes](https://media.licdn.com/dms/image/v2/C4E0DAQERTuy6ZiCz5A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615309636107?e=2147483647&amp;v=beta&amp;t=MnDHzHCAn8VbrFsYXAdrByFew4Fk09Lg3zRRQ3xVe4w)

# Drupal 9 Essential Training: 4 Users and Themes

> User management in Drupal is very robust. In this course, instructor Rod Martin shows you how you can create different user roles with different levels of access to your Drupal administration interface, then teaches you how to install and configure a custom theme for Drupal. Rod begins by reviewing the site plan and giving you a look at user roles. He gives you insights on how to set permissions a

> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes) | 35m | Beginner
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[OSTraining]]
- [[Rod Martin]]

## Skills Covered

- Drupal

## Table of Contents

### Introduction

#### Introduction to the course
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=0)** - Hi, and welcome to the Drupal 9 Essential Training.
>
> **[0:05](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=5)** My name's Rod Martin and I'm your instructor for this series.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=8)** In this course, we're going to cover two important topics, users and themes.
>
> **[0:14](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=14)** Now in Drupal, user management is really important and it's very robust.
>
> **[0:20](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=20)** The roles, permissions, and users system in Drupal governs what people can see and what people can do.
>
> **[0:29](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=29)** And as I mentioned, it's very robust.
>
> **[0:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=32)** You'll want to pay attention to it because it gives you the opportunity to give different levels of access to your Drupal administration interface.
>
> **[0:43](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=43)** Then we'll dive into theming.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=45)** Now the really neat thing about theming in Drupal is you can add your theme at any point during the site build.
>
> **[0:52](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=52)** We're choosing to add it here before we dive into layout so that we can use our theme to build the final layout of our website.
>
> **[1:01](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-to-the-course?u=76281980&t=61)** Well, I hope you're enjoying building the Drupalville site, and so let's dive in to users and theming.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), let (1)
> **Speakers:** - hi (1)
> **Non-Speech:** (upbeat music) (1)


### 1. Users Explained

#### Introduction and the user workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=3)** - [Presenter] All right, just as a reminder, here's our site building workflow.
>
> **[0:06](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=6)** And we're now at the permissions and users explain section.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=11)** So we're going to take some time to go through the user's workflow which relates to the permissions.
>
> **[0:17](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=17)** Now, permissions as you'll see, can be pretty complex but I'm going to lay it out as simply as I can.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=23)** Once we have a user setup, we're going to install workflows, it's a module and then see how that works.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=30)** Many of the clients that I have worked with over the last year have implemented workflows as a pretty much normal part of their dribble website.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=38)** All right, head over to People and click on Roles.
>
> **[0:43](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=43)** When you install Drupal, there are three roles installed by default, anonymous user is somebody who just visits your website and has no login or permissions at all.
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=54)** And authenticated user is someone who has a login and their permissions can be updated perhaps to add nodes in a certain content type if that's something that you want you users to be able to do.
>
> **[1:05](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=65)** Finally, there are administrators and when you set up Drupal, they have all the permissions.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=70)** And of course today, as you remember you're super user number one.
>
> **[1:14](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=74)** And so your role doesn't even appear here because it can't be changed or deleted.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=80)** So as a reminder, user roles and permissions define what a person can see and what a person can do when they're logged in.
>
> **[1:28](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=88)** Now that could be either as a content editor, a site builder or even an administrator.
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=93)** The user workflow looks like this.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=96)** We set up roles, we assign permissions, we add users and we test.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/introduction-and-the-user-workflow?u=76281980&t=103)** And we'll go through that process in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** module (1), default, (1), finally, (1), super (1), this. (1)
> **Prerequisites:** install (2), set up (2), setup (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [presenter] (1)

#### Adding a user role and permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=3)** - If you're not already there, go ahead and click on "People," and you'll see that we have one user, that's us.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=12)** We have the role of administrator, but that's a little tricky because we're actually super user number one, as I've mentioned a couple of times.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=19)** Click on "Roles," and here's our three roles.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=23)** Click "Add Role."
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=26)** And in this video, we're going to set up our content editor role.
>
> **[0:29](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=29)** Click on "Role Name" and enter "Content Editor."
>
> **[0:34](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=34)** Click "Save."
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=37)** Now this doesn't actually do anything, but I like to drag and drop my roles in the order of access or permissions.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=45)** It just changes the order on the "Permissions" page.
>
> **[0:48](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=48)** In fact, while you're working on permissions, sometimes it's just easier to put them all the way to the left, so that you can see them really easily.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=55)** So let's leave it at the top, and I'll show you how that works.
>
> **[0:59](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=59)** Click "Save," and click on "Permissions."
>
> **[1:04](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=64)** So you'll see that this is the order of the roles screen.
>
> **[1:08](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=68)** And later on, when we've set up permissions and tested them, I'm going to move it back to between "Authenticated User" and "Administrator," just so I can see the progression of roles from left to right.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=79)** All right, a content editor should be able to do a number of things.
>
> **[1:24](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=84)** And again, this is something that you'll work out in your site plan before you even touch Drupal.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=90)** What does a content editor need to do?
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=93)** Do we want them managing comments on our site?
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=96)** If you're going to use comments, then this could be a good role for a content editor.
>
> **[1:42](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=102)** We're not going to let them do configuration manager, and we're not going to allow them to administer contacts, or Devel, or Devel Generate, or external links.
>
> **[1:52](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=112)** And while we're here, take a look and see "Warning: give the trusted roles only this permission has security implications."
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=119)** You'll see this on any permission where administration of a particular module is involved.
>
> **[2:08](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=128)** Let's skip right past the field UI, the file UI... And as we look at filters, you'll see that, by default, they have access to the basic HTML text format.
>
> **[2:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=139)** This is because authenticated users already do, and Drupal assumes that your content editor is at least an authenticated user or above.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=149)** If you wanted to give full HTML access to the content editor, you would put a checkmark in there.
>
> **[2:35](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=155)** Scrolling down, we get to "Media."
>
> **[2:38](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=158)** Are we going to allow our content editor to manage our media?
>
> **[2:42](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=162)** Well, yeah, that probably makes sense.
>
> **[2:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=165)** So go ahead and put in... They can add new media items.
>
> **[2:55](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=175)** Will we let them delete media items?
>
> **[2:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=176)** No, I don't think so.
>
> **[2:58](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=178)** So scroll down.
>
> **[3:02](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=182)** Will we let them edit any media?
>
> **[3:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=183)** And by "edit," that means changing, say, the alt text on an image or adding a revision.
>
> **[3:10](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=190)** We'll leave that at "No."
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=194)** Access the media overview page?
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=196)** Well, that's important; they should be able to see the media page.
>
> **[3:20](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=200)** Now, as we come down, this is instructive... Up here at the top, we actually said, "Yes," to all of them, and we didn't really need to do that if we were going to say they could create any media.
>
> **[3:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=212)** Down here under this section, you've got "Create Media," and that's going to cover all the media types.
>
> **[3:38](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=218)** Obviously, they're going to get to view media, and they won't be able to see unpublished media.
>
> **[3:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=225)** All right, now we get to the heart of it.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=226)** A content editor's role is to add, edit, and maybe even delete nodes on your website.
>
> **[3:53](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=233)** So our content editor is going to be able to create, edit, and delete any of the content on our site.
>
> **[4:00](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=240)** So let's say they can create an article node, a basic page node, a business directory, an event, and a location.
>
> **[4:09](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=249)** We'll also say they can delete any of our nodes.
>
> **[4:12](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=252)** We trust them that much.
>
> **[4:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=255)** You'll see that we can delineate between any content and own content.
>
> **[4:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=259)** Well, we won't worry about that.
>
> **[4:20](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=260)** If we say, "Any," of course, they can delete their own.
>
> **[4:23](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=263)** We're not going to let them delete revisions.
>
> **[4:25](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=265)** We want to track that history.
>
> **[4:27](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=267)** But we will let them edit any content.
>
> **[4:34](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=274)** Now, by clicking in those five, we don't need to click in the next five.
>
> **[4:39](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=279)** We're not going to let them revert revisions because we want, again, maybe an administrator to do that.
>
> **[4:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=285)** We'll let them view revisions, but not manage revisions, so go ahead and put five check marks in there.
>
> **[4:51](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=291)** And of course, we're going to let them access the content overview page, since that's what they're going to be doing.
>
> **[4:58](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=298)** Now, again, here are three warnings: administer content, administer content types, and bypass content access control.
>
> **[5:07](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=307)** We'll leave those unchecked, of course.
>
> **[5:10](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=310)** "Delete, revert, and view all revisions."
>
> **[5:12](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=312)** We won't check those.
>
> **[5:13](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=313)** We've already done that.
>
> **[5:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=315)** "View published content."
>
> **[5:16](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=316)** Of course, they can view published content, and let's say they can view their own unpublished content, specifically because we've got the scheduler module installed, and we're going to be using workflows.
>
> **[5:29](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=329)** So that's all of our node-related items.
>
> **[5:33](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=333)** Scrolling down, we're not going to let them administer scheduler, but we will let them use scheduler and view the scheduled content list.
>
> **[5:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=345)** That's important for an editor.
>
> **[5:50](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=350)** Continuing to scroll down, we won't let them use shortcuts.
>
> **[5:53](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=353)** That's fine; they're only going to have one menu anyway.
>
> **[5:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=356)** Nothing here under "System" because, again, that's just for administrators.
>
> **[6:02](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=362)** Nothing under "Taxonomy."
>
> **[6:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=363)** We want to manage the taxonomy at the administrator level.
>
> **[6:08](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=368)** We'll let them use the toolbar; that's important.
>
> **[6:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=375)** And that's it, all right.
>
> **[6:17](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=377)** At this point, I'm just going to scroll down slowly so you can double check your settings.
>
> **[6:22](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=382)** You might want to pause the video a couple of times just to make sure.
>
> **[6:25](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=385)** All right, I'm scrolling down.
>
> **[6:27](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=387)** And the first one we have said, "Yes," to is under "Media."
>
> **[6:33](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=393)** Create new media in each of those five and access the media overview page.
>
> **[6:43](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=403)** We're going to allow them to create and delete any content on our site.
>
> **[6:50](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=410)** And we're going to let them edit any content on our site.
>
> **[6:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=416)** We're going to let them view the revisions but not revert revisions, and we'll let them access the content overview page.
>
> **[7:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=423)** That's an important one.
>
> **[7:07](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=427)** We're going to let them view their own unpublished content, schedule content, and finally, use the toolbar.
>
> **[7:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=439)** Go ahead and save permissions.
>
> **[7:24](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=444)** As I said earlier, I'm going to move that role back down here.
>
> **[7:27](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=447)** Again, it doesn't actually do anything.
>
> **[7:29](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=449)** It just changes the order on the permissions page.
>
> **[7:33](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=453)** Go ahead and pause the video and just double-check that all of your permissions are correct.
>
> **[7:37](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-role-and-permissions?u=76281980&t=457)** In the next video, we'll add a new user, assign them to this role, and test out their permissions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), delete (8), module (2), super (1), default, (1)
> **UI Navigation:** click on (4), scroll down (3), drag and drop (1)
> **CLI Commands:** node (3), make (1)
> **Env Vars:** html (2)
> **Cross-References:** in the next (2)
> **Prerequisites:** set up (2)
> **Warnings:** warning (1)
> **Speakers:** - if (1)

#### Adding a user account and testing
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=3)** - [Instructor] All right you should've just finished checking and saving your permissions and in this video we're going to add a content editor and assign them to the new role.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=12)** Go ahead and click List.
>
> **[0:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=15)** And let's add a content editor user.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=18)** Click Add User.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=22)** Put in a fake email address.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=25)** I'm just going to put in content as the username and content as the password, now again if you're out on a live server you probably want to do something a little bit more secure than that.
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=37)** And then we want to add them to the content editor role.
>
> **[0:43](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=43)** And click Create New Account.
>
> **[0:47](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=47)** All right well let's quickly just go ahead and test our new user, the easiest way to do that is to open a totally different browser or open a private window in the current browser that you're using.
>
> **[0:58](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=58)** All right go ahead and login as content.
>
> **[1:05](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=65)** And you should see the manage toolbar, the shortcuts toolbar, and of course their username.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=73)** If I click on manage and click on content, you're going to see content scheduled and media.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=81)** What you're not seeing here is comments because we didn't allow this person to manage our comments.
>
> **[1:25](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=85)** And what we're also not seeing is the administration page, we must've forgotten that user permission.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=92)** And this is why we test.
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=93)** I'm going to head back over to my site and click on people, permissions, and find view administration theme.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=103)** It's about almost at the bottom and that's probably why we missed it under system, I'm going to just go ahead put a check mark in the content editor role here and click Save.
>
> **[1:54](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=114)** Head back over and hit Refresh and there's our familiar administration screen.
>
> **[2:00](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=120)** You'll note I can edit and delete nodes.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=125)** I can see the revisions, and I have full access to edit the node, well that's terrific.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=138)** If I just even try and type in a different area of the site, it's going to tell me access denied.
>
> **[2:26](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/adding-a-user-account-and-testing?u=76281980&t=146)** So it looks to me like our content editor role is pretty much set.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (1), delete (1)
> **UI Navigation:** click on (3)
> **CLI Commands:** find (1), node (1)
> **Speakers:** - [instructor] (1)

#### User registration and fields
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=3)** - [Instructor] One of the great things about Drupal 9 is the fact that users are an entity, which means you can create very robust community-based systems and you can add as many fields to a user profile as you need.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=19)** All right.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=19)** So we don't add fields under people.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=22)** We go to configuration, people, account settings and manage fields and just like all of the content types we created we can add as many fields as we want, click add field click select a field type and select text plane and as you can see, though all of the field types are available to you allowing you to build out very robust profile systems.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=45)** Let's call this first name, click save and continue save field settings and this is a neat option.
>
> **[0:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=56)** If you require a field, that means it's going to show up on the user registration page.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=62)** If you don't require it well, then it won't but it'll still appear on their profile.
>
> **[1:08](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=68)** Click save settings.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=73)** All right, so we've got first name and picture field and again, we could add as many fields as we want.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=79)** If I click on manage display I'm going to move the first name field all the way to the top so when they look at their profile their first name will be at the top of the page.
>
> **[1:28](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=88)** Change the label to inline and click save.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=92)** All right, head over to configuration, people and account settings.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=96)** This is where we manage all of these settings for account creation on our Drupal site.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=103)** Should each person have their own personal contact form?
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=106)** That's over writable but you can turn it completely on or off here.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=111)** What's the name for anonymous users?
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=113)** Well, we're going to stick with anonymous and what's the role for an administrator?
>
> **[1:58](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=118)** Well, again, we'll leave that as administrator but it's nice to be able to change that if I need to.
>
> **[2:06](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=126)** Under registration and cancellation who can register accounts?
>
> **[2:10](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=130)** Do we allow administrators only, visitors or visitors and administrator approvals required?
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=136)** If we select visitors then the next box is require email verification when a visitor creates an account.
>
> **[2:23](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=143)** They'll get an email.
>
> **[2:23](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=143)** This is pretty standard across the entire internet.
>
> **[2:26](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=146)** People are used to that now.
>
> **[2:28](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=148)** If you uncheck this, though this means that a visitor can register on your site with absolutely no oversight at all so of course we recommend you keep it on.
>
> **[2:40](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=160)** We'll keep the password strength indicator turned on and when canceling a user account, you have three options disable the account and keep its content, disable the account and unpublish its content and delete the account and make its content belonged to the anonymous user.
>
> **[2:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=176)** The vast majority of enterprise clients that I've worked with over the last two years, leave this at the top disable the account and keep its content and mostly because that's content editors who might leave.
>
> **[3:08](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=188)** Down here below are all of the emails that you and your users will get depending on the action that is going on at the time.
>
> **[3:17](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=197)** So a new account email, waiting approval email, admin email when someone's waiting approval, account activation, account blocked, cancellation confirmation, account canceled and a really important one, password recovery.
>
> **[3:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=212)** Now, if you look at these you kind of see that there are tokens being used and you should never delete the tokens.
>
> **[3:38](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=218)** Of course you can move them around but for instance, in this one that one time log in URL token is really important and if that email got sent out without it, well of course it would be useless.
>
> **[3:49](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=229)** So make sure you maintain those tokens pretty carefully.
>
> **[3:54](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=234)** All right.
>
> **[3:55](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=235)** So we're going to leave all the settings as they are.
>
> **[3:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=236)** Although if you're on an open system on the internet you might want to not leave that as visitors.
>
> **[4:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=243)** You might want to put that back as administrators only I'm going to leave mine at visitors and click save configuration.
>
> **[4:12](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=252)** All right, let's test this out.
>
> **[4:13](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=253)** I'm going to log out and I'm going to click the login button and you'll see here in the middle tab, create new account.
>
> **[4:22](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=262)** If I click on that here are all of the fields, email, username, picture woops and the first name field is at the bottom.
>
> **[4:31](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=271)** You probably remember what I did wrong here.
>
> **[4:33](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=273)** Let's go back over, click on manage form display cause this is the form settings and let's drag first name up to the top, click save, head back over and hit refresh and there it is.
>
> **[4:52](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=292)** My first name field is required and it's at the top of the form.
>
> **[4:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=296)** Drupal 9 allows you to build incredibly robust community-based systems.
>
> **[5:01](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=301)** If you're going to use something like the group module to allow people to have groups on your site where they can see their own content add their own content and things like that then the Drupal 9 user administration really comes in handy where you can add as many fields as you want to profiles.
>
> **[5:18](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=318)** I'd encourage you to Google for all of the other modules you might want to consider using for the user profile system.
>
> **[5:25](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/user-registration-and-fields?u=76281980&t=325)** It really is great in Drupal 9.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), require (3), delete (2), continue (1), this, (1)
> **UI Navigation:** click on (3), go to (1)
> **Analogies:** picture (2), just like (1), for instance (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** url (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### Creating content workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=3)** - [Instructor] One of the things I get asked a lot when I do public training is can we set up workflows where a content editor can create a node but someone needs to come along and approve the node and we want to keep those roles separate from say even an administrator?
>
> **[0:21](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=21)** Well, the answer is absolutely.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=24)** Head over to Extend.
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=26)** And scroll down to the bottom of Core and you'll see Workflows.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=31)** Now, workflows requires content moderation.
>
> **[0:33](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=33)** So we'll need to turn that one on as well.
>
> **[0:36](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=36)** Put a check mark in Workflows.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=38)** Scroll back up and find content moderation and put a check mark in there.
>
> **[0:43](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=43)** What this is going to do is exactly what it sounds like.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=45)** Create workflows for content moderation.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=49)** Scroll down to the bottom and click Install.
>
> **[0:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=56)** Two modules have been enabled.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=57)** Go to Configuration, Workflow and Workflows.
>
> **[1:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=63)** And there's one here set up by default and we'll just use this one for now.
>
> **[1:08](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=68)** Go ahead and click Edit.
>
> **[1:11](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=71)** And there are three parts to this.
>
> **[1:14](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=74)** The states, so what state is the node in?
>
> **[1:17](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=77)** Draft, published and archived in this case.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=80)** And of course, you can have as many states as you want.
>
> **[1:23](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=83)** A state might be needs approval, something like that.
>
> **[1:28](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=88)** For every set of states, you need transitions between those states.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=92)** And so you need to think this through and plan it from Draft, Published to Draft, Draft and Published to Published, Published to Archived, Archived to Draft, Archived to Published.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=106)** And there you go.
>
> **[1:47](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=107)** Each state needs the equivalent transitions.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=111)** Finally, we get to choose what this workflow applies to and you'll notice block types, media types and content types and that's really terrific.
>
> **[2:01](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=121)** Go ahead and click on Select for content types.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=125)** And let's just choose basic page.
>
> **[2:07](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=127)** That's a good example.
>
> **[2:08](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=128)** We're not really using that yet, so we'll be able to test that out.
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=132)** Click Save.
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=136)** And you'll see that the content type is including basic page.
>
> **[2:20](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=140)** Default moderation state then is draft.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=142)** So when I click new basic page, it's going to be saved automatically as a draft.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=149)** All right, go ahead and click Save.
>
> **[2:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=152)** Now, you'll remember from our site building workflow, this is under permissions and any time you add a module like this, you need to manage your permissions.
>
> **[2:43](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=163)** Now, while this is a pretty good overview of the site building workflow, permissions is the kind of thing you revisit a lot as you're building your site.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=172)** So head back over to People and Permissions, and just below the top, you're going to find a new section called Content Moderation.
>
> **[3:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=183)** All right, what workflows can the content editor use?
>
> **[3:06](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=186)** Well, obviously, we're going to let them create a new draft.
>
> **[3:11](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=191)** We'll let them restore to draft.
>
> **[3:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=195)** We'll let them view unpublished content.
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=199)** And we'll let them view the latest version.
>
> **[3:23](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=203)** But what we won't do is let them archive nodes and we won't let them publish nodes or restore nodes from draft to published.
>
> **[3:33](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=213)** So this is going to limit the content editor's ability, specifically in the basic page content type.
>
> **[3:39](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=219)** All right, scroll down and click Save.
>
> **[3:44](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=224)** I'm going to head back over and log back in as content editor.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=230)** And click on Content.
>
> **[3:53](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=233)** Let's filter by basic page.
>
> **[3:54](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=234)** I think we've got one.
>
> **[3:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=236)** There it is.
>
> **[3:57](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=237)** You can see that I can edit and I can delete.
>
> **[4:01](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=241)** But if I click About Drupalville and I click Edit, I can change to draft but I can't change it back to archived.
>
> **[4:13](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=253)** That makes sense.
>
> **[4:16](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=256)** That node has already been proofed and published and ready to go.
>
> **[4:21](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=261)** You'll also notice that there's a latest version tab here.
>
> **[4:25](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=265)** Let's go in and make a change.
>
> **[4:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=272)** And click Save.
>
> **[4:36](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=276)** Here's my change but it's in draft mode.
>
> **[4:41](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=281)** If I log out, I can still see the version of my About page before the changes were made because they haven't been approved by an administrator or a publisher.
>
> **[4:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=296)** And so a content editor who is allowed to edit a node but not publish it, their changes don't go live on the site while they are editing the node.
>
> **[5:07](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=307)** If I come back over when I'm logged in as admiinistrator and go to About Drupalville, again you'll see latest version and because I'm an administrator, I can change it to published.
>
> **[5:21](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=321)** And now that latest version tab is gone.
>
> **[5:25](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=325)** I have a new version of the node, and my changes are live.
>
> **[5:31](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=331)** The workflow module is incredibly helpful.
>
> **[5:34](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=334)** Even if you don't need sophisticated workflows, being able to edit a node without your changes going live immediately and having someone just say proof them for you is really helpful.
>
> **[5:47](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=347)** And that's the workflow module.
>
> **[5:48](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=348)** There's lots of tutorials out there on the internet and we have more at OSTraining.
>
> **[5:53](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/creating-content-workflows?u=76281980&t=353)** I'd encourage you to take a look at some of those to see some of the more advanced workflows that you can create.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), module (3), public (1), this. (1), case. (1)
> **CLI Commands:** node (8), find (2), make (1)
> **UI Navigation:** scroll down (3), go to (2), click on (2)
> **Prerequisites:** set up (2), install (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Themes Explained

#### Themes explained
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=3)** - [Narrator] Well, your Drupal site won't look very good, until you get a theme.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=8)** A theme is what takes Drupal's core output, and makes it look the way you want.
>
> **[0:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=15)** Here's how a theme works in Drupal.
>
> **[0:17](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=17)** Someone comes to your site and clicks on a link.
>
> **[0:20](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=20)** Drupal says, oh, they want the content that's associated with this link out of the database, all the images, videos, et cetera, et cetera, et cetera, and they want them at this page.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=31)** In literally milliseconds, Drupal goes and grabs the content and begins to assemble the page.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=38)** This is done through a series of PHP calls to the database, through core and contributed modules.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=45)** Once Drupal assembles all of the content and layout from the database and configuration, it then generates a series of HTML.twig files or template files.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=57)** It then passes that rendered output to your theme, that's comprised of a configuration file in a YAML format, HTML.twig override files, CSS JavaScript, and any images associated with your layout, and then generates the page that the user ends up seeing.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=79)** So while technically you don't need a theme in Drupal, well, without it, it would look pretty bad.
>
> **[1:27](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=87)** We've been using Bartek up until now, it's a theme that comes with Drupal core, and it's a great demo theme or a theme to get us started.
>
> **[1:35](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=95)** We've already discussed modules, and themes work exactly the same way at [drupal.org](https://drupal.org).
>
> **[1:41](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=101)** As you see on the screen, at the time of this recording, there were 184 contributed themes for Drupal 9.
>
> **[1:49](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=109)** Once again, a Drupal theme has to be available for the version of Drupal that you're using.
>
> **[1:55](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=115)** There are six kinds of themes for Drupal.
>
> **[1:58](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=118)** There are core themes, and those are the ones that come with Drupal, Bartek, classy, stable, and more.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=124)** Contributed standard themes are similar to modules in that they are free for you to use, and have been created and contributed back to the community by people all over the world.
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=135)** There are starter and base themes.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=138)** Now these differ from standard themes, in that typically these get you started, but you still need to create a subtheme on top of it, in order to get it where you want it to be.
>
> **[2:30](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=150)** There are contributed administration themes, Adminimal probably being the most famous of those, a custom theme would be something that you would ask someone to build for you, that would not be found at [drupal.org](https://drupal.org), and many many enterprise and larger sites use a custom theme often based on a contributed starter theme like Bootstrap.
>
> **[2:51](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=171)** Finally, there are premium themes that you can find around the internet, though these are becoming fewer and fewer.
>
> **[2:59](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=179)** As with modules, the most popular themes will be listed at the top, when you filter on Drupal 9.
>
> **[3:06](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=186)** Barrio is now the most popular Drupal subtheme.
>
> **[3:10](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=190)** It's a Bootstrap for flex based theme, that is technically a base theme, you would set up a subtheme on top of it.
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=199)** If you're looking for more of a typical contributed theme that you can actually use, well then you're probably looking at something like ZURB Foundation, Tara, Material Base, Electra, things like this.
>
> **[3:34](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/themes-explained?u=76281980&t=214)** Well, we have a theme for you and in the next video, we'll install it and get it started.

> [!info]- Semantic Content
>
> **Env Vars:** html (2), php (1), yaml (1), css (1), zurb (1)
> **Code Keywords:** override (1), finally, (1), this. (1)
> **CLI Commands:** php (1), find (1)
> **URLs:** [drupal.org](https://drupal.org) (2)
> **Prerequisites:** set up (1), install (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Analogies:** similar to (1)

#### Installing and configuring Breeze
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=3)** - [Instructor] All right, with that introduction to theming in Drupal, head over to [drupal.org/project/breeze](https://drupal.org/project/breeze).
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=11)** Now, this is a theme that was actually created specifically for the Drupal Explained books by Daniel Pickering who's done a lot of work for OSTraining.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=23)** Daniel is based over in the UK and if I click on his username, he works for Annertech.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=30)** He's been around Drupal for five years.
>
> **[0:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=32)** He specifically works on a few different projects but of course, he's a member of the Drupal Association and everything else.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=38)** Daniel's a terrific guy.
>
> **[0:40](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=40)** You'll see a lot of his articles on OSTraining.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=44)** So you can install Breeze in of two ways.
>
> **[0:46](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=46)** With Composer, of course.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=49)** Composer require drupal/breeze and it will download all the dependencies.
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=54)** If you don't have Composer installed, and by now, I'm sure you know if you do or don't, the manual instructions are here.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=60)** You'll need to download and install the Drupal 9 version of Bootstrap 3 and then download and install the Breeze theme.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=70)** And that's at [drupal.org/project/bootstrap](https://drupal.org/project/bootstrap).
>
> **[1:14](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=74)** And you'll notice that down here, it's also ready for Drupal 8 or 9.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=80)** So depending on how you want to install it, go ahead and get the Breeze theme installed and once again, if you're doing it manually, you will need to do Bootstrap, as well as Breeze and then come back and follow the video along.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=99)** Composer require drupal/breeze.
>
> **[1:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=105)** Now once again, Composer takes a little longer but it always installs all of the dependencies that you'll need.
>
> **[1:54](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=114)** Go ahead and pause the video at this point and come back when you have Breeze and Bootstrap installed, not necessarily turned on.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=124)** All right, once that is installed, go ahead and click on Appearance and scroll down and you should see Bootstrap 3 and Breeze.
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=132)** You do not need to install Bootstrap.
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=135)** You do need to install and set as default Breeze.
>
> **[2:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=139)** Go ahead and do that, please.
>
> **[2:23](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=143)** Now, this theme has a few settings and as I mentioned in my introduction to themes, some themes have very few settings, some themes have a ton and some themes are somewhere in between.
>
> **[2:35](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=155)** This one's somewhere in between.
>
> **[2:37](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=157)** Click on Settings and we have General, Components, JavaScript, CDN and Advanced for Bootstrap settings.
>
> **[2:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=165)** So you can update the button settings, container settings, you can use a Fluid class.
>
> **[2:55](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=175)** Update settings for forms.
>
> **[2:58](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=178)** Use responsive images and default image shape, rounded circle or thumbnail.
>
> **[3:04](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=184)** And what you're going to do with tables.
>
> **[3:07](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=187)** Hover rows, stripe tables, condensed tables, border tables and responsive, et cetera.
>
> **[3:12](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=192)** Clicking on Components, we can turn on and off breadcrumbs.
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=196)** We can show the homepage breadcrumb link.
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=199)** The navbar can be a static top, fixed top or fixed bottom or just a normal position and we can assign wells to any of our regions.
>
> **[3:33](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=213)** Talk about how JavaScript is handled.
>
> **[3:36](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=216)** If we have a CDN.
>
> **[3:39](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=219)** And any advanced deprecation warnings.
>
> **[3:42](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=222)** We'll leave those as they are.
>
> **[3:45](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=225)** Go ahead and click Save.
>
> **[3:49](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=229)** Now, as I mention in the introduction, the very first thing you need to do when you look at a new theme, well, let's go take a look and see what it's done, click back to site.
>
> **[3:59](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=239)** And we've got some weird things going on here, which we're going to fix in just a moment.
>
> **[4:04](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=244)** We have our breadcrumbs all the way up at the top.
>
> **[4:07](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=247)** We've got one of our menus here that is out of position.
>
> **[4:11](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=251)** We've got our menu items, which are here, and again out of position.
>
> **[4:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=255)** Our logo and account settings, the logout button, powered by Drupal, that should be in the footer.
>
> **[4:22](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=262)** And we've got a sidebar, as you'll remember, and a tools menu.
>
> **[4:27](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=267)** So if I click on the Home link, here's what our theme does with a node promoted to the front page, the read more is now a button, that's kind of cool.
>
> **[4:37](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=277)** There's a little image next to the add new comment but you get the idea.
>
> **[4:42](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=282)** All right, so we've absolutely got some work to do here and the first thing you need to do when you install a new theme, other than looking at it, is fix your block regions.
>
> **[4:51](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=291)** Head over to Structure and Block layout.
>
> **[4:56](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=296)** And demonstrate block regions.
>
> **[4:58](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=298)** So we have a header and a header right region, a navigation region, a highlighted, a help region.
>
> **[5:04](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=304)** Content is on the left and then primary and secondary sidebars and content bottom 1, 2 and 3 and footer 1, 2, and 3.
>
> **[5:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=315)** So this is a very different kind of theme.
>
> **[5:18](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=318)** All right, let's rearrange our blocks just quickly.
>
> **[5:20](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=320)** Go ahead and click exit block region demonstration.
>
> **[5:28](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=328)** Let's do this over here in the middle.
>
> **[5:30](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=330)** It's just easier.
>
> **[5:31](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=331)** Main navigation.
>
> **[5:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=332)** We're going to put in the navigation region.
>
> **[5:36](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=336)** You'll note that it jumped down.
>
> **[5:38](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=338)** Site branding, we'll actually put at the very top.
>
> **[5:41](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=341)** The footer menu, let's go ahead and put that in the footer region.
>
> **[5:47](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=347)** Our powered by Drupal, we'll put that in footer three.
>
> **[5:51](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=351)** The user account menu, we'll put that in header right.
>
> **[5:57](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=357)** So we've got site branding and breadcrumbs in the header, user account menu in header right, navigation in navigation.
>
> **[6:07](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=367)** We'll leave the content ones, fine, set, they're pretty good.
>
> **[6:11](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=371)** In the primary region, we've got Welcome To Drupalville, search and tools.
>
> **[6:15](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=375)** Let's move the tools menu down to footer two.
>
> **[6:19](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=379)** And let's put the search up into header right.
>
> **[6:24](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=384)** We may need to do a little bit of changes here.
>
> **[6:27](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=387)** But that should be good for now.
>
> **[6:28](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=388)** Go ahead and click Save blocks.
>
> **[6:32](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=392)** And go back to site.
>
> **[6:39](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=399)** All right, so the my account and logout box is still a little messed up.
>
> **[6:42](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=402)** Let's move that out of header right and let's put that into say one of the footers down at the very bottom.
>
> **[6:49](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=409)** So structure, block layout, and here we are, user account menu.
>
> **[6:54](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=414)** Let's put that in footer three.
>
> **[7:00](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=420)** You might want to pause the video and just double check all of your block regions.
>
> **[7:04](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=424)** It's not critical for what we're going to do next but it's nice to have a good looking site.
>
> **[7:10](https://www.linkedin.com/learning/drupal-9-essential-training-4-users-and-themes/installing-and-configuring-breeze?u=76281980&t=430)** I'm going to click Save, back to site and that's looking a little bit better already.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), require (2), else. (1), class. (1), static (1)
> **Prerequisites:** install (7), you'll need (2)
> **CLI Commands:** composer (5), node (1)
> **UI Navigation:** click on (4), scroll down (1)
> **URLs:** [drupal.org](https://drupal.org) (2)
> **Env Vars:** cdn (2)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)


## Path Context

### In [[Build Your Drupal Skills]]
← [[Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules]] | **4 of 6** | [[Drupal 9 Essential Training- 5 Layout]] →

## Appears In

- [[Build Your Drupal Skills]]

## Related Courses

_Courses sharing skills:_

- [[Drupal 9 Essential Training- 6 Finishing the Design]] — Drupal
- [[Drupal 9 Essential Training- 5 Layout]] — Drupal
- [[Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules]] — Drupal
- [[Drupal 9 Essential Training- 2 Content and Fields]] — Drupal
- [[Drupal 9 Essential Training 1 Introduction And Administration]] — Drupal

---

[↑ Back to top](#)