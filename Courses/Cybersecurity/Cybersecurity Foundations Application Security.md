---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: cybersecurity-foundations-application-security
url: "https://www.linkedin.com/learning/cybersecurity-foundations-application-security"
level: Beginner
updated: 6/23/2023
learners: 177777
skills:
  - Application Security
  - Cybersecurity
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGrScfI1TRbQQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687297743417?e=2147483647&amp;v=beta&amp;t=YiOsK9XA-HeDW9xluX6AGmIF1VM7w_syhNvLLF7vnBk"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Explore a Career in Application Security]]'
next_courses:
  - '[[Penetration Testing Essential Training]]'
path_nav: '[{"path":"Explore a Career in Application Security","position":1,"total":7,"prev":null,"next":"Penetration Testing Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/application-security
  - skill/cybersecurity
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cybersecurity%20Foundations%20Application%20Security.md)

![Cybersecurity Foundations Application Security](https://media.licdn.com/dms/image/v2/D560DAQGrScfI1TRbQQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687297743417?e=2147483647&amp;v=beta&amp;t=YiOsK9XA-HeDW9xluX6AGmIF1VM7w_syhNvLLF7vnBk)

# Cybersecurity Foundations Application Security

> With the application security field constantly evolving due to the development of new technologies and techniques, it’s important to keep abreast of the most recent and common vulnerabilities, and know how to defend applications against them. While securing applications today is very different than it was a few years ago due to the ever-changing nature of the cybersecurity and web development fiel

> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security) | Beginner | 178K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Access Control]]** (2 videos)
- **[[#2. Tainted Input]]** (3 videos)
- **[[#3. Insecure Design]]** (3 videos)
- **[[#4. Industry Trends]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Learn to secure applications
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/learn-to-secure-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/learn-to-secure-applications?u=76281980&t=0)** - [Instructor] Has your online account ever been hacked?
>
> **[0:03](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/learn-to-secure-applications?u=76281980&t=3)** If so, the application's developer could probably have done more to protect you.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/learn-to-secure-applications?u=76281980&t=8)** If not, there are still a couple of things you need to look out for to continue keeping safe online.
>
> **[0:14](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/learn-to-secure-applications?u=76281980&t=14)** I'm going to demonstrate to you how attackers compromised web applications through poor access control, unsanitized user input, and inherently insecure designs.
>
> **[0:23](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/learn-to-secure-applications?u=76281980&t=23)** I'm Emmanuel Chebukati and I've been securely deploying web applications to the public cloud for over a decade.
>
> **[0:30](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/learn-to-secure-applications?u=76281980&t=30)** If you're ready to learn how web applications are compromised and what to do to keep this from happening I invite you to join my LinkedIn learning course on application security.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), public (1)
> **Speakers:** - [instructor] (1)

#### The most reported vulnerabilities today
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/the-most-reported-vulnerabilities-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/the-most-reported-vulnerabilities-today?u=76281980&t=0)** - [Instructor] There are no prerequisites for this course but it is designed for aspiring technology professionals, ranging from students to entry-level cybersecurity engineers.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/the-most-reported-vulnerabilities-today?u=76281980&t=9)** The course is based on the top 10 most reported vulnerabilities on bug bounty programs in the calendar year 2022.
>
> **[0:17](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/the-most-reported-vulnerabilities-today?u=76281980&t=17)** Therefore, completing this course will position an aspiring application security engineer to be able to slot right into a defensive role.
>
> **[0:26](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/the-most-reported-vulnerabilities-today?u=76281980&t=26)** Similarly, the course will educate application developers on the most common mistakes in their field and how to avoid repeating them.
>
> **[0:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/the-most-reported-vulnerabilities-today?u=76281980&t=34)** There is also a chapter dedicated towards industry trends as relates application security and how they impact both cybersecurity engineers and developers alike.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/the-most-reported-vulnerabilities-today?u=76281980&t=43)** You're welcome to pick and choose the information that best fits your needs and academic goals.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 1. Access Control

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Improper authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=0)** - [Narrator] Most applications require authentication to protect the confidentiality of user data.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=5)** This ensures that an individual performing an action is who they say they are.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=10)** Application authentication is typically achieved through a username and password combination and augmented with multifactor authentication nowadays.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=20)** An improper authentication vulnerability occurs when an application does not properly ascertain the identity of a user.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=27)** This leads to account takeovers and data breaches.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=31)** One way an improper authentication vulnerability can occur is when users are allowed access to authenticated functions directly without having to log in first.
>
> **[0:41](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=41)** Another way is when there's a lack of rate limiting on login fields, especially when the field lengths are known.
>
> **[0:48](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=48)** We'll take a look at both scenarios in this video.
>
> **[0:52](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=52)** In this first example, this social media application allows only signed in users to view posts.
>
> **[0:59](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=59)** When a user navigates to the website and enters their credentials, they're able to view the social media posts from their account and from the accounts of other users.
>
> **[1:10](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=70)** Note the URL home.php.
>
> **[1:14](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=74)** Similarly, the user is able to navigate to the All Posts page and view all the public posts on this platform.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=84)** Let's now log out and refresh the page.
>
> **[1:28](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=88)** And when we try to access the homepage directly, we are redirected back to the login page.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=96)** However, when we try and access the All Posts page directly, we're able to view all the public posts of all users without having logged in first.
>
> **[1:49](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=109)** This is the most basic example of improper authentication, and it often occurs when an application employs multiple programming frameworks in one solution.
>
> **[1:59](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=119)** Let's go back to the homepage and look at a more interesting example.
>
> **[2:04](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=124)** In this next example, the user also has the option to request a four-digit one-time password, or OTP, to successfully authenticate.
>
> **[2:14](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=134)** OTPs are becoming an increasingly common authentication flow in order to ease the user experience.
>
> **[2:20](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=140)** The trouble is, however, this page does not implement rate limiting.
>
> **[2:25](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=145)** This means that an attacker can attempt every possible four-digit combination, and one of them would surely work.
>
> **[2:32](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=152)** So the attacker could start at 1000, 1001, and so on and so forth.
>
> **[2:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=162)** The attacker could potentially do this manually or use automation to make it simpler.
>
> **[2:48](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=168)** To test this out in an automated fashion, we can write a simple PHP script to test out every single four-digit number within the range 1000, or a thousand, to 9999, or 9,999.
>
> **[3:04](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=184)** This script is set to alert us when it finds the right four-digit pin.
>
> **[3:08](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=188)** It will then immediately stop execution.
>
> **[3:12](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=192)** Let's run the script from our local machine and see what happens.
>
> **[3:18](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=198)** After a brief period of time, the execution is complete.
>
> **[3:22](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=202)** As you can see, the script iterated through the digits 1000 and found the right four-digit pin at 1032.
>
> **[3:33](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=213)** And indeed, we have been able to log in to the application despite not being a legitimate user, Alice.
>
> **[3:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=222)** Having proper authentication is critical to ensuring the confidentiality of data in your application.
>
> **[3:48](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=228)** As an application security engineer, it is your responsibility to regularly test your application's authentication mechanisms for authentication bypass and implement rate limiting and CAPTCHAs.
>
> **[4:02](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=242)** Also consider the use of third-party authentication tools that you implement properly to ensure that you're working with the latest the market has to offer in terms of authentication protection.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), public (2), require (1)
> **CLI Commands:** php (2), make (1)
> **Env Vars:** url (1), otp (1), php (1)
> **File Paths:** home.php (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### Improper authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=0)** - [Instructor] When developing the access control mechanisms for an application, after you confirm that a user is indeed who they say they are, also known as authentication, you then need to assign them rights and roles on the system.
>
> **[0:13](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=13)** This is known as authorization.
>
> **[0:16](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=16)** Basic system rights include administrator that typically has full access to the system, user that can perform general functions, and reader with read-only access to the system.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=29)** More complex systems have more complex rights and roles, depending on the organizational context.
>
> **[0:36](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=36)** Authorization should be assigned in-line with the information security principle of least privilege, which is to assign a user the least amount of permissions needed for them to execute their work.
>
> **[0:48](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=48)** Improper authorization occurs when a logged-in user is able to perform functions beyond the rights that have been assigned to them.
>
> **[0:55](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=55)** Not to be confused with improper authentication, authentication is about who you are, whereas authorization deals with what you're allowed to do.
>
> **[1:05](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=65)** Examples of improper authentication are far and wide.
>
> **[1:08](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=68)** However, the most basic example involves modifying URL parameters dealing with system roles to gain privilege access.
>
> **[1:16](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=76)** The impact of this vulnerability is that an attacker may be able to create, read, update, or delete data that they're not authorized to.
>
> **[1:26](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=86)** Our sample social media application allows a logged-in user to create posts, such as I'm about to do now, "Hello World!"
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=96)** The same application allows you to delete your own posts, like I've just done again.
>
> **[1:44](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=104)** And it also allows you to view the public posts of other users, such as this one of Bob and Emmanuel.
>
> **[1:51](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=111)** However, on this system, only an administrator can delete other users' posts.
>
> **[1:58](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=118)** Taking a look at the URL parameters, we can see that there is an HTTP get parameter role currently set to user.
>
> **[2:07](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=127)** In fact, when we get rid of it and refresh the page, seemingly nothing changes, and the application runs as normal.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=135)** As a curious application security engineer, however, you may be tempted to change this user variable to admin.
>
> **[2:24](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=144)** All of a sudden, we seem to have administrator privileges on the system and we can delete other user's comments.
>
> **[2:31](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=151)** For example, I can try and delete Bob's comment, and it's gone.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=157)** And I can also delete Emmanuel's comment, and it's gone.
>
> **[2:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=162)** Taking a look at this line of code, we can see that our problem lies in the fact that the application is trusting user input to grant access to critical functions without validating this specified role against the database.
>
> **[2:56](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=176)** This results in a very simple but devastating improper authentication vulnerability.
>
> **[3:02](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=182)** Such issues usually creep up in systems where new pages and functions were not part of the initial design.
>
> **[3:10](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=190)** Therefore, potential system roles need to be well thought out during the design phase of an application, including how to scale them out as the complexity of the system grows.
>
> **[3:21](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=201)** And when development kicks off, remember never to trust users' input on what roles should be assigned to them.
>
> **[3:28](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=208)** Instead retrieve this information from a trusted source, like the application's database.
>
> **[3:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=214)** During testing, use sample accounts with varying roles to ensure that users cannot execute functions beyond their assigned scope.
>
> **[3:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=222)** And finally, if building and verifying all these roles starts to become a bit cumbersome, you can always explore third-party vendors, like Azure Active Directory or Keycloak and implement them correctly to provide identity and access management services.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (6), public (1), finally, (1)
> **Env Vars:** url (2), http (1)
> **Definitions:** known as (2), is an  (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)


