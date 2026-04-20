---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: configure-and-manage-sharepoint-online-22340807
url: "https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807"
duration_minutes: 145
duration: 2h 25m
level: Intermediate
updated: 5/30/2023
learners: 5460
skills:
  - SharePoint
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH_-qP32fYlXA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1685037500201?e=2147483647&amp;v=beta&amp;t=nDKcgdt131_RFioEOS0lt8Bd0slV0N6P-xATgzCZzUs"
linkedin_topic: Cloud Computing
learning_paths:
  - Optimizing Enterprise Security and Productivity Using Microsoft 365
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/sharepoint
status: not-started
created: 2026-04-20
---

![Configure and Manage SharePoint Online](https://media.licdn.com/dms/image/v2/D560DAQH_-qP32fYlXA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1685037500201?e=2147483647&amp;v=beta&amp;t=nDKcgdt131_RFioEOS0lt8Bd0slV0N6P-xATgzCZzUs)

# Configure and Manage SharePoint Online

> Microsoft SharePoint Online is a significant component of Microsoft 365 teamwork solutions. In this course, Ed Liberman shows how to configure and manage SharePoint Online, including how to plan and configure site collections and apps. Ed also demonstrates how to customize sites within SharePoint using apps, manage user profiles, create relevant search results for users, and monitor and maintain t

> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807) | 2h 25m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Ed Liberman]]

## Resources

- Exercise files available

## Skills Covered

- SharePoint

## Table of Contents

### Introduction

#### Welcome to SharePoint Online
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/welcome-to-sharepoint-online?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/welcome-to-sharepoint-online?u=76281980&t=0)** - Microsoft's SharePoint Online is a leading cloud collaboration service that empowers teamwork.
>
> **[0:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/welcome-to-sharepoint-online?u=76281980&t=5)** In this course, you're going to learn how to configure and manage SharePoint from site collections to user profiles.
>
> **[0:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/welcome-to-sharepoint-online?u=76281980&t=12)** I'll show you how to customize your sites using apps, and how to make sure your users get the results they're looking for when they're using search.
>
> **[0:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/welcome-to-sharepoint-online?u=76281980&t=20)** My name is Ed Lieberman, and I've been teaching people about Microsoft and Windows server related products since the 1990s, so please join me as we learn all about SharePoint Online.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - microsoft (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/what-you-should-know?u=76281980&t=0)** - [Instructor] For this course, it is not expected that you have any specific prerequisite knowledge.
>
> **[0:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/what-you-should-know?u=76281980&t=7)** Now, it certainly would be helpful if you have some prior experience with Microsoft 365 or possibly even working with any of the earlier versions of SharePoint, but it certainly is not required.
>
> **[0:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/what-you-should-know?u=76281980&t=21)** Now, if you want to follow along with all of the demonstrations in this course, I will tell you it's actually quite easy.
>
> **[0:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/what-you-should-know?u=76281980&t=28)** All you need is a computer with internet, that's it, because everything is done online through a browser.
>
> **[0:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/what-you-should-know?u=76281980&t=37)** Now, additionally, I do want you to pay attention to chapter one, where I take you through the creation of a trial Microsoft 365 account which will help you out and it won't cost you anything in the event that you don't already have access to Microsoft 365.
>
> **[0:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/what-you-should-know?u=76281980&t=54)** So, if you just simply do that then you should be able to follow along with pretty much everything that I'm going to show you in this course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)


### 1. Creating a Trial Account

#### Create a free M365 E5 trial account
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=0)** - [Instructor] One of the things that I really appreciate that Microsoft does to help you with learning about their products is they pretty much always give you the ability or, you know, some mechanism to allow you to try out their products for a certain amount of time for free, before you have to actually purchase the product.
>
> **[0:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=21)** And Microsoft 365 is no exception.
>
> **[0:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=24)** They give you a free 30 day trial.
>
> **[0:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=27)** So I want to show you how to go ahead and set up that 30 day free trial, case you want to go ahead and use it to learn here.
>
> **[0:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=35)** So here in my browser on the screen I just have a a search engine and I'm going to go ahead and I'm going to actually search exactly what it is that I'm looking for, which is Microsoft 365 E5, which is an enterprise version that has everything that we need, and then free trial.
>
> **[0:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=51)** And when I do this search, the first option is the one that we want.
>
> **[0:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=55)** It's one straight from [microsoft.com](https://microsoft.com).
>
> **[0:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=58)** Kind of ignore what it actually says here.
>
> **[1:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=60)** This isn't exactly, we're not upgrading, but when I click on it, you'll see it is going to take me to the actual product page, right?
>
> **[1:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=68)** It says Microsoft 365 at the top.
>
> **[1:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=70)** You'll also see Office 365 E5 a little bit further down.
>
> **[1:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=74)** The names get a little fuzzy because they jump around with what Office 365 versus Microsoft 365 is, but this is the product that we want.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=83)** And in the lower right-hand corner you'll see there's an option for free trial.
>
> **[1:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=87)** So I'm going to go ahead and click on that free trial and it says, "Let's go ahead and get started."
>
> **[1:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=91)** First thing you need to do is you need to enter an email address.
>
> **[1:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=94)** So I'm going to go ahead and put in landonhotel and some random numbers here that I have, @[outlook.com](https://outlook.com).
>
> **[1:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=104)** I just created this email address just for this course.
>
> **[1:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=108)** And you also may want to go ahead and do this, where you go ahead and create like a free email address somewhere.
>
> **[1:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=115)** You know, you can do it anywhere, Outlook or Gmail or whatever.
>
> **[1:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=117)** And the reason why is 'cause this email address needs to not be tied to any other Microsoft or Office 365 product.
>
> **[2:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=127)** And if you're just trying to learn, you may want just a dummy email address to go with it.
>
> **[2:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=131)** So I'm going to go ahead and click on Next.
>
> **[2:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=133)** It's going to go ahead and check it out and it's going to say, oh, look at that.
>
> **[2:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=136)** Looks like you need to create a new account.
>
> **[2:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=137)** You don't have one yet.
>
> **[2:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=139)** So I'm going to set up that account, put in a little bit information about myself, put in my first name, my last name.
>
> **[2:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=146)** I'm going to put in, an believe it or not, a fictional phone number, right?
>
> **[2:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=150)** It's kind of like in the movies where you use 555, that's just a fake phone number.
>
> **[2:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=155)** The reason why is 'cause I don't need anybody actually calling me to say, you know, "Hey, did you want to try Microsoft 365 for real?"
>
> **[2:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=162)** As far as the company name, LandonHotel is the name of my company.
>
> **[2:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=167)** Company size, I'll say 50 to 249.
>
> **[2:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=170)** That's more than we need to demonstrate anything that we're going to do here.
>
> **[2:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=174)** I am in the United States and I'm going to leave the checkbox cleared, which talks about sharing my information with partners so that they can solicit their products to me.
>
> **[3:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=183)** I don't need that in a fictional learning environment.
>
> **[3:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=186)** If it were production, I might go ahead and check the box, but here we want to leave that unchecked.
>
> **[3:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=191)** I'll click on Next.
>
> **[3:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=193)** Now it takes me to a tell us about yourself screen where basically we need to know you're real, okay?
>
> **[3:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=200)** So it's going to want to text or call a verification code to you.
>
> **[3:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=204)** And in order to do that you can no longer have the fictional phone number.
>
> **[3:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=208)** You have to put in a real phone number.
>
> **[3:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=210)** And don't worry, I've done this before.
>
> **[3:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=212)** You can put your real phone number in here and they still will not solicit to it.
>
> **[3:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=215)** This is just for verification purposes.
>
> **[3:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=217)** Now, I'm going to not do this in front of you for privacy reasons, so I don't give my phone number out to everybody.
>
> **[3:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=223)** So I'm going to enter it in.
>
> **[3:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=224)** If you're following along, you enter it in, do the verification code, and I'll be right back with you.
>
> **[3:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=228)** All right, so I went ahead and entered my phone number and the verification code and now it takes me to another screen, talks about how you'll sign in.
>
> **[3:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=234)** It's going to create the first user on this trial account.
>
> **[3:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=238)** So what it did is it just took my name, Ed Liberman, and put it together as a username and then it took my company name, LandonHotel, and put random numbers behind it, which is exactly what I want.
>
> **[4:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=247)** So you'll see here I have a domain of LandonHotel483.
>
> **[4:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=250)** All right, good.
>
> **[4:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=251)** And then I need to put in a password (keyboard clicks) to go ahead and sign in as this particular user.
>
> **[4:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=259)** So I have to enter it twice.
>
> **[4:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=260)** And if they match, then you don't get an error.
>
> **[4:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=262)** So I'm going to go ahead and click on Next.
>
> **[4:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=265)** Takes just a moment while it signs me in and sets everything up.
>
> **[4:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=268)** And now you can see here, it says, "Quantity and payment. First month is free.
>
> **[4:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=274)** "Office 365 E5 trial."
>
> **[4:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=277)** How many do we want?
>
> **[4:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=278)** And right now we're going to stick with just the one license.
>
> **[4:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=281)** You'll notice it does say maximum of 25 during the trial.
>
> **[4:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=284)** And I'll explain a little bit more about that as we get deeper into this.
>
> **[4:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=288)** And then you need to add a payment method.
>
> **[4:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=291)** So I'm going to click on that and I do want to point something out to you here.
>
> **[4:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=294)** And that is, you'll notice that it's asking you for a credit card and everything else, and it's like, "Well, wait a minute, "this is supposed to be a free trial.
>
> **[5:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=301)** "Why is it asking for a credit card?"
>
> **[5:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=302)** Well, Microsoft has moved to a position that you have to go ahead and put in the credit card in order to get the free trial going, but as long as you cancel within the first 30 days they will never charge that card, okay?
>
> **[5:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=317)** So you can go ahead and feel safe putting this information in.
>
> **[5:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=320)** I've done this and I've never had my card charged.
>
> **[5:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=323)** Now again, for privacy and security reasons, I'm going to not do this in front of you.
>
> **[5:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=328)** So I'm going to go ahead and I'm going to enter in all this information to fill out this form and click Save and then I'll be right back with you.
>
> **[5:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=334)** All right, so I have entered in all the credit card information and saved it.
>
> **[5:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=338)** I'm now on the next screen of which I scrolled down a little bit and I apologize that I have this extra little notepad window open.
>
> **[5:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=346)** It's basically covering up the privacy information.
>
> **[5:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=349)** But you can see here, up above it, it says, "Sold to LandonHotel."
>
> **[5:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=353)** And then there's a summary of what it is.
>
> **[5:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=355)** You know, it says by clicking start trial, you're, you know, you're agreeing to their agreement.
>
> **[6:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=360)** Does tell you in 30 days you will be charged the $38.
>
> **[6:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=363)** It'll show you exactly what date you're going to go ahead and get charged, and that you have the ability to cancel in the admin center to avoid those charges.
>
> **[6:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=371)** And I am going to show you in another video how to do that.
>
> **[6:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=375)** So I'm going to go ahead and click on Start trial.
>
> **[6:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=378)** And it takes just a moment here while they go ahead and set up the account.
>
> **[6:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=383)** And there you go, "Thanks for using the Office 365 E5 trial."
>
> **[6:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=387)** Blah, blah, blah, blah, blah, blah, blah.
>
> **[6:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=390)** Start using it.
>
> **[6:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=391)** And when I click on that, it will again go through and configure just a couple of things.
>
> **[6:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/create-a-free-m365-e5-trial-account?u=76281980&t=397)** But you'll notice it's taking me right into the admin portal, which is what we use to actually administrate and manage Microsoft 365.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (8), checkbox (1)
> **Code Keywords:** for, (1), let (1), this, (1), match, (1), this. (1)
> **Prerequisites:** set up (3), configure (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1), [outlook.com](https://outlook.com) (1)
> **Analogies:** kind of like (1), it's like (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Microsoft final setup procedures
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=0)** - [Instructor] Before we can begin to use Microsoft 365, there are a few final installation steps.
>
> **[0:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=7)** So, let's go through them here.
>
> **[0:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=9)** I just created the trial account and this is the screen it takes me to the first time you go to the admin portal, and it says Install Microsoft 365.
>
> **[0:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=17)** So it gives you the option where it says you can download and install Microsoft 365 for your device now.
>
> **[0:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=23)** So if you want to do so, it says select an option below.
>
> **[0:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=25)** So here I could actually click on this if I wanted to go ahead and download Word, Excel, PowerPoint, et cetera.
>
> **[0:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=31)** I don't need to do that on this machine, so I'm going to simply just click Continue.
>
> **[0:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=35)** Now it's asking as far as the domain.
>
> **[0:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=38)** If you have your own actual domain out on the internet that you want to tie in with this trial account, then you can add the domain here, and then there are some steps to go ahead and configure DNS to get it connected.
>
> **[0:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=53)** But because this is just a a learning environment, I'm going to go ahead and click on, No, I'm going to use the default domain that it created for me which was LandonHotel with some random numbers .[onmicrosoft.com](https://onmicrosoft.com), that's the one I'm going to use, and I'm going to click "Use this domain."
>
> **[1:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=69)** Now it gives me the option of adding users and assigning licenses.
>
> **[1:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=73)** And you'll notice down at the bottom it says, "Do this later," meaning right now, if I don't fill out anything here, "Do this later" is an option.
>
> **[1:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=82)** And that's just to point out that you can always add users later.
>
> **[1:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=85)** It's also showing you here that the total number of licenses you have is 25.
>
> **[1:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=90)** I had actually mentioned that before, in the previous video, where on a trial account that is the maximum amount of licenses that you can have.
>
> **[1:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=99)** But you'll notice it says that I only have 24 of those 25 remaining.
>
> **[1:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=102)** And the reason why is because the first user account which was the Ed Liberman account, was already created, you have to have the one, and so that's the one license that's already been used.
>
> **[1:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=114)** In the event that I want to go ahead and add additional users, I can do it here.
>
> **[2:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=120)** So I'm going to go ahead and type in, User One, for instance, and I'll put in "uone" for the actual username and it does @LandonHotel.[onmicrosoft.com](https://onmicrosoft.com).
>
> **[2:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=134)** I apologize for all the little popups that keep happening as I hover over different boxes, that's just Microsoft trying to be helpful.
>
> **[2:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=140)** But I can add that user, and as soon as I add that user, you'll notice that at the bottom where it said "Do this later," it now says "Add users and assign licenses," okay?
>
> **[2:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=149)** So you can do this or you cannot do it, you can do it later or you can do it here.
>
> **[2:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=154)** I'm going to go ahead and I'm going to add a few users, right?
>
> **[2:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=156)** I'm going to do User One, I'll do User Two, and I'll do User Three, uthree.
>
> **[2:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=163)** Okay, so now I've got three users that I'm going to add.
>
> **[2:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=167)** There's a checkbox here, it says "Send passwords of new users to my email address."
>
> **[2:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=171)** I don't want that in this particular environment, this is just a testing environment.
>
> **[2:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=176)** I'm just creating these users to show you it can be done, so I'm not going to bother myself with getting that email.
>
> **[3:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=181)** I'm going to click Add users and assign licenses.
>
> **[3:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=184)** Oh, and by the way, before I click on this, I do want to mention to you, there is nowhere for me to assign a password here.
>
> **[3:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=190)** It's only going to be random passwords that will be assigned here, whereas if you add users manually after the fact, you can actually assign the password to the users, all right?
>
> **[3:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=200)** So, I'm going to click Add users and assign licenses.
>
> **[3:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=204)** So now it's saying, "Hey, what about sharing the sign-in information for these users you just created?"
>
> **[3:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=210)** What are the options?
>
> **[3:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=211)** Well, I could go ahead and send an email or I could download and that would be with a CSV file, okay, with the username and temporary passwords.
>
> **[3:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=221)** I could also print out those username and pen temporary passwords.
>
> **[3:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=225)** I could also go ahead, and by the way, when I said Send email, that would be if I put in an alternate email address for these particular users, okay?
>
> **[3:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=235)** Again, pretending if this was real world, if you had actual users with actual email address, you could do that there.
>
> **[4:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=241)** But I'm again, not going to worry about this, I'm just going to simply "Share credentials later," okay?
>
> **[4:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=246)** 'Cause I'm not worried about the credentials for these particular users.
>
> **[4:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=250)** Now it's asking "How do you want to connect to your domain?"
>
> **[4:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=252)** And this is what I was talking about, whether you have a real production domain that you want to use or whether you're going to use the built-in [onmicrosoft.com](https://onmicrosoft.com) domain.
>
> **[4:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=261)** If you use the built-in one, there's nothing to do, just click Continue.
>
> **[4:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=265)** There would be different information here if you were using an actual domain to show you how to configure the DNS records to allow everything to point and work with Microsoft 365.
>
> **[4:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=276)** So I'll click on Continue, and look at that, setup is complete.
>
> **[4:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=281)** Great job, blah, blah, blah.
>
> **[4:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=283)** It is actually saying here that, da, da, da, da, it says, "However," I'm just trying to skip to the part that matters, "However, we weren't able to update the DKIM for this particular domain."
>
> **[4:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=293)** That tends to happen, of course, when you're using the built-in onmicrosoft one.
>
> **[4:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=297)** It does tell you what you can do, you can wait 48 hours for everything to fully update, tells you how to do it.
>
> **[5:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=302)** We're not going to worry about any of that.
>
> **[5:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=304)** Everything is set up that we need.
>
> **[5:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=306)** You can also rate the experience if you want.
>
> **[5:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=308)** You can also check if it's okay for Microsoft to contact you, but the bottom line is you want to basically skip all that and click at the very bottom where it says "Go to the admin center."
>
> **[5:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/microsoft-final-setup-procedures?u=76281980&t=317)** I'm going to click on that now, and just like that, I am now fully installed and ready to begin managing my Microsoft 365 trial account.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (2), checkbox (1)
> **Code Keywords:** continue (3), this, (2), let (1)
> **Prerequisites:** install (2), configure (2), setup (1), set up (1)
> **Env Vars:** dns (2), csv (1), dkim (1)
> **URLs:** [onmicrosoft.com](https://onmicrosoft.com) (3)
> **Analogies:** for instance (1), just like (1)
> **Cross-References:** previous video (1)
> **Definitions:** is an  (1)

#### Deleting M365 trial account
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=0)** - [Narrator] So, once you get to the point that you are done playing around in Microsoft 365, you have a couple of options.
>
> **[0:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=9)** If you decide you want to move forward and continue using Microsoft 365, you don't have to do anything.
>
> **[0:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=15)** It will begin charging you after 30 days.
>
> **[0:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=18)** But if you don't want to pay for this trial account, then you have to go ahead and make sure that you delete the account before the 30 days is up, okay?
>
> **[0:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=29)** You have to actually cancel the subscription.
>
> **[0:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=31)** So I'm going to show you how to do that here.
>
> **[0:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=33)** So here in the admin center, the item that you want to look for is Billing.
>
> **[0:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=39)** If for some reason you don't see an option for Billing, it is possible because some things are pinned but not everything.
>
> **[0:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=47)** If you ever are looking for something throughout the entire course that you don't see on your screen, down near the bottom of this list here, you have Show all.
>
> **[0:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=56)** And when you click on Show all, you'll get all the different options, all right?
>
> **[1:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=60)** So the one we want is Billing, and I'm going to click the little down arrow to expand it.
>
> **[1:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=64)** And then the item we want is Your products.
>
> **[1:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=68)** So here with my products, you can see that we have the Office 365 E5 Trial.
>
> **[1:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=74)** And you'll also notice for subscription status, it says Active.
>
> **[1:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=78)** It renews, and it gives the date that it will renew.
>
> **[1:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=81)** So, let's go ahead and let's see how we would go ahead and cancel that.
>
> **[1:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=87)** So if we wanted to full-out cancel it, let's say we've done everything we're going to do and we want to cancel it, there's these three dots where it says More actions to the right of the name of the product, and when I click on it, there's an option for Cancel subscription.
>
> **[1:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=101)** And if I click on that, it says when you cancel the subscription, it will be turned off immediately.
>
> **[1:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=107)** It says you can still access the information for 30 days, but after that, everything disappears.
>
> **[1:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=114)** There's not a whole lot you have to do here to try to cancel this subscription.
>
> **[1:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=116)** You just have to give it a reason.
>
> **[1:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=118)** There's a list of reasons as to why you might want to cancel, and then you click Cancel subscription.
>
> **[2:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=124)** Now, I'm not going to do that here because I'm not ready to cancel it just yet on my end, but I also want to show you that there's something else that we can do, all right?
>
> **[2:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=133)** There's a little section right above where it says tell why you're canceling.
>
> **[2:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=136)** It says if you want to cancel it before it renews again, you can also turn off recurring billing, right?
>
> **[2:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=142)** And there's a link.
>
> **[2:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=143)** But I'm going to show you manually how you can get to that, all right?
>
> **[2:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=146)** So, let's close that.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=148)** Again with the three dots.
>
> **[2:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=151)** Edit recurring billing.
>
> **[2:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=153)** Here it says this subscription will be bought on, and again, the date in my instance is April 19th, okay?
>
> **[2:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=161)** So we have recurring billing on, and the subscription will be bought on that date.
>
> **[2:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=165)** All I have to do is turn it off.
>
> **[2:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=169)** And by the way, you'll notice something disappeared when I did that.
>
> **[2:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=171)** When it was on, you get to choose a payment method.
>
> **[2:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=175)** You could add different credit cards if you want to change what credit card it's charging to or whatever.
>
> **[3:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=180)** But when you say no, I'm going to turn off recurring billing, well, you don't need to select a payment method, and that will give you extra confidence that you're not going to get charged, okay?
>
> **[3:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=188)** So if I turn that off, it will not bill you after 30 days.
>
> **[3:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=193)** It'll just stop working after 30 days, all right?
>
> **[3:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=195)** Just expires.
>
> **[3:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=197)** So I'm going to click on Save.
>
> **[3:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=199)** It says it updated successfully.
>
> **[3:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=201)** I did not do anything.
>
> **[3:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=202)** The screen is refreshing itself.
>
> **[3:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=205)** And I want you to notice that now it says Office 365 E5 Trial.
>
> **[3:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=209)** And now instead of saying, you know, active and will renew on a certain date, now it says expires on that date.
>
> **[3:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=218)** So that will help make sure that you don't accidentally forget to cancel the account before the 30 days are up.
>
> **[3:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=228)** Now, for me, personally, if I want to really make sure that I'm not being charged, well, then I'm going to go ahead and make a note in my calendar to come in here and manually cancel the subscription the way I showed you in the first place, all right?
>
> **[4:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/deleting-m365-trial-account?u=76281980&t=241)** So that's what you can do to help make sure that you don't inadvertently get charged on a trial account that you were just trying to learn from.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), continue (1), delete (1), from. (1)
> **CLI Commands:** make (5)
> **UI Navigation:** click on (4)
> **Speakers:** - [narrator] (1)


### 2. SharePoint Online Overview

#### SharePoint Online overview
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=0)** - [Instructor] SharePoint Online in Microsoft 365 is a cloud-based service that helps organizations share and manage content, knowledge and applications to empower teamwork, quickly find information and seamlessly collaborate across their organization.
>
> **[0:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=16)** Now, since this is a cloud-based subscription service I'd like to make sure that you're familiar with the subscription options that are available.
>
> **[0:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=26)** Now in courses in the past, what I've done is I've put like a grid on the screen and show you the difference between the different subscriptions, but I've learned that by the time you're watching it that grid may no longer be valid.
>
> **[0:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=38)** So what I'd rather do here is on the screen I just have a search engine and I'm going to put in a search for exactly what we're looking for which is Microsoft 365 plans, including SharePoint.
>
> **[0:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=51)** And when I do that search, you basically want to skip past any of these sponsored ads.
>
> **[0:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=57)** And you get down here to where you have the first Microsoft link that says compare SharePoint plans and pricing.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=63)** All right, so I'm going to click on that and this is up to date as of when I'm recording it.
>
> **[1:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=69)** And if you're following along and you go to this exact same page, you might see slightly different information because it may have changed by the time you're looking at it.
>
> **[1:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=78)** The main thing I want you to see here is that we have SharePoint Online Plan One and Plan Two.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=83)** What is the main difference between these?
>
> **[1:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=86)** Well, with Plan One says the feature that small and mid-size businesses need to succeed whereas Plan Two is a full featured SharePoint online with the capabilities for the enterprise.
>
> **[1:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=99)** Everything you get with Plan One, you also get with Plan Two, but more.
>
> **[1:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=104)** Okay, that's what it says here, includes everything plus more.
>
> **[1:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=107)** So basically, when you're trying to figure out which SharePoint Online plan you want, you got to base it on the size of your business.
>
> **[1:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=113)** Are we talking about a small or mid-size business or are we talking about an enterprise size business?
>
> **[1:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=118)** If you scroll down on the page, you'll see everything that it has to offer with both Plan One and Plan two no office applications are included.
>
> **[2:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=127)** We just get the basic services of SharePoint, OneDrive and List.
>
> **[2:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=131)** There's then a whole list, and I'm going to go into the leftmost column here of all the different things that SharePoint Online one gives you.
>
> **[2:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=141)** With with SharePoint Online 2, right, that's the middle column here.
>
> **[2:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=145)** You get everything that was in the leftmost column but then you'll see that there are some additional features here.
>
> **[2:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=153)** And if you read through what those are, you know they're enterprise level stuff like instead of limited cloud storage, you have unlimited cloud storage, you have search capabilities that are enhanced.
>
> **[2:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=165)** You also have the ability to be prepared for litigation or auditing.
>
> **[2:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=170)** Security.
>
> **[2:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=172)** And you could go ahead and this last thing talks about in place holds to programmatically preserve content from deletion or edit.
>
> **[3:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=180)** Okay, these are enterprise level services and we'll see some of those as we go through the course.
>
> **[3:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=184)** Now, you might be asking yourself, well what's this rightmost column?
>
> **[3:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=187)** The rightmost column is showing you one of the more common Office 365 plans which happens to include, and I'll highlight here.
>
> **[3:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=197)** It says, includes everything from SharePoint Online Plan Two, but now, instead of you'll notice with just SharePoint Online one or two you don't get any office applications, right?
>
> **[3:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=208)** They're not included.
>
> **[3:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=210)** Whereas with Office 365, well you get all the office applications and services.
>
> **[3:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=216)** And in fact, beyond just Office 365 E3, you'll notice over here on the left it says SharePoint Online is also available in these other Microsoft 365 plans.
>
> **[3:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=229)** We have Microsoft 365 Small Business Plans.
>
> **[3:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=232)** If I click on that link, this takes me to Microsoft 365 Business Basic, Standard and Premium.
>
> **[4:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=240)** And so this is all designed for small businesses.
>
> **[4:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=245)** It does include additional Office 365 applications, right?
>
> **[4:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=250)** Like Word and Excel, PowerPoint.
>
> **[4:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=251)** It doesn't matter which one of the three you do here.
>
> **[4:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=255)** Mainly what you want to see is that it includes SharePoint, right?
>
> **[4:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=258)** You see it there, you see it there, and you see it there.
>
> **[4:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=261)** Notice I ignored the right most option here where it says Microsoft 365 apps for business 'cause that does not include SharePoint.
>
> **[4:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=269)** Okay, that's strictly just the Office 365 apps for a small business.
>
> **[4:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=276)** Now, I'm going to go back just to show you, I could go on to the next link which talks about the enterprise plans and these are going to be your like E3 and E5.
>
> **[4:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=286)** And in fact, I'd like to point out that Microsoft 365 E5 is what we went ahead and installed to go through this course because it gives me the full everything capabilities.
>
> **[5:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=300)** Okay, I mean, again, if I just kind of scroll down feel free to browse through this.
>
> **[5:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=305)** I'm not going to spend time right here with you right now.
>
> **[5:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=308)** I mean, we could talk for the next like two hours going through every feature.
>
> **[5:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=313)** I'd like to also point out that all the way to the right here, there's Microsoft 365 F3, which is for Frontline Workforce.
>
> **[5:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=320)** That's another thing that includes SharePoint.
>
> **[5:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=324)** So as you can see there's a lot of SharePoint online options available and you want to be familiar with them all so that you can know which is the proper one for your organization.
>
> **[5:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-overview?u=76281980&t=337)** And I will add one final note, which is that it's very easy they even give you some links here over on the right where you can go ahead and contact an expert with Microsoft who can then help you if it starts to get a little fuzzy and you're not sure which plan is right for your organization

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), scroll down (2)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** include, (1), this. (1)
> **Speakers:** - [instructor] (1)

