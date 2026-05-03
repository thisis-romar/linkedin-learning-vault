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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cybersecurity%20Foundations%20Application%20Security.md)

![Cybersecurity Foundations Application Security](https://media.licdn.com/dms/image/v2/D560DAQGrScfI1TRbQQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687297743417?e=2147483647&amp;v=beta&amp;t=YiOsK9XA-HeDW9xluX6AGmIF1VM7w_syhNvLLF7vnBk)

# Cybersecurity Foundations Application Security

> With the application security field constantly evolving due to the development of new technologies and techniques, it’s important to keep abreast of the most recent and common vulnerabilities, and know how to defend applications against them. While securing applications today is very different than it was a few years ago due to the ever-changing nature of the cybersecurity and web development fiel

> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-application-security) | Beginner | 178K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learn to secure applications](#learn-to-secure-applications)
  - [The most reported vulnerabilities today](#the-most-reported-vulnerabilities-today)
- [**1. Access Control**](#1-access-control) (2 videos)
  - [Improper authentication](#improper-authentication)
  - [Improper authorization](#improper-authorization)
- [**2. Tainted Input**](#2-tainted-input) (3 videos)
  - [Insecure direct object references (IDOR)](#insecure-direct-object-references-idor)
  - [Cross-site scripting (XSS)](#cross-site-scripting-xss)
  - [Cross-site request forgery (CSRF)](#cross-site-request-forgery-csrf)
- [**3. Insecure Design**](#3-insecure-design) (3 videos)
  - [Information disclosure](#information-disclosure)
  - [Open redirect](#open-redirect)
  - [Business logic errors](#business-logic-errors)
- [**4. Industry Trends**](#4-industry-trends) (3 videos)
  - [Web application firewall (WAF)](#web-application-firewall-waf)
  - [DevSecOps](#devsecops)
  - [Practice platforms](#practice-platforms)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn to secure applications](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/learn-to-secure-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/learn-to-secure-applications?u=76281980&t=0)** - [Instructor] Has your online account ever been hacked? If so, the application's developer could probably have done more to protect you. If not, there are still a couple of things you need to look out for to continue keeping safe online. I'm going to demonstrate to you how attackers compromised web applications through poor access control, unsanitized user input, and inherently insecure designs. I'm Emmanuel Chebukati and I've been securely deploying web applications to the public cloud for over a decade. If you're ready to learn how web applications are compromised and what to do to keep this from happening I invite you to join my [[LinkedIn]] learning course on [[Application Security]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Application Security]] (1)
> **Speakers:** - [instructor] (1)

#### [The most reported vulnerabilities today](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/the-most-reported-vulnerabilities-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/the-most-reported-vulnerabilities-today?u=76281980&t=0)** - [Instructor] There are no prerequisites for this course but it is designed for aspiring technology professionals, ranging from students to entry-level [[Cybersecurity]] engineers. The course is based on the top 10 most reported vulnerabilities on bug bounty programs in the calendar year 2022. Therefore, completing this course will position an aspiring [[Application Security]] engineer to be able to slot right into a defensive role. Similarly, the course will educate application developers on the most common mistakes in their field and how to avoid repeating them. There is also a chapter dedicated towards industry trends as relates application security and how they impact both cybersecurity engineers and developers alike. You're welcome to pick and choose the information that best fits your needs and academic goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (2), [[Application Security]] (2)
> **Speakers:** - [instructor] (1)


### 1. Access Control

[↑ Back to Table of Contents](#table-of-contents)

#### [Improper authentication](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=0)** - [Narrator] Most applications require authentication to protect the confidentiality of user data. This ensures that an individual performing an action is who they say they are. Application authentication is typically achieved through a username and password combination and augmented with multifactor authentication nowadays. An improper authentication vulnerability occurs when an application does not properly ascertain the identity of a user. This leads to account takeovers and data breaches. One way an improper authentication vulnerability can occur is when users are allowed access to authenticated functions directly without having to log in first. Another way is when there's a lack of rate limiting on login fields, especially when the field lengths are known. We'll take a look at both scenarios in this video. In this first example, this social media application allows only signed in users to view posts. When a user navigates to the website and enters their credentials, they're able to view the social media posts from their account and from the accounts of other users. Note the URL home.[[PHP]]. Similarly, the user is able to navigate to the All Posts page and view all the public posts on this platform. Let's now log out and refresh the page. And when we try to access the homepage directly, we are redirected back to the login page.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=96)** However, when we try and access the All Posts page directly, we're able to view all the public posts of all users without having logged in first. This is the most basic example of improper authentication, and it often occurs when an application employs multiple programming frameworks in one solution. Let's go back to the homepage and look at a more interesting example. In this next example, the user also has the option to request a four-digit one-time password, or OTP, to successfully authenticate. OTPs are becoming an increasingly common authentication flow in order to ease the [[User Experience (UX)|user experience]]. The trouble is, however, this page does not implement rate limiting. This means that an attacker can attempt every possible four-digit combination, and one of them would surely work. So the attacker could start at 1000, 1001, and so on and so forth. The attacker could potentially do this manually or use automation to make it simpler. To test this out in an automated fashion, we can write a simple PHP script to test out every single four-digit number within the range 1000, or a thousand, to 9999, or 9,999. This script is set to alert us when it finds the right four-digit pin. It will then immediately stop execution.
>
> **[3:12](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authentication?u=76281980&t=192)** Let's run the script from our local machine and see what happens. After a brief period of time, the execution is complete. As you can see, the script iterated through the digits 1000 and found the right four-digit pin at 1032. And indeed, we have been able to log in to the application despite not being a legitimate user, Alice. Having proper authentication is critical to ensuring the confidentiality of data in your application. As an [[Application Security]] engineer, it is your responsibility to regularly test your application's authentication mechanisms for authentication bypass and implement rate limiting and CAPTCHAs. Also consider the use of third-party authentication tools that you implement properly to ensure that you're working with the latest the market has to offer in terms of authentication protection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[User Experience (UX)|User experience]] (1), [[Application Security]] (1)
> **CLI Commands:** php (2), make (1)
> **Env Vars:** url (1), otp (1), php (1)
> **File Paths:** home.php (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### [Improper authorization](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=0)** - [Instructor] When developing the access control mechanisms for an application, after you confirm that a user is indeed who they say they are, also known as authentication, you then need to assign them rights and roles on the system. This is known as authorization. Basic system rights include administrator that typically has full access to the system, user that can perform general functions, and reader with read-only access to the system. More complex systems have more complex rights and roles, depending on the organizational context. Authorization should be assigned in-line with the information security principle of least privilege, which is to assign a user the least amount of permissions needed for them to execute their work. Improper authorization occurs when a logged-in user is able to perform functions beyond the rights that have been assigned to them. Not to be confused with improper authentication, authentication is about who you are, whereas authorization deals with what you're allowed to do. Examples of improper authentication are far and wide. However, the most basic example involves modifying URL parameters dealing with system roles to gain privilege access. The impact of this vulnerability is that an attacker may be able to create, read, update, or delete data that they're not authorized to. Our sample social media application allows a logged-in user to create posts, such as I'm about to do now, "Hello World!"
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=96)** The same application allows you to delete your own posts, like I've just done again. And it also allows you to view the public posts of other users, such as this one of Bob and Emmanuel. However, on this system, only an administrator can delete other users' posts. Taking a look at the URL parameters, we can see that there is an HTTP get parameter role currently set to user. In fact, when we get rid of it and refresh the page, seemingly nothing changes, and the application runs as normal. As a curious [[Application Security]] engineer, however, you may be tempted to change this user variable to admin. All of a sudden, we seem to have administrator privileges on the system and we can delete other user's comments. For example, I can try and delete Bob's comment, and it's gone. And I can also delete Emmanuel's comment, and it's gone. Taking a look at this line of code, we can see that our problem lies in the fact that the application is trusting user input to grant access to critical functions without validating this specified role against the database. This results in a very simple but devastating improper authentication vulnerability. Such issues usually creep up in systems where new pages and functions were not part of the initial design. Therefore,
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/improper-authorization?u=76281980&t=191)** potential system roles need to be well thought out during the design phase of an application, including how to scale them out as the complexity of the system grows. And when development kicks off, remember never to trust users' input on what roles should be assigned to them. Instead retrieve this information from a trusted source, like the application's database. During testing, use sample accounts with varying roles to ensure that users cannot execute functions beyond their assigned scope. And finally, if building and verifying all these roles starts to become a bit cumbersome, you can always explore third-party vendors, like [[Microsoft Entra ID|Azure Active Directory]] or Keycloak and implement them correctly to provide identity and access management services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (1), [[Microsoft Entra ID|Azure active directory]] (1)
> **Env Vars:** url (2), http (1)
> **Definitions:** known as (2), is an  (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)


### 2. Tainted Input

[↑ Back to Table of Contents](#table-of-contents)

#### [Insecure direct object references (IDOR)](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=0)** - [Instructor] Have you ever wanted to execute a task on a web application, but there was no button allowing you to do so? Well, if an IDOR vulnerability is present, you will be able to execute that task, button or not. An Insecure Direct Object Reference or IDOR vulnerability occurs when an application does not authorize the permissions of a user making a request to a function. The object could be a post on a social media site and the [[Microsoft Word|word]] insecure comes from the lack of authorization checks to ensure that the actioning user can manipulate the object. This vulnerability is closely related to improper authorization. However, it may not necessarily involve the outright escalation of privileges. Instead, it is often limited to specific functions. Let's log into our sample social media application with the user Bob. On the homepage of our sample social media application we can see that users can create posts, such as the one I'm about to create, view the posts of other users, such as the ones of Alice and Emmanuel down here, and also delete posts created by them, such as this one right here. As you can see, the delete button is only available to a user who wants to delete their own posts and the delete button is not available when trying to delete the posts of another user. Let's try to delete another comment.
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=93)** But this time, while viewing the network logs in the developer console. On Firefox, the developer console can be accessed by hitting F12 or by right clicking on an empty space and clicking inspect. Navigate to the network tab and in the small settings window on the right, make sure to set persist logs to on. Now let's delete one of our own comments once again and we can see that the request is successful and the comment is gone. On viewing the network logs, we can see that the delete function made a request to the forward slash delete endpoint with a parameter 34. This number 34 looks like a post ID, and if it is indeed a post ID, then it means that the post that came before it, Alice's post probably is 33. So as a malicious actor, we're going to change the post ID from 34 to 33 and resubmit this request. To do this in Firefox, we can right click the last request and click edit and resend. Navigate down to the body and change it from delete 34 to delete 33, and then click send. When we refresh the page we expect to see Alice's post, the one on top here deleted by the non-ad admin user, Bob. And indeed Alice's post has been deleted. IDOR vulnerabilities come in many other variants
>
> **[3:08](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/insecure-direct-object-references-idor?u=76281980&t=188)** and exploiting them has become easier than ever today. They can however be limited by using indirect object references instead of direct references. For example, the post ID in the previous demo could have been a randomly generated number instead of the sequential predictable integer. The random number indirectly represents the post ID and helps prevent this issue because it's harder to guess. Another prevention mechanism is ensuring that you verify a user's access rights to an object before executing their requested function. This is because random object references can eventually be deciphered or brute forced. Where possible, do this at both frontend and backend levels and do not rely on user supplied information telling you what system rights they have access to. Instead, confirm these permissions from a trusted source like the application's database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Env Vars:** idor (3), f12 (1)
> **Analogies:** such as (3), for example (1)
> **Tools:** firefox (2)
> **CLI Commands:** make (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** means that (1)
> **Best Practices:** make sure to (1)

#### [Cross-site scripting (XSS)](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=0)** - [Instructor] When you log into a web application, you're able to browse through pages without needing to keep entering your password for every page that you want to open. This is because a secure session cookie was stored in your browser upon successful login, and it is kept there until it expires or until you log out. Therefore, if this active session cookie was stolen, this would lead to devastating consequences for the user of the application. One such way these cookies are stolen is through a cross-site scripting or XSS attack. As the name suggests, this vulnerability allows an attacker to execute scripts on a victim's browser. When these malicious scripts are encountered by the victim's device, the browser proceeds to execute them as if they were trusted code. This trust factor means that the malicious script has access to what should have otherwise been sensitive data, like session [[Tokens]], cookies, and other sensitive information. To demonstrate this vulnerability, let's log into our sample social media application as the user, Bob. Then we'll create a post to the social feed and set the visibility to public, and submit. When we go back, we can see the post has been created. Remember, this social feed is accessible to all logged in users of our application. Next, we'll create another post, but this time entering the following script into the comment box. This simple script grabs the application session token
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=93)** and makes an HTTP request to the website ec.ke which the attacker owns with the session token as a parameter in the URL. Let's submit it, and when we go back and return to the page, we can see that only Harmless post is embedded in the social feed. The [[Representational State Transfer (REST)|rest]] of the script has ran in the background. Now simulating the attacker, Bob, I will log into the attacker's server and set it up to view live access logs. I'll just create some spaces at the bottom so the incoming logs will be easier to see. Next, I will simulate logging in as Alice and get to view the harmless post. In the background, however, the attacker Bob can see the incoming request and has captured the victim's session token. Let's copy this session token. The attacker Bob is now armed with Alice's session token. He can now attempt to log in as Alice without even knowing her password. To do this, he can open up the application and add her session token to the cookies in the developer settings. To access the developer settings, you can right click, click on Inspect, navigate to Storage, and you can see that there's a session ID here. Let's double click on that, replace it with Alice's stolen token, and then refresh the page. Bob is now in.
>
> **[3:05](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-scripting-xss?u=76281980&t=185)** Without even knowing Alice's password, he can execute functions impersonating her like creating new posts, and much, much more. This attack could have been prevented by simply filtering the user input better. Ideally, a user should not be allowed to post executable code and or scripts in input fields, and even if they were to, measures such as encoding the output should be taken to prevent the execution of this code. To limit the impact of an XSS vulnerability, set the HttpOnly flag for sensitive cookies to true. This way, they cannot be accessed on the client's side, and therefore not sent to an attacker's remote server. As an [[Application Security]] engineer, identifying and triaging incidents of XSS will be a primary part of your role. Potential XSS vulnerabilities are typically identified quickest by running an alert script in your input fields. Learn to test these quickly and frequently to keep your application safe.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Application Security]] (1)
> **Env Vars:** xss (4), http (1), url (1)
> **UI Navigation:** click on (2), navigate to (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Cross-site request forgery (CSRF)](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=0)** - [Narrator] Imagine innocently clicking on a link to your friend's blog only to discover that the link click was responsible for an unsanctioned action on your social media account. Well, this is possible when a cross-site request forgery or CSRF vulnerability is present. With this vulnerability, an attacker is able to trick a victim into making requests to a website that they're authenticated to. Alice decides to log into her social media account and start browsing her feed. She then decides to create a new post and submits. Later she decides to check her email and there's a new message from her friend, Bob. Bob says he's launched a new website and he'd like for her to check it out. Being the good friend that she is, Alice clicks. She checks out the blog and decides to return back to her social media feed. When she refreshes the page on her social media feed, she discovers that an unwelcome comment was posted on her feed. The time of posting was right around the time that she clicked on Bob's blog. What could have happened here? Taking a look at the code on Bob's blog, that is, the attacker's website, we can see that a form submit request was executed to the social media site with the unwelcome content and because Alice was already authenticated to the social media application from her usual device,
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/cross-site-request-forgery-csrf?u=76281980&t=94)** the social media site had no reason to doubt the request. CSRF can be prevented by the addition of a CSRF token for each request. The attacker is unlikely to know this token and therefore their background request without it will fail. Also highly recommended is the implementation of multifactor authentication for sensitive actions like money transfer. With this in place, even if a CSRF attempt is made, the attacker would still need to enter a one-time password to complete the transaction which they will likely not have access to. At the same time, a same-site property can be set in the http cookies to restrict the domains that the session cookies can be used on. This would prevent the victim's active session token from being used to execute sensitive functions. Similarly, you can implement a cross-origin resource sharing or CORS policy to ensure that the web request comes from known websites only. As an [[Application Security]] engineer, you need to regularly test for this vulnerability and carefully interrogate cases of exemptions. Policy exemptions often come about when developers are looking for a quick solution to go to production. You ought to be able to tell if these exemptions are valid or if the policy screws can be tightened just a little bit more to make your applications safer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (1)
> **Env Vars:** csrf (4), cors (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [narrator] (1)


### 3. Insecure Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Information disclosure](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=0)** - [Instructor] Sometimes ensuring the confidentiality, integrity and availability of systems isn't always about the technical aspects. Imagine investing time and resources to secure an application only to leave sensitive credentials available for all to see and access directly. Information disclosure or information leakage bugs occur when an application reveals information to its users. Application whose design was skimmed through typically leads to this kind of vulnerability. Other times, the vulnerability comes as a result of improper deployment. Information disclosure bugs are some of the easiest to find because they require little or no skill to come across. At the same time, however, they're some of the most devastating bugs. Bob is innocently logging into his social media application. When he clicks the Submit button, he sees something odd. Instead of the backend code being executed, it ends up being displayed as plain text with the database credentials therein. Bob now has access to the production database's credentials. Backend code may fail to execute during a failed version of an upgrade, for example, [[PHP]] upgrade. When the error is fixed, Bob decides to create a new post. He enters Hello and he clicks on Submit. But because the application is in debug mode, an error that was accidentally introduced
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=94)** into the code base leads to database credential exposure once again. The impact of the previous two issues could have been less severe if the developers hadn't left credentials in code. Credentials often find their way into code and code repositories because the developers were quickly testing something and forgot to remove the credentials afterwards. Fortunately, however, modern day code repositories like [[GitHub]] and GitLab now offer automated scanning for credentials and secrets in code. Let's see how to enable this on GitHub. When logged into your GitHub account, navigate your to project's homepage and then click on Settings. Then scroll down and look for the Code security and analysis on the sidebar, and then scroll all the way to the bottom to Secret scanning. Click on Enable all and Enable all for all eligible repositories. Now let's go back to our code base and attempt to commit a new secret into the code base. So I'll type a commit message and then click on Commit and then push this up to GitHub. Back on the application, I can see the new secret has been committed into the code. Immediately the commit is successful, I get an email telling me that a secret has been detected in a recent commit.
>
> **[3:07](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/information-disclosure?u=76281980&t=187)** I get a further email saying that the GitHub access token that was found in the commit has been revoked. Back on GitHub, when I navigate to the security dashboard and scroll down to detected secrets, I get to view the same information here. Because the definition of this vulnerability is so wide, prevention will depend on a case-by-case basis. In general, however, the starting point is agreeing on what constitutes sensitive information within the organization's context. This is done during the application design phase. During development, regular audits can be run to ensure that this type of information is not disclosed and can extend to error messages to make sure that they are not revealing sensitive information. And upon deployment to production, the servers must be configured correctly and debug mode must be disabled. Most importantly, application secrets must be handled well. This can be done in two ways. The first is via the use of environment variables that are referenced in code. While this is certainly better than committing secrets into code, environment variables are difficult to rotate, encrypt, collaborate on and scale. The second and most preferable way is the use of a secrets management solution such as HashiCorp Vault, AWS Secrets Manager, or [[Microsoft Azure|Azure]] Key Vault.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (6), [[PHP]] (1), [[Microsoft Azure|Azure]] (1)
> **Tools:** github (6), gitlab (1)
> **UI Navigation:** click on (3), scroll down (2), navigate to (1)
> **CLI Commands:** find (2), php (1), make (1), aws (1)
> **Analogies:** imagine (1), for example (1), such as (1)
> **Env Vars:** php (1), aws (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Open redirect](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=0)** - [Instructor] Web applications often integrate redirects to transfer users from one page to another, or to external websites in order to enhance the [[User Experience (UX)|user experience]]. When left open for all to use, an attacker can use these redirects to transfer users to their own malicious website. But why would an attacker not just send the user directly to their malicious link? Well, this is because using the open redirect makes the potential victim believe that the request is coming from a genuine website that they know and use. The impact of this vulnerability is a lot of instances of compromised user credentials and the installation of malware on a victim's computer. Alice has received an email asking her to update her social media app, or risk being locked out. Alice has been taught to always check the URL in any email before clicking on the link. There's even a helpful reminder in the footer of this email asking her to verify that the URL goes to socialmediaapp.xyz before clicking on the link. This link looks legitimate, and so Alice clicks. Upon clicking on the link, the download is initiated and she's redirected to the social media app's thank you page. Once again, the URL is fine and the page is secure, except Alice just downloaded a piece of malware. On inspecting the link again, we can see that the redirect parameter goes to an encoded string.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/open-redirect?u=76281980&t=95)** Let's copy this entire link and try to decode it with a free online tool. We can now clearly see that the redirect goes to another website, ec.ke, the attacker's website. The attacker's website then initiates a malicious download before taking us back to the legitimate application's thank you page. Taking a look at our downloads page, we can see that Alice's device has been compromised. Open redirects can be remediated by not having them in the first place. In this scenario, the application could have been designed better to not need a redirect and instead, use the direct link to the download page. If you must use a redirect function for internal users, make sure it's not open, and instead, redirect to known links only. And for external-facing sites, include a warning to users that they're about to leave your site for an external site. Lastly, keenly test download links, login pages, and password reset pages for incidents of open redirects, as these are particularly notorious for this vulnerability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **Env Vars:** url (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Business logic errors](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=0)** - [Instructor] We all like having access to premium features in applications but without having to pay for them. One of the ways this can be possible is when a business logic error is present on a web application. Business logic errors are designed flaws in web applications that allow attackers to gain unintended value through the normal use of the application. Our sample social media application offers the promotion of posts as a paid service. When we select the post that we want to promote and click Promote, the terms are presented. We can promote individual posts for 24 hours at a cost of $1. I'll click Promote Post. The promotion is successful. When we go back to the homepage, we can see that the status has changed from promote to promoted. Now let's do another post. I will go with this one. This time, when it's time to confirm the promotion, I decide that I'm not quite sure about promoting this post until I check with my friend and so I decide to cancel and complete this process later. Upon canceling, however, I am presented with a page with all my recent posts and a chance to promote all of them at a cost of $1. I click Promote Post and when I go back to the homepage, all my recent posts are actively being promoted. A breach of integrity of this system has taken place.
>
> **[1:38](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/business-logic-errors?u=76281980&t=98)** The business logic should be that if you want to promote multiple posts at the same time, you pay $1 times the number of posts that you want to promote. However, the implemented logic is that you're still being billed the same $1 to promote all poor posts. This poor logic is as a result of bad design and ought to be fixed. Business logic errors are particularly devastating because they can be exploited following the normal use of an application. As a result, they're also very difficult to find with security automation tools and you can be sure that when users find such vulnerabilities, they will not report them to the company because we all like free stuff. Be sure to deeply understand what your organization considers value so you can protect it better from business logic issues. Then incorporate this knowledge into application design iterations where you'll be able to spot a flaw before it's coded into the solution.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Cross-References:** go back to (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 4. Industry Trends

[↑ Back to Table of Contents](#table-of-contents)

#### [Web application firewall (WAF)](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=0)** - [Instructor] Keeping up with application vulnerabilities can get hectic, especially when developers are committing multiple changes into the codebase every day. Fortunately, a Web Application Firewall can protect your application from compromise even if the underlying code is suspect. A Web Application Firewall is deployed in between the customer and the application server. It only sends HTTP traffic to the application once it has been checked and filtered. These checks predominantly protect against input-related vulnerabilities such as cross-site scripting and [[SQL]] injection. Modern WAFs can also protect against cases of insecure design like information disclosure. Here, we have a sample social media application that is vulnerable to cross-site scripting or XSS. This input-related vulnerability allows an attacker to execute malicious scripts on a victim's browser, often leading to account takeover. As such, when we log in as the user Bob and then post a malicious script into the input field, the XSS vulnerability triggers with the [[JavaScript]] alert XSS. Similarly, the underlying text gets posted as well. And when Bob logs out and Alice comes to log in, the script is triggered on Alice's homepage as well. The simplest way of preventing this vulnerability is by preventing scripts
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=92)** from being entered in the database in the first place, input filtering. But a developer is convinced that the input field should not be limited, otherwise it would limit the functionality of the application, and the security engineer was too busy to notice the error. Enter the Web Application Firewall or WAF. Every cloud vendor has their own implementation, but we'll be using [[Microsoft Azure]]'s Web Application Gateway for this purpose. Let's start by creating the application gateway. We'll click on Create a resource, search for application gateway, then click on application gateway. The app gateway sits between the customer and the destination server, and this is where our WAF will be deployed. Click on Application Gateway by [[Microsoft]] and then click on Create. Set the resource group appropriately and name the application gateway, in my case L-I-L-A-G. Set the region appropriately, and set the tier to WAF V2 or Web Application Firewall V2. In my case, I'm going to disable autoscaling and set the instance count to one. Next on the WAF Policy, I'm going to create a new WAF policy, name it myWafPolicy, and then click on OK.
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=186)** Under Virtual network, I'll select the virtual network I currently have running and then select an appropriate subnet for my application gateway, agSubnet. I had created this in advance. Next, I'll click on Frontends. On the Frontends tab, set the Frontend IP address type as Public, and select an IP address that can be associated with this application gateway. I already have one that's available and free, so I'll click on agPublicIP and then proceed to Backends. On the Backends tab, I'm going to click on Add a backend pool and name it appropriately, for example, agBackendPool. And then on the Target type, I'm going to select Virtual machine and choose the target of the virtual machine that I currently have serving my web application, ssvm1, and then click on Add. Next, I'll proceed to Configuration. Here, we need to create a [[Routing]] rule to route traffic from the frontend public IP of the application gateway to the backend pool that contains the virtual machine with the application. So I'll click on Add a routing rule and then give the routing rule a name, for example, agRoutingRule. I'll set the priority as one and then create a new listener with the name agListener. Then I'll click on Backend target and set the backend target as agBackendPool
>
> **[4:41](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=281)** that we just created earlier. On the Backend settings, I'm going to click on Add new, name the backend settings, for example, rrSettings. Leave the defaults as they are and click on Add. I'll verify that my routing rule is okay and then click Add. Then I'll proceed to Tags, you can add tags as appropriate, and then click on Review and create. Once the validation passes, click on Create. This deployment will take about seven minutes. When the deployment is complete, click on Go to resource group, then identify the application gateway and click on it. Now, we need to do two things. We need to change the WAF policy from detection mode to prevention mode. And to do that, we'll click on the WAF policy and then click on Switch to prevention mode. This will ensure that the WAF proactively defends against threats. With that complete, we also need to change the DNS record of the application from pointing directly to that VM's IP to now point to the WAF's IP. So we'll go back to the resource group. Select the application gateway resource, copy the new public IP address, and then go to our DNS records provider and change this record from the old IP, which is the virtual machine's IP,
>
> **[6:16](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/web-application-firewall-waf?u=76281980&t=376)** to the new IP, which is the Web Application Firewall's IP, and click on Save. With the WAF now deployed, let's log back in to our sample social media application with the user Bob. Now, when Bob tries to submit the same malicious script into the database, he is met with a 403 Forbidden error by Microsoft-[[Microsoft Azure|Azure]]-Application-Gateway/v2. The underlying code is still vulnerable, but the WAF is protecting the exploitation of common vulnerabilities on this application. Web Application Firewalls can be configured in detection or prevention mode to suit your needs. Learning how to configure and tweak a WAF so as to maintain security but limit false positives is definitely something an [[Application Security]] engineer ought to know how to do. Whether you have one or not, continue to insist on developers writing secure code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (4), [[Microsoft]] (2), [[SQL]] (1), [[JavaScript]] (1), [[Microsoft Azure]] (1)
> **UI Navigation:** click on (20), select the (2), go to (2), switch to (1)
> **Env Vars:** waf (12), xss (3), dns (2), http (1), sql (1)
> **Code Identifiers:** agbackendpool (2), mywafpolicy (1), agsubnet (1), agpublicip (1), agroutingrule (1)
> **Analogies:** for example (3), such as (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [DevSecOps](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=0)** - [Instructor] The earlier we can catch [[Application Security]] issues in the development lifecycle, the better. However, with changes constantly being pushed into the code repository by developers, the security team may struggle to keep up. This could result in delayed code releases and resultant animosity between the two teams. [[DevSecOps]] aims to reduce this friction by integrating security into the development lifecycle as early as possible. This is done in an automated fashion and the process is also known as shifting left. Specific to application security engineering, the four relevant phases are plan, code, build, and test. In the plan phase we look to involve security teams into the planning phase of the application or of a specific feature. Here, experienced application security engineers will be able to map out in secure design vulnerabilities such as business logic errors. Additionally, involving security teams this early on will allow for security teams to advise on access control and the best ways to take user input. Some argue that the involvement of security teams in application planning phases may seemingly slow down the development process, but spending a bit more time and effort planning certainly takes less time than having to redevelop an entire module due to a vulnerability that was discovered right before launch. Next, in the code phase, we take proactive steps to prevent insecure code
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=93)** from being committed into the repository by developers. This can be done manually by enforcing code reviews, or in an automated fashion via commit hooks. In the build phase, we look to ensure that as software is being packaged and compiled, the results and binary is free from vulnerabilities. Some of the activities here include [[Static Application Security Testing]], or SAST, and software composition analysis, which makes sure that externally included libraries are safe for use. Once the binary is built we need to test it further by spinning it up, running it and sending actual requests to the endpoints. This is known as [[Dynamic Application Security Testing]] or DAST. In this test phase, we can also do interactive application security testing, or IAST, which differs slightly from DAST, as it uses instrumentation to work. Here's how it all looks like in action from GitLab's Demo Cloud. First, when a developer tries to commit code into the main branch a [[Code Review]] like this can be enforced. This review should be conducted by a colleague to verify that the code being introduced into the application is safe. When the merge request is approved, the pipeline kicks off. We can access the pipelines from the CICD pipelines tab, and then click on the pipeline ID. [[Static Application Security Testing]] is up first. This particular template has two SAST scanners,
>
> **[3:08](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/devsecops?u=76281980&t=188)** bandit and semgrep. Different vendors are better at producing scanners for specific programming languages, so be sure to research deeply before settling on one. After the SAST is complete, [[Dynamic Application Security Testing]] kicks off. In this stage, a URL to the development version of the application is provided, or the application is spun up in a controlled environment like a container. Then, a series of automated requests are sent to this application's endpoints to try and break it. If the DAST completes successfully, the deploy phase can kick off, followed by the other results and steps in a DevSecOps pipeline. If not, changes will need to be made to the application before it can be deployed to production. GitLab provides a dashboard with a summary of all the vulnerabilities identified in the scans. This dashboard is the starting point for you to be able to tweak the scanners to fail when certain vulnerability types are detected. It further allows you to create issues to address identified vulnerabilities, and to assign them to developers and track the progress of their resolution. DevSecOps presents an opportunity for security teams to work closely with application and operations teams to deliver a secure and reliable product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (8), [[DevSecOps]] (3), [[Code Review]] (1)
> **Env Vars:** sast (3), dast (3), iast (1), cicd (1), url (1)
> **Tools:** gitlab (2)
> **Definitions:** known as (2)
> **UI Navigation:** click on (1)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Practice platforms](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=0)** - [Instructor] The only way an [[Application Security]] engineer can become really good at identifying, triaging, and resolving security incidents is by practicing. Several practice platforms exist online, such as Hack The Box, [[TryHackMe]], and PentesterLabs. Hack The Box is one of the most popular [[Ethical Hacking]] websites. They offer hacking labs, hacking challenges, and capture the flag competitions. Another platform for practicing is TryHackMe. This platform is somewhat similar in features to Hack The Box, but it is arguably more beginner-friendly. We also have PentesterLabs, which offers AttackDefense as their lab platform with over 2,000 practical labs at the time of this recording. These platforms are not entirely free, and so if you want to be fully in control of your learning experience, I recommend setting up labs locally. Some options of vulnerable applications that you can download and run on your local machine include Damn Vulnerable Web Application, [[OWASP]] WebGoat, and OWASP Juice Shop. Setting up these downloadable platforms today is much easier. They often come packaged and pre-built as [[Virtual Machines]] or Docker containers, which you can run and interact with via your web browser. Once setup, you can now test various application level vulnerabilities, tweak the code to explore further,
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/practice-platforms?u=76281980&t=93)** and learn in a safe environment. But please note that these apps may make your host vulnerable, so be sure to practice in a contained environment. Also note that these exercises are meant for learning purposes only. Do not attempt to practice on live production systems that you have not been given permission to test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TryHackMe]] (2), [[OWASP]] (2), [[Application Security]] (1), [[Ethical Hacking]] (1), [[Virtual Machines]] (1)
> **CLI Commands:** docker (1), make (1)
> **Env Vars:** owasp (2)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-application-security/next-steps?u=76281980&t=0)** - [Instructor] [[Application Security]] is increasingly cementing itself as the most important facet of [[Cybersecurity]]. This is because the world is moving away from [[IaaS|infrastructure as a service]] deployments in favor of [[PaaS|platform as a service]] deployments. With this trend taking place in the cloud, the most likely way to compromise a system will no longer be at the physical or network layer, which are now professionally managed by cloud providers, but instead at the application level. Therefore, cementing your knowledge on the vulnerabilities we've covered in this course is key. And while this course focused on the most commonly reported application security vulnerabilities, there are other application security vulnerabilities that you need to be aware of as well. As you plan to grow in your cybersecurity journey, gaining knowledge in some of these other vulnerabilities across other programming languages is equally important. In this course, we also saw how improper deployment can compromise the security of an application. If you wish to learn more about how to securely deploy your applications in the cloud, then check out my [[LinkedIn]] learning course on FinTech security essentials. The application security field is changing very fast. Keeping abreast with technological trends, programming paradigms, and defensive tools is paramount. You need to practice regularly across various platforms in order to gain enough experience. With time, you'll be able to spot an AppSec issue just by perusing a few lines of code. It is my hope that you eventually get there in your cybersecurity journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (4), [[Cybersecurity]] (3), [[IaaS|Infrastructure as a service]] (1), [[PaaS|Platform as a service]] (1), [[LinkedIn]] (1)
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