### 2. Tainted Input

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Insecure direct object references (IDOR)
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=0)** - [Instructor] Have you ever wanted to execute a task on a web application, but there was no button allowing you to do so?
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=6)** Well, if an IDOR vulnerability is present, you will be able to execute that task, button or not.
>
> **[0:14](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=14)** An Insecure Direct Object Reference or IDOR vulnerability occurs when an application does not authorize the permissions of a user making a request to a function.
>
> **[0:25](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=25)** The object could be a post on a social media site and the word insecure comes from the lack of authorization checks to ensure that the actioning user can manipulate the object.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=37)** This vulnerability is closely related to improper authorization.
>
> **[0:41](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=41)** However, it may not necessarily involve the outright escalation of privileges.
>
> **[0:46](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=46)** Instead, it is often limited to specific functions.
>
> **[0:52](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=52)** Let's log into our sample social media application with the user Bob.
>
> **[0:58](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=58)** On the homepage of our sample social media application we can see that users can create posts, such as the one I'm about to create, view the posts of other users, such as the ones of Alice and Emmanuel down here, and also delete posts created by them, such as this one right here.
>
> **[1:19](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=79)** As you can see, the delete button is only available to a user who wants to delete their own posts and the delete button is not available when trying to delete the posts of another user.
>
> **[1:31](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=91)** Let's try to delete another comment.
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=93)** But this time, while viewing the network logs in the developer console.
>
> **[1:37](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=97)** On Firefox, the developer console can be accessed by hitting F12 or by right clicking on an empty space and clicking inspect.
>
> **[1:47](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=107)** Navigate to the network tab and in the small settings window on the right, make sure to set persist logs to on.
>
> **[1:56](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=116)** Now let's delete one of our own comments once again and we can see that the request is successful and the comment is gone.
>
> **[2:07](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=127)** On viewing the network logs, we can see that the delete function made a request to the forward slash delete endpoint with a parameter 34.
>
> **[2:16](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=136)** This number 34 looks like a post ID, and if it is indeed a post ID, then it means that the post that came before it, Alice's post probably is 33.
>
> **[2:28](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=148)** So as a malicious actor, we're going to change the post ID from 34 to 33 and resubmit this request.
>
> **[2:36](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=156)** To do this in Firefox, we can right click the last request and click edit and resend.
>
> **[2:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=162)** Navigate down to the body and change it from delete 34 to delete 33, and then click send.
>
> **[2:51](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=171)** When we refresh the page we expect to see Alice's post, the one on top here deleted by the non-ad admin user, Bob.
>
> **[3:01](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=181)** And indeed Alice's post has been deleted.
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=186)** IDOR vulnerabilities come in many other variants and exploiting them has become easier than ever today.
>
> **[3:12](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=192)** They can however be limited by using indirect object references instead of direct references.
>
> **[3:18](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=198)** For example, the post ID in the previous demo could have been a randomly generated number instead of the sequential predictable integer.
>
> **[3:27](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=207)** The random number indirectly represents the post ID and helps prevent this issue because it's harder to guess.
>
> **[3:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=214)** Another prevention mechanism is ensuring that you verify a user's access rights to an object before executing their requested function.
>
> **[3:43](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=223)** This is because random object references can eventually be deciphered or brute forced.
>
> **[3:49](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=229)** Where possible, do this at both frontend and backend levels and do not rely on user supplied information telling you what system rights they have access to.
>
> **[3:58](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=238)** Instead, confirm these permissions from a trusted source like the application's database.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (11), function (3), let (3)
> **Env Vars:** idor (3), f12 (1)
> **Analogies:** such as (3), for example (1)
> **Tools:** firefox (2)
> **CLI Commands:** make (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** means that (1)
> **Best Practices:** make sure to (1)

#### Cross-site scripting (XSS)
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=0)** - [Instructor] When you log into a web application, you're able to browse through pages without needing to keep entering your password for every page that you want to open.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=9)** This is because a secure session cookie was stored in your browser upon successful login, and it is kept there until it expires or until you log out.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=20)** Therefore, if this active session cookie was stolen, this would lead to devastating consequences for the user of the application.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=29)** One such way these cookies are stolen is through a cross-site scripting or XSS attack.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=35)** As the name suggests, this vulnerability allows an attacker to execute scripts on a victim's browser.
>
> **[0:41](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=41)** When these malicious scripts are encountered by the victim's device, the browser proceeds to execute them as if they were trusted code.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=49)** This trust factor means that the malicious script has access to what should have otherwise been sensitive data, like session tokens, cookies, and other sensitive information.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=60)** To demonstrate this vulnerability, let's log into our sample social media application as the user, Bob.
>
> **[1:07](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=67)** Then we'll create a post to the social feed and set the visibility to public, and submit.
>
> **[1:15](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=75)** When we go back, we can see the post has been created.
>
> **[1:19](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=79)** Remember, this social feed is accessible to all logged in users of our application.
>
> **[1:25](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=85)** Next, we'll create another post, but this time entering the following script into the comment box.
>
> **[1:30](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=90)** This simple script grabs the application session token and makes an HTTP request to the website ec.ke which the attacker owns with the session token as a parameter in the URL.
>
> **[1:44](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=104)** Let's submit it, and when we go back and return to the page, we can see that only Harmless post is embedded in the social feed.
>
> **[1:53](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=113)** The rest of the script has ran in the background.
>
> **[1:57](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=117)** Now simulating the attacker, Bob, I will log into the attacker's server and set it up to view live access logs.
>
> **[2:05](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=125)** I'll just create some spaces at the bottom so the incoming logs will be easier to see.
>
> **[2:10](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=130)** Next, I will simulate logging in as Alice and get to view the harmless post.
>
> **[2:18](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=138)** In the background, however, the attacker Bob can see the incoming request and has captured the victim's session token.
>
> **[2:27](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=147)** Let's copy this session token.
>
> **[2:30](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=150)** The attacker Bob is now armed with Alice's session token.
>
> **[2:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=154)** He can now attempt to log in as Alice without even knowing her password.
>
> **[2:39](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=159)** To do this, he can open up the application and add her session token to the cookies in the developer settings.
>
> **[2:46](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=166)** To access the developer settings, you can right click, click on Inspect, navigate to Storage, and you can see that there's a session ID here.
>
> **[2:56](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=176)** Let's double click on that, replace it with Alice's stolen token, and then refresh the page.
>
> **[3:04](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=184)** Bob is now in.
>
> **[3:05](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=185)** Without even knowing Alice's password, he can execute functions impersonating her like creating new posts, and much, much more.
>
> **[3:17](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=197)** This attack could have been prevented by simply filtering the user input better.
>
> **[3:21](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=201)** Ideally, a user should not be allowed to post executable code and or scripts in input fields, and even if they were to, measures such as encoding the output should be taken to prevent the execution of this code.
>
> **[3:35](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=215)** To limit the impact of an XSS vulnerability, set the HttpOnly flag for sensitive cookies to true.
>
> **[3:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=222)** This way, they cannot be accessed on the client's side, and therefore not sent to an attacker's remote server.
>
> **[3:48](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=228)** As an application security engineer, identifying and triaging incidents of XSS will be a primary part of your role.
>
> **[3:55](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=235)** Potential XSS vulnerabilities are typically identified quickest by running an alert script in your input fields.
>
> **[4:02](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=242)** Learn to test these quickly and frequently to keep your application safe.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (1), this, (1)
> **Env Vars:** xss (4), http (1), url (1)
> **UI Navigation:** click on (2), navigate to (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Cross-site request forgery (CSRF)
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=0)** - [Narrator] Imagine innocently clicking on a link to your friend's blog only to discover that the link click was responsible for an unsanctioned action on your social media account.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=10)** Well, this is possible when a cross-site request forgery or CSRF vulnerability is present.
>
> **[0:16](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=16)** With this vulnerability, an attacker is able to trick a victim into making requests to a website that they're authenticated to.
>
> **[0:25](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=25)** Alice decides to log into her social media account and start browsing her feed.
>
> **[0:32](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=32)** She then decides to create a new post and submits.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=39)** Later she decides to check her email and there's a new message from her friend, Bob.
>
> **[0:45](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=45)** Bob says he's launched a new website and he'd like for her to check it out.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=50)** Being the good friend that she is, Alice clicks.
>
> **[0:53](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=53)** She checks out the blog and decides to return back to her social media feed.
>
> **[0:59](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=59)** When she refreshes the page on her social media feed, she discovers that an unwelcome comment was posted on her feed.
>
> **[1:08](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=68)** The time of posting was right around the time that she clicked on Bob's blog.
>
> **[1:13](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=73)** What could have happened here?
>
> **[1:15](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=75)** Taking a look at the code on Bob's blog, that is, the attacker's website, we can see that a form submit request was executed to the social media site with the unwelcome content and because Alice was already authenticated to the social media application from her usual device, the social media site had no reason to doubt the request.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=99)** CSRF can be prevented by the addition of a CSRF token for each request.
>
> **[1:44](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=104)** The attacker is unlikely to know this token and therefore their background request without it will fail.
>
> **[1:50](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=110)** Also highly recommended is the implementation of multifactor authentication for sensitive actions like money transfer.
>
> **[1:58](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=118)** With this in place, even if a CSRF attempt is made, the attacker would still need to enter a one-time password to complete the transaction which they will likely not have access to.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=129)** At the same time, a same-site property can be set in the http cookies to restrict the domains that the session cookies can be used on.
>
> **[2:18](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=138)** This would prevent the victim's active session token from being used to execute sensitive functions.
>
> **[2:24](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=144)** Similarly, you can implement a cross-origin resource sharing or CORS policy to ensure that the web request comes from known websites only.
>
> **[2:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=154)** As an application security engineer, you need to regularly test for this vulnerability and carefully interrogate cases of exemptions.
>
> **[2:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=162)** Policy exemptions often come about when developers are looking for a quick solution to go to production.
>
> **[2:48](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=168)** You ought to be able to tell if these exemptions are valid or if the policy screws can be tightened just a little bit more to make your applications safer.