#### SharePoint Online administrators
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=0)** - [Narrator] In order to configure and manage SharePoint Online, you have to have users in your organization who have the appropriate privileges to be able to do so.
>
> **[0:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=12)** And so what I want to do here is I want to show you how to go ahead and configure the appropriate roles to be able to manage SharePoint Online.
>
> **[0:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=22)** So here, on the screen, we're looking at the Microsoft admin center.
>
> **[0:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=26)** Now, this was already open because it opens by default when you first install Microsoft 365.
>
> **[0:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=32)** If you don't have your browser open and you want to get back here, what you do is you just go to your browser, you put in admin.[microsoft.com](https://microsoft.com).
>
> **[0:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=40)** And when you do, it'll prompt you for your credentials.
>
> **[0:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=42)** You put in the credentials of the first user that was created, which is that administrator account that was created, and it'll get you into this particular screen.
>
> **[0:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=52)** So here, in the admin center, over on the left, I'm going to expand Users and click on Active users.
>
> **[0:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=59)** And you'll see that I have four active users in my account.
>
> **[1:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=64)** And the reason why is because the first one is the Ed Liberman account, which was created as that very first user.
>
> **[1:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=70)** You have to have one.
>
> **[1:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=72)** And by the way, that one user account is what's known as a global administrator, and global administrators have full and absolute privileges throughout all of Microsoft 365.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=83)** And that kind of makes sense, right?
>
> **[1:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=85)** That first account has to be an administrator account that can then delegate to everybody else.
>
> **[1:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=90)** So beyond that, I also have users one, two, and three, which were just regular user accounts that I added as part of that installation process.
>
> **[1:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=98)** So let's look at these.
>
> **[1:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=100)** First, let's click on Ed Liberman and see what we have here.
>
> **[1:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=104)** In this summary page over on the right, you'll notice down in the lower right it says Roles, and it points out that this account is a global administrator.
>
> **[1:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=116)** Now, because I'm a global administrator, that means I can actually manage SharePoint Online.
>
> **[2:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=122)** Why?
>
> **[2:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=122)** Because I can manage everything throughout all of Microsoft 365, and SharePoint Online is part of Microsoft 365.
>
> **[2:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=131)** If I were to click on any of these other users, these were just regular users.
>
> **[2:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=136)** Let's just pick on user one here.
>
> **[2:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=138)** You'll notice in that same section, in the lower right where it says Roles, it says No administrator access, right?
>
> **[2:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=145)** 'Cause that's just a regular user account.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=148)** Now, if I decided that user one was somebody that I wanted to give the privilege to manage SharePoint Online, then I can go ahead and I could add a role for this user.
>
> **[2:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=162)** So I'm going to click on Manage roles, and you'll see right now it says just a user, no admin center access.
>
> **[2:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=168)** Or I could click on Admin center access, and I have a whole list of different admin centers that I can go ahead and make this user a manager of.
>
> **[2:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=177)** There are two on this list that would allow this user to manage SharePoint Online.
>
> **[3:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=183)** One would be the global administrator, okay, which is the same as my account which means this user would not only be able to just manage SharePoint Online, but they would be able to manage everything throughout all of Microsoft 365.
>
> **[3:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=197)** Well, we don't want user one managing everything.
>
> **[3:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=201)** User one we want specifically delegated to SharePoint Online.
>
> **[3:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=205)** So that means we want to go down a little bit to where it says SharePoint Administrator and check that box.
>
> **[3:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=212)** Now, by the way, you'll notice there's the little, little info button next to each one of these.
>
> **[3:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=216)** So if I hover over Global Administrator, you'll see here it says has unlimited access to all management features and most data in all admin centers.
>
> **[3:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=224)** Whereas if I hover over SharePoint Administrator, it says full access to SharePoint Online, can also manage Microsoft 365 groups.
>
> **[3:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=233)** 'Cause that is something you need to be able to do as a part of managing SharePoint.
>
> **[3:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=238)** You can also manage service requests and monitor service health.
>
> **[4:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=242)** So it's a little bit more restrictive than the full global administrator, but it will give this user everything they need to be a SharePoint administrator.
>
> **[4:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=252)** So I'll click Save changes.
>
> **[4:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=254)** And now if I were to click on User One, in the Roles section, you'll see here that it says this user is a SharePoint administrator.
>
> **[4:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=263)** Now, I'd also like to show you that instead of issuing the SharePoint administrator role to an existing user, we could go ahead and add a new user, right?
>
> **[4:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=272)** Maybe we don't have a user account for our SharePoint administrator yet.
>
> **[4:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=276)** So I'm going to go ahead, and I'm going to say SPO Admin, right, SharePoint Online Admin, SPO Admin.
>
> **[4:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=285)** And we'll go through all the regular stuff.
>
> **[4:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=287)** Just go ahead and put a password in, no big deal.
>
> **[4:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=293)** Next, assign a license for that user.
>
> **[4:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=299)** And again, you have an option for Roles.
>
> **[5:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=302)** By default, it's No administration access.
>
> **[5:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=304)** If I expand that down, I get a screen that's very similar, Admin Center Access, SharePoint Administrator, Next, Finish adding, and the account has been created.
>
> **[5:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=315)** So I'll click Close.
>
> **[5:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=317)** If I click on SPO Admin on the list here, I can now see in the Roles section that this account is also a SharePoint administrator.
>
> **[5:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-administrators?u=76281980&t=327)** Okay, so again, the two roles that can manage SharePoint Online are global administrator and SharePoint administrator, and either of those roles can be added to a new user account or an existing user account.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), go to (1)
> **Code Keywords:** let (3), else. (1), default, (1)
> **Env Vars:** spo (3)
> **Definitions:** is a  (2), known as (1)
> **Prerequisites:** configure (2), install (1)
> **CLI Commands:** make (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Speakers:** - [narrator] (1)

#### SharePoint Online admin center
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=0)** - [Instructor] In order to manage SharePoint online, we have to know what tools are available to us in order to do so there and there are two main options.
>
> **[0:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=10)** We have a graphic option and we have a command shell option.
>
> **[0:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=14)** What I'd like to show you here is the graphical option.
>
> **[0:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=18)** So here in the Microsoft 365 Admin Center, you'll notice that on the left-hand margin down near the bottom of that list, there's an option for Show All.
>
> **[0:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=29)** When I click on that we get a lot more options and I'm going to go ahead and scroll down to the bottom where you'll see there's a section that says Admin Centers, and we have a list of admin center options and one of them that's on my list says SharePoint, and that is the option that we want because when I click on it, you'll see it opens up a new tab which is for the SharePoint Admin Center.
>
> **[0:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=54)** Now before we go into this SharePoint Admin Center, let me go ahead and I want to close that and bring us back to the Microsoft 365 Admin Center just to show you in case you don't see SharePoint on the list.
>
> **[1:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=65)** If you ever are looking for a tool and it's not on the list but you know that you've installed it, you want to click at the bottom where it says All Admin Centers and then you'll get the full list here.
>
> **[1:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=76)** And again, SharePoint is on that list and if I click on it, takes me to the exact same place, the SharePoint Admin Center.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=83)** What I'd like to do right now is just kind of quickly show you everything that you have in the SharePoint Admin Center, but we're not going to go into any detail because that will all be covered in other videos throughout the course.
>
> **[1:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=97)** First, at the top we have our Home option which is what we're looking at by default which just has what's called cards.
>
> **[1:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=106)** Okay, see here where there's an option for Add Cards?
>
> **[1:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=108)** You can customize these cards to things that you would do very often, all right?
>
> **[1:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=114)** Things like site search, health issues, message center, usage charts, and file activity charts, okay?
>
> **[2:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=122)** So those are what you can set up for yourself to kind of quickly get to common things that you might manage.
>
> **[2:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=130)** But over on the left we have our Sites where we can see our active and deleted sites.
>
> **[2:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=136)** I'll just click on it just so you can see.
>
> **[2:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=139)** If I click on Active Sites, I can see that I have the one site that's created by default, my one general communication site for the entire company.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=148)** Below Sites we have Policies and if I expand that, we see that we have some Sharing and Access Control policies that we can manage.
>
> **[2:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=156)** Settings, I'll actually click on that as well just to show you that there's a number of settings options that we can manage here.
>
> **[2:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=164)** Below that we have our Content Services which is where we can manage our term store or content type gallery.
>
> **[2:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=171)** There's a Migration option if you're looking to migrate from SharePoint to SharePoint Online.
>
> **[2:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=176)** Under Reports we have Content Services and Data Access Governance, and then this very bottom option here says More Features.
>
> **[3:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=185)** And I will tell you that previously, it didn't used to say More Features.
>
> **[3:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=189)** It used to say, I think it said either Classic Admin Center or Classic Admin Options, something along those lines.
>
> **[3:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=197)** I don't remember exactly what it used to say there, but it's the same thing.
>
> **[3:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=200)** If I click on More Features, you'll see here that it says access familiar features from the classic SharePoint Admin Center, okay?
>
> **[3:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=209)** So that's what it's doing.
>
> **[3:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=210)** It's taking you to the features that they have not yet built into this new, what they call modern SharePoint Admin Center.
>
> **[3:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=218)** So things like managing the term store, user profiles, Search, Apps, BCS, secure store, and so on and so forth.
>
> **[3:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=226)** And these would open up into more of a classic-looking interface.
>
> **[3:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=231)** So for instance, we'll say the user profiles, I'll click on Open.
>
> **[3:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=235)** It opens up a new tab and this takes me into the classic SharePoint Admin Center where we can see the User Profiles section, okay?
>
> **[4:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=246)** And you'll notice that there are some options that are also available from the old classic SharePoint Admin Center.
>
> **[4:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=252)** You can kind of tell that the look is just a little bit different.
>
> **[4:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-admin-center?u=76281980&t=256)** All right, so that is the basics of the SharePoint Admin Center and this is the primary place that I think you'll be doing most of your SharePoint online administration.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (8), scroll down (1)
> **Code Keywords:** let (1), default, (1), new, (1), interface (1)
> **Env Vars:** bcs (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### SharePoint Online management shell
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=0)** - The other way we can manage SharePoint Online is through the SharePoint Online Management Shell.
>
> **[0:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=6)** Okay, so this is a component of Windows PowerShell.
>
> **[0:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=10)** So to get to this, the first thing I'm going to do, I'm going to open up a new tab and just take us into our search engine where I'm going to actually just type in exactly what we're looking for.
>
> **[0:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=21)** SharePoint Online Management Shell.
>
> **[0:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=26)** And the first option, other than if there's any sponsored ads, the first option should be from Microsoft and it should just say SharePoint Online Management Shell.
>
> **[0:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=34)** Click on that and you'll notice that it says here you need to select the language.
>
> **[0:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=40)** So I'll leave it in English and then just simply download.
>
> **[0:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=45)** And I'm going to click on that, and SharePoint Online Management Shell has downloaded.
>
> **[0:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=52)** And then I'm going to go ahead and I'm going to just open it.
>
> **[0:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=56)** And this takes me into the setup for the SharePoint Online Management Shell.
>
> **[1:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=60)** This will be one of the easiest installation wizards you'll ever go through.
>
> **[1:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=65)** All you have to do is click on 'I accept the terms of the license agreement' and 'Install', at which point it will now go through and completely install the SharePoint Online Management Shell.
>
> **[1:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=78)** Oh, I suppose technically I do have one more little security warning here where I'll say do I want to allow this app to make changes?
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=83)** Yes, I do.
>
> **[1:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=85)** And it's done, finish.
>
> **[1:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=88)** So now I'm just going to go ahead and click on Start.
>
> **[1:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=91)** And I'm going to start typing in the word SharePoint and immediately you'll see what pops up is the SharePoint Online Management Shell.
>
> **[1:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=98)** Okay, that's the app that was just installed.
>
> **[1:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=100)** So I'm going to right click on it and tell it I want to run as an administrator.
>
> **[1:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=106)** It is giving me the security notice, 'cause I'm saying I want to run it as an admin.
>
> **[1:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=109)** It says, are you sure you want to allow this to make changes to your device?
>
> **[1:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=113)** I'll say, yes, I'm going to do that.
>
> **[1:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=115)** And now I'm in the Management Shell.
>
> **[1:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=117)** Now, the first thing I need to do is I need to go ahead and connect to the appropriate SharePoint service.
>
> **[2:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=123)** So I'm going to type in Connect-SPO.
>
> **[2:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=128)** And by the way, you don't even have to type it all the way.
>
> **[2:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=130)** If you just type enough and you hit tab, it'll auto-populate the correct function, right?
>
> **[2:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=137)** So we have Connect-SPOservice space -URL https://,
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=148)** put in the name of the organization.
>
> **[2:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=150)** So we have LandonHotel483, and then you want to put -admin.[sharepoint.com](https://sharepoint.com).
>
> **[2:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=160)** And if I typed in everything correctly, when I hit enter it should go ahead and connect.
>
> **[2:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=167)** Now it may ask for credentials, which it's doing right now.
>
> **[2:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=170)** I have to go ahead and put in my EdLieberman@LandonHotel483.[onmicrosoft.com](https://onmicrosoft.com).
>
> **[3:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=185)** Next, and then my password.
>
> **[3:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=191)** And it kind of looks like nothing has happened.
>
> **[3:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=194)** But that's a good thing.
>
> **[3:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=195)** You don't want to see any errors, that would be bad.
>
> **[3:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=198)** You'll either get a bunch of red text telling you that you typed it in wrong, or if you put in the wrong password or username and password then you'd get an error on the credentials.
>
> **[3:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-online-management-shell?u=76281980&t=207)** But otherwise, we are now connected to the LandonHotel483 SharePoint service and we're ready to go ahead and manage it through the SharePoint Online Management Shell.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), select the (1)
> **Code Keywords:** this, (1), for. (1), function (1)
> **Prerequisites:** install (2), setup (1)
> **CLI Commands:** make (2)
> **URLs:** [sharepoint.com](https://sharepoint.com) (1), [onmicrosoft.com](https://onmicrosoft.com) (1)
> **Env Vars:** spo (1), url (1)
> **Tools:** powershell (1)
> **Definitions:** is a  (1)


### 3. Configure Site Collections

#### Creating site collections
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=0)** - [Instructor] So let's take a look at how we can create our own site collections.
>
> **[0:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=4)** Here in the SharePoint Admin Center, over on the left, you want to make sure that sites is expanded so that you can see active sites.
>
> **[0:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=13)** If you can't see it, then just go ahead and click the little arrow to expand.
>
> **[0:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=16)** If it looks like this, expand it.
>
> **[0:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=18)** And then click on active sites.
>
> **[0:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=20)** Here in the active sites window, we can see all of our current active sites, which we have just the one, the one that was created by default when we installed Microsoft 365, which is a general communication site for the entire organization.
>
> **[0:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=35)** In fact, you'll notice that the primary admin is even listed as the system account.
>
> **[0:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=39)** Okay, so that was nothing I created, it was there by default.
>
> **[0:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=43)** If I want to create my own, I'm going to go up to the top here where it says create with the little plus button.
>
> **[0:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=49)** And when I click on that, you'll see that I have the ability to create either a team site or a communication site.
>
> **[0:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=55)** A team site, you'll see here it says create a private space to collaborate with your team, or a communication site is for sharing information that engages and informs viewers.
>
> **[1:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=65)** I'm going to quickly take you through the creation of one of each.
>
> **[1:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=69)** So I'll click on team site first.
>
> **[1:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=72)** First thing we have to do is give it a name so I'm going to go ahead and just call it TeamSite1.
>
> **[1:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=81)** And you'll see it automatically populates in a group email address of TeamSite1 and a site name of TeamSite1.
>
> **[1:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=89)** All right, these are grayed out.
>
> **[1:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=91)** If we wanted to change it, we'd have to click on the little pencil next to it to edit it.
>
> **[1:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=96)** We have to then assign an owner so we can start typing a name.
>
> **[1:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=99)** I'll start typing in my own name and it finds the Ed Liberman account so I'll click on that.
>
> **[1:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=107)** We have to give it a language, it's going to be English.
>
> **[1:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=109)** And go ahead and click on next.
>
> **[1:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=112)** Now, at this point, we could add additional owners or members to this particular site.
>
> **[2:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=121)** And you'll see here it says right here, site members, they can edit, view site content including files, pages, lists, and navigation.
>
> **[2:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=127)** If I want to add members, I could go ahead and I'll just type in like user.
>
> **[2:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=131)** If I said like user one, I could go ahead and I could add that member.
>
> **[2:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=135)** This is something that could also be done after the fact as well.
>
> **[2:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=139)** Okay, you could do it either way.
>
> **[2:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=140)** So I'll go ahead and click on finish.
>
> **[2:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=142)** And you'll see here that we've now created a site called TeamSite1.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=148)** So let's go through this again, quickly.
>
> **[2:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=152)** We're going to create, but this time we're going to do a communication site, and we're going to call this CommSite1, where again, it goes ahead and it populates in the address.
>
> **[2:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=165)** I have to put an owner.
>
> **[2:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=167)** As soon as I start typing my name, I can find it.
>
> **[2:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=170)** It's going to be English.
>
> **[2:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=171)** And click on finish.
>
> **[2:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=174)** And you'll notice really that the one main difference between creating a site and a communication site has to do with the addition of members or not.
>
> **[3:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=183)** Okay, so you can see we have TeamSite1 and CommSite1, and if I scroll over a little bit, you can see where one is a team site and the other is a communication site.
>
> **[3:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=195)** Now, I will tell you that there is one more option when it comes to creating a site, and this has to do with some of the templates that were available with the classic interface.
>
> **[3:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=204)** All right, so I'm going to go ahead and I'm going to click create, one more time.
>
> **[3:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=208)** And besides the team site and the communication site, if I scroll down, you'll see there's an other options here.
>
> **[3:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=215)** All right, so I'm going to go ahead and click on that.
>
> **[3:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=217)** And now, you see here I can choose a template, which is either a team site or a document center, Wiki, portal, et cetera, et cetera.
>
> **[3:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=225)** But at the bottom, that's what I'm looking for here, which is more templates.
>
> **[3:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=229)** Right now, there's a little bit of a quirk in Microsoft 365.
>
> **[3:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=233)** I don't know if you'll experience this or not, but I'm going to go ahead and click on it.
>
> **[3:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=236)** And you'll notice that when I do I get this, "Reload site?"
>
> **[4:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=240)** "Changes you made might not be saved."
>
> **[4:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=242)** It doesn't really matter, you know, what you click as far as reload or cancel.
>
> **[4:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=246)** I'm going to go ahead and just hit reload.
>
> **[4:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=248)** And the reason it doesn't matter is I'm going to go ahead and I'm going to close out of this.
>
> **[4:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=251)** What you may or may not have noticed is that a new tab opened called create site collection.
>
> **[4:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=258)** And when I click on that tab, that is the Classic SharePoint Admin Center.
>
> **[4:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=263)** And this is how we used to go ahead and create site collections when SharePoint online first came out, where you could go ahead, you could give it a title, okay, just like we do, and it has the website address and so on and so forth.
>
> **[4:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=275)** But the main thing I want you to see is the templates.
>
> **[4:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=278)** We can select a whole series of templates where we have collaboration templates here, a team site, developer site, project site, community site, click on enterprise, you see there's a whole nother set of templates there, publishing or even custom.
>
> **[4:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=296)** All right, so I'm not going to go into any great detail there.
>
> **[4:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=297)** I'm just going to close out of this.
>
> **[4:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=298)** I just wanted to show you that that was an option if you want to go ahead and get to the old classic SharePoint online management center where we have a whole series of additional templates that really aren't necessarily used as much anymore, but that's where you can find them.
>
> **[5:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/creating-site-collections?u=76281980&t=316)** So that's how you go ahead and create your own site collections.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (12), scroll down (1)
> **Code Keywords:** let (2), this, (2), this. (2), default. (1), private (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Delete site collections
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=0)** - [Instructor] So, now, let's take a look at how we can go ahead and delete a site collection that maybe we don't need anymore.
>
> **[0:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=8)** And I will tell you that there is a slight difference between deleting a communication site versus a team site.
>
> **[0:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=15)** Let's first look at deleting a communication site.
>
> **[0:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=19)** Right, we have CommSite1 and TeamSite1, both of which we had created here.
>
> **[0:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=25)** And if I click on one, so I'm going to click on the little dot next to my CommSite1.
>
> **[0:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=31)** And you want to be careful, by the way, to click over here on either the name or the dot, you don't want to click on the URL, that would actually do something completely different.
>
> **[0:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=38)** It would actually open up the site.
>
> **[0:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=40)** But when we click on the checkbox here in the dot, up at the top where the three dots are, you click on that.
>
> **[0:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=49)** And depending on your resolution, by the way, there may not be three dots.
>
> **[0:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=52)** Delete might just simply be an option available for you.
>
> **[0:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=56)** But we want to go ahead and click on Delete.
>
> **[0:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=59)** Now, when you do this, I want you to notice the message that comes up.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=63)** "If you delete the site, users will no longer be able to access it.
>
> **[1:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=67)** You have 93 days," so approximately three months, "to restore this site before it becomes permanently deleted."
>
> **[1:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=75)** All right, so everything in SharePoint, when it comes to site management, it works with a form of almost like a recycle bin.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=83)** Okay, so you have the ability to undo these actions.
>
> **[1:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=85)** Okay, so we have three months to undo this if we made a mistake.
>
> **[1:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=89)** Now, I'm going to go ahead and I'm going to click on Delete.
>
> **[1:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=91)** And the site has been deleted.
>
> **[1:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=93)** Now, the reason I said that this is a little bit different with a team site is, well, I'll show you.
>
> **[1:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=99)** I'm going to click on the little button next to the team site.
>
> **[1:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=102)** And then I'm going to click More and select Delete.
>
> **[1:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=105)** Everything so far is the same, but now this message is different.
>
> **[1:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=109)** The difference is, with a team site, you'll see that that site belongs to a Microsoft 365 group.
>
> **[1:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=116)** So deleting the site will delete the group and all of its resources, including the Outlook mailbox and calendar, any Teams channels that go with this.
>
> **[2:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=125)** And you don't have 93 days, you only have 30 days to restore the group.
>
> **[2:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=130)** So in order to do this, because you're going to delete so much stuff, you can't just click Delete, you have to actually check an extra box to say, "Yes, I know exactly what I'm doing."
>
> **[2:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=140)** And then you can click Delete.
>
> **[2:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=143)** But before I do, I want to go ahead and hit Cancel.
>
> **[2:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=146)** And I want to take us back over to the Microsoft 365 admin center.
>
> **[2:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=153)** And I want to expand Teams & groups and click on Active teams & groups.
>
> **[2:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=158)** And the reason why is because I want to show you that there's a group called TeamSite1.
>
> **[2:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=164)** That's the Microsoft 365 group that it was saying that it was associated with.
>
> **[2:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=169)** So if I go back to the SharePoint admin center.
>
> **[2:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=172)** And now, let's go ahead and actually go through with the deletion.
>
> **[2:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=176)** We're going to say, "Yes, we want to delete this group and all of its resources."
>
> **[3:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=181)** And click Delete.
>
> **[3:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=183)** It now disappears from the Active sites.
>
> **[3:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=187)** But if I go over to Microsoft 365, let's go ahead and let's click away, and then go back to our Active teams & groups.
>
> **[3:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=196)** So basically to refresh it, I could have just clicked the Refresh button, but it's the same thing.
>
> **[3:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=200)** I want you to notice that TeamSite1 is also gone from here.
>
> **[3:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=204)** So back in the SharePoint admin center, I'm going to go ahead and click on the Deleted sites over on the left.
>
> **[3:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=211)** And you'll notice, and I want to apologize here, there are actually three.
>
> **[3:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=216)** And the reason why is because I was fooling around with something a little earlier and, so I had this extra DemoTeamSite, which was something that I was playing around with and deleted it a while ago.
>
> **[3:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=226)** And it's still sitting here because it hasn't been 93 days before this site is deleted, you know, is going to go ahead and fully be deleted.
>
> **[3:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=235)** So this is where I can go and see any sites that may have been deleted if I don't see them in Active sites and I am looking for them.
>
> **[4:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delete-site-collections?u=76281980&t=243)** So that's how you can go ahead and delete your site collections in the SharePoint admin center.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (13), let (5), this, (2), this. (1)
> **UI Navigation:** click on (10), checkbox (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **Env Vars:** url (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Restore site collections
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=0)** - [Instructor] If you ever find that a site collection has been deleted, but it probably shouldn't have, or maybe something has changed and you have a reason that you'd like to get that site collection back, there is a way to go ahead and restore that site collection as long as you're within the 30 or 93-day window before it's permanently deleted.
>
> **[0:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=22)** So I'm going to show you here how to do this, and I will tell you it is very straightforward, but I'm going to show you anyway.
>
> **[0:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=28)** What we are looking at is we're looking at the Deleted sites container, or what is also sometimes known as the site collection recycle bin.
>
> **[0:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=37)** And this is where I can see all the sites that have been deleted, right?
>
> **[0:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=42)** I deleted TeamSite1 and CommSite1.
>
> **[0:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=45)** And again, I'm going to ask you just like I did in the last video to ignore Demo'sTeamSite, that's just something I was playing with completely separate from this course.
>
> **[0:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=53)** So if I want to go ahead and restore a site, here I'm going to take CommSite1, you just click the button next to it and you'll see here up at the top, we have two options.
>
> **[1:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=65)** We can either restore it or we could permanently delete it.
>
> **[1:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=69)** Now, if you permanently delete it, you're basically speeding up that 93 days and saying, "Nope, it's done."
>
> **[1:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=74)** It's like emptying the recycle bin.
>
> **[1:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=75)** So if I want to restore it, I just click the Restore button, And you'll notice that's it.
>
> **[1:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=81)** There's no dialogue box, there's no are you sure you want to restore it?
>
> **[1:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=85)** It just restores it and you're done.
>
> **[1:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=87)** And if I go back to Active sites, you'll notice CommSite1 has been restored.
>
> **[1:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=94)** Just that simple.
>
> **[1:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=96)** Now, let's go back to our Deleted sites and let's take a look at what happens with TeamSite1.
>
> **[1:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=101)** I'm going to go ahead and click on that.
>
> **[1:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=103)** And you'll notice that I do not have the option to permanently delete that.
>
> **[1:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=108)** And the reason is because it's also tied in to a Microsoft 365 group, okay?
>
> **[1:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=115)** So that's why you can't do it.
>
> **[1:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=117)** But if I click on Restore, this time I do get a dialogue box.
>
> **[2:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=120)** And again, it has to do with being tied into the Microsoft 365 group.
>
> **[2:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=125)** It says that since it's connected to that group, restoring the site will also restore the TeamSite 1 group and all of its resources, including conversations, calendar and notebook.
>
> **[2:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=135)** So if I want to do this, I just go ahead and simply click Restore.
>
> **[2:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=139)** And again, it disappears from the Deleted sites container.
>
> **[2:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=144)** And if I click on Active sites, I can see that TeamSite has been restored.
>
> **[2:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=149)** And along those same lines, if I were to go over to Microsoft 365, and I'm going to do a refresh here on my Active teams and groups, just as promised, TeamSite1 has also been restored as a Microsoft 365 group.
>
> **[2:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=168)** All right, so again, very straightforward, not complicated at all.
>
> **[2:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/restore-site-collections?u=76281980&t=172)** The bottom line is, is if a site collection gets deleted, as long as you are within the 30 or 93-day window, depending on whether it's a team site or a communication site, all you have to do is just click on it, you know, go to your Deleted sites, click on it and say Restore and everything gets put back the way it was.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), this, (2), let (2)
> **UI Navigation:** click on (5), go to (1)
> **Cross-References:** go back to (2), in the last (1)
> **Analogies:** just like (1), it's like (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** steamsite (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Manage Site Collections

#### Manage site collection admins
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=0)** - [Instructor] After creating and configuring your sites, the next thing you may want to do is determine who in your organization is going to be the administrator of those sites, okay?
>
> **[0:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=10)** Who's going to perform the various administrative tasks on those sites?
>
> **[0:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=13)** So let's take a look here how we can assign those users admin privileges on the individual sites.
>
> **[0:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=20)** So here we're still looking at the SharePoint admin center, and you'll notice I'm on my active sites and I've got the three of them here.
>
> **[0:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=28)** And if I look at the very top one here, which was the CommSite that I created, previous video, if I go over to the right, under the Primary admin column you'll see that I'm listed as the primary admin.
>
> **[0:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=41)** Well, we have the ability to go in and add additional administrators and then we can also change who the primary admin is.
>
> **[0:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=50)** So to do that, I'm going to actually click on CommSite1, not the URL, but the name itself.
>
> **[0:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=57)** And then over on the right, what you want to do is click on the Permissions tab.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=63)** Here, you can see where it says Site admins, and it only has the one, it's just me but there's a Manage link.
>
> **[1:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=70)** So I'll click on the Manage link and we have the ability to go ahead and add an additional administrator.
>
> **[1:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=77)** So I'm going to go ahead and type in SPO for our SPO admin.
>
> **[1:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=82)** And you'll now notice that there are two admins for this particular site.
>
> **[1:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=87)** There's me and there's SPO Admin.
>
> **[1:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=88)** And you'll notice that the role is I'm primary and the other one is just an admin.
>
> **[1:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=94)** If I want to change that, if I want SPO admin to be the primary, well then you'll notice there's a little drop down here and I can choose to make SPO Admin the primary admin.
>
> **[1:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=105)** And you'll notice that when that happens, my account becomes a regular admin, right?
>
> **[1:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=110)** And I can, of course, change it back if I want, which I do want to do, 'cause I want to make sure I'm the primary in everything since I'm logged in.
>
> **[1:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=116)** And then we just simply hit Save.
>
> **[1:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=119)** And again, you can now see that we have two site admins.
>
> **[2:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=123)** Now that's what it looks like when you're doing it on a communication site.
>
> **[2:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=127)** Let's take a look on the team site.
>
> **[2:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=129)** So I'm going to click on TeamSite1 and I'm going to again go to the Permissions tab.
>
> **[2:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=134)** And this time you'll see it's just a little bit different, because you have Microsoft 365 group owners, and then down below you have additional admins.
>
> **[2:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=146)** So let's take a look at this.
>
> **[2:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=147)** If I click on Manage under the Microsoft 365 group owners, up at the top, it actually explains, group owners have all the permissions of a site admin but can also manage group settings and membership.
>
> **[2:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=162)** Okay, so the group owner has privileges that go just a little bit beyond just a site administrator.
>
> **[2:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=169)** So if I want to add an additional owner, I can do that here where I can go ahead and type in SPO.
>
> **[2:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=176)** select SPO Admin, and now SPO Admin is an additional owner.
>
> **[3:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=180)** We have both of us.
>
> **[3:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=181)** Now you'll notice there's no primary in this case, right?
>
> **[3:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=184)** That's only with the communication site.
>
> **[3:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=185)** With the team site, we're just both equal owners.
>
> **[3:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=189)** Now, I'm going to actually hit the X to eliminate SPO Admin, because I want to now show you the Additional admins section.
>
> **[3:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=200)** If I click Manage there, you'll see here, site admins have full control of the site and access to everything in it.
>
> **[3:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=207)** They also have additional permissions such as managing search and the recycle bin and enabling and disabling of features.
>
> **[3:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=214)** So the group owners have all of those privileges that I just read to you plus the additional privileges, whereas the site admin only has these privileges.
>
> **[3:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=226)** The process is pretty much the same here.
>
> **[3:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=228)** If I put in SPO Admin, now you can see SPO Admin has been added as a site owner.
>
> **[3:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=234)** I'm going to hit Save.
>
> **[3:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=236)** And now you'll see that I am the group owner and SPO Admin is an additional admin or just a site admin.
>
> **[4:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=246)** That would be the closest we would have to the primary admin role versus the regular admin role on a communication site.
>
> **[4:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-admins?u=76281980&t=254)** So that is how we can go ahead and manage our site admins in SharePoint online.