> [!info]- Semantic Content
>
> **Env Vars:** csrf (4), cors (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [narrator] (1)


### 3. Insecure Design

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Information disclosure
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=0)** - [Instructor] Sometimes ensuring the confidentiality, integrity and availability of systems isn't always about the technical aspects.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=8)** Imagine investing time and resources to secure an application only to leave sensitive credentials available for all to see and access directly.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=18)** Information disclosure or information leakage bugs occur when an application reveals information to its users.
>
> **[0:26](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=26)** Application whose design was skimmed through typically leads to this kind of vulnerability.
>
> **[0:32](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=32)** Other times, the vulnerability comes as a result of improper deployment.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=37)** Information disclosure bugs are some of the easiest to find because they require little or no skill to come across.
>
> **[0:44](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=44)** At the same time, however, they're some of the most devastating bugs.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=49)** Bob is innocently logging into his social media application.
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=54)** When he clicks the Submit button, he sees something odd.
>
> **[0:59](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=59)** Instead of the backend code being executed, it ends up being displayed as plain text with the database credentials therein.
>
> **[1:08](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=68)** Bob now has access to the production database's credentials.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=72)** Backend code may fail to execute during a failed version of an upgrade, for example, PHP upgrade.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=80)** When the error is fixed, Bob decides to create a new post.
>
> **[1:25](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=85)** He enters Hello and he clicks on Submit.
>
> **[1:29](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=89)** But because the application is in debug mode, an error that was accidentally introduced into the code base leads to database credential exposure once again.
>
> **[1:40](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=100)** The impact of the previous two issues could have been less severe if the developers hadn't left credentials in code.
>
> **[1:47](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=107)** Credentials often find their way into code and code repositories because the developers were quickly testing something and forgot to remove the credentials afterwards.
>
> **[1:57](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=117)** Fortunately, however, modern day code repositories like GitHub and GitLab now offer automated scanning for credentials and secrets in code.
>
> **[2:07](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=127)** Let's see how to enable this on GitHub.
>
> **[2:11](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=131)** When logged into your GitHub account, navigate your to project's homepage and then click on Settings.
>
> **[2:19](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=139)** Then scroll down and look for the Code security and analysis on the sidebar, and then scroll all the way to the bottom to Secret scanning.
>
> **[2:29](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=149)** Click on Enable all and Enable all for all eligible repositories.
>
> **[2:36](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=156)** Now let's go back to our code base and attempt to commit a new secret into the code base.
>
> **[2:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=162)** So I'll type a commit message and then click on Commit and then push this up to GitHub.
>
> **[2:53](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=173)** Back on the application, I can see the new secret has been committed into the code.
>
> **[2:59](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=179)** Immediately the commit is successful, I get an email telling me that a secret has been detected in a recent commit.
>
> **[3:07](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=187)** I get a further email saying that the GitHub access token that was found in the commit has been revoked.
>
> **[3:15](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=195)** Back on GitHub, when I navigate to the security dashboard and scroll down to detected secrets, I get to view the same information here.
>
> **[3:27](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=207)** Because the definition of this vulnerability is so wide, prevention will depend on a case-by-case basis.
>
> **[3:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=214)** In general, however, the starting point is agreeing on what constitutes sensitive information within the organization's context.
>
> **[3:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=222)** This is done during the application design phase.
>
> **[3:46](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=226)** During development, regular audits can be run to ensure that this type of information is not disclosed and can extend to error messages to make sure that they are not revealing sensitive information.
>
> **[3:58](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=238)** And upon deployment to production, the servers must be configured correctly and debug mode must be disabled.
>
> **[4:05](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=245)** Most importantly, application secrets must be handled well.
>
> **[4:10](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=250)** This can be done in two ways.
>
> **[4:12](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=252)** The first is via the use of environment variables that are referenced in code.
>
> **[4:17](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=257)** While this is certainly better than committing secrets into code, environment variables are difficult to rotate, encrypt, collaborate on and scale.
>
> **[4:26](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=266)** The second and most preferable way is the use of a secrets management solution such as HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault.

> [!info]- Semantic Content
>
> **Tools:** github (6), gitlab (1)
> **UI Navigation:** click on (3), scroll down (2), navigate to (1)
> **CLI Commands:** find (2), php (1), make (1), aws (1)
> **Code Keywords:** let (2), require (1)
> **Analogies:** imagine (1), for example (1), such as (1)
> **Env Vars:** php (1), aws (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Open redirect
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=0)** - [Instructor] Web applications often integrate redirects to transfer users from one page to another, or to external websites in order to enhance the user experience.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=10)** When left open for all to use, an attacker can use these redirects to transfer users to their own malicious website.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=18)** But why would an attacker not just send the user directly to their malicious link?
>
> **[0:22](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=22)** Well, this is because using the open redirect makes the potential victim believe that the request is coming from a genuine website that they know and use.
>
> **[0:32](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=32)** The impact of this vulnerability is a lot of instances of compromised user credentials and the installation of malware on a victim's computer.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=43)** Alice has received an email asking her to update her social media app, or risk being locked out.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=49)** Alice has been taught to always check the URL in any email before clicking on the link.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=56)** There's even a helpful reminder in the footer of this email asking her to verify that the URL goes to socialmediaapp.xyz before clicking on the link.
>
> **[1:06](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=66)** This link looks legitimate, and so Alice clicks.
>
> **[1:11](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=71)** Upon clicking on the link, the download is initiated and she's redirected to the social media app's thank you page.
>
> **[1:18](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=78)** Once again, the URL is fine and the page is secure, except Alice just downloaded a piece of malware.
>
> **[1:28](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=88)** On inspecting the link again, we can see that the redirect parameter goes to an encoded string.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=95)** Let's copy this entire link and try to decode it with a free online tool.
>
> **[1:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=102)** We can now clearly see that the redirect goes to another website, ec.ke, the attacker's website.
>
> **[1:49](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=109)** The attacker's website then initiates a malicious download before taking us back to the legitimate application's thank you page.
>
> **[1:57](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=117)** Taking a look at our downloads page, we can see that Alice's device has been compromised.
>
> **[2:04](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=124)** Open redirects can be remediated by not having them in the first place.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=129)** In this scenario, the application could have been designed better to not need a redirect and instead, use the direct link to the download page.
>
> **[2:17](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=137)** If you must use a redirect function for internal users, make sure it's not open, and instead, redirect to known links only.
>
> **[2:27](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=147)** And for external-facing sites, include a warning to users that they're about to leave your site for an external site.
>
> **[2:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=154)** Lastly, keenly test download links, login pages, and password reset pages for incidents of open redirects, as these are particularly notorious for this vulnerability.