> [!info]- Semantic Content
>
> **Env Vars:** spo (12), url (1)
> **UI Navigation:** click on (5), go to (1)
> **Code Keywords:** let (3), this. (1), case, (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (2)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Manage SharePoint hub sites
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=0)** - [Instructor] Another type of site that we can work with when we're managing our sites is something called a hub site.
>
> **[0:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=8)** Now this is a site that is used to help navigation between other sites in your organization.
>
> **[0:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=13)** So let me show you how to go ahead and create a hub site.
>
> **[0:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=16)** First thing I want to do is go ahead and create another site that we'll use as our hub site.
>
> **[0:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=21)** So I'm going to go ahead and click on Create.
>
> **[0:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=24)** We'll make it a communication site.
>
> **[0:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=26)** I'm going to actually call it Hub Site One just to stick with our naming convention.
>
> **[0:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=31)** I'll assign myself as the owner and finish.
>
> **[0:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=36)** Now just because I created a site and named it Hub Site doesn't make it a hub site.
>
> **[0:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=42)** To make it a hub site, I have to click the button next to the name Hub site one, and then up at the top you'll notice there's an option that says Hub.
>
> **[0:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=49)** And in the dropdown there's an option to register this as a hub site.
>
> **[0:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=54)** So I'm going to click on that.
>
> **[0:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=56)** You give it a name.
>
> **[0:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=57)** In this case we're calling it Hub Site one, and then you have to decide who can associate sites with this hub.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=63)** So again, I will put in myself, and I will show you that if I wanted other administrators to be able to do this, you can add them as well, right?
>
> **[1:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=72)** So both me and SPO admin could go ahead and associate sites with this hub.
>
> **[1:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=77)** I'll click on save, and it's pretty straightforward but just like that.
>
> **[1:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=81)** Now we've created a hub site, and in fact while we're highlighting on Hub Site one, if I again go up to Hub and do the dropdown, you'll notice now it's toggled to unregister it as a hub site.
>
> **[1:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=95)** I'd also like to show you that once you have a site that has been established as a hub site, delete has been grayed out.
>
> **[1:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=102)** You can't delete the site, and it tells you if you want to delete it, you have to unregister it as a hub site cause you can't delete a hub site.
>
> **[1:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=109)** There's too much risk of affecting all the other sites.
>
> **[1:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=112)** All right, so now what are we going to do with this hub site?
>
> **[1:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=114)** Well, I'm going to click in the one place I kept telling you in other videos not to click, which is under the URL column.
>
> **[2:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=121)** I'm going to click on the URL for hub site one, and that's going to open a new tab, and it's going to actually open up this particular hub site.
>
> **[2:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=130)** So we can see this is a site for Hub site one, and in the upper left you'll see that I can add a link.
>
> **[2:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=137)** So I'm going to click on that, and in the link here I'm going to go ahead and I'm going to put in LandonHotel483.[sharepoint.com/sites](https://sharepoint.com/sites)/.
>
> **[2:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=152)** Now everything up to this point, you'll notice it's the same as what we have up in the URL for our, for any of our sites, but now we have to give a name for this other site.
>
> **[2:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=162)** So we're going to call this a sub site.
>
> **[2:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=166)** We'll call it sub site one, just to stick with the naming convention.
>
> **[2:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=169)** And for the display name, I'm going to actually call it sub, and I'll even put a space site space one.
>
> **[2:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=178)** I can choose if I want this site to open in a new tab or if it's just a link that'll open the new site.
>
> **[3:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=183)** Either way is fine, but I'm going to leave it not opening a new tab.
>
> **[3:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=186)** Click okay.
>
> **[3:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=188)** And then I'm going to click on save.
>
> **[3:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=191)** And you'll notice that I now have a link up at the top that says sub site one but sub site one doesn't actually exist.
>
> **[3:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=199)** So let's go back to the SharePoint admin center, and let's create it.
>
> **[3:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=207)** I'm going to click on create, and we're going to do sub site one.
>
> **[3:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=215)** I will make myself the owner and finish.
>
> **[3:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=220)** So now we have Sub site one, and I want to show you that if I click the button next to Sub site one, under Hub we have the ability to say that we want to associate it with a hub.
>
> **[3:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=232)** So if I click on that, you'll see that I can select a hub site to associate it with.
>
> **[3:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=238)** But there is also another way to do this.
>
> **[4:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=241)** If I click on the name sub site one, you'll see here under the general tab there's Hub Association and if I click on edit, it takes me back to that same place.
>
> **[4:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=252)** Okay, you can do it either way, there's no right or wrong, just want to show you both ways.
>
> **[4:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=256)** So I'm going to go ahead and I'm going to associate it with Hub Site one and click on save.
>
> **[4:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=262)** And now I'm going to go back to my hub site to show you that here I have Hub Site one, I can click on Sub site one and it takes me into Sub site one page that was created.
>
> **[4:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=276)** You'll also notice that there is still the navigation up at the top to get myself back to the hub site if I wanted to jump back to the Hub site.
>
> **[4:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharepoint-hub-sites?u=76281980&t=284)** Okay, so really a hub site is just a kind of a central repository that you can have your users go to to then access all the other sites within the organization.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (12), dropdown (2), open the (1), go to (1)
> **Code Keywords:** delete (4), let (3), this, (1), this. (1)
> **CLI Commands:** make (4)
> **Env Vars:** url (3), spo (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **URLs:** [sharepoint.com](https://sharepoint.com) (1)
> **Analogies:** just like (1)

#### Manage site collection storage limits
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=0)** - [Instructor] Another thing to consider when it comes to managing your sites and site collections has to do with the storage limits for the different sites.
>
> **[0:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=9)** Now, I'm going to tell you before we get into this that if you were to just kind of click around looking for the storage limit management, you might not find it.
>
> **[0:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=17)** And the reason why is that by default, it's managed automatically.
>
> **[0:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=21)** Okay, so let me show you how this is done.
>
> **[0:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=24)** First of all, let's go to a site, right?
>
> **[0:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=25)** I'm going to click on CommSite 1 here and I just want to show you what I was talking about.
>
> **[0:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=30)** If I look here there's nothing about storage limits listed here.
>
> **[0:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=34)** I can go to activity, there's nothing there, permissions nothing there, and policies, nothing there, right?
>
> **[0:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=41)** Nothing about storage limits at all.
>
> **[0:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=43)** In order to manage the storage limits yourself you have to go over to the left side on the SharePoint admin center and select Settings.
>
> **[0:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=53)** Here in the Settings, you'll notice that right in the middle we have SharePoint site storage limits.
>
> **[1:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=60)** If I click on that, you'll see that it is set to automatic, let sites use as much of your organization's storage as they need.
>
> **[1:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=68)** Okay, so it's all managed automatically, but if you want to go ahead and set specific limits on individual sites then you click from automatic over to manual and then save.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=83)** And now, if I go back to my active sites and I click on CommSite 1 again, you'll notice right on the general tab, I don't have to go anywhere, we now have an option for storage limit.
>
> **[1:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=95)** And the storage limit by default is listed as one terabyte.
>
> **[1:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=100)** If I want to change this storage limit go ahead and click on edit, and let's say instead of one terabyte, I'll make it 2048 gigabytes, or what is two terabytes.
>
> **[1:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=113)** And the only other setting really that we have to set here is a notification setting.
>
> **[1:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=119)** By default, we are allowing notifications which means it'll send an email to the owne, if they get to a certain percentage of their storage limit that's been used, it defaults to 97%.
>
> **[2:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=129)** But you could change that to anything you want.
>
> **[2:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=132)** Maybe we want to go ahead and notify them at 90%, right?
>
> **[2:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=135)** We want to let them know much further in advance of them hitting their limit.
>
> **[2:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=140)** And then click save.
>
> **[2:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=141)** And you can see that it now has adjusted the storage limit to two terabytes.
>
> **[2:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=146)** Now, this is only for the one site.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=148)** If I close this, and then let's say I go to my team site here, click on TeamSite.
>
> **[2:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=158)** Notice the storage limit is one terabyte cuz that's the default for all of them until I manually change it.
>
> **[2:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=163)** So I'll change this one.
>
> **[2:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=165)** Now let's make it 4,096 which is four terabytes and click save.
>
> **[2:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=170)** And I just want to show you that it now says four terabytes but if I go back to CommSite, it's still two terabytes.
>
> **[2:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=179)** Whereas if I go to some other site altogether like we'll do that SubSite, that one's still at one terabyte.
>
> **[3:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=184)** So as you can see, we now have individual control over the storage limits for individual sites.
>
> **[3:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=191)** And there's not a whole lot to actually making the change.
>
> **[3:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-site-collection-storage-limits?u=76281980&t=196)** The main thing to remember is that you have to go to the general setting first to kind of flip on the switch to having manual control, cuz by default it's always set to automatic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), default, (2), this, (1), switch (1)
> **UI Navigation:** go to (5), click on (5), switch to (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Manage User Profiles

#### Add a property for user profiles
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=0)** - [Instructor] In SharePoint Online, a user profile is a collection of user properties that describe an actual individual user.
>
> **[0:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=9)** And you know, these properties include policies and settings associated with the user.
>
> **[0:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=14)** And by default, SharePoint Online user profiles are already populated by the Office 365 directory service.
>
> **[0:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=21)** So you have some of your basic profile properties, things like first name, last name, stuff like that.
>
> **[0:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=26)** But if you want to go ahead and add your own additional properties, well, we can do that.
>
> **[0:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=31)** And I want to show you how to do that here.
>
> **[0:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=33)** So here in the SharePoint admin center, you won't find anything by default on user profiles.
>
> **[0:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=39)** You have to go to the More features section.
>
> **[0:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=43)** So I'm going to click on that.
>
> **[0:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=44)** And in here you'll see there's an option for user profiles.
>
> **[0:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=48)** I'll click on Open and this now opens a new tab and takes me into what's actually, you'll notice in the top left, the classic SharePoint admin center.
>
> **[0:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=57)** As of right now when I'm recording this, this is still where you manage your user profiles.
>
> **[1:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=62)** This may change by the time you're watching it 'cause we never know when these things are going to change, but right now it's still in the classic SharePoint admin center.
>
> **[1:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=72)** In this window, there's a People section.
>
> **[1:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=75)** And under the People section, you'll notice there's a link here that says Manage User Properties.
>
> **[1:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=80)** Now, if you are following along, I do want to point out, this kind of seems a little silly, but just in case, I don't want you to make the mistake, Manage User Properties and right next to it is Manage User Profiles, they look very similar.
>
> **[1:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=94)** So you want to make sure you look carefully and click on the correct one.
>
> **[1:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=96)** Since we want to go ahead and create a property, we want to click on Manage User Properties.
>
> **[1:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=103)** So now this takes us to a window where we have all of the different properties that are associated with our user profiles.
>
> **[1:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=112)** They're broken down into sections.
>
> **[1:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=113)** We have our basic information.
>
> **[1:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=116)** You see a lot of information there.
>
> **[1:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=118)** We have contact information, details, et cetera, et cetera.
>
> **[2:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=121)** All the way down to the very end is some custom properties.
>
> **[2:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=126)** If I scroll back up to the top, you'll see that if I want to create my own property, all I have to do is go ahead and click on New Property.
>
> **[2:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=136)** When I do that, I get a new screen where I have to give it a name.
>
> **[2:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=139)** So I'm going to name this DemoProp1.
>
> **[2:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=144)** Now, that's just the name of what the actual property is called, but the display name, let's make it a little friendlier.
>
> **[2:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=150)** I'm going to say it's Demo Property 1 with some spaces and everything.
>
> **[2:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=156)** I have to determine what type of property this is going to be.
>
> **[2:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=158)** It defaults to a string, which is just a single value.
>
> **[2:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=162)** But if I click the little dropdown, you'll see that there's a number of different types that we can make this particular property.
>
> **[2:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=170)** I'll leave it alone.
>
> **[2:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=171)** I mean, I'm just demonstrating here.
>
> **[2:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=173)** We're not creating a real property.
>
> **[2:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=174)** There is a checkbox here for configuring a term set to be used for this property.
>
> **[2:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=179)** We'll talk about term sets in another video.
>
> **[3:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=181)** I actually want to scroll down a little bit.
>
> **[3:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=183)** There is a description if you want to describe to administrators what this property is.
>
> **[3:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=188)** But the main thing is right here where it says Policy Settings.
>
> **[3:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=192)** For the Policy Setting, you'll see here it says Required.
>
> **[3:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=195)** And if I drop that down, you'll see I have three options, Required, Optional, or Disabled.
>
> **[3:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=201)** In other words, when we are populating the user profile information, do we want to require that something must be in this particular field?
>
> **[3:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=211)** Do we want to make it optional so that that the user can decide if they're going to put anything in for this particular field?
>
> **[3:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=218)** Or if it's disabled, which means that it won't actually be viewable to common users, it'll only be used for administrative purposes.
>
> **[3:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=226)** So I'll just leave it as Required for right now.
>
> **[3:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=228)** And then from there, as far as the Default Privacy Setting, you have two options, Only Me or Everyone.
>
> **[3:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=236)** Only Me doesn't mean literally me, the person who's doing this right now, but only the person who is actually creating the profile.
>
> **[4:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=245)** And then Everyone, it's not exactly the same as everyone or like the everyone group that you see in Windows, it means everyone who actually has access to that particular site, okay.
>
> **[4:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=257)** Now from there, you'll see there's a number, oh, and I apologize that this just skipped to the top.
>
> **[4:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=262)** As soon as you make a selection, it always refreshes back up to the top.
>
> **[4:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=267)** That's just how this interface works.
>
> **[4:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=270)** So if it looked like it jumped to you, it did, it actually jumped on me.
>
> **[4:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=273)** What I was about to show you is that if you scroll down, you'll see there's a number of other check boxes you can go through and you can configure for this particular property.
>
> **[4:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=283)** And I'm not going to go through every single one, but I do want you to notice that on the left there's a pretty detailed explanation of what each one of these settings actually means.
>
> **[4:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=293)** But I'm going to go ahead and click OK 'cause the main thing I wanted to do with you here is just to show you how you can actually create this property.
>
> **[5:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=301)** So it went through and it created the property, the screen refreshed, I'm now back on my list of properties.
>
> **[5:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=308)** And if I scroll all the way down to the bottom, you'll notice that I now have Demo Property 1.
>
> **[5:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=316)** When you go ahead and create one on your own, it always by default puts it at the very bottom under your Custom Properties.
>
> **[5:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=322)** That's where you will find it.
>
> **[5:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-a-property-for-user-profiles?u=76281980&t=324)** So that is how you can go ahead and create your own custom property for your user profiles.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), scroll down (2), go to (1), dropdown (1), checkbox (1)
> **CLI Commands:** make (6), find (2)
> **Code Keywords:** default, (1), this, (1), case, (1), let (1), require (1)
> **Definitions:** is a  (3), is called (1), in other words (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Manage a property for user profiles
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=0)** - [Narrator] When it comes to managing the properties for our user profiles, there's just a couple things that we can do and they're pretty straightforward but I will show you how to go in here and do it anyway.
>
> **[0:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=10)** The first would be to make changes to a property, right?
>
> **[0:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=14)** Maybe if something wasn't quite configured properly or you need a change to the settings for that property.
>
> **[0:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=21)** Now, you could do that on any of these properties, any of these that have already been prepopulated that come built in, but I don't really recommend it.
>
> **[0:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=31)** All right.
>
> **[0:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=32)** They've been set up by Microsoft and they really should be there.
>
> **[0:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=35)** But if I go down to the bottom, you'll notice that I have three properties that I created.
>
> **[0:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=40)** I have demo property 1, 2, and 3.
>
> **[0:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=43)** Now, in the previous video I showed you how to do demo property 1.
>
> **[0:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=47)** I just did the exact same thing and created two more.
>
> **[0:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=50)** You'll see why in just a moment.
>
> **[0:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=52)** So let's say demo property 1, the one that we created.
>
> **[0:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=55)** We want to go ahead and we need to make a slight change to it.
>
> **[0:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=59)** Well, you might notice that as I hover over any of these properties, when I do, there's kind of a box that it forms with a little dropdown arrow.
>
> **[1:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=69)** And if I click that, you'll notice that in that dropdown you have edit or delete.
>
> **[1:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=74)** You can choose between those.
>
> **[1:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=75)** So I'm going to go ahead and click on edit.
>
> **[1:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=78)** And when I do it takes me back into the exact same screen that we saw when we created the property.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=83)** And we have the ability to change anything that we configured when we first set up the property.
>
> **[1:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=90)** But there are some exceptions.
>
> **[1:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=91)** There are certain things that are grayed out.
>
> **[1:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=93)** So for instance, you'll notice that and again, on your screen you may or may not be able to see this clearly.
>
> **[1:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=100)** The name of the actual property cannot be changed.
>
> **[1:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=104)** So demo prop 1, I cannot change that name.
>
> **[1:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=107)** The display name however, this is something I could change.
>
> **[1:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=110)** If I didn't like how it was displaying I could change that.
>
> **[1:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=114)** I cannot change the type of property.
>
> **[1:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=116)** It's a string and I can't click on this dropdown it's grayed out, I can't change that at all.
>
> **[2:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=122)** So again, as I scroll down through this you'll see most things I can change, but there's a few things that are grayed out and there are some limitations.
>
> **[2:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=131)** All right, so that's how you can edit a property if you want to.
>
> **[2:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=134)** Now, I'm going to go ahead and hit cancel because I didn't actually make any changes.
>
> **[2:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=138)** I just want to get back out of there.
>
> **[2:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=141)** The other thing that I want to show you, I'm going to scroll down to the bottom again, is I mentioned that when you do these little dropdowns you have two options, right?
>
> **[2:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=150)** You have edit or the other option would be delete.
>
> **[2:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=154)** So I'm going to go ahead and I'm going to choose delete for demo property 3.
>
> **[2:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=158)** We're going to say that demo property 3 isn't needed anymore.
>
> **[2:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=162)** So if I choose delete, says please confirm that you want to delete this property it'll permanently delete all information stored in the property for all users.
>
> **[2:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=173)** So you really got to be sure that you want to do this 'cause that property is disappearing from everybody.
>
> **[2:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=177)** So I'm going to go ahead and click on okay, and the screen refreshes itself.
>
> **[3:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=181)** And now when I scroll back down to the bottom, you'll notice I only have demo property 1 and 2.
>
> **[3:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=188)** So that is pretty much it.
>
> **[3:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=190)** Like I said, it's pretty straightforward.
>
> **[3:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=191)** Not a whole lot that you're going to do with your properties here.
>
> **[3:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-a-property-for-user-profiles?u=76281980&t=194)** You can create them, you can edit them if necessary and you can delete them if you no longer need or want them.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (7), let (1)
> **UI Navigation:** dropdown (3), click on (3), scroll down (2)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (2)
> **Cross-References:** previous video (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Add an audience
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=0)** - [Ed] In SharePoint Online, an audience is a group of users that share a common goal, feature, or any other attribute.
>
> **[0:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=8)** So by grouping selected users into an audience, an organization can personalize information that is set to that group or to that audience, I should say, to ensure that is visible only to the users that are part of that particular audience.
>
> **[0:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=24)** So let's take a look at how we can create one of these audiences.
>
> **[0:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=27)** So here in the SharePoint admin center, we won't find anything about audiences.
>
> **[0:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=34)** And in fact, even if we click on more features, you still don't see anything, even if I scroll through here, that talks about creating an audience, and the reason is because it has to do with user profiles.
>
> **[0:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=48)** So I'm going to click on the option for user profiles and click on open.
>
> **[0:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=52)** It takes us to the classic SharePoint admin center, 'cause that's where user profiles are still being managed.
>
> **[0:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=57)** And you'll notice under people, you'll see there's an option here for manage audiences.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=63)** So let's click on that.
>
> **[1:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=65)** Here it takes us to a screen to where you can see the audiences that we have in our organization, and there's one by default.
>
> **[1:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=73)** It's called all site users.
>
> **[1:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=74)** It means everybody.
>
> **[1:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=75)** It's created by default.
>
> **[1:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=77)** It's an audience of everyone in the organization, but if we want to create our own audience, we click on the link that says new audience.
>
> **[1:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=85)** Here we need to go ahead and give the audience a name, so let's just call it Demo Audience.
>
> **[1:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=93)** We could give it a description, if we want.
>
> **[1:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=95)** We could say like, well, what is it that we're doing with this particular audience?
>
> **[1:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=101)** I'm going to set up an owner for the audience.
>
> **[1:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=103)** So I'll put myself, Ed L, and I'm going to check names.
>
> **[1:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=108)** That's what this little icon is with the person with the check mark next to it, check names.
>
> **[1:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=113)** It finds Ed Lieberman, so I'm now the owner, and now we have to decide is this going to include users which satisfy all of the rules or satisfy any of the rules?
>
> **[2:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=126)** Now, what does this mean?
>
> **[2:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=128)** Once I'm done creating the audience, the next thing it's going to do is it's going to ask me to set up rules to establish what this, you know, who's part of this audience.
>
> **[2:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=139)** So basically saying that it has to satisfy all the rules or any of the rules is like saying is it going to be an and or an or?
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=148)** In other words, if I have multiple rules that I set up, does a user have to satisfy all of them?
>
> **[2:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=153)** So it's like an and, it has to satisfy rule one, and rule two, and rule three.
>
> **[2:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=158)** Or if I hit the bottom button here, where it says any of the rules, that's an or.
>
> **[2:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=162)** That means as long as they satisfy whatever's in rule one or rule two or rule three, okay?
>
> **[2:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=169)** So I'm going to leave it on all of the rules for right now, and I'm going to click OK, and at this point it has now basically created the audience, but now this is where I set up the rule, right?
>
> **[3:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=183)** So I could say as a rule that you have a user who maybe reports under, and I could put an actual person that everyone who reports to this particular manager or things like that, right?
>
> **[3:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=194)** Or is a member of a certain group.
>
> **[3:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=197)** But you can also do it based upon property, okay?
>
> **[3:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=201)** So we have all of our user properties and I actually in another video, I actually created a couple properties.
>
> **[3:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=208)** I have Demo Property 1 and Demo Property 2.
>
> **[3:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=210)** So I'm going to click on Demo Property 1, and I could choose whether something has to equal, you know, that property has to actually equal something, that property maybe contains something, could be does not equal something or does not contain something.
>
> **[3:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=229)** So if I'm just going to leave it at equals for right now, and we're going to say that that property has to equal a value of ABC, right?
>
> **[3:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=236)** So I've created a rule that says basically any user who has Demo Property 1 that's been populated with the letters ABC, they will fall into this particular audience.
>
> **[4:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=248)** That rule has been set up, so I'm going to click okay.
>
> **[4:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=251)** And now you can see that we have the audience called Demo Audience, and if I scroll down a little bit, we have our audience rules, and the audience rules say Demo Property 1 equals ABC.
>
> **[4:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=263)** Now, I could also add an additional rule if I want to, right?
>
> **[4:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=266)** Because I said you can't have multiple rules.
>
> **[4:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=268)** And in this case, why don't we say that Demo Property 2 we'll say contains a value of 123, okay?
>
> **[4:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=281)** So we have Demo Property 2 contains 123, and I'll click OK, and there you go.
>
> **[4:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=290)** Demo Audience, you'll notice for membership, that's a key one here.
>
> **[4:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=294)** It says members must satisfy all of the rules.
>
> **[4:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=296)** That means it's an and.
>
> **[4:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=297)** That means only users who have Demo Property 1 populated exactly with ABC, and Demo Property 2 contains the numbers 123, all right?
>
> **[5:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-audience?u=76281980&t=309)** So that is how you can create an audience.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default. (2), this, (1), case, (1)
> **UI Navigation:** click on (6), scroll down (1)
> **Prerequisites:** set up (5)
> **Env Vars:** abc (4)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** find (1)
> **Analogies:** it's like (1)
> **Speakers:** - [ed] (1)