> [!info]- Semantic Content
>
> **Env Vars:** url (3)
> **Code Keywords:** let (1), function (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Business logic errors
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=0)** - [Instructor] We all like having access to premium features in applications but without having to pay for them.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=6)** One of the ways this can be possible is when a business logic error is present on a web application.
>
> **[0:13](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=13)** Business logic errors are designed flaws in web applications that allow attackers to gain unintended value through the normal use of the application.
>
> **[0:25](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=25)** Our sample social media application offers the promotion of posts as a paid service.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=31)** When we select the post that we want to promote and click Promote, the terms are presented.
>
> **[0:38](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=38)** We can promote individual posts for 24 hours at a cost of $1.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=43)** I'll click Promote Post.
>
> **[0:46](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=46)** The promotion is successful.
>
> **[0:48](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=48)** When we go back to the homepage, we can see that the status has changed from promote to promoted.
>
> **[0:55](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=55)** Now let's do another post.
>
> **[0:57](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=57)** I will go with this one.
>
> **[1:01](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=61)** This time, when it's time to confirm the promotion, I decide that I'm not quite sure about promoting this post until I check with my friend and so I decide to cancel and complete this process later.
>
> **[1:14](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=74)** Upon canceling, however, I am presented with a page with all my recent posts and a chance to promote all of them at a cost of $1.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=84)** I click Promote Post and when I go back to the homepage, all my recent posts are actively being promoted.
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=94)** A breach of integrity of this system has taken place.
>
> **[1:38](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=98)** The business logic should be that if you want to promote multiple posts at the same time, you pay $1 times the number of posts that you want to promote.
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=108)** However, the implemented logic is that you're still being billed the same $1 to promote all poor posts.
>
> **[1:55](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=115)** This poor logic is as a result of bad design and ought to be fixed.
>
> **[2:01](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=121)** Business logic errors are particularly devastating because they can be exploited following the normal use of an application.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=129)** As a result, they're also very difficult to find with security automation tools and you can be sure that when users find such vulnerabilities, they will not report them to the company because we all like free stuff.
>
> **[2:22](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=142)** Be sure to deeply understand what your organization considers value so you can protect it better from business logic issues.
>
> **[2:30](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=150)** Then incorporate this knowledge into application design iterations where you'll be able to spot a flaw before it's coded into the solution.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Cross-References:** go back to (2)
> **Code Keywords:** let (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 4. Industry Trends

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Web application firewall (WAF)
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=0)** - [Instructor] Keeping up with application vulnerabilities can get hectic, especially when developers are committing multiple changes into the codebase every day.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=9)** Fortunately, a Web Application Firewall can protect your application from compromise even if the underlying code is suspect.
>
> **[0:17](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=17)** A Web Application Firewall is deployed in between the customer and the application server.
>
> **[0:23](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=23)** It only sends HTTP traffic to the application once it has been checked and filtered.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=28)** These checks predominantly protect against input-related vulnerabilities such as cross-site scripting and SQL injection.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=35)** Modern WAFs can also protect against cases of insecure design like information disclosure.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=43)** Here, we have a sample social media application that is vulnerable to cross-site scripting or XSS.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=50)** This input-related vulnerability allows an attacker to execute malicious scripts on a victim's browser, often leading to account takeover.
>
> **[0:59](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=59)** As such, when we log in as the user Bob and then post a malicious script into the input field, the XSS vulnerability triggers with the JavaScript alert XSS.
>
> **[1:15](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=75)** Similarly, the underlying text gets posted as well.
>
> **[1:18](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=78)** And when Bob logs out and Alice comes to log in, the script is triggered on Alice's homepage as well.
>
> **[1:28](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=88)** The simplest way of preventing this vulnerability is by preventing scripts from being entered in the database in the first place, input filtering.
>
> **[1:37](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=97)** But a developer is convinced that the input field should not be limited, otherwise it would limit the functionality of the application, and the security engineer was too busy to notice the error.
>
> **[1:49](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=109)** Enter the Web Application Firewall or WAF.
>
> **[1:53](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=113)** Every cloud vendor has their own implementation, but we'll be using Microsoft Azure's Web Application Gateway for this purpose.
>
> **[2:02](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=122)** Let's start by creating the application gateway.
>
> **[2:06](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=126)** We'll click on Create a resource, search for application gateway, then click on application gateway.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=135)** The app gateway sits between the customer and the destination server, and this is where our WAF will be deployed.
>
> **[2:22](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=142)** Click on Application Gateway by Microsoft and then click on Create.
>
> **[2:27](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=147)** Set the resource group appropriately and name the application gateway, in my case L-I-L-A-G.
>
> **[2:38](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=158)** Set the region appropriately, and set the tier to WAF V2 or Web Application Firewall V2.
>
> **[2:47](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=167)** In my case, I'm going to disable autoscaling and set the instance count to one.
>
> **[2:53](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=173)** Next on the WAF Policy, I'm going to create a new WAF policy, name it myWafPolicy, and then click on OK.
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=186)** Under Virtual network, I'll select the virtual network I currently have running and then select an appropriate subnet for my application gateway, agSubnet.
>
> **[3:16](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=196)** I had created this in advance.
>
> **[3:19](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=199)** Next, I'll click on Frontends.
>
> **[3:21](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=201)** On the Frontends tab, set the Frontend IP address type as Public, and select an IP address that can be associated with this application gateway.
>
> **[3:31](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=211)** I already have one that's available and free, so I'll click on agPublicIP and then proceed to Backends.
>
> **[3:38](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=218)** On the Backends tab, I'm going to click on Add a backend pool and name it appropriately, for example, agBackendPool.
>
> **[3:47](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=227)** And then on the Target type, I'm going to select Virtual machine and choose the target of the virtual machine that I currently have serving my web application, ssvm1, and then click on Add.
>
> **[4:02](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=242)** Next, I'll proceed to Configuration.
>
> **[4:05](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=245)** Here, we need to create a routing rule to route traffic from the frontend public IP of the application gateway to the backend pool that contains the virtual machine with the application.
>
> **[4:18](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=258)** So I'll click on Add a routing rule and then give the routing rule a name, for example, agRoutingRule.
>
> **[4:27](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=267)** I'll set the priority as one and then create a new listener with the name agListener.
>
> **[4:35](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=275)** Then I'll click on Backend target and set the backend target as agBackendPool that we just created earlier.
>
> **[4:43](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=283)** On the Backend settings, I'm going to click on Add new, name the backend settings, for example, rrSettings.
>
> **[4:52](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=292)** Leave the defaults as they are and click on Add.
>
> **[4:56](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=296)** I'll verify that my routing rule is okay and then click Add.
>
> **[5:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=300)** Then I'll proceed to Tags, you can add tags as appropriate, and then click on Review and create.
>
> **[5:08](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=308)** Once the validation passes, click on Create.
>
> **[5:12](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=312)** This deployment will take about seven minutes.
>
> **[5:17](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=317)** When the deployment is complete, click on Go to resource group, then identify the application gateway and click on it.
>
> **[5:26](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=326)** Now, we need to do two things.
>
> **[5:28](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=328)** We need to change the WAF policy from detection mode to prevention mode.
>
> **[5:33](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=333)** And to do that, we'll click on the WAF policy and then click on Switch to prevention mode.
>
> **[5:41](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=341)** This will ensure that the WAF proactively defends against threats.
>
> **[5:45](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=345)** With that complete, we also need to change the DNS record of the application from pointing directly to that VM's IP to now point to the WAF's IP.
>
> **[5:57](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=357)** So we'll go back to the resource group.
>
> **[6:01](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=361)** Select the application gateway resource, copy the new public IP address, and then go to our DNS records provider and change this record from the old IP, which is the virtual machine's IP, to the new IP, which is the Web Application Firewall's IP, and click on Save.
>
> **[6:23](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=383)** With the WAF now deployed, let's log back in to our sample social media application with the user Bob.
>
> **[6:30](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=390)** Now, when Bob tries to submit the same malicious script into the database, he is met with a 403 Forbidden error by Microsoft-Azure-Application-Gateway/v2.
>
> **[6:41](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=401)** The underlying code is still vulnerable, but the WAF is protecting the exploitation of common vulnerabilities on this application.
>
> **[6:51](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=411)** Web Application Firewalls can be configured in detection or prevention mode to suit your needs.
>
> **[6:57](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=417)** Learning how to configure and tweak a WAF so as to maintain security but limit false positives is definitely something an application security engineer ought to know how to do.
>
> **[7:08](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=428)** Whether you have one or not, continue to insist on developers writing secure code.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (20), select the (2), go to (2), switch to (1)
> **Env Vars:** waf (12), xss (3), dns (2), http (1), sql (1)
> **Code Keywords:** public (3), let (2), case, (1), type, (1), new, (1)
> **Code Identifiers:** agbackendpool (2), mywafpolicy (1), agsubnet (1), agpublicip (1), agroutingrule (1)
> **Analogies:** for example (3), such as (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### DevSecOps
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=0)** - [Instructor] The earlier we can catch application security issues in the development lifecycle, the better.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=6)** However, with changes constantly being pushed into the code repository by developers, the security team may struggle to keep up.
>
> **[0:14](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=14)** This could result in delayed code releases and resultant animosity between the two teams.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=20)** DevSecOps aims to reduce this friction by integrating security into the development lifecycle as early as possible.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=28)** This is done in an automated fashion and the process is also known as shifting left.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=33)** Specific to application security engineering, the four relevant phases are plan, code, build, and test.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=43)** In the plan phase we look to involve security teams into the planning phase of the application or of a specific feature.
>
> **[0:51](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=51)** Here, experienced application security engineers will be able to map out in secure design vulnerabilities such as business logic errors.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=60)** Additionally, involving security teams this early on will allow for security teams to advise on access control and the best ways to take user input.
>
> **[1:10](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=70)** Some argue that the involvement of security teams in application planning phases may seemingly slow down the development process, but spending a bit more time and effort planning certainly takes less time than having to redevelop an entire module due to a vulnerability that was discovered right before launch.
>
> **[1:29](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=89)** Next, in the code phase, we take proactive steps to prevent insecure code from being committed into the repository by developers.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=96)** This can be done manually by enforcing code reviews, or in an automated fashion via commit hooks.
>
> **[1:44](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=104)** In the build phase, we look to ensure that as software is being packaged and compiled, the results and binary is free from vulnerabilities.
>
> **[1:52](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=112)** Some of the activities here include [[Static Application Security Testing]], or SAST, and software composition analysis, which makes sure that externally included libraries are safe for use.
>
> **[2:03](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=123)** Once the binary is built we need to test it further by spinning it up, running it and sending actual requests to the endpoints.
>
> **[2:11](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=131)** This is known as [[Dynamic Application Security Testing]] or DAST.
>
> **[2:16](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=136)** In this test phase, we can also do interactive application security testing, or IAST, which differs slightly from DAST, as it uses instrumentation to work.
>
> **[2:27](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=147)** Here's how it all looks like in action from GitLab's Demo Cloud.
>
> **[2:31](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=151)** First, when a developer tries to commit code into the main branch a code review like this can be enforced.
>
> **[2:39](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=159)** This review should be conducted by a colleague to verify that the code being introduced into the application is safe.
>
> **[2:46](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=166)** When the merge request is approved, the pipeline kicks off.
>
> **[2:52](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=172)** We can access the pipelines from the CICD pipelines tab, and then click on the pipeline ID.
>
> **[3:01](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=181)** [[Static Application Security Testing]] is up first.
>
> **[3:05](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=185)** This particular template has two SAST scanners, bandit and semgrep.
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=191)** Different vendors are better at producing scanners for specific programming languages, so be sure to research deeply before settling on one.
>
> **[3:19](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=199)** After the SAST is complete, [[Dynamic Application Security Testing]] kicks off.
>
> **[3:24](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=204)** In this stage, a URL to the development version of the application is provided, or the application is spun up in a controlled environment like a container.
>
> **[3:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=214)** Then, a series of automated requests are sent to this application's endpoints to try and break it.
>
> **[3:43](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=223)** If the DAST completes successfully, the deploy phase can kick off, followed by the other results and steps in a DevSecOps pipeline.
>
> **[3:52](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=232)** If not, changes will need to be made to the application before it can be deployed to production.
>
> **[3:58](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=238)** GitLab provides a dashboard with a summary of all the vulnerabilities identified in the scans.
>
> **[4:03](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=243)** This dashboard is the starting point for you to be able to tweak the scanners to fail when certain vulnerability types are detected.
>
> **[4:11](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=251)** It further allows you to create issues to address identified vulnerabilities, and to assign them to developers and track the progress of their resolution.
>
> **[4:22](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=262)** DevSecOps presents an opportunity for security teams to work closely with application and operations teams to deliver a secure and reliable product.

> [!info]- Semantic Content
>
> **Env Vars:** sast (3), dast (3), iast (1), cicd (1), url (1)
> **Code Keywords:** static (2), module (1)
> **Tools:** gitlab (2)
> **Definitions:** known as (2)
> **UI Navigation:** click on (1)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Practice platforms
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=0)** - [Instructor] The only way an application security engineer can become really good at identifying, triaging, and resolving security incidents is by practicing.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=10)** Several practice platforms exist online, such as Hack The Box, TryHackMe, and PentesterLabs.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=19)** Hack The Box is one of the most popular ethical hacking websites.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=24)** They offer hacking labs, hacking challenges, and capture the flag competitions.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=31)** Another platform for practicing is TryHackMe.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=33)** This platform is somewhat similar in features to Hack The Box, but it is arguably more beginner-friendly.
>
> **[0:41](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=41)** We also have PentesterLabs, which offers AttackDefense as their lab platform with over 2,000 practical labs at the time of this recording.
>
> **[0:51](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=51)** These platforms are not entirely free, and so if you want to be fully in control of your learning experience, I recommend setting up labs locally.
>
> **[1:01](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=61)** Some options of vulnerable applications that you can download and run on your local machine include Damn Vulnerable Web Application, OWASP WebGoat, and OWASP Juice Shop.
>
> **[1:13](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=73)** Setting up these downloadable platforms today is much easier.
>
> **[1:18](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=78)** They often come packaged and pre-built as virtual machines or Docker containers, which you can run and interact with via your web browser.
>
> **[1:26](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=86)** Once setup, you can now test various application level vulnerabilities, tweak the code to explore further, and learn in a safe environment.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=96)** But please note that these apps may make your host vulnerable, so be sure to practice in a contained environment.
>
> **[1:44](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=104)** Also note that these exercises are meant for learning purposes only.
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=108)** Do not attempt to practice on live production systems that you have not been given permission to test.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), make (1)
> **Env Vars:** owasp (2)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=0)** - [Instructor] Application security is increasingly cementing itself as the most important facet of cybersecurity.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=6)** This is because the world is moving away from infrastructure as a service deployments in favor of platform as a service deployments.
>
> **[0:13](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=13)** With this trend taking place in the cloud, the most likely way to compromise a system will no longer be at the physical or network layer, which are now professionally managed by cloud providers, but instead at the application level.
>
> **[0:26](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=26)** Therefore, cementing your knowledge on the vulnerabilities we've covered in this course is key.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=31)** And while this course focused on the most commonly reported application security vulnerabilities, there are other application security vulnerabilities that you need to be aware of as well.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=42)** As you plan to grow in your cybersecurity journey, gaining knowledge in some of these other vulnerabilities across other programming languages is equally important.
>
> **[0:51](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=51)** In this course, we also saw how improper deployment can compromise the security of an application.
>
> **[0:57](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=57)** If you wish to learn more about how to securely deploy your applications in the cloud, then check out my LinkedIn learning course on FinTech security essentials.
>
> **[1:06](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=66)** The application security field is changing very fast.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=69)** Keeping abreast with technological trends, programming paradigms, and defensive tools is paramount.
>
> **[1:16](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=76)** You need to practice regularly across various platforms in order to gain enough experience.
>
> **[1:21](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=81)** With time, you'll be able to spot an AppSec issue just by perusing a few lines of code.
>
> **[1:27](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=87)** It is my hope that you eventually get there in your cybersecurity journey.

> [!info]- Semantic Content
>
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


## Skills Covered

- Application Security
- Cybersecurity

## Path Context

### In [[Explore a Career in Application Security]]
**1 of 7** | [[Penetration Testing Essential Training]] →

## Appears In

- [[Explore a Career in Application Security]]

## Related Courses

_Courses sharing skills:_

- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Application Security
- [[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]] — Application Security
- [[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]] — Application Security
- [[Securing Containers and Kubernetes Ecosystem]] — Cybersecurity
- [[Node Js Security]] — Application Security

---

[↑ Back to top](#)