#### Manage an audience
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=0)** - [Instructor] When it comes to managing your audiences, there's pretty much just a couple of basic things you can do and they're pretty straightforward.
>
> **[0:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=7)** So let me walk you through them.
>
> **[0:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=8)** Right now, we're still looking at the user profile section where we had the option to manage our audiences.
>
> **[0:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=14)** So I'm going to click on that to get back into our audience management screen.
>
> **[0:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=19)** And you'll see here that we have two audiences, actually.
>
> **[0:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=22)** We have the all site users, which is the audience that's created by default by the system, and includes everybody.
>
> **[0:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=29)** But then we have Demo Audience that we created in the last video.
>
> **[0:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=33)** You'll notice that when I hover over Demo Audience, there's a little drop down here.
>
> **[0:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=37)** And if I click on that, I can go ahead and I can edit the audience.
>
> **[0:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=42)** I can view the just the properties of the audience.
>
> **[0:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=45)** I can delete it, or I can even view what users end up being a member of that audience.
>
> **[0:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=50)** So I'm going to click on Edit.
>
> **[0:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=52)** And now this looks pretty much just like what I had before as far as when we created the audience.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=63)** This is the exact same screen, except for it's already populated with what I had put in.
>
> **[1:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=67)** So I could change the name of the audience, I could change the description, I could change the owner, or I could change the membership requirements.
>
> **[1:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=75)** And in this case, let's actually change the requirements.
>
> **[1:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=78)** Instead of saying that we have to satisfy all the rules in order to be a part of this audience, we're going to say you just have to satisfy any of the rules.
>
> **[1:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=87)** So I'm basically changing the And to an Or.
>
> **[1:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=89)** And I'll click Okay.
>
> **[1:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=91)** And you'll see here that we still have Demo Audience, but the main thing that changes under membership, it says members who satisfy any of the rules.
>
> **[1:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=100)** Now the rules that we had previously created are still there.
>
> **[1:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=103)** We have Demo Property 1 equals ABC, Demo Property 2 must contain 1, 2, 3.
>
> **[1:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=108)** Those were set up when we created this audience in the last video.
>
> **[1:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=113)** That stays with it.
>
> **[1:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=115)** So that means that we could also go ahead and we could make changes to the rules if we want.
>
> **[2:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=123)** That's the other form of editing, is you can edit what the rules are, all right?
>
> **[2:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=127)** So right now, I'm just going to leave this all alone.
>
> **[2:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=130)** I just wanted you to see that's a couple of options that are available.
>
> **[2:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=134)** So now, I'm going to actually go back out, and this is a little tricky, by the way.
>
> **[2:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=139)** The navigation is a little bit tricky to get ourselves back out.
>
> **[2:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=142)** Over on the left, I'm going to click on User Profiles and then I'm going to click on Manage Audiences.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=148)** And the reason I want to do that is that gets me back to this screen where we have the list of audiences, 'cause I want to show you that the other thing we can do is with this dropdown, the other main thing we could do would be to delete the audience, right?
>
> **[2:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=162)** So if we don't need this audience anymore, deleting it's pretty straightforward.
>
> **[2:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=165)** Just click on Delete.
>
> **[2:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=167)** It says, "Are you sure you want to delete it?"
>
> **[2:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=168)** You click Okay.
>
> **[2:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=170)** Screen refreshes, and just like that, no more audience.
>
> **[2:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=174)** All right, so again, as I said in the beginning, pretty straightforward, not very complicated.
>
> **[2:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-an-audience?u=76281980&t=179)** But I did want to show you that you have the ability to pretty easily edit any changes you need to make to an audience or delete it if you're no longer going to use it.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (5), let (2), case, (1)
> **UI Navigation:** click on (6), dropdown (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (2)
> **Analogies:** just like (2)
> **Env Vars:** abc (1)
> **Prerequisites:** set up (1)


### 6. Configure Customization and Apps

#### Adding an app from the SharePoint Store
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=0)** - [Instructor] Apps are small, easy-to-use web applications that add functionality to your SharePoint sites.
>
> **[0:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=9)** Now really, they offer unlimited possibilities for customizing your sites in ways that can be very specific to your organization.
>
> **[0:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=18)** Now, one of the ways that we can acquire apps is from the SharePoint store.
>
> **[0:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=26)** So let's take a look at that now.
>
> **[0:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=28)** So here I'm in the SharePoint admin center, and similar to some other things that we've seen, if you take a look, you won't see anything that says apps.
>
> **[0:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=37)** Okay? The place we find it is under more features.
>
> **[0:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=40)** So I'm going to click on that, and then you'll see there's an option for apps.
>
> **[0:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=45)** So I'm going to go ahead and click to open that.
>
> **[0:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=47)** Now, before I do, I want to tell you, I want you to watch the screen, 'cause the first time you open this, the system will configure what's called the app catalog, which is what truly gives you the power to have control over these apps.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=63)** It used to be a manual process that you would create this app catalog, but now it happens automatically.
>
> **[1:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=69)** So I'm going to click on open, and you'll see here it says it's creating the site for storing these apps.
>
> **[1:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=75)** So the app catalog has been created, and here we are in our app management portal.
>
> **[1:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=81)** I do want to point out that, as of right now, when I'm recording this, this is a fairly new or or modern app portal, and there are some things that you may still have to go to what's called the classic experience up near the top, you see where it says Manage Apps, right below it you'll see, "Upload, enable, and manage apps.
>
> **[1:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=101)** To update SharePoint Store apps, go to the classic experience."
>
> **[1:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=106)** I will click on that just to show you.
>
> **[1:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=108)** Opens up another tab.
>
> **[1:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=110)** Here we have the classic view of how we used to manage apps, okay?
>
> **[1:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=115)** Some of the things we do the same here as we do in the modern portal.
>
> **[2:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=120)** Other things we still have to do over here in classic environment.
>
> **[2:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=125)** So let's go into the modern environment, 'cause this is where everything's heading, and what we're going to do, if we want to go ahead and we want to get an app from the SharePoint Store, well it's pretty straightforward, 'cause over here on the left, you'll see there's a link for SharePoint Store.
>
> **[2:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=141)** So I'll click on that, opens up a new tab.
>
> **[2:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=144)** Here's the SharePoint Store, and you'll see that there are all sorts of different categories as far as what type of app you may want.
>
> **[2:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=155)** Okay, so if I click on, I don't even know what to click on here.
>
> **[2:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=159)** Let's just pick Business, and then we have all sorts of nifty little apps here.
>
> **[2:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=164)** If I click on one, we'll just take the first one, Quote of the Day.
>
> **[2:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=167)** And all I would have to do is I could click Add Apps to Site.
>
> **[2:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=174)** So let's click that now.
>
> **[2:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=175)** It's going to go through, it's going to validate.
>
> **[2:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=177)** Now here, you can see that it's going to give a confirmation, and some apps you'll only enable this app, which means that the app's available only for the site owners to add from the My Apps page.
>
> **[3:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=191)** Whereas another option, and this is only on some applications, is to enable this app and add it to all sites, which means that it'll add the app automatically so site owners don't have to go ahead and do it.
>
> **[3:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=204)** All right? So you have to decide whether you want the owners to do it, or whether, you know, it's going to go ahead and do it automatically.
>
> **[3:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=210)** All right, so I'm going to actually say only enable this app.
>
> **[3:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=213)** I'll click on Add, and you get a little green bar up near the top here, it says "This app has been added," and you could go back to the manage apps page.
>
> **[3:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-an-app-from-the-sharepoint-store?u=76281980&t=222)** Now, I don't need to click the link, 'cause I have manage apps open over here, and you'll notice that when I go back there, we now have an app that has been added via the SharePoint Store.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (8), go to (2)
> **Code Keywords:** let (4), this, (2)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Adding a custom app
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=0)** - [Instructor] If we had a need for an app to be added to any of our SharePoint sites that was not available through the SharePoint Store, another option would be to go ahead and have a developer create the app, and then you would have your own custom app that you can actually go ahead and upload to your app catalog so that it can be distributed out to your SharePoint sites.
>
> **[0:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=26)** So how do we do this?
>
> **[0:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=27)** It's pretty straightforward and I don't have one here really to show you but what I am going to do is I'm going to show you how to do it in both the modern interface as well as the classic interface.
>
> **[0:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=40)** Here in the modern interface, all you would need to do if you wanted to go ahead and add a custom app is to click on the Upload button.
>
> **[0:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=52)** So if I click on Upload, again, there's nothing really to show you here other than it takes you into choosing, go ahead and browsing your computer or the network or whatever to find the app that you're going to upload.
>
> **[1:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=67)** And then once you have selected it, everything else will actually be kind of the same as what you have with the SharePoint Store.
>
> **[1:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=74)** In other words, you'll get the dialogue and it'll tell you what the requirements are.
>
> **[1:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=78)** And depending on what the developer did, you will be able to add it to just a site for the site admins to go ahead and install themselves or to go ahead and automatically distribute it to all the sites without them having to do that.
>
> **[1:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=91)** But let's take a look at how to do this through the classic experience, because it is a little bit different.
>
> **[1:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=98)** So if I click on classic experience, now the first thing I can tell you is I did not demonstrate doing the classic experience for the SharePoint Store.
>
> **[1:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=106)** And the reason why is because it's the same.
>
> **[1:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=107)** Just click on SharePoint Store and that's pretty much it.
>
> **[1:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=112)** What I did want to show you with this custom app, however, is that if you want to go ahead and add a new custom app for your SharePoint sites, then you need to go ahead and make sure you selected on Apps for SharePoint.
>
> **[2:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=129)** Because you'll see there's also an option for Apps for Office.
>
> **[2:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=133)** And you notice when I clicked on it, it kind of went to a modern look, right?
>
> **[2:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=139)** So it's kind of weird how things are bouncing around right now.
>
> **[2:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=143)** And again, now when I click on Apps for SharePoint, look at that, now it goes back to the classic feel.
>
> **[2:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=149)** So this is something that you may not experience when you're watching this, but just in case you are, I don't want you to end up being confused as to why it looks this way, and if you click around, certain things are changing.
>
> **[2:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=161)** But again, once you're on Apps for SharePoint, the process is exactly the same.
>
> **[2:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=165)** You go ahead and click on Upload and the dialogue box again looks a little bit different, right?
>
> **[2:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=170)** Doesn't look like a normal Explorer box, not yet anyway.
>
> **[2:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=174)** Here you have to go ahead and Choose Files and now you get your typical Explorer box.
>
> **[3:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=180)** Then you go ahead and you find the location that the developer has created for you and you put it in and you're on your way.
>
> **[3:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=188)** All right, so again, pretty straightforward, but I wanted you to at least be able to see the interface on how to do this.
>
> **[3:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/adding-a-custom-app?u=76281980&t=195)** What I do want you to know is that having the ability to add a custom app that's written maybe just for your organization is truly what makes your SharePoint sites be unique in just the ways you need them to be for your organization.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (1), this, (1), this. (1)
> **UI Navigation:** click on (6)
> **CLI Commands:** find (2), make (1)
> **Definitions:** in other words (1), is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Configure the SharePoint store settings
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=0)** - [Instructor] The SharePoint store is a public marketplace that offers apps for Microsoft 365, and site users can access the SharePoint store directly from a SharePoint site to browse for and add third-party apps.
>
> **[0:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=13)** Well, you may want to have some control over this.
>
> **[0:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=16)** If the SharePoint environment has been configured to prevent users from getting apps, well, then the users can still browse for and request the apps, but then they'll have to be approved by an admin in the SharePoint admin center.
>
> **[0:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=29)** So let me show you how we can go ahead and configure this.
>
> **[0:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=33)** So first, how do we get to the SharePoint store settings?
>
> **[0:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=37)** Well, as you can see here, there's not a whole lot there.
>
> **[0:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=39)** There is the SharePoint store, but the settings are not found in there, believe it or not.
>
> **[0:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=43)** What we need to do is go to the more features, and you'll see there's an option here for configure store settings.
>
> **[0:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=51)** I'm going to click on open.
>
> **[0:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=53)** Now, there are two main things that you're going to want to control here, okay?
>
> **[0:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=59)** One is whether you want users to be able to get apps from the SharePoint store.
>
> **[1:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=64)** So basically, it comes right down to where it says app purchases, okay, that top section there.
>
> **[1:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=71)** It says, should end users be able to get apps from the marketplace?
>
> **[1:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=76)** If you want users to be able to add apps, then leave it with the default of yes.
>
> **[1:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=80)** And if you do not want your users to be able to get third-party apps, then go ahead and change that to no.
>
> **[1:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=88)** The other thing that we can configure here is whether to allow apps for Office to start in documents, okay?
>
> **[1:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=96)** And that's the bottom part here, where it says apps for Office from the store.
>
> **[1:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=101)** Should apps for Office from the store be able to start when documents are opened in the browser?
>
> **[1:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=108)** And again, you know, if you want to allow this to happen, then leave it with the default of yes, and if you don't, then change it to no.
>
> **[1:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=116)** So those are pretty much the things that we can do when configuring our settings for the SharePoint store.
>
> **[2:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=124)** And I do want to just remind you that, in the event you do go ahead and change the answer to no, that you don't want users to get the apps directly, then they can still do it, but it'll go in as an app request, which you can see is the middle section here, and it says click here to view app request.
>
> **[2:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=142)** I'm going to actually show you how to do that in another video.
>
> **[2:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/configure-the-sharepoint-store-settings?u=76281980&t=145)** So these are the two settings you actually will play with in the SharePoint store configuration settings.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), public (1), let (1)
> **Prerequisites:** configure (3)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### View app requests
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=0)** - [Presenter] If you have configured your SharePoint store settings so that users have to request apps in order to be able to get them, well, we need to be able, as administrators, to know how to go and view these requests and choose whether to approve them or not.
>
> **[0:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=15)** So there's a couple different ways that we can do this.
>
> **[0:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=18)** Now, the first we already kind of saw in the last video, and I'm still on that screen.
>
> **[0:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=24)** Right here I'm in the "configure the SharePoint store settings" page.
>
> **[0:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=29)** And you'll see that I have app purchases set to "no", right, which means that users would have to actually make a request in order to be able to get an app.
>
> **[0:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=37)** And as an admin, if I want to go ahead and see these requests all I have to do is click here to view app requests, right where it says that.
>
> **[0:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=45)** Now, before I do, I want to tell you that, I want to point out that in the upper left-hand corner it says "Classic SharePoint Admin Center."
>
> **[0:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=52)** And if I click here, this is going to take me to the classic way of viewing app requests.
>
> **[0:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=58)** So let's do that.
>
> **[0:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=59)** It still keeps me in the classic view, but I now am in the app request section.
>
> **[1:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=66)** Now it says there's no items to show because, well, there are no requests out there.
>
> **[1:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=70)** This is just a test environment here.
>
> **[1:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=72)** But if there was, I could go ahead and I could choose one and go ahead and choose whether I was going to go ahead and approve it.
>
> **[1:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=80)** So that's kind of the classic way to do it.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=83)** The modern way to do it, I'm going to go ahead and I'm going to close out of there, I'm going to come back over here.
>
> **[1:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=89)** This is in my modern app management center, just to show you, if I go back to the top, "manage apps," this is what we're used to seeing.
>
> **[1:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=97)** You'll see here that we actually have an option over on the left for app requests.
>
> **[1:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=102)** And if I click to expand that, you'll see here that I can see my pending requests and my completed requests.
>
> **[1:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=109)** So if there was a current app request out there it would be in pending, right?
>
> **[1:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=114)** That's where we'd have to go as an administrator to go and find whether you have any apps out there or not.
>
> **[2:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=121)** Okay, that's here.
>
> **[2:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=122)** And then, and you'll notice again, it says no pending request.
>
> **[2:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=126)** If I wanted to see requests that have already been approved then I would go to the completed section.
>
> **[2:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=133)** And really I should say, if they've been approved or if they've been declined for some reason, meaning if it's no longer a request, some admin has already made a decision, this is where I would see it, in the completed section.
>
> **[2:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=145)** Now you'll notice that in both of these sections that, up at the top, it continues to give an option to go to the classic experience, okay?
>
> **[2:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=153)** And anytime you click that that's just going to take you right back to the same screen that we had before.
>
> **[2:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=160)** And as I've mentioned before, by the time you're watching this, that classic experience may not even exist.
>
> **[2:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=166)** And that's why it's important to me that I show you both interfaces just in case.
>
> **[2:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-app-requests?u=76281980&t=171)** All right, so that's how we can go ahead and we can approve or decline app requests from our users.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), let (1), this, (1), case. (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** in the last (1), go back to (1)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [presenter] (1)

#### Add an app to a site
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=0)** - [Instructor] Once we have made apps available to be added to our SharePoint sites, well, let's take a look at how to actually add an app to a site.
>
> **[0:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=10)** So here I'm in the SharePoint admin center, and I'm going to go to my active sites, and I'm going to just pick on a site, right?
>
> **[0:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=18)** I'll just take this bottom one here that says TeamSite1, and I'm going to click on the URL, and that is going to actually open up a new tab, and open up the actual site itself.
>
> **[0:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=30)** Now once it fully loads, in the upper right hand corner we're going to find a gear icon, okay, and here it is, and when I click on that gear icon for the settings, we'll have an option to add an app.
>
> **[0:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=44)** So I'll click on that, and now I have the ability to add any apps that have been made available to me.
>
> **[0:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=54)** Now it's defaulting on all but I could say specifically from my organization, and you'll see there's nothing specific there, but if I click on from the SharePoint store, if you remember in the video where we went ahead and made an app available via the SharePoint store, we made quote of the day available.
>
> **[1:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=72)** Okay, so if I went ahead and clicked on add, it has now added that app to this particular page.
>
> **[1:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=80)** Now beyond that, I want to show you something else, and that is that it says, under where it says apps, you can add, it says, "Built-in apps such as custom list, document library, calendar, and others, can be found in the classic experience."
>
> **[1:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=96)** Okay, so sometimes, at least as of right now, I'm going to click on this, you have to go to the classic experience, and now I can see a whole bunch of additional built-in apps that I could also add to my site.
>
> **[1:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=112)** So just to pick one, I'm going to click on tasks, and I could just go ahead and type in a name.
>
> **[1:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=118)** There's not much else to do.
>
> **[1:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=119)** Now some of these tasks might have some advanced options, and I want to show you, if you click on it, I'm kind of laughing because look at the advanced option, I can add a description.
>
> **[2:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=128)** That's the advanced option.
>
> **[2:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=130)** All right? So, but all I really have to do is just name it.
>
> **[2:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=133)** I'll say, "Ed's Tasks."
>
> **[2:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=135)** I could put a description if I want to, I don't need to, and I'm going to click on create, and it takes me actually into that app.
>
> **[2:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=143)** This is the actual tasks app, right?
>
> **[2:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=146)** You see that right here, Ed's tasks.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=148)** If I go ahead and click on home, that'll take me back to TeamSite1.
>
> **[2:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=154)** Now if you want to see what apps have been added to the site, you could go to the site contents, and when I click on site contents, you can see here's Ed's Tasks, and here's quote of the day, and if we ever didn't want any of these apps to be present on a site any longer, all you have to do is when you hover over it, you'll see the three dots to the right.
>
> **[2:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=179)** You could choose to go ahead and delete that particular option, and the app is gone.
>
> **[3:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/add-an-app-to-a-site?u=76281980&t=186)** All right, so that's how we can go ahead and we can add apps to our SharePoint sites to give them the functionality that the app has to offer.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (10), go to (2)
> **Code Keywords:** let (1), else, (1), this, (1), delete (1)
> **CLI Commands:** find (1)
> **Env Vars:** url (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Delegating app approval authority
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=0)** - [Instructor] When it comes to the app approval process, you may find that there's just too many requests for you to handle yourself, and you may want to go ahead and delegate out that authority to make the decisions on apps and whether they can be approved to other people.
>
> **[0:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=22)** So to do this, all you really have to do is actually make any other user that you want to give this ability, make them an admin of the app catalog site.
>
> **[0:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=35)** So here in the SharePoint Admin Center, let's go to our active sites.
>
> **[0:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=39)** Now, I'd like you to notice that there is a site that has been added that we didn't do here in the course, right?
>
> **[0:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=47)** Meaning the original communication site, that's the one that was built for everybody from the beginning.
>
> **[0:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=53)** I did CommSite1 and TeamSite1.
>
> **[0:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=55)** We also did hub sites and sub sites.
>
> **[0:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=58)** But then we have this one at the top.
>
> **[1:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=60)** It says apps, and you'll notice that the URL actually takes you to a site that says app catalog.
>
> **[1:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=67)** This site was generated when we first went in to manage our apps.
>
> **[1:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=73)** Okay?
>
> **[1:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=74)** You might remember that the first time we went in there, it said "Please wait while we create the app catalog site."
>
> **[1:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=80)** Well, this is what it was doing.
>
> **[1:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=81)** So if you want to go ahead and allow somebody else the ability to approve app requests, then you can go ahead and just click on "Apps," and then go to "Permissions," and we can go ahead and we can manage the site admins and add a user, right?
>
> **[1:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=104)** So I'll just type in user, and we'll say like User One, right?
>
> **[1:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=109)** So I've now added User One as being an admin of the app catalog site.
>
> **[1:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=117)** So, click "Save."
>
> **[1:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=119)** And just like that, User One in our organization now has the ability to go ahead and help out with the app approval process.
>
> **[2:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=128)** Now, the only thing I want to caution you on is that when you do this, this user needs to be trusted to a level of understanding that their decisions can potentially have organizational wide impact.
>
> **[2:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/delegating-app-approval-authority?u=76281980&t=143)** So make sure that you're careful on who you delegate this out to.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Code Keywords:** this, (2), let (1)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)


### 7. Configure Managed Metadata

#### Manage term sets
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=0)** - [Narrator] When working with SharePoint, you're going to want to go ahead and organize the metadata in a way that makes sense to make it easier to find things that you're looking for.
>
> **[0:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=11)** Now, this metadata is managed centrally using something called term sets, which are then managed through the term store.
>
> **[0:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=21)** So, let's take a look at how this management can take place.
>
> **[0:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=25)** So here in the SharePoint admin center, over on the left-hand side, you'll notice that there's an option for content services.
>
> **[0:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=33)** And if we expand that, that is where we will find the term store.
>
> **[0:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=39)** So, I'm going to click on that and this is where we can now manage our term sets.
>
> **[0:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=45)** Now, something interesting that I'd like to point out and that is that by default, we basically can't do anything.
>
> **[0:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=51)** I mean, there's literally like one thing that we can really do right now.
>
> **[0:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=56)** Here, we have our taxonomy of our groups that would hold our term sets.
>
> **[1:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=61)** And for instance, right here's, a group called the People Group.
>
> **[1:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=65)** And you'll notice a couple things.
>
> **[1:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=66)** First of all, to the right, there's an icon.
>
> **[1:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=69)** It's like a pencil with a line through it which basically says, no, you cannot do anything.
>
> **[1:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=73)** And if I click on it, well, I can't really do anything here either.
>
> **[1:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=78)** Okay?
>
> **[1:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=79)** It actually says add a description to help user but there's nowhere to actually add that description.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=83)** Now, the reason I can't do that is because in order to be able to do anything with our term sets, we have to first create a term store administrator.
>
> **[1:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=94)** So, I went back up to the taxonomy and over on the right, you'll notice again, there's not much I can do.
>
> **[1:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=100)** Basically, I can change the default language or I can add a term store admin who can add people, who can create new term set groups and assign users to the group manager role.
>
> **[1:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=114)** Okay?
>
> **[1:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=115)** Because that's, there are actually three roles.
>
> **[1:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=116)** There's the admin, there's the group manager, and a contributor.
>
> **[1:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=119)** So, let's take a look at these roles in what we can do.
>
> **[2:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=122)** So first I need to, in order to be able to do anything, I have to go ahead and make somebody an admin.
>
> **[2:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=127)** So, I'll make myself an admin.
>
> **[2:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=128)** I'm going to click on edit, and I'll start typing in my username and it finds me.
>
> **[2:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=135)** I'll click on Save.
>
> **[2:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=137)** Now it says that the change is saved successfully, but even after everything seems to have refreshed, well, everything looks pretty much the same.
>
> **[2:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=145)** So, we need to actually do an actual refresh on the screen.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=148)** It doesn't happen automatically.
>
> **[2:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=150)** I could just hit F5 on my keyboard, but just since you can't see me do that, I'll just go to home and then back down to the term store.
>
> **[2:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=158)** And this time when I come back into the term store, you'll notice it's a little bit different.
>
> **[2:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=162)** First of all, under admins.
>
> **[2:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=164)** Now it's kind of weird.
>
> **[2:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=165)** There's still just an icon there, but if I hover over that icon, it'll show me who the admin is.
>
> **[2:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=170)** Okay?
>
> **[2:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=171)** And then under the taxonomy, you'll notice like that people group that we were talking about before, where there used to be a pencil with a line through it.
>
> **[3:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=180)** Now there's three dots, and that means that I can actually click and do things like add a term set.
>
> **[3:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=186)** I could actually rename the group.
>
> **[3:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=188)** If I don't want it to be called people anymore, I could rename it.
>
> **[3:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=190)** I could delete the group if we don't need it anymore.
>
> **[3:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=192)** Or we could also import a term set.
>
> **[3:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=195)** Now, I'm not going to worry about doing any of those things for right now.
>
> **[3:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=198)** We'll do a little bit of that in another video.
>
> **[3:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=200)** What I did want to show you is that if I click on the people group, now I actually have some functionality here.
>
> **[3:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=207)** Number one, up at the top, you'll see that I have those same four options that are the same as if I click the three dots.
>
> **[3:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=214)** Now where it says a description, I can click Edit and I can actually add that descrip- Well, you know, the funny thing is I can edit the name and the description there, but down here, this is the main part that we were talking about that an admin can do, which is I can go ahead and I can make a group manager and or a contributor, all right?
>
> **[3:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=235)** And it says here, add people who can create new term groups, sets, and assign users to the group manager and contributor role.
>
> **[4:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=242)** So, let's click on Edit and let's go ahead and type it a name.
>
> **[4:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=245)** I'm going to put SPO for my SPO Admin.
>
> **[4:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=249)** And now I get to choose is the admin going to be a contributor or a manager?
>
> **[4:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=254)** Now, what's the difference?
>
> **[4:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=256)** At the top, it says Add the contributors who will create and edit the term sets in this group, right?
>
> **[4:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=260)** That's what a contributor can do.
>
> **[4:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=262)** Managers have the same permissions but can also manage this list.
>
> **[4:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=267)** So basically, what's a manager?
>
> **[4:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=268)** A manager is kind of like a senior contributor.
>
> **[4:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=271)** It's a contributor who also can add and remove other contributors.
>
> **[4:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=276)** Okay?
>
> **[4:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=277)** So, that's really the difference.
>
> **[4:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=278)** So, I have SPO admin in there as a manager.
>
> **[4:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=282)** I could either hit save now or let's take this a step further.
>
> **[4:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=285)** I'm going to type in user one and make user one a contributor and click Save.
>
> **[4:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=291)** And again, it's a little bit weird.
>
> **[4:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=293)** You just have an icon there.
>
> **[4:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=295)** But if you hover over the icon, you can see the name of who the group managers and or contributors are.
>
> **[5:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=302)** All right?
>
> **[5:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-term-sets?u=76281980&t=302)** So, that's how we can configure the term store to have permissions for our users to go ahead and start working with the term sets.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), for. (1), default, (1), delete (1)
> **CLI Commands:** make (5), find (2)
> **UI Navigation:** click on (6), go to (1)
> **Env Vars:** spo (3)
> **Analogies:** for instance (1), it's like (1), kind of like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### Import term sets
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=0)** - [Narrator] Now let's take a look at how to import a term set of our own.
>
> **[0:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=4)** So here we're still in the term store and I'm on my taxonomy.
>
> **[0:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=9)** And the first thing I want to do just to show you is... Let's go ahead and let's import this term set into a new group.
>
> **[0:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=17)** So to do that, when highlighted on taxonomy, you want to either click the three dots and select add term group or you could actually just click on the the link over on the right.
>
> **[0:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=29)** Either way, same thing.
>
> **[0:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=30)** I'm always used to doing it with the three dots.
>
> **[0:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=32)** So we'll add a term group and you can see it adds what just looks like a folder.
>
> **[0:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=37)** And we'll just call this demo term group.
>
> **[0:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=41)** Now, I do want to tell you this is a little bit of a silly interface I think the way it's set up right now maybe they'll fix this, but if I were to like just click away or something like that, it just disappears.
>
> **[0:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=53)** Actually, I'm going to show you that I'm going to click and it's like, oh, I did nothing.
>
> **[0:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=58)** So what you really have to do is put in the name of the group and then you have to hit enter on the keyboard.
>
> **[1:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=66)** And then it goes ahead and it says, "All right we've now added the term group successfully."
>
> **[1:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=71)** So here we have Demo Term Group.
>
> **[1:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=74)** Now on this Demo Term Group, either on the menu or again over on the right you could go ahead and you can import a term set.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=83)** Okay, we had that show you on the menu as well.
>
> **[1:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=86)** Import term set.
>
> **[1:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=87)** And when you do that, when you click on that I want to show you something.
>
> **[1:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=91)** I want to show you that up near the top it says download the following template to create your import file.
>
> **[1:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=99)** So in order for you to have an appropriate import file to be able to import this term set they're going to give you a sample to show you the structure.
>
> **[1:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=108)** So I'm going to click on that and you'll notice that it has now downloaded that file.
>
> **[1:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=114)** Okay?
>
> **[1:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=115)** So I'm going to go ahead and I'm going to hit cancel out of there.
>
> **[1:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=118)** And I'm also going to then jump over to my downloads folder, which we have right here.
>
> **[2:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=123)** And you'll see I have import term set.
>
> **[2:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=126)** Now I'm going to right click and I'm going to say that I'm going to open this with Notepad.
>
> **[2:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=130)** It is a CSV file, which means Excel would be the default of what we would use, but I find that for the video here it's easier to view in Notepad.
>
> **[2:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=140)** Okay, so I'm going to open it up in Notepad.
>
> **[2:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=143)** It's just a text document.
>
> **[2:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=144)** And even with this fully maximized out we still can't quite get everything.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=148)** There's a little bit of scrolling over to the right but I basically want to show you the way this file is set up.
>
> **[2:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=154)** The top line is just going ahead and defining what each value is going to be in the rest of the document.
>
> **[2:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=164)** Okay?
>
> **[2:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=164)** So it's basically saying first you're going to have the term set name then a description, the LCID, whether it's available for tagging or not, and so on and so forth.
>
> **[2:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=175)** The second line in this particular term set, okay?
>
> **[2:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=179)** So we're looking at this highlighted line right here is showing how we're basically going to go ahead and have the actual structure.
>
> **[3:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=191)** It's almost like the folder structure to speak and the way it looks.
>
> **[3:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=195)** Okay?
>
> **[3:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=196)** Now, from there we go into the actual folder structure itself and you actually enter in all the specific information.
>
> **[3:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=204)** Now, this may or may not be helpful to you, right?
>
> **[3:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=208)** This might actually be confusing to you.
>
> **[3:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=211)** So I'll tell you what, instead of using this I'm going to go ahead and I'm going to close out of that.
>
> **[3:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=218)** I am going to go down to my desktop here.
>
> **[3:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=222)** And here I have a file that I actually created.
>
> **[3:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=225)** I took a sample file and I made it into something real that we could use.
>
> **[3:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=230)** Okay?
>
> **[3:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=231)** So I'm going to go ahead and open this again with Notepad.
>
> **[3:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=235)** Now you'll notice that the first line is exactly the same as what we had before.
>
> **[4:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=241)** I didn't change that because that's just defining all the values.
>
> **[4:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=246)** But then from there the second line says department, it's a sample term set describing a simple department structure.
>
> **[4:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=254)** And then it has true.
>
> **[4:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=256)** And if you want to know what that is, so again a sample term set describing the simple department structure is the description.
>
> **[4:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=263)** Okay?
>
> **[4:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=264)** The LCID I actually have blank available for tagging.
>
> **[4:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=267)** I have it as true.
>
> **[4:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=268)** Okay?
>
> **[4:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=269)** And then we have departments.
>
> **[4:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=270)** Departments,,,,, which continues into the different departments themselves.
>
> **[4:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=277)** All right, are you confused yet?
>
> **[4:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=279)** If you've never worked with this there's a really good chance you are.
>
> **[4:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=282)** I just want you to kind of vaguely have an idea about what this file looks like, but I want you to see this and then I want you to see what happens when we go ahead and actually import that term set, right?
>
> **[4:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=296)** So let's go ahead and import the term set.
>
> **[5:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=300)** And this time I'm not going to download the sample.
>
> **[5:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=302)** I'm going to go ahead and I'm going to actually browse my computer.
>
> **[5:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=306)** It's right on my desktop and I'm going to go ahead and there it is.
>
> **[5:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=311)** Imports term set department, CSV, and click import.
>
> **[5:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=315)** And the import of the file was successful.
>
> **[5:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=318)** And you'll notice that inside of the Demo Term Group we now have department, which is then followed by departments, which is then followed by the engineer HR and marketing departments.
>
> **[5:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=333)** Now, that's a very, very basic example of a term set but it's what I want you to see so you can try to have an understanding on how to work with this metadata, 'cause this is something that not necessarily every typical manager has worked with.
>
> **[5:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=350)** All right?
>
> **[5:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/import-term-sets?u=76281980&t=351)** So that is how we can go ahead and import a term set.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (1), this, (1), import. (1)
> **Env Vars:** csv (2), lcid (2)
> **UI Navigation:** click on (3)
> **Exercise Files:** download the (2), template (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Analogies:** it's like (1)


### 8. Managing Search

#### Manage the search schema
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=0)** - [Instructor] The search schema controls what users can search for, how users can search it, and how you can present the results on your search websites.
>
> **[0:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=10)** Now, when a user searches for content on SharePoint sites search only finds what's in the search index and only shows the results that the user has permissions to see.
>
> **[0:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=21)** So let's go take a look at some of this.
>
> **[0:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=23)** Here in the SharePoint admin center you will see that there is nowhere to manage search.
>
> **[0:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=29)** So this is another example of we're going to go down to more features.
>
> **[0:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=33)** And in this window this is where we can actually manage search so I'll click on open.
>
> **[0:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=38)** And when I do you will notice that it takes us back into the classic SharePoint admin center.
>
> **[0:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=43)** So this is something that as of right now is not managed through the regular SharePoint admin center or the modern SharePoint admin center, but it may be by the time that you're watching this.
>
> **[0:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=54)** Here in the search administration, right at the top we have manage search schema.
>
> **[1:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=61)** So let me click on that.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=63)** Now, the main thing I want you to see is what we're going to manage here is we have managed properties and crawled properties.
>
> **[1:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=71)** And you need to kind of understand how they work together and what the difference is.
>
> **[1:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=75)** Search discovers information by crawling items on your site.
>
> **[1:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=80)** The discovered content and metadata are called properties of an item.
>
> **[1:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=84)** The search schema has a list of crawled properties that helps the crawler decide what content and metadata to extract.
>
> **[1:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=93)** So it does have a little bit to do with crawled properties but the thing of it is, is that not all crawled content or metadata is useful to have in your search index.
>
> **[1:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=103)** So the search schema has a list of useful types of content and metadata, and this is what's called managed properties.
>
> **[1:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=113)** So here's the thing, search comes with relevant crawled properties and they are mapped to manage properties.
>
> **[2:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=121)** And if you want to add your own managed property well then you have to map it to a crawled property in order to get the content into the index.
>
> **[2:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=129)** So first of all, let's click on the crawled properties link.
>
> **[2:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=132)** There's not a whole lot that I want to show you here other than you could just look and see that there's a nice long list of properties.
>
> **[2:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=139)** And this list is going to look familiar 'cause we're going to see it again in just a moment.
>
> **[2:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=143)** Because again, those are the crawled properties.
>
> **[2:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=145)** But in order to get into the search index we have to deal with managed properties.
>
> **[2:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=150)** So I'm going to click on managed properties.
>
> **[2:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=153)** And again, we have a list of properties and you'll notice that to the right every one of those properties, you know, has a mapped crawled property.
>
> **[2:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=165)** If we want to create our own managed property I just click on new managed property and we're just going to say demo and we'll say managed.
>
> **[2:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=175)** I'll just say demo man prop for demo managed property.
>
> **[2:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=179)** I could give a description if I want.
>
> **[3:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=181)** I have to decide what type of property it is if it's text or if it's a yes or no.
>
> **[3:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=185)** That's the only options we have.
>
> **[3:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=186)** The other ones are grayed out.
>
> **[3:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=188)** There are some characteristics like if we want it searchable, queryable, retrievable, maybe allow multiple values.
>
> **[3:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=195)** You'll notice for a refinable and sortable that these are also grayed out with the word no.
>
> **[3:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=200)** So I can't do anything with that.
>
> **[3:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=202)** There are a few more options that we have here but I'm going to kind of scroll down past these check boxes.
>
> **[3:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=206)** You don't need me to read them all to you.
>
> **[3:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=208)** The main part I want you to see is down at the bottom here where we talk about a mapping to a crawled property.
>
> **[3:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=214)** To get this property into the search index I have to map it to some crawled property.
>
> **[3:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=220)** So I'm going to click on add a mapping.
>
> **[3:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=223)** And this is where we see that same property list of the crawled properties.
>
> **[3:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=228)** We saw that it's literally this exact same list when we clicked on the crawled properties before.
>
> **[3:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=232)** Now I do want to tell you this interface is a little bit weird because this scroll bar is for the main screen which just gets us down to like OK and stuff like that.
>
> **[4:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=242)** This scroll bar is grayed out and isn't used.
>
> **[4:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=245)** In order to scroll through this list you have to click these arrows.
>
> **[4:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=249)** So you click the arrow to the right and it jumps to the next sheet of property listings.
>
> **[4:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=255)** Okay? So you got to go left and right with these arrows.
>
> **[4:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=258)** You can also do it by category, right?
>
> **[4:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=260)** So I could say like, just gimme the people category and now it's only showing me the crawled properties that are part of the people category.
>
> **[4:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=268)** So to move this along, let me just go ahead and just kind of randomly pick, I'll do people about me.
>
> **[4:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=274)** I'll scroll this down, I'll click OK.
>
> **[4:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=277)** It resets this window back to the top.
>
> **[4:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=280)** So I'm going to scroll back down again.
>
> **[4:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=283)** And now we only have, well first of all we can see we have people about me here and we can add additional mappings, okay?
>
> **[4:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=291)** You don't have to do just one, you can always add more.
>
> **[4:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=294)** And then you also could remove a mapping if you don't want it anymore.
>
> **[4:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=297)** But we do have one last thing and that is to decide do we want to include content from all crawled properties or do we want to include content from the list of crawled properties?
>
> **[5:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=307)** So that's these, the first one that's not empty, okay?
>
> **[5:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=312)** So you have to make that decision.
>
> **[5:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=314)** And then just click OK.
>
> **[5:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=316)** And now if I were to look at the list and I will tell you this interface is a little bit weird.
>
> **[5:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=321)** If I scroll down this list, I actually get to the bottom and I can't go any further.
>
> **[5:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=327)** There's no arrows.
>
> **[5:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=328)** It is definitely a little bit of a weird interface that they have right now but I could certainly search.
>
> **[5:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=333)** So if I just put in demo and I search or really it's not search as much as filter.
>
> **[5:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=339)** I'm filtering anything that has demo.
>
> **[5:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=341)** There I can see demo man prop and you can see that it's mapped to people about me.
>
> **[5:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-the-search-schema?u=76281980&t=348)** And that's how you can go ahead and set up your own managed properties.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (3), this. (2), for, (1)
> **UI Navigation:** click on (6), scroll down (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Manage result sources
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=0)** - [Instructor] Result sources limit searches to certain content or to a subset of search results.
>
> **[0:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=7)** Now, as a SharePoint online administrator, you can manage result sources for all site collections and sites within your tenant.
>
> **[0:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=15)** If you were a site collection administrator or a site owner, well then, you would be able to manage the result sources for either the site collection or the specific site, respectively.
>
> **[0:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=26)** With the classic search experience, you have a choice.
>
> **[0:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=30)** You can create your own result source, or you can use one of the predefined result sources that are already built in.
>
> **[0:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=37)** So let's take a quick look.
>
> **[0:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=38)** Here we're in the search administration, and there is an option for managing result sources, so let's go ahead and click on that.
>
> **[0:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=48)** As you can see here, I had mentioned that there are some predefined result sources that you can use.
>
> **[0:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=54)** There's 17 of them as of right now.
>
> **[0:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=57)** Okay, I know a short while ago, there were only 16.
>
> **[0:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=59)** They've added a 17th, and there may be more by the time you're looking.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=63)** Or you can create your own, right up at the top where it says "New Result Source".
>
> **[1:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=68)** So I'm going to click on that, and it's fairly straightforward, but we'll go through this.
>
> **[1:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=74)** I'll just call it "DemoRS" for result source.
>
> **[1:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=78)** I could give it a description if I wanted to.
>
> **[1:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=81)** I have to choose what protocol I'm going to use, whether it's local or remote SharePoint, or we could even use OpenSearch, in the event that we were using something that uses that protocol.
>
> **[1:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=92)** If you choose SharePoint, which is what I'm going to leave it, you'll notice then we can decide the type.
>
> **[1:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=98)** We can either do SharePoint search results or people search results.
>
> **[1:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=101)** And keep in mind, as I'm going through all of these, there's very descriptive information as to what this means, right?
>
> **[1:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=108)** Meaning the SharePoint search results, it tells you, it'll search over the entire index.
>
> **[1:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=113)** People search results, it'll enable query processing specific to people search, such as phonetic name matching or nickname matching.
>
> **[2:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=123)** Okay? So it actually tells you what it means to make either selection.
>
> **[2:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=128)** We could also choose whether we're going to allow partial search results or not.
>
> **[2:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=132)** Keep in mind that the default is that you do allow it, and you have to check the box if you don't want to allow it.
>
> **[2:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=139)** Then we have our query transform, where we have 3 options.
>
> **[2:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=143)** We can either take the default, we can just keep the default search terms.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=148)** We could type in our own query.
>
> **[2:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=150)** I'm not even going to get into teaching you how you would do that or how you come up with that.
>
> **[2:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=154)** That's a whole separate lesson, if you are familiar with how to do that, or along those same lines, you could launch the Query Builder.
>
> **[2:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=161)** Same thing. It's not part of this lesson.
>
> **[2:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=163)** I'm just letting you know that these are your 3 options.
>
> **[2:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=168)** We have our default authentication, and simply click save.
>
> **[2:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=172)** So like I said, it's pretty straightforward.
>
> **[2:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=174)** Wasn't a whole lot to show you there.
>
> **[2:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=176)** You give it a name, you make a couple of option selections, and just like that, you have a defined result source.
>
> **[3:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=184)** Now, the one other thing I want to mention before we go is that you'll notice that on the list of the 17 that were built in, one of them is checked as being the default, okay?
>
> **[3:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=195)** And it's the local SharePoint results. That's the default.
>
> **[3:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=198)** If we want to change that, all we have to do is click on the result source that we want to change it to.
>
> **[3:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=203)** So let's say we wanted to change it to the custom one that we just created.
>
> **[3:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=208)** When you hover over the name, there's a little down arrow that comes up over here, and then this is where I could go ahead and I could set this as default.
>
> **[3:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=218)** Now, I'm not going to click that.
>
> **[3:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=220)** I don't want to change anything.
>
> **[3:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=221)** I'm the system here, because I didn't create anything that's actually usable.
>
> **[3:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-result-sources?u=76281980&t=226)** I just wanted to be able to demonstrate to you how you could go ahead and create your own result source.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default, (2), default. (2), this. (1), type. (1)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), just like (1)
> **Warnings:** keep in mind (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Manage query suggestions
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=0)** - [Instructor] Query spelling suggestions are words that appear below the search box as a user begins to type a query.
>
> **[0:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=7)** Now, SharePoint will automatically create a query suggestion once you have clicked a search result for a query at least six times.
>
> **[0:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=16)** These automatic query suggestions are generated daily for each result source and each site collection, so keep in mind that these query suggestions can be different based upon different result sources or site collections.
>
> **[0:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=29)** Now you can manually create your own list of query suggestions and then import them into SharePoint.
>
> **[0:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=36)** But keep in mind that any manual query selections that you enter will apply to all result sources and all site collections, and will also apply to both search experiences regardless if its Modern or Classic.
>
> **[0:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=48)** So let's go take a look.
>
> **[0:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=49)** Okay, there's not much to look at here, but let's at least see what it looks like here.
>
> **[0:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=53)** We're in the search administration center here, and there is an option for query suggestion settings.
>
> **[1:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=61)** So let's click on that.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=63)** So as you can see here, there's not much to these settings, right?
>
> **[1:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=67)** We either are going to show search suggestions, or you can clear the checkbox, and not show search suggestions, so it's basically just turning it on or off.
>
> **[1:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=76)** You can choose what language it's going to be in, but the main thing would be down at the bottom, if you want to go ahead and manually add your own suggestions, you have the ability to create a text file, and I mean literally just a text file, open up Notepad or Word or whatever it may be, and it's just going to be a file that's going to have a word on each line, just a word, and then the next line, another word, next line, another word.
>
> **[1:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=104)** And if you were to import that file, you'll see there's two different places we can import it.
>
> **[1:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=109)** There's the Always Suggest Phrases and there's the Never Suggest Phrases.
>
> **[1:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=114)** So you can import in both cases.
>
> **[1:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=118)** And some examples might be you may want to always suggest certain phrases or terms that are common in your business, in your industry, things like that.
>
> **[2:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=131)** The never suggest phrases, that's a little bit more of a struggle for me to give you an example, but you may want to make sure that the automated system doesn't pull up certain phrases that might be inappropriate or even if something might be offensive.
>
> **[2:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=149)** So that would be a reason to go ahead and add things that are never suggested, that are forbidden from being suggested.
>
> **[2:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=156)** And just so you know, if you do end up importing one of these lists, and then down the road you want to review that list and maybe even modify it, if you don't have that text document saved, you do have the ability to export the current list to a text file.
>
> **[2:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=173)** Now, if I were to click export to text file right now, all I would get is a blank document 'cause I don't have anything in there.
>
> **[3:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=180)** But all I'd have to do to finish this up is just set click Save Settings, and that's it.
>
> **[3:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-query-suggestions?u=76281980&t=185)** That would be how we can go ahead and manage our query suggestions and add manual, always suggest, or never suggest lists.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **UI Navigation:** click on (1), checkbox (1)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### View search usage reports
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=0)** - [Instructor] As a SharePoint administrator in your organization, it's possible that you might get asked questions about search usage.
>
> **[0:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=6)** So, some common examples might be things like what are the top queries on my site?
>
> **[0:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=11)** And I might even want to know that by day or maybe per month.
>
> **[0:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=15)** How many search queries are users performing as a whole?
>
> **[0:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=19)** Or maybe on average?
>
> **[0:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=20)** What queries are getting low clicks or are they just not showing up in the results at all?
>
> **[0:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=26)** Or how often are the query rules firing?
>
> **[0:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=29)** And how often do people click the promoted results?
>
> **[0:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=32)** These are just some examples.
>
> **[0:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=35)** So what I'd like to do is show you kind of where you can see these reports that will give you the answers to some of these questions.
>
> **[0:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=42)** So here in the search administration window down near the bottom, I actually have to scroll down a little bit.
>
> **[0:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=48)** You'll see there's an option here for view usage reports.
>
> **[0:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=52)** So let's click on that.
>
> **[0:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=54)** Now, there's nothing to configure here and there's really nothing to see if we were to actually try to look at a report because this is a newly created demo environment that we've basically done nothing.
>
> **[1:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=66)** But I do want you to see what options we have.
>
> **[1:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=70)** At the top, we have a report, a usage report here that says number of queries, and it gives a very good description.
>
> **[1:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=77)** This report shows the number of search queries performed, kind of directly what it says it is.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=83)** But then if we go down below, we have eight search reports.
>
> **[1:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=86)** But believe it or not, it's really only four search reports.
>
> **[1:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=90)** They're each done by day or by month.
>
> **[1:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=94)** So the four reports are top queries, abandoned queries, no result queries, or query rule usage.
>
> **[1:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=102)** So the top queries, again, this report shows you the most popular search queries.
>
> **[1:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=108)** So that's what that report's going to show you.
>
> **[1:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=110)** And you would use this report to understand what types of information visitors are actually looking for whereas the abandoned queries, this report shows popular search queries that received low click through.
>
> **[2:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=124)** So you would actually use that report to identify search queries that might create a dissatisfaction so you could use that for improvement.
>
> **[2:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=133)** Along those same lines, we also have the no result queries.
>
> **[2:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=137)** Now, this report shows popular search queries that returned no results.
>
> **[2:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=141)** So again, that's going to show dissatisfaction to help you with improvement.
>
> **[2:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=146)** And then finally, we have the query rule usage.
>
> **[2:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=150)** This report shows how often query rules fire, how many dictionary terms they use, and how often users click their promoted results.
>
> **[2:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=160)** So, this report would be used to see how useful your query rules and promoted results are to the users.
>
> **[2:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=169)** Now I get it.
>
> **[2:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/view-search-usage-reports?u=76281980&t=171)** I know that I basically just read this entire screen to you, but I did want to take you through it so you could understand that you have some very valuable usage and search reports here and wanted to make sure you knew how to get to them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **UI Navigation:** scroll down (1), click on (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 9. Managing SharePoint Policies

#### Manage sharing in SharePoint
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=0)** - [Instructor] As a Microsoft 365 Global administrator or SharePoint administrator you have the ability to manage your sharing permissions.
>
> **[0:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=10)** And here's what's interesting.
>
> **[0:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=12)** Even though this course is specifically about SharePoint we actually manage sharing for both SharePoint and OneDrive in the same place.
>
> **[0:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=21)** So let's take a look.
>
> **[0:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=22)** Here in the SharePoint admin center, over on the left you'll see there's a section called Policies.
>
> **[0:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=27)** And if I expand Policies, that's where we find our sharing settings.
>
> **[0:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=32)** So I'm going to click on Sharing.
>
> **[0:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=33)** I just want to take you through and see all the different sharing settings we have available to us.
>
> **[0:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=39)** First, right at the top we talk about external sharing, right?
>
> **[0:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=42)** Which means content can be shared with who.
>
> **[0:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=45)** And this is, I will point out, I mentioned about SharePoint and OneDrive.
>
> **[0:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=49)** You'll notice both SharePoint and OneDrive are managed from the same place.
>
> **[0:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=54)** So what are our options?
>
> **[0:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=55)** Well, on the right here, you'll see we can say that content can be shared with anyone.
>
> **[1:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=60)** Content can be shared with new and existing guests.
>
> **[1:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=63)** Maybe content can only be shared with existing guests.
>
> **[1:08](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=68)** Or the most restrictive would be only people in your organization.
>
> **[1:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=72)** So as you can see, this is going from the least restrictive to the most restrictive.
>
> **[1:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=76)** And they have that here, most permissive, least permissive.
>
> **[1:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=81)** These are sliders.
>
> **[1:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=82)** So if I grab this slider and pull it down, you see what's happening?
>
> **[1:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=88)** As I pull SharePoint down, OneDrive goes with it.
>
> **[1:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=93)** And I can go all the way down with that if I want.
>
> **[1:35](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=95)** But now watch what happens if I bring SharePoint back up again.
>
> **[1:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=101)** OneDrive does not go with it.
>
> **[1:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=103)** In other words OneDrive can only be as permissive as SharePoint is, okay?
>
> **[1:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=110)** There's no way to make SharePoint be very restricted and OneDrive, I can't drag, I'm trying right now, I know you can't see it, but I'm trying to click and drag this up and it won't go, okay.
>
> **[2:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=121)** Whereas again, if I bring SharePoint back up then I can bring OneDrive back up again.
>
> **[2:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=126)** All right, so that's the most basic sharing setting that we have is the external sharing.
>
> **[2:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=132)** And speaking of the external sharing you'll notice here it says you can further restrict sharing for each individual site and OneDrive.
>
> **[2:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=141)** So let me show you how that's done.
>
> **[2:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=143)** I'm going to show you how to configure it for an individual site.
>
> **[2:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=147)** If I go back to my active sites and then I just pick on a site.
>
> **[2:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=151)** So we'll say, here I have my com site.
>
> **[2:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=153)** I'm going to click the dot next to it.
>
> **[2:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=156)** Up at the top you'll see there's an option for sharing.
>
> **[2:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=159)** So I'm going to click on Sharing.
>
> **[2:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=161)** And now it's not a slider, but it is the same four settings.
>
> **[2:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=166)** Anyone, new and existing, existing, or only people in your organization, no external sharing is allowed.
>
> **[2:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=173)** So that's how you can set it for the individual site.
>
> **[2:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=178)** Whereas under policies, when we're clicking on Sharing, that's for the entire organization.
>
> **[3:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=184)** Now there are some more settings to take a look at and they're fairly obvious, but let's just kind of review 'em.
>
> **[3:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=189)** I clicked a little expansion here for more external sharing settings.
>
> **[3:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=193)** We can limit external sharing by a specific domain.
>
> **[3:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=198)** If I check that box, you see I can then add domains that are allowed to be shared with.
>
> **[3:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=202)** We can allow only users in specific security groups to share externally.
>
> **[3:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=206)** And again, if I check the box it'll ask what groups are allowed to do it.
>
> **[3:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=211)** Guests must sign in using the same account to which sharing invitations are sent.
>
> **[3:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=216)** This is actually something that turns out to be a big deal.
>
> **[3:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=218)** I've run into this problem a number of times where people have shared something with me.
>
> **[3:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=222)** They send it to one email, but then I want to go ahead and actually sign in with something different.
>
> **[3:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=228)** So if that box is checked, that wouldn't be allowed.
>
> **[3:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=232)** Allow guests to share items they don't own.
>
> **[3:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=234)** That's the only thing that is checked by default.
>
> **[3:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=236)** Guest access to a site or OneDrive will expire after a certain number of days.
>
> **[4:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=242)** And people who use a verification code must reauthenticate after a certain number of days, okay?
>
> **[4:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=246)** So those are the additional settings you can set.
>
> **[4:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=249)** And they're pretty straightforward.
>
> **[4:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=251)** As far as file and folder links, choose the type of link that's selected by default when users share files and folders in SharePoint and OneDrive.
>
> **[4:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=260)** The default is anyone with the link.
>
> **[4:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=264)** I could make it only people in my organization, or I could even make it specific people, only the people that the user specifies.
>
> **[4:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=272)** It defaults to actually being, you'll notice all of the defaults are pretty wide open, right?
>
> **[4:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=277)** External sharing.
>
> **[4:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=279)** Most permissive.
>
> **[4:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=280)** Allow guests to share items they don't own.
>
> **[4:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=282)** Anyone with a link, right?
>
> **[4:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=284)** That's the defaults.
>
> **[4:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=285)** Your management would be locking this down.
>
> **[4:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=288)** Choose the permissions that selected by default for sharing links.
>
> **[4:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=292)** Are they going to be view only or will they have edit capabilities?
>
> **[4:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=295)** Again, it's more permissive, or least restrictive depending on how you want to word it.
>
> **[5:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=301)** You can choose expiration and permissions for any one links.
>
> **[5:05](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=305)** These links must expire after a certain number of days and you can give specific permissions, as you see here, for files and folders.
>
> **[5:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=313)** Okay, we have different options on how permissive we want it to be.
>
> **[5:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=317)** There are three other settings.
>
> **[5:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=318)** And that is simply to show owners the names of people who viewed the files in their OneDrive.
>
> **[5:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=323)** Let site owners choose to display the names of people who viewed files or pages in SharePoint.
>
> **[5:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=328)** And use shortcut links for sharing files and folders.
>
> **[5:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=330)** Those are checked by default.
>
> **[5:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-sharing-in-sharepoint?u=76281980&t=333)** So here we can see what the default settings are for sharing and how we can go ahead and modify them to fit our individual organizational needs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default. (2)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** click on (2)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Manage access control in SharePoint
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=0)** - [Instructor] Security is a vital component in any SharePoint environment, pretty much as it is in any environment, really.
>
> **[0:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=7)** But as far as SharePoint's concerned, I'd like to show you one aspect of security which is called access control.
>
> **[0:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=15)** So here in the SharePoint admin center, in the left hand side, under a section called policies, if I expand that, here we find access control.
>
> **[0:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=24)** When I click on it, you'll see here that it says "Use these settings to restrict how users are allowed to access content in SharePoint."
>
> **[0:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=31)** And I will point out that similar to the sharing settings which were managed for both SharePoint and OneDrive in one place, so are these access control settings.
>
> **[0:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=40)** We have SharePoint and OneDrive.
>
> **[0:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=42)** All right, well you see here we've got one, two, three, four, five options here.
>
> **[0:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=48)** So the top one says unmanaged devices.
>
> **[0:51](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=51)** Now I'm going to click on it, but I'm going to tell you that there's nothing I can really do here.
>
> **[0:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=56)** And the reason why is because I have to be using enterprise mobility and security.
>
> **[1:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=61)** In other words, I have to be doing some form of device management in order for me to be able to do what it says this setting is supposed to do.
>
> **[1:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=69)** It says restrict access from devices that either are not compliant, based upon certain security rules you have set up, or joined to an appropriate domain.
>
> **[1:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=79)** I can't control that unless I have that functionality within my organization.
>
> **[1:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=86)** And I don't have that here 'cause this is just a demo organization I set up and that's a whole different course on on enterprise mobility and management.
>
> **[1:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=94)** So let's move along here to the next one.
>
> **[1:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=96)** Idle session signout.
>
> **[1:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=99)** Well, this is where it says we will automatically sign out users from inactive browser sessions.
>
> **[1:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=104)** If someone gets up and walks away, that's a potential security vulnerability.
>
> **[1:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=109)** So let me click on that and you'll see here that it's off by default, but if I turn it on, well, now we get to determine how long a session can sit idle before we go ahead and sign them out.
>
> **[2:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=122)** It defaults to one hour, but you'll see here you could do it for less or more, whatever makes sense for your organization.
>
> **[2:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=129)** You can also decide if you're going to give users notice, in case maybe they are sitting at their desk, the system is just sitting idle and you just want to say, "Hey, do you want to stay signed in?
>
> **[2:21](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=141)** Are you still sitting here?"
>
> **[2:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=143)** You probably have seen that.
>
> **[2:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=144)** I know I have, especially when you're on a banking application or something like that.
>
> **[2:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=148)** And those websites, a lot of times they will do that.
>
> **[2:30](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=150)** They'll come up and say, "Hey, you've been idle for a while.
>
> **[2:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=153)** I'm going to sign you out in X-some number of minutes."
>
> **[2:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=157)** The third item on the list is network location, where you're allowing access only from specific IP addresses.
>
> **[2:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=163)** So if I click on that and turn that on, now I can enter, I don't know about entering specific IP addresses.
>
> **[2:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=170)** I mean, that's getting very restrictive, but you could certainly do a range of IP addresses.
>
> **[2:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=175)** So you might do a range that is specific to your organization of people you know that you have users that should be accessing SharePoint.
>
> **[3:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=184)** So you could configure that.
>
> **[3:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=187)** And then we have apps that don't use modern authentication.
>
> **[3:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=190)** Block access from Office 2010 and other apps that don't enforce device-based restrictions.
>
> **[3:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=198)** Not a whole lot we can do there.
>
> **[3:20](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=200)** It's we're either allowing access or blocking access.
>
> **[3:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=202)** That's it. Nothing else to do there.
>
> **[3:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=205)** And then finally, restrict OneDrive access.
>
> **[3:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=209)** It says "Restrict access to OneDrive content by security group," so if I click on that, I can have a checkbox to say I want to do this, and then of course, I can add which security groups we're going to go ahead and allow access from.
>
> **[3:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/manage-access-control-in-sharepoint?u=76281980&t=224)** So as you can see, this is a good way to control who has access to the information on your SharePoint sites and potentially even where they're able to access it from.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), from. (2), default, (1), while. (1), finally, (1)
> **UI Navigation:** click on (5), checkbox (1)
> **Definitions:** is a  (2), is called (1), in other words (1)
> **Prerequisites:** set up (2), configure (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 10. Monitor SharePoint Online

#### SharePoint activity reports
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=0)** - [Instructor] With activity reports in the Microsoft 365 Admin Center, you can easily see how people in your organization are using the various Microsoft 365 services.
>
> **[0:12](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=12)** Now, one of those services we've been talking about throughout this course, and that is SharePoint.
>
> **[0:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=17)** So that means that there will be a SharePoint activity log that we can look at.
>
> **[0:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=23)** So how do we get there?
>
> **[0:25](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=25)** Well, the main thing I want to tell you is that this activity report is found in the Microsoft 365 Admin Center, not the SharePoint Admin Center.
>
> **[0:38](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=38)** But believe it or not, you can get to it from the SharePoint Admin Center.
>
> **[0:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=43)** So here we're looking at the SharePoint Admin Center and I'm right on the Home dashboard here.
>
> **[0:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=49)** And if I scroll down one of the cards that's there by default, and if it's not, you could always add it.
>
> **[0:55](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=55)** We have the ability to add cards.
>
> **[0:57](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=57)** But one of the cards that's there is SharePoint file activity.
>
> **[1:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=62)** Now it's just showing you a little bit of a report here.
>
> **[1:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=66)** It says there's 13 SharePoint files.
>
> **[1:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=69)** The legend down here talks about which ones have been viewer edited, which ones are synced, which ones shared internally, externally, et cetera.
>
> **[1:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=77)** But you'll also notice that if you hover over the words SharePoint file activity, it's an actual link.
>
> **[1:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=83)** And if I click on that link, it opens up a new tab.
>
> **[1:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=87)** But I want you to notice that that new tab is the Microsoft 365 Admin Center.
>
> **[1:34](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=94)** So technically it's just taking you back into the Microsoft 365 Admin Center.
>
> **[1:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=99)** And in fact, I'd like you to kind of just quickly observe this screen.
>
> **[1:45](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=105)** You don't need to memorize anything specific.
>
> **[1:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=107)** I just want you to have a general idea of what the screen looks like because I'm going to show you the other way to get here.
>
> **[1:53](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=113)** All right, so I'm going to close this window and I'm going to go back to the Microsoft 365 Admin Center.
>
> **[2:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=122)** Here in Microsoft 365 Admin Center, if I click Show all, and then you'll see there's an option here for reports.
>
> **[2:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=129)** If I expand that, there's an option for usage.
>
> **[2:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=133)** Now you don't see activity, you see usage but when you click on usage, you'll see here that there are a number of reports for all sorts of different services throughout Microsoft 365.
>
> **[2:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=146)** And if I scroll down here's a section that says SharePoint files.
>
> **[2:31](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=151)** If I click on view more, that gets us right back to the exact same place.
>
> **[2:37](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=157)** Now, I'd like to show you a third way actually that you can get there.
>
> **[2:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=162)** And that is, again, if we go under reports and then usage, instead of having to scroll anywhere and try to find a card, I want you to notice that when we get to the usage report section, over on the left, you have all your different services.
>
> **[2:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=179)** And if I click on SharePoint, look at that, yet again took us to the exact same place.
>
> **[3:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=187)** Let me go ahead and minimize that as much as I can.
>
> **[3:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=189)** Get that out of the way.
>
> **[3:10](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=190)** So here you'll see here that even though we're calling usage, there's two tabs.
>
> **[3:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=195)** There's activity and site usage.
>
> **[3:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=196)** And we're on activity right now.
>
> **[3:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=198)** So what it's showing us is the activity of our files, our pages, and our users.
>
> **[3:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=209)** It breaks it down into those three charts.
>
> **[3:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=212)** And then there's always a legend at the bottom as far as viewer edited, synced, pages visited, viewed or edited, synced.
>
> **[3:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=219)** I also would like to point out that the information you're seeing here is very minimal.
>
> **[3:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=224)** There's just not a lot of activity going on here.
>
> **[3:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=226)** Why?
>
> **[3:47](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=227)** Well, because this is just a brand new trial setup that was created just for the purpose of creating this course, right?
>
> **[3:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=236)** So we haven't really done anything to see numbers here.
>
> **[3:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=239)** Now, if I scroll down a little bit, you'll see here that there is a section where I can see everything broken down into numbers.
>
> **[4:09](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=249)** And this is kind of a weird interface, I have to scroll all the way down in order to get this scroll bar that I can then scroll to the right if there's more columns to see.
>
> **[4:19](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=259)** And there's an option here all the way to the right for Choose Columns.
>
> **[4:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=264)** I think that's kind of weird that the Choose Columns is like part of the columns themselves.
>
> **[4:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=269)** I wish they would've put it maybe on top somewhere.
>
> **[4:32](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=272)** But if I click on Choose Columns, this is where I can choose which columns of information or which data I would like to see in this chart.
>
> **[4:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=282)** All I have to do is either check a box or uncheck a box depending on whether I want to see or not see a column.
>
> **[4:49](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=289)** Now, there's one more thing I'd like to point out here and that is that the usernames, look at that.
>
> **[4:54](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=294)** The usernames are just a bunch of numbers and letters.
>
> **[4:59](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=299)** Well, what does that mean?
>
> **[5:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=300)** Well, you'll notice it says Information is concealed for privacy to see identifiable information.
>
> **[5:06](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=306)** There's a link here, so if you forget what I'm about to show you, you can just click the link and it will walk you through this.
>
> **[5:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=313)** But let me show you where we can make this change.
>
> **[5:16](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=316)** If I go back to home screen, the Microsoft 365 Admin Center, you'll see here there's an option for settings.
>
> **[5:23](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=323)** I will expand that, and then there's Org settings.
>
> **[5:27](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=327)** And in the Org settings, if I scroll all the way down to reports and click on it, you'll see there's a checkbox here for display concealed user, group, and site names in all reports.
>
> **[5:41](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=341)** So if you want to see the actual users groups and site names, uncheck the box, click Save, meaning it will no longer be concealed.
>
> **[5:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=352)** Now if I close that and I go back to my usage reports SharePoint, scroll down, now I can see my actual users and the information about them.
>
> **[6:04](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-activity-reports?u=76281980&t=364)** So that's how we can keep tabs on SharePoint activity using the activity report in the Microsoft 365 admin Center.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), scroll down (4), checkbox (1)
> **Code Keywords:** let (2), default, (1), interface (1), this. (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (2)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### SharePoint usage reports
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=0)** - Another report that we could look at in the Microsoft 365 Admin Center would be the SharePoint Site Usage Report which will help us to understand trends and per site level details for all sites.
>
> **[0:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=14)** So real quick, I want to tell you, this is going to be extremely similar to what I just showed you in the Activity Reports video.
>
> **[0:22](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=22)** But just in case you didn't watch that I am going to walk you through how to get there.
>
> **[0:26](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=26)** In fact, I'm going to show you all three ways.
>
> **[0:28](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=28)** So first of all, here in the SharePoint Admin Center on the home screen, we can scroll down and we'll see here's SharePoint site usage.
>
> **[0:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=36)** And I could hover over the link, click the link, and it would take me into the Microsoft 365 Admin Center.
>
> **[0:43](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=43)** I'm going to actually close that.
>
> **[0:44](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=44)** I won't even wait for it to load because I'm going to take us manually over to the Microsoft 365 Admin Center, where again, I will show you that if we click Show all and then we expand Reports, we can click on Usage.
>
> **[0:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=58)** And this again gets us into all of the reports.
>
> **[1:01](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=61)** And if we either click the SharePoint icon over on the left or if I scroll down to the SharePoint card, I could click View more.
>
> **[1:11](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=71)** Doesn't matter. Either way it's the same thing.
>
> **[1:13](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=73)** It all gets us to this screen right here.
>
> **[1:17](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=77)** It does default to Activity.
>
> **[1:18](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=78)** So if I want to see the Site usage report, I need to click on that tab for Site usage.
>
> **[1:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=84)** No matter how you get here, this is where we want to look at these reports.
>
> **[1:29](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=89)** Now, again, as I said in the last video, not a lot of data here.
>
> **[1:33](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=93)** This is not a production environment.
>
> **[1:36](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=96)** This is just a trial environment that I set up for this course.
>
> **[1:40](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=100)** Minimize that, get it out of the out of our view.
>
> **[1:42](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=102)** Here we can see the total number of active sites.
>
> **[1:46](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=106)** Here we can see the total number of active files and the amount of storage that's used.
>
> **[1:50](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=110)** That's the three charts we have here.
>
> **[1:52](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=112)** Also, we have Pages, Number of page views.
>
> **[1:56](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=116)** Okay, so we can see that.
>
> **[1:58](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=118)** And then all the way down to the bottom, this is where we can now see the chart.
>
> **[2:03](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=123)** And just like we saw before, I can scroll to the right and I can Choose columns where I can choose what exactly I want to see as far as information on this chart.
>
> **[2:14](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=134)** Additionally, and this is something you can do on both the activity and the usage reports, you do have the ability to download an export of this information.
>
> **[2:24](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=144)** The only other thing I will also mention is it was covered in the Activity reports video, by default under where it says Site URL, these would all be just random anonymous letters and numbers for privacy.
>
> **[2:39](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=159)** But I had showed you how you can go into your org settings and take away that privacy and see the actual information that you're looking for.
>
> **[2:48](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/sharepoint-usage-reports?u=76281980&t=168)** So that is how we can go ahead and take a look at the Microsoft 365 Site Usage reports to help us keep track of our SharePoint site usage.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (2), click on (2)
> **Code Keywords:** for. (1)
> **Env Vars:** url (1)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - another (1)


### 11. Conclusion

#### Continuing learning SharePoint
> [LinkedIn Learning](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/continuing-learning-sharepoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/continuing-learning-sharepoint?u=76281980&t=0)** - Thank you for joining me in this course.
>
> **[0:02](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/continuing-learning-sharepoint?u=76281980&t=2)** I hope you've enjoyed finding out about SharePoint Online as much as I've enjoyed showing it to you.
>
> **[0:07](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/continuing-learning-sharepoint?u=76281980&t=7)** If you want to learn more about Microsoft 365 products, please explore our library as we have a number of courses out there to help you.
>
> **[0:15](https://www.linkedin.com/learning/configure-and-manage-sharepoint-online-22340807/continuing-learning-sharepoint?u=76281980&t=15)** See you next time.

> [!info]- Semantic Content
>
> **Speakers:** - thank (1)


## Path Context

### In [[Optimizing Enterprise Security and Productivity Using Microsoft 365]]
← [[Configure and Manage OneDrive]] | **9 of 11** | [[Office 365 for Administrators- Troubleshooting Issues for Users (Office 365-Microsoft 365)]] →

## Appears In

- [[Optimizing Enterprise Security and Productivity Using Microsoft 365]]

## Related Courses

_Courses sharing skills:_

- [[Learning SharePoint Online]] — SharePoint

---

[↑ Back to top](#)