---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-php-debugging-techniques-14917698
url: "https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698"
duration_minutes: 67
duration: 1h 7m
level: Advanced
updated: 6/22/2022
learners: 4657
skills:
  - Debugging
  - PHP
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQE0DmxKRMsmAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655837059078?e=2147483647&amp;v=beta&amp;t=9jrRyhWo-yOmdLSWZjLEZeWITCE8yBRynF6kxfsZ8Uk"
linkedin_topic: Cybersecurity
learning_paths:
  - Advance Your PHP Skills
path_count: 1
tags:
  - course
  - topic/security
  - topic/software-development
  - topic/web-development
  - skill/debugging
  - skill/php
status: not-started
created: 2026-04-20
---

![Advanced PHP: Debugging Techniques](https://media.licdn.com/dms/image/v2/C560DAQE0DmxKRMsmAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655837059078?e=2147483647&amp;v=beta&amp;t=9jrRyhWo-yOmdLSWZjLEZeWITCE8yBRynF6kxfsZ8Uk)

# Advanced PHP: Debugging Techniques

> PHP powers the back end of many of the world’s websites. But its extensive range of error levels makes it hard to know what’s what, especially when it comes to capturing relevant information and debugging errors in your code. In this course, instructor Gary Kovar shows you advanced techniques to improve your debugging workflow using both local and non-local tools.
Learn how to use PHP to:

Log and

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698) | 1h 7m | Advanced | 5K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Gary Kovar]]

## Resources

- Exercise files available

## Skills Covered

- Debugging
- PHP

## Table of Contents

### Introduction

#### Debugging and PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980&t=0)** - [Gary Kovar] As a developer, it's always fun to create a new feature.
>
> **[0:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980&t=3)** And often a bit less fun to try and debug something.
>
> **[0:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980&t=6)** Especially when we are debugging unfamiliar code or old code.
>
> **[0:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980&t=10)** PHP being interpreted, provides tons of useful information for debugging.
>
> **[0:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980&t=15)** Sometimes it feels like too much.
>
> **[0:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980&t=16)** I'm going to walk through some ways to think about debugging and then we can use those ideas to capture exactly the data we need to fix the bug.
>
> **[0:23](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980&t=23)** I'm Gary Kovar.
>
> **[0:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980&t=24)** I've been debugging PHP at enterprise scale for the last seven years.
>
> **[0:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980&t=27)** If you ever feel like finding a bug is like looking for a needle in a haystack, this is the perfect PHP course for you.

> [!info]- Semantic Content
>
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Speakers:** - [gary (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-you-should-know?u=76281980&t=0)** - [Narrator] This course is for PHP developers and is designed to help you debug faster.
>
> **[0:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-you-should-know?u=76281980&t=4)** It will be most helpful to PHP developers that have some experience in a code base or programmers coming from another language.
>
> **[0:11](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-you-should-know?u=76281980&t=11)** You should be relatively comfortable with PHP syntax.
>
> **[0:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-you-should-know?u=76281980&t=14)** Many of the examples will be in WordPress and Laravel.
>
> **[0:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-you-should-know?u=76281980&t=17)** You don't need to be an expert in either of those frameworks, but should have some familiarity.

> [!info]- Semantic Content
>
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Speakers:** - [narrator] (1)


### 1. Default Tools for Logging and Identifying Issues

#### Exploring PHP errors
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=0)** - When we think about debugging the first thing we think about is errors.
>
> **[0:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=3)** The PHP interpreter can log a lot of helpful information about the code that it runs.
>
> **[0:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=7)** Being able to understand what the log files are telling us can help us quickly hone in on issues.
>
> **[0:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=12)** PHP has less than 20 types of errors you could possibly run into, but usually we will see notice, warning, fatal error and deprecated.
>
> **[0:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=21)** We are going to talk about each of those four types but it's worth noting that only fatal errors will halt code execution.
>
> **[0:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=27)** Here is an excerpt of a few lines from different PHP error logs.
>
> **[0:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=31)** Note that each line has the same consistent information.
>
> **[0:34](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=34)** First, we have the timestamp followed by the type of error.
>
> **[0:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=37)** We'll dig into those more in a moment but let's look at a single error line.
>
> **[0:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=41)** The timestamp can help us identify execution order.
>
> **[0:44](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=44)** Next, we see the error type.
>
> **[0:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=45)** Following that is the error text.
>
> **[0:47](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=47)** Sometimes this is pretty concise.
>
> **[0:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=49)** And finally, we have the in for locating where the error originated from.
>
> **[0:53](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=53)** Let's look at one more.
>
> **[0:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=54)** This is a fatal error.
>
> **[0:55](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=55)** It's a ton more information but now it follows the same format.
>
> **[0:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=58)** We still have our timestamp.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=60)** We have the error type, the error itself.
>
> **[1:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=63)** In this case it is a stack trace followed by the where.
>
> **[1:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=67)** Notices [php.net](https://php.net) tells us that a notice indicates that the script encountered something that could indicate an error but could also happen in the normal course of running a script.
>
> **[1:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=76)** Notices can sometimes be byproducts of earlier issues in execution.
>
> **[1:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=80)** Here is the notice from our log file.
>
> **[1:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=82)** Let's look at why this is a notice.
>
> **[1:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=84)** In the localized method of our PHP scripts, we see that the doc block expects the localization variable to be an array.
>
> **[1:34](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=94)** In fact, if it's not an array we call the doing it wrong function.
>
> **[1:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=100)** And in that function, we have a trigger error function.
>
> **[1:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=103)** That's actually responsible for writing the line.
>
> **[1:50](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=110)** And the last parameter in the trigger error is E user notice making a notice error While notices can be helpful, warnings are actionable.
>
> **[1:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=118)** These are non-fatal runtime errors but are likely impacting logic in your application.
>
> **[2:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=123)** If they aren't impacting anything important at the moment they have the potential to in the future.
>
> **[2:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=127)** This notice undefined index asks a lot of questions is display a required key?
>
> **[2:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=132)** If it's not set, should we have a default?
>
> **[2:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=135)** If it's not set should we continue execution in this function?
>
> **[2:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=138)** If we asked ourselves, how could that ever not be set?
>
> **[2:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=141)** We might need to look further up the log file to see if any notices related to it.
>
> **[2:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=144)** PHP will continue to run warnings and notices.
>
> **[2:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=146)** So your users may not even know something isn't working quite right, but fatal errors halt execution.
>
> **[2:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=151)** Let's look at a fatal error.
>
> **[2:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=153)** Starting on line 4 here.
>
> **[2:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=155)** The first thing to call it with a fatal error is that it contains a lot of information but it's not as much as it seems.
>
> **[2:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=159)** With fatal errors, sometimes the issue is apparent in the first few words call to undefined method, WP post, get ID.
>
> **[2:47](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=167)** Lower I have an example of a Laravel fatal error.
>
> **[2:50](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=170)** In this case, it runs from line 13 all the way down to 75.
>
> **[3:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=180)** In this example, I can skip the first four lines because that is framework code.
>
> **[3:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=183)** Then I get to a class that I wrote and now I know where to start fixing.
>
> **[3:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=187)** PHP provides useful error context but sometimes it can be overly dense.
>
> **[3:11](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=191)** When looking at errors it is helpful to read not just the error, but also the context.
>
> **[3:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=195)** When did it happen and what happened right before or after it?
>
> **[3:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=197)** If it is a notice, can it be causing the warning or fatal we are seeing later on?

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (4), continue (2), type. (1), finally, (1)
> **CLI Commands:** php (7)
> **Env Vars:** php (6)
> **Definitions:** is a  (4), is an  (1)
> **Warnings:** warning (2), note that (1)
> **URLs:** [php.net](https://php.net) (1)
> **Speakers:** - when (1)

#### Default logging in popular frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=0)** - [Instructor] My first agency job worked out that we had the clients code but were still specing new features.
>
> **[0:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=5)** As a result, my first few weeks were spent reading a log file and fixing notices and warnings.
>
> **[0:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=10)** To confirm my fixes were actually fixes, I would first confirm that I knew how to create the logged error.
>
> **[0:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=16)** Then I would write my fix and confirm the issue was no longer showing up in the debug log.
>
> **[0:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=21)** To set up WordPress for logging we need to edit a few settings in our WP config file.
>
> **[0:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=25)** By default, debugging is not enabled.
>
> **[0:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=30)** This is a best practice so we don't actually share application information that could be abused.
>
> **[0:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=36)** First, add the WP debug constant and set it to true.
>
> **[0:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=40)** If this constant doesn't exist, WP assumes it to be false.
>
> **[0:44](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=44)** During WP bootstrap, in the WP settings file WP debug mode function is called.
>
> **[0:53](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=53)** Reading directly from these doc blocks WP debug mode uses three constants, WP debug, WP debug display and WP debug log.
>
> **[1:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=64)** All three can be defined in WP config, by default WP debug and WP debug log are set to false and WP debug display is set to true, WP debug display and WP debug log perform no function unless WP debug is true.
>
> **[1:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=82)** Because WP debug display defaults to true when this is active, errors will be displayed in browser.
>
> **[1:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=88)** A word of warning though, don't rely exclusively on WP debug display as notices and warnings in Ajax, Cron, pretty much any NaN browser visible execution will not be visible to you.
>
> **[1:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=99)** WP debug log can be a bool or a file path, when it is true, the default location is WP content debug log.
>
> **[1:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=109)** But you can pass a string if you'd like to store the file elsewhere.
>
> **[1:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=112)** Let's switch gears to Laravel, similar to WordPress, enabling debug in Laravel is a config setting.
>
> **[1:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=119)** For local development, Laravel should have an app debug set to true.
>
> **[2:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=123)** Laravel approaches logging a bit differently than WordPress.
>
> **[2:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=126)** Here we see the logging Laravel is capable of out of the box.
>
> **[2:11](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=131)** But we also see that logging can be set to a lot of places.
>
> **[2:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=136)** These are called channels, by default the simple channel is used and logs are stored at storage, logs, Laravel.logs.
>
> **[2:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=148)** I want to point out one other interesting piece here in the logging config file.
>
> **[2:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=153)** Note how each channel has a level, Laravel via monologue uses RFC 5424 spec meaning we have eight levels of debugging.
>
> **[2:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=163)** In your production environment, you should always ensure you're not exposing logged info to your users.
>
> **[2:48](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=168)** So on a WP site, WP debug display
>
> **[2:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=178)** should be set to false and on Laravel app debug should be set to false.
>
> **[3:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=189)** Most frameworks have simple config settings so logging setup should not be time consuming.
>
> **[3:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=194)** Always keep in mind the environment you're working in before enabling log visibility in the browser.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), default, (1), pass (1), let (1), switch (1)
> **Definitions:** is a  (2), is called (1)
> **Documentation:** rfc (1), spec (1)
> **Best Practices:** best practice (1), you should always (1)
> **Warnings:** warning (1), keep in mind (1)
> **Prerequisites:** set up (1), setup (1)
> **Env Vars:** rfc (1)
> **Analogies:** similar to (1)

#### Configuring PHP error reporting
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=0)** - In many cases, your error logging will work pretty much as you want it to.
>
> **[0:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=4)** Most local development environments are pre-configured but there may be times you want to adjust what is logged so you can capture very few errors, extremely verbose errors, or anything in between.
>
> **[0:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=14)** To see the configuration files in use, you can type php--ini.
>
> **[0:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=22)** We see listed here a handful of INI files.
>
> **[0:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=24)** Let's first look at the errors config in the php--ini file.
>
> **[0:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=30)** Jumping down to error handling and logging, we see a ton of commenting.
>
> **[0:34](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=34)** Thank you, PHP.
>
> **[0:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=36)** We'll get into error reporting in a moment, but just above this value, I want to note the common values and default values.
>
> **[0:47](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=47)** The error reporting directive accepts a bitmask of error types.
>
> **[0:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=51)** The bitmask is a combination of the listed contents.
>
> **[0:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=54)** Note that ampersand, pipe, and tilde are all available to create this bitmask.
>
> **[0:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=59)** You can view lines 459 through 462 for explanations of how that works.
>
> **[1:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=64)** Scrolling down a bit. In this INI file we have log errors enabled at error reporting E_ALL, but let's look at error log.
>
> **[1:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=76)** It's commented out.
>
> **[1:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=77)** It's not set.
>
> **[1:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=78)** I've done no additional logging configuration in my INI.
>
> **[1:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=82)** And yet the frameworks I've been using are logging errors to a file.
>
> **[1:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=85)** For a moment, let's drop back to our terminal.
>
> **[1:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=88)** Note the additional INI files, and specifically the Scan For Additional INI files in path.
>
> **[1:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=95)** You can name the files in this path whatever you want ending in .ini.
>
> **[1:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=99)** They are processed after the initial php.ini file.
>
> **[1:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=102)** Also, we don't see it here, but it is pretty common to prefix INI files with an integer, something like 10-mysql.ini, or 20opcache.ini This is because these files are parsed in alpha numeric order.
>
> **[1:55](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=115)** There is an error log INI file listed there.
>
> **[1:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=118)** Note the error log directive here.
>
> **[2:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=120)** This overrides the value provided in the php.ini file.
>
> **[2:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=124)** This is not unique to this directive.
>
> **[2:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=126)** So as needed, you can override directives.
>
> **[2:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=129)** I also want to point out a directive we haven't seen before.
>
> **[2:11](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=131)** The log level directive is a PHP-FPM specific directive.
>
> **[2:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=136)** Jumping into PHP-FPM is beyond the scope of this conversation, but know that it's paired with web requests.
>
> **[2:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=142)** If we look again at our error log, a reminder that we see alerts, errors, warnings, notices, et cetera.
>
> **[2:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=149)** In PHP-FPM, these can be configured with error, warning, notice, alert, and we already had debug.
>
> **[2:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=163)** At this point, we should talk about environments.
>
> **[2:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=165)** On our local machine while developing, displaying errors in the browser is probably fine.
>
> **[2:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=171)** However, in production, you may want to log errors to a file and you'll definitely want to avoid displaying errors to your users.
>
> **[2:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=177)** Most often, the default INI values are fine.
>
> **[3:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=180)** They're probably configured by your web host or your local development tool.
>
> **[3:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=183)** You may not need to change any error directives but knowing where they are and how to read them can be extremely helpful.

> [!info]- Semantic Content
>
> **Env Vars:** ini (8), php (4), fpm (3), e_all (1)
> **CLI Commands:** php (8), mysql (1)
> **File Paths:** php.ini (2), 10-mysql.ini (1), 20opcache.ini (1)
> **Code Keywords:** let (3), override (1)
> **Definitions:** is a  (2), is an  (1)
> **Warnings:** note that (1), warning (1)
> **Tools:** terminal (1)
> **Speakers:** - in (1)

#### What to log
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=0)** - [Instructor] We know how PHP categorizes errors, and we know where logs are stored.
>
> **[0:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=4)** Often context specific to our code would be useful to help reduce time sifting through debug logs.
>
> **[0:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=9)** I'm sure it's not a surprise that PHP has core functions that allow us to add to logs.
>
> **[0:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=14)** But before we do, let's discuss what context to log and the role context plays in debugging.
>
> **[0:19](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=19)** Let's start thinking about our own log messages by looking at PHP messages.
>
> **[0:23](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=23)** PHP messages have four parts, time, message type, message, and location.
>
> **[0:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=29)** The timestamp tells us when, the message type tells us how serious, and the message and location are clues.
>
> **[0:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=36)** But log lines never exist in a vacuum, and this is an important context to keep in mind when debugging.
>
> **[0:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=41)** There is both explicit and implicit context in the message.
>
> **[0:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=45)** If we expect it to log an error and didn't, that is useful context.
>
> **[0:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=49)** If we expect it to log something three times in a loop, and instead have six, the implicit context is that the loop happened twice.
>
> **[0:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=56)** The explicit context is whatever the log line messages are.
>
> **[0:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=59)** Early on as a developer, it is easy to just var_dump and die.
>
> **[1:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=62)** Don't get me wrong.
>
> **[1:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=63)** Var_dump is cool, but what is var_dump missing?
>
> **[1:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=66)** Context.
>
> **[1:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=67)** Are there issues before and after the var_dump?
>
> **[1:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=69)** If the var_dump appears correct but my feature still doesn't work, what's happening?
>
> **[1:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=73)** I've often been assigned bug tickets, and when I read the ticket, I say, "That's not possible," but I'm usually wrong.
>
> **[1:19](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=79)** The first thing I do in this situation is figure out what variables would have to have what value to replicate the bug.
>
> **[1:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=85)** Once I know what those values would need to be, it's time to start working backwards.
>
> **[1:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=89)** How did they get that way?
>
> **[1:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=90)** And when you start down that path, you find that you suddenly have a lot more variables that you need to understand, but it's much less time consuming to do this when I have the context in the message.
>
> **[1:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=98)** Remember, when you log something, don't just dump a variable.
>
> **[1:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=101)** Think about what you're trying to accomplish.
>
> **[1:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=103)** Might it only be helpful to capture this variable if it's not greater than 10, or if it's not an object of a certain type?
>
> **[1:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=109)** While the messages themselves are just strings, these messages can be packed with helpful context, and thinking through the context, both explicit and implicit, we can start to identify what is bug causing.

> [!info]- Semantic Content
>
> **CLI Commands:** php (4), find (1)
> **Code Identifiers:** var_dump (4)
> **Env Vars:** php (4)
> **Code Keywords:** let (2), type, (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Logging errors to file
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=0)** - [Instructor] Knowing that PHP has different levels of messages, it's not surprising that we have a few core functions available to work with.
>
> **[0:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=6)** Let's dig in and see what we can do.
>
> **[0:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=8)** First, let's talk about the core PHP function, error log.
>
> **[0:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=12)** Error log can be called within a script.
>
> **[0:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=14)** Only one argument is required.
>
> **[0:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=16)** It is the message to be logged and it must be of type string.
>
> **[0:19](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=19)** This will log to the log file that is set up.
>
> **[0:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=21)** Here, we have a function foo0 we are calling and in it we are logging a message.
>
> **[0:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=29)** Just like PHP messages, we see a timestamp, but because we supply the message there is no type or file or line number.
>
> **[0:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=37)** So our error log here could be less than helpful if we used it in multiple places in our app.
>
> **[0:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=42)** But what kind of data would be helpful?
>
> **[0:46](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=46)** Certainly file and line number.
>
> **[0:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=49)** PHP has some constants that can help us here.
>
> **[0:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=51)** File, line, function, class, and method.
>
> **[0:55](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=55)** These all have double underscore on both sides.
>
> **[0:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=58)** With these, we can construct our own useful message with whatever context is key.
>
> **[1:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=62)** Let's add some context here.
>
> **[1:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=66)** So we're going to add the file.
>
> **[1:11](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=71)** And we're going to add the line number and let's add the function.
>
> **[1:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=85)** So here's that same message.
>
> **[1:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=86)** But we have here in our file, which has line 15 is the location using function foo0.
>
> **[1:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=93)** But wouldn't it be cool if we could identify the error as a notice warning or error?
>
> **[1:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=98)** Great news, PHP has a built in function called trigger error.
>
> **[1:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=103)** The second parameter in trigger error is the type.
>
> **[1:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=109)** It can be E user error, E user warning or E user notice.
>
> **[1:55](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=115)** Let's look and see what these do.
>
> **[1:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=119)** So check this out, all the stuff we talked about adding for context and error log we get for free.
>
> **[2:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=124)** We've got our PHP notice and it has the line.
>
> **[2:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=129)** We've got our warning and location, and we've got our error in location.
>
> **[2:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=134)** So trigger error is cool, but it becomes amazing when paired with set error handler.
>
> **[2:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=140)** Set error handler takes a callable and what levels to handle.
>
> **[2:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=149)** So we can set a custom error handler for our app and specifically a custom error handler for different error levels, including E user levels.
>
> **[2:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=156)** Let's look at an example.
>
> **[2:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=158)** Here, I'm setting a custom error handler for E user error.
>
> **[2:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=161)** When I run my script that throws errors, the error handler will be used instead.
>
> **[2:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=165)** So note that our second parameter here is a bit mask so it's not an or of two pipes.
>
> **[2:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=171)** It's a bit wise operator, just a single pipe.
>
> **[2:53](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=173)** And so this will actually work with E user notice and E user warning.
>
> **[2:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=177)** Let's see what happens with these bottom two as compared to the previous iteration.
>
> **[3:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=184)** So this time, instead of putting out the string we actually did a full var dump on notice and warning and then error displayed the fatal error messaging.
>
> **[3:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=197)** I want to look at the parameters on the logging function.
>
> **[3:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=202)** Error number is the bit mask for the type, error string is the message we passed.
>
> **[3:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=210)** Error file is the file in question and error line is the line number the error occurred on.
>
> **[3:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=215)** These can all be used within the context of this callable.
>
> **[3:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=218)** And a quick reminder, error log and trigger error expect a string.
>
> **[3:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=223)** So while it's helpful to log variables, note that it has to be a string.
>
> **[3:47](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=227)** PHP can coerce scaler types just fine, but objects and arrays need to be encoded as strings.
>
> **[3:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=232)** Unless you declare strict types one at the top of file you're working on.
>
> **[3:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=236)** Using strict types will help prevent weird type errors but I'll leave that to you to decide.
>
> **[4:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=240)** Let's look at an example where we try to run error log on a non string with strict types enabled.
>
> **[4:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=247)** My IDE is kind enough to to tell me this is not the correct type.
>
> **[4:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=252)** And when we run it, we do no execution after line five because the type is not string.
>
> **[4:19](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=259)** And I want to squeeze one more last item in here.
>
> **[4:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=262)** Sometimes it would be helpful to view our messages apart from the messages that the full app is throwing.
>
> **[4:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=266)** So if we're writing a WordPress plugin or providing a package or service to other devs that the default log file may have a lot of noise.
>
> **[4:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=273)** In these cases you can ini_set error log some file.
>
> **[4:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=278)** You should probably do an ini get first.
>
> **[4:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=279)** So you can set the value back to what it ought to be when you're done.
>
> **[4:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=282)** In this case, I'm using standard out which is why it works in the terminal.
>
> **[4:47](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=287)** I hope as you started thinking about set error handler and combining it with trigger error, you saw some possibilities in how to expose more useful information.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (7), type. (2), class, (1), var (1)
> **Env Vars:** php (7), ide (1)
> **CLI Commands:** php (7)
> **Warnings:** warning (5), note that (2)
> **Code Identifiers:** ini_set (1)
> **Cross-References:** we talked about (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### Logging errors to other locations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=0)** - [Instructor] We've explored the PHP error log directly.
>
> **[0:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=2)** And in some situations, it's just not reasonable to capture to the log.
>
> **[0:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=6)** The log becomes too large to find.
>
> **[0:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=8)** It's not accessible to you.
>
> **[0:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=9)** Here's an opportunity to get creative.
>
> **[0:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=12)** I'll drop a reminder again that logging on production needs to be handled with care.
>
> **[0:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=15)** I've certainly caused a server or two to become unresponsive as a result of a log file devouring all storage.
>
> **[0:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=21)** When errors happen infrequently, logging to file can be problematic.
>
> **[0:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=25)** How do you find it among the logs?
>
> **[0:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=27)** Maybe instead of using error log, we could use mail or something.
>
> **[0:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=30)** Nah, that sounds annoying and mail isn't always available.
>
> **[0:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=32)** But as we've seen with log messages, it's really helpful when there's a structure.
>
> **[0:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=37)** PHP, of course, has timestamp, error_level, message, and file.
>
> **[0:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=41)** Those four values seem like a pretty good spot to start as we think through alternate logging.
>
> **[0:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=45)** Here's an example creating a database table logging those four values.
>
> **[0:50](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=50)** In a framework like WordPress or Laravel, it's easy enough to create a model or custom post type to capture the error.
>
> **[0:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=56)** In many cases, you'll be working with an app that is backed by a database.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=60)** And that'll often be a good place to start storing that data.
>
> **[1:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=62)** In this example, I'm registering a hidden, custom post type called debug_log.
>
> **[1:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=66)** One benefit of logging to a database is that as you uncover more about the error, you can ship more focused logging.
>
> **[1:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=73)** Recently, I had an issue on production that I initially couldn't figure out how to reproduce locally.
>
> **[1:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=77)** Over the course of several deployments of more focused logging, I was able to uncover the combination of actions to reproduce.
>
> **[1:23](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=83)** So here's how I refine my logging to uncover replication issues.
>
> **[1:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=87)** The issue is observable at least once if the bug reports exist, even if not reproducible.
>
> **[1:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=92)** In this example, I'm calling do_action, logging to the database, and we'll look at the do_action in a moment.
>
> **[1:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=98)** But in this case, I don't want to do it on every post.
>
> **[1:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=100)** So I may add something like if first_letter_is uppercase, $post post_title.
>
> **[2:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=122)** From this point, instead of calling error log, I'm calling my function.
>
> **[2:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=125)** Or, in this example, do_action, that logs to the database.
>
> **[2:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=130)** Using the PHP examples that initially were capturing time, error_level, message, and file.
>
> **[2:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=137)** From there, we can iterate backwards as a variable coming in with an unexpected value.
>
> **[2:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=142)** Here's an example doing the same by inserting custom post to the debug log, custom post type we created.
>
> **[2:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=150)** Don't be afraid to update the table if it makes sense to add more context.
>
> **[2:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=153)** Think through your app.
>
> **[2:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=155)** What are different values at this point in the app?
>
> **[2:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=157)** Things like, is the user logged in or if they have a certain role.
>
> **[2:44](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=164)** The cool part about using a table is that it's queryable.
>
> **[2:46](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=166)** You can start to tease out patterns and update your logging conditional to support more explicit situations.
>
> **[2:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=171)** In this example, I'm searching where the message contains the word thing and it's happened in the last day.
>
> **[2:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=176)** Whether database table is the correct location is not the question.
>
> **[2:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=179)** Approaching error messages as a uniform set of facts means it doesn't matter much where you decide to log them, but that they are predictable and packed with explicit and implicit context.

> [!info]- Semantic Content
>
> **Code Identifiers:** do_action (3), error_level (2), debug_log (1), first_letter_is (1), post_title (1)
> **CLI Commands:** php (3), find (2)
> **Env Vars:** php (3)
> **Code Keywords:** case, (1), function (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Understanding back traces
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=0)** - [Presenter] PHP error messages fall into a few categories.
>
> **[0:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=3)** Sometimes we end up with a stack trace or backtrace that is hundreds of lines long, but this wall of text contains a ton of useful information.
>
> **[0:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=10)** Let's start by looking at a backtrace.
>
> **[0:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=12)** The backtrace is a list of functions that were called to get to the error.
>
> **[0:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=16)** The PHP interpreter keeps this info in a data type called a stack.
>
> **[0:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=20)** You can imagine it as a stack of cards, a card either goes on top or gets taken from the top.
>
> **[0:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=25)** Looking at line 7 to 15 here we see a WordPress backtrace and you notice number zero through six are the list of functions that were called and the data that was passed to them.
>
> **[0:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=35)** As your app calls a function the interpreter puts the function on the stack.
>
> **[0:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=41)** When the function returns the interpreter takes the function off the stack.
>
> **[0:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=45)** So when something throws an exception or a fatal error and the interpreter can't really keep moving it says, "Here's everything I know."
>
> **[0:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=51)** Remember the stack is like a deck of cards.
>
> **[0:53](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=53)** The card on the bottom was the first card stored.
>
> **[0:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=56)** On my screen now starting at line 17 is a Laravel stack trace.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=60)** So, let's look at what that means.
>
> **[1:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=63)** This is a back trace that was thrown in some automated testing.
>
> **[1:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=65)** Starting at the bottom we see main and then we see namespace in phpunit.
>
> **[1:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=72)** Scrolling up we see a lot of vendor files.
>
> **[1:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=75)** I most likely don't need to debug those because they're not mine.
>
> **[1:19](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=79)** And, aha!
>
> **[1:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=80)** Here is a test I wrote.
>
> **[1:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=82)** But this shows the assertion so let's drop back one level and we see test submitting an invalid order does not work.
>
> **[1:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=97)** So in this case we can assume this is fine, based on the title, but let's work our way up the stack a bit.
>
> **[1:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=102)** I continue to skim until I see another file I own.
>
> **[1:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=109)** Let's see.
>
> **[1:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=112)** I see a Middleware.
>
> **[1:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=116)** I see Controllers.
>
> **[1:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=118)** So, because of the title of the test we already know we submitted an invalid order, but we see here on number five and number four the service passing something to a WooOrderValidator.
>
> **[2:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=130)** So here's the order validator we pass the validate and then the validator calls validate method and that's line four above it.
>
> **[2:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=137)** In this case, there was a lot of info to point out that this was an expected error during testing and honestly it looks like that, I'm just not sure how to handle that exception.
>
> **[2:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=145)** So quickly, when we see this huge wall, that's the stack of the executed code to get to this fatal error, we simply skimmed and found the parts that we are responsible for to determine severity.
>
> **[2:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=158)** The stack is extremely powerful context and we have direct access to it.
>
> **[2:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=162)** The PHP interpreter has two functions that are interesting here.
>
> **[2:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=165)** We have debug_print_backtrace and we have debug_backtrace.
>
> **[2:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=172)** Let's jump to code and look at debug_print_backtrace.
>
> **[2:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=176)** It takes two optional arguments.
>
> **[2:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=178)** The first is a bit mask, DEBUG_BACKTRACE_IGNORE_ARGS.
>
> **[3:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=181)** Whether or not to admit the args index and thus, all the function method arguments to save memory.
>
> **[3:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=186)** So here we see the args argument is omitted.
>
> **[3:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=190)** Let's run that.
>
> **[3:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=194)** So with that argument omitted, passed by the boolean show_mask, we see that it passed in example and the boolean of one, for true.
>
> **[3:23](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=203)** Let's run it again with that set to false.
>
> **[3:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=205)** Let's see the difference.
>
> **[3:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=208)** So we see that foo_print_masked was called but the arguments are not included this time.
>
> **[3:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=213)** Now, the second thing I want to look at is the second argument, which is how many lines to print.
>
> **[3:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=219)** If we want run foo_print_redirection our expectation is that we will run foo_print_redirection which will run foo_print which will run debug_print_backtrace.
>
> **[3:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=229)** That's two functions, we should have two lines.
>
> **[3:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=231)** So we have line zero and line one.
>
> **[3:55](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=235)** If we tell it to just deal with the first X lines, in this case one, we only see the last item.
>
> **[4:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=242)** The item that's on the top of the stack.
>
> **[4:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=249)** The second function is debug_backtrace.
>
> **[4:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=252)** Instead of printing, this function returns the backtrace as an array of associative arrays.
>
> **[4:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=257)** The keys aren't required, but they are function, line, file, class, object, type and args.
>
> **[4:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=267)** So in our case, we obviously won't have a class or object.
>
> **[4:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=270)** I want to strongly caution you, this is a debug function, should not be used for production.
>
> **[4:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=275)** Sometimes in our app it would be helpful to know if something else has already taken place.
>
> **[4:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=279)** Do not use this function for that.
>
> **[4:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=280)** This function uses a lot of memory.
>
> **[4:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=282)** Let's look at the output for var_dump on debug_backtrace.
>
> **[4:46](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=286)** We see we have the file, line, the function and the args that we're called.
>
> **[4:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=291)** You could, if so inclined, apply logic in your error handler to determine if the error is something you care about or if you should surface to the next handler.
>
> **[4:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=298)** Next time you see a stack output I hope you were able to apply some quick logic to hone in on where the error is coming from and use debug_backtrace with great caution.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (10), case, (2), continue (1), pass (1)
> **Code Identifiers:** debug_backtrace (4), debug_print_backtrace (3), foo_print_redirection (2), show_mask (1), foo_print_masked (1)
> **Definitions:** is a  (6)
> **Env Vars:** php (3), debug_backtrace_ignore_args (1)
> **CLI Commands:** php (3)
> **Warnings:** caution (2)
> **Analogies:** imagine (1)
> **Speakers:** - [presenter] (1)


### 2. Local Development Tools

#### var_dump() debugging: Blue-collar debugging
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=0)** - I want you to think back to some of the first PHP script you wrote.
>
> **[0:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=4)** Once you supply the correct syntax, you likely ran into the problem of your script not doing what you wanted.
>
> **[0:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=9)** And from there you likely discovered var dump.
>
> **[0:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=12)** When you think back on that code you might think about how much you've learned since then.
>
> **[0:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=16)** You might even be a little embarrassed.
>
> **[0:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=17)** I am.
>
> **[0:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=18)** You may still use var dump often or it might also feel a bit primitive.
>
> **[0:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=22)** But var dump and its relative have some cool tricks.
>
> **[0:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=25)** Why don't we work backwards?
>
> **[0:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=27)** Here's some var dump output on an object that happens to contain an array of other objects.
>
> **[0:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=35)** And it's very verbose.
>
> **[0:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=37)** We see that the object cookie jar contains an array of cookie objects and each has two properties, a name and and an is healthy bool.
>
> **[0:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=49)** Looking at this you can mostly build this code backwards in your head.
>
> **[0:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=54)** Here's our cookie jar class and here's the cookie class.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=60)** Let's go ahead and make the is healthy booly in public instead of private and run var dump again.
>
> **[1:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=68)** And now we see that no visibility specified the default is public.
>
> **[1:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=72)** It's worth noting that var dump takes multiple arguments of any type.
>
> **[1:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=75)** So we could string together all these different cookies.
>
> **[1:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=78)** It seems like we've explored all of what var dump can do.
>
> **[1:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=81)** Maybe, more on that in a moment.
>
> **[1:23](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=83)** var dump has a cousin called var export.
>
> **[1:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=92)** var export is a super useful tool for working with arrays.
>
> **[1:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=95)** I specifically find myself using it in WordPress where many core components except an array of ARGs as a parameter, but VX export is really cool when paired with objects.
>
> **[1:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=105)** Check out this output.
>
> **[1:47](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=107)** Specifically the static method set state.
>
> **[1:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=109)** We could open an interactive PHP shell and see what happens but I'll save the time and spoil it with call to undefined method.
>
> **[1:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=116)** Cookie jar underscore, underscore, set state.
>
> **[1:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=119)** Set state is a magic method.
>
> **[2:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=121)** Just look at the var export output again.
>
> **[2:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=124)** This is a way to sidestep the constructor.
>
> **[2:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=126)** A warning var export does not check to see if set state is implemented.
>
> **[2:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=130)** Let's look at the set state value in the cookie class.
>
> **[2:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=135)** We get the array of state and our constructor takes a name and is healthy.
>
> **[2:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=140)** So we return a new cookie from name and is healthy which matches the var export of name and is healthy.
>
> **[2:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=149)** var export pairs really nicely with automated testing.
>
> **[2:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=152)** However, if you're in a situation where you need to configure an object in a way to match some area you're observing this is also a great tool for that.
>
> **[2:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=158)** A minute ago, I teased that var dump has some other tricks.
>
> **[2:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=162)** Just like var export has set state, var dump has a magic method called debug info.
>
> **[2:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=169)** Debug info must return an associative array but you can include any info you want in that array.
>
> **[2:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=174)** Let's make this debug easier to read.
>
> **[2:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=176)** We're going to include the first cookie, the last cookie and we're going to include a count.
>
> **[3:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=181)** This gives us a lot more concise information about this object.
>
> **[3:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=187)** So back to var dump and there we see our count.
>
> **[3:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=193)** The first cookie and the last cookie.
>
> **[3:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=196)** The last core function I want to quickly reference is print R, taking the same cookie jar variable and passing it to print R we see different output.
>
> **[3:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=206)** For super dense objects, this can make output a bit less intimidating.
>
> **[3:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=210)** Also know that print R respects our debug info method.
>
> **[3:34](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=214)** Both var export and print R accept a second value for return.
>
> **[3:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=222)** This is a bool.
>
> **[3:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=223)** If set to true, it returns the value instead of printing that.
>
> **[3:47](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=227)** So keep that in mind if you'd rather take this and put it in a log file instead of echoing.
>
> **[3:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=232)** I hope you find a good balance of magic methods and the trio of debug functions PHP provides to be useful in your debugging.

> [!info]- Semantic Content
>
> **Code Keywords:** var (19), let (3), class. (2), public (2), super (2)
> **CLI Commands:** php (3), make (3), find (2)
> **Definitions:** is a  (4)
> **Env Vars:** php (3)
> **Analogies:** just like (1)
> **Warnings:** warning (1)
> **Prerequisites:** configure (1)
> **Speakers:** - i (1)

#### What tools are available
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=0)** - There are many tools available to help see into the execution path of our apps.
>
> **[0:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=4)** Adding these to our toolkit can prevent us from tedious reloading and skimming logs.
>
> **[0:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=8)** This video is a quick survey of the types of available tools and some examples.
>
> **[0:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=13)** The first tools I want to talk about are interactive shells.
>
> **[0:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=16)** PHP ships with an interactive shell that is helpful for testing some really lightweight ideas.
>
> **[0:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=21)** This is great, but sometimes a framework specific tool can add more specific context.
>
> **[0:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=26)** (keyboard clicking)
>
> **[0:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=35)** WP CLI is a command line interface for working with WordPress.
>
> **[0:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=39)** One of the available commands is WP shell.
>
> **[0:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=42)** When I run WP shell in a WordPress installation I have access to all of the plugins, themes, WP core functions, and the database.
>
> **[0:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=51)** So be careful.
>
> **[0:53](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=53)** Useful though.
>
> **[0:55](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=55)** Any WordPress functions you ordinarily would use are available to you.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=60)** In the Laravel space we have artisan commands, and for interactive debugging we have tinker.
>
> **[1:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=64)** Much like the WP CLI shell command, we can manipulate stored data.
>
> **[1:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=69)** I find shell commands to be really useful when I know the function I want to use, and I want to see what data shape it returns.
>
> **[1:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=75)** (keyboard clicking) The next category supplement the normal web developer workflow of right code, reload browser, fixed bugs.
>
> **[1:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=85)** These are tools that help you see error related information where you're already focusing.
>
> **[1:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=89)** Your browser.
>
> **[1:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=91)** The first one I want to start with is Whoops!
>
> **[1:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=93)** I love the name of this library, and it describes itself as PHP errors for cool kids.
>
> **[1:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=97)** Whoops! cleans up traces and makes reading them a lot easier.
>
> **[1:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=100)** It is installed in Laravel apps by default, and a composer package is available, so it can be included in any PHP project.
>
> **[1:48](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=108)** We're all familiar with stack traces, and so this breaks down all the steps along the way.
>
> **[1:53](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=113)** Another composer package is called Debug Bar.
>
> **[1:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=117)** Now there's an outdated WordPress plugin called Debug Bar, but I'm talking specifically about PHP Debug Bar.
>
> **[2:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=121)** The idea is fairly simple in that it puts a bit of status on the bottom of every page.
>
> **[2:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=126)** You can see why this would be a local tool only.
>
> **[2:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=128)** Here we can see we accessed one view.
>
> **[2:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=130)** We can see we use four megabytes, and the request was 69 point 17 milliseconds on PHP version 8.0.13.
>
> **[2:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=137)** Rounding up my examples in this category is a WordPress specific plugin called Query Monitor.
>
> **[2:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=142)** It shares a lot of the same information as Debug Bar, but leverages the admin bar, so it is initially only visible to admins.
>
> **[2:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=150)** Lots of data here.
>
> **[2:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=152)** Now I want to call out that these browser facing tools are great for local development and generally are out of the way enough to provide data when you need it and be ignored when you don't, but they should never be used on production.
>
> **[2:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=162)** So far we looked at tools that help you understand what happened.
>
> **[2:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=165)** The next tool set is about what is happening, and they can be game changers.
>
> **[2:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=169)** These are commonly known as Step Debuggers.
>
> **[2:53](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=173)** Ray is a commercial application but the utility it provides is really fantastic.
>
> **[2:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=177)** It requires a composer package, but once installed and configured, it really helps frame what is happening in your application.
>
> **[3:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=183)** I've added three callbacks here in my donut shop service called by the donut factory command.
>
> **[3:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=187)** Let's see what Ray shows us.
>
> **[3:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=188)** (keyboard clicking) So we show the total time, the memory usage.
>
> **[3:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=200)** There's a Laravel specific dealing with the model.
>
> **[3:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=202)** Next we have XD Bug.
>
> **[3:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=205)** While XD Bug can be a bit trickier to configure and requires an IDE with some tooling, the value proposition is amazing.
>
> **[3:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=212)** (keyboard clicking) As you step through your execution you have the entire state of your application available.
>
> **[3:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=218)** This makes it really powerful.
>
> **[3:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=220)** Learning XD Bug changed how I write code and think about debugging.
>
> **[3:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=225)** We're used to seeing frames on fatal errors.
>
> **[3:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=229)** With XD Bug, We can walk through the stack trace at any point in our execution.
>
> **[3:53](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=233)** So the code is paused right here on this query.
>
> **[3:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=238)** And we could even step to that one.
>
> **[4:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=242)** Everything we've looked at so far is meant for local use, but our final category of tool is a bit more environment agnostic.
>
> **[4:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=249)** These are logging or tracing aggregators.
>
> **[4:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=252)** I'm not going to jump too heavily in any specific options here, but knowing these are available, and when to apply them is helpful.
>
> **[4:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=257)** Basically these tools try to help you make sense of huge streams of log files.
>
> **[4:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=261)** They're searchable and much easier to work with than an enormous production log file.
>
> **[4:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=266)** Knowing what tools are available, and when they're most helpful, gives us a lot of options to approach our code with new visibility.
>
> **[4:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=271)** Try a new one, and see if it improves your workflow.

> [!info]- Semantic Content
>
> **CLI Commands:** php (5), composer (3), find (1), make (1)
> **Env Vars:** php (5), cli (2), ide (1)
> **Definitions:** is a  (4), is called (1), known as (1)
> **Code Keywords:** interface (1), function (1), default, (1), let (1)
> **Non-Speech:** (keyboard clicking) (4)
> **Versions:** version 8 (1), 0.13 (1)
> **Tools:** command line (1)
> **Warnings:** be careful (1)

#### WordPress CLI shell
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=0)** - Local debugging can sometimes mean interactively trying out things.
>
> **[0:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=4)** We can use WP-CLI Shell and interactively test code, either before adding to the code base, or to confirm a bug.
>
> **[0:11](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=11)** Now you're probably wondering why WP Shell and not PHP-a .
>
> **[0:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=15)** WP Shell loads WordPress up to the point that plugins and themes are loaded.
>
> **[0:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=24)** Here we can see that the init action has run.
>
> **[0:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=27)** We have the entire WP application available to us.
>
> **[0:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=30)** This can be a ton of data, but it's also helpful to think about all the things that are specific as to why we are using the shell.
>
> **[0:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=39)** Some quick highlights on how we interact with the shell.
>
> **[0:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=41)** First, if you type incorrect syntax, it's game over.
>
> **[0:50](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=50)** But when you drop back into the shell, it's like bash.
>
> **[0:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=52)** Your commands are still there.
>
> **[0:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=54)** We can hit the Up Arrow to scroll back to previously run commands.
>
> **[0:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=59)** Once we fix the command, we see the output looks a lot like a var dump.
>
> **[1:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=64)** You can do things like access the WPDB global object and get the WPDB last query property,
>
> **[1:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=78)** or run arbitrary commands like WPDB, get results, show tables.
>
> **[1:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=90)** This is all super cool stuff.
>
> **[1:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=92)** But before we jump into a real world example, I want to explain what is happening.
>
> **[1:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=96)** WP shell is an REPL.
>
> **[1:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=99)** Read, eval, print, loop.
>
> **[1:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=102)** This describes what is happening.
>
> **[1:44](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=104)** We are in a loop that is paused.
>
> **[1:46](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=106)** We add some code, it evals it in the PHP interpreter, and prints it and waits for more and starts the loop again.
>
> **[1:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=112)** When we pass something in the eval, it works as though it is code being executed in our code base.
>
> **[2:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=120)** If we had a plugin that echoed something every time the init action runs, we see that it echoes every time.
>
> **[2:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=128)** Annoying, right?
>
> **[2:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=130)** I want to quickly show one of the problems with REPL.
>
> **[2:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=132)** If we comment out the add action, and run init again, we see, oh, our action is still there.
>
> **[2:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=148)** This is one of the drawbacks for WP shell.
>
> **[2:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=150)** It's not quite interactive, but it's so quick to drop out and drop back in.
>
> **[2:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=158)** In addition to WP Shell, we have two alternatives, but they have some quirks.
>
> **[2:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=163)** First, WP eval.
>
> **[2:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=174)** While I have WP core functions available, because it's not interactive, We can't slowly and refine.
>
> **[3:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=180)** Also, typing and escaping something can be frustrating.
>
> **[3:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=185)** In some cases, where we have a lot of string escaping, WP eval file is available, but also has the same problem of being a bit less iterative.
>
> **[3:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=194)** Next time you're working on a plugin, I encourage you to test some of the ideas before moving to your IDE.

> [!info]- Semantic Content
>
> **Env Vars:** wpdb (3), php (2), repl (2), cli (1), ide (1)
> **Code Keywords:** var (1), super (1), pass (1)
> **CLI Commands:** php (2)
> **Tools:** bash (1)
> **Definitions:** is an  (1)
> **Analogies:** it's like (1)
> **Speakers:** - local (1)

#### Laravel artisan tinker
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=0)** - When we need to test things, interactive debugging is the way to go.
>
> **[0:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=3)** Laravel includes an artisan command for this purpose.
>
> **[0:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=6)** Tinker.
>
> **[0:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=9)** Tinker drops us into an interactive shell after bootstrapping our Laravel app, manipulating and creating models, testing services, dispatching jobs, sending notifications.
>
> **[0:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=18)** Okay. You get the idea.
>
> **[0:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=24)** Tinker is very forgiving.
>
> **[0:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=25)** When I pass an invalid argument or omit the trailing semicolon, we are an objected back into the shell and Tinker works just like your shell.
>
> **[0:44](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=44)** You can use the up arrow to see previously run commands.
>
> **[0:48](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=48)** When working with models, we can easily make a new model.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=60)** It's worth pausing here and noting that Tinker is REPL (Read, Eval, Print and Loop).
>
> **[1:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=66)** This describes what is happening.
>
> **[1:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=67)** We are in a loop that is paused.
>
> **[1:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=69)** We add some code, it evals it in the PHP interpreter and prints and waits for more and starts the loop again.
>
> **[1:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=74)** Often I find myself working with an external API.
>
> **[1:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=77)** Sometimes I find it's easy to drop in Laravel to test an external API.
>
> **[1:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=95)** Tinker will format method returns as make sense.
>
> **[1:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=101)** View body, we see the long Json string.
>
> **[1:46](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=106)** By using Response Json we get a much easier to read object output.
>
> **[1:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=114)** Let's shift gears, and think about this from a debug perspective.
>
> **[1:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=117)** Often we are writing our own endpoints.
>
> **[1:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=119)** So testing these might be useful.
>
> **[2:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=121)** Here, we can resolve an instance of a controller from our service container.
>
> **[2:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=135)** We can now call the index within Tinker.
>
> **[2:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=141)** Controller.
>
> **[2:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=145)** Index.
>
> **[2:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=147)** Note that the second argument here is an array and it is our request object.
>
> **[2:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=150)** So if you have specific request parameters you can pass them in a request object there.
>
> **[2:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=155)** Adjacent to debugging, if you find your testing similar things repeatedly, it's probably a good opportunity to automate tests.
>
> **[2:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=165)** Being comfortable writing PHP in your terminal can shorten the bug fix testing.
>
> **[2:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=169)** And Tinker gives us a great conduit to quickly validate ideas.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (2), php (2)
> **Env Vars:** php (2), api (2), repl (1)
> **Code Keywords:** pass (2), let (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - when (1)

#### Installing and using whoops
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=0)** - [Instructor] Often the easiest place to observe debug info is in the browser.
>
> **[0:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=4)** Whoops is an open source composer package that provides a lot of debug utility and is visually very easy to parse.
>
> **[0:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=10)** Let's start by looking at the output that whoops can provide.
>
> **[0:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=13)** In this example, we are dealing with an exception.
>
> **[0:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=16)** In the upper left section, the actual exception is listed underneath our search icons, Google, DuckDuckGo and Stack Overflow along with a copy button.
>
> **[0:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=26)** Underneath that is the Stack frame.
>
> **[0:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=28)** This is no different than a normal trace.
>
> **[0:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=30)** It shows the file and line number.
>
> **[0:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=33)** (computer mouse clicking) Whoops tagline is PHP errors for cool kids.
>
> **[0:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=39)** And to me, the right 2/3 of the browser is where it starts.
>
> **[0:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=43)** We are looking at our code and the line the fatal originated from is highlighted.
>
> **[0:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=49)** Line 36 here.
>
> **[0:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=54)** Underneath our code, we have some environment information.
>
> **[0:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=57)** I want to go back to the top though. Above our code, we have the file path labeled open.
>
> **[1:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=64)** How cool is it that when clicked on this link drops us into our IDE right at the line number the error occurred from?
>
> **[1:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=69)** And that doesn't work just in the last file in the Stack, but any file. Let's check it out.
>
> **[1:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=74)** (computer mouse clicking) For this demo, I've opted to use Slim PHP.
>
> **[1:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=82)** Slim is a micro framework.
>
> **[1:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=84)** For showing off Whoops, it includes three very useful features.
>
> **[1:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=87)** A router, middleware and being PSR-7 compliant.
>
> **[1:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=91)** In addition, I've composed a required whoops.
>
> **[1:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=97)** The router is useful.
>
> **[1:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=98)** As we can see here that we have the root route and my donuts route.
>
> **[1:44](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=104)** You probably won't have an anonymous function as your second argument when registering a route.
>
> **[1:48](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=108)** But for this example, it's fine and very easy to read.
>
> **[1:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=111)** PSR-7 is a recommendation for how we deal with HTTP messages.
>
> **[1:55](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=115)** Many frameworks have adopted PSR-7 and join it with middleware that allows us to modify the request or response.
>
> **[2:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=121)** In the case of whoops, we can register whoops in the middleware.
>
> **[2:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=125)** Whoops is catching exceptions.
>
> **[2:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=127)** And if one is thrown, it returns output, instead of allowing the app to display the fatal error.
>
> **[2:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=132)** On line 15 and 16, we can set up our IDE so that the open links that I demonstrated before work and toggle whether whoops is enabled.
>
> **[2:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=140)** This might be something you want to do conditionally.
>
> **[2:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=142)** The last thing I want to touch on with whoops is that the browser output is handled using, ready for this?
>
> **[2:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=149)** A handler.
>
> **[2:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=150)** This one that we view in the browser is called pretty page handler but both a plain text and JSON handler included in as well.
>
> **[2:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=159)** If you find yourself working in a lightweight, unfamiliar code base, whoops provides a great way to format and display debug info in an easily digestible way.

> [!info]- Semantic Content
>
> **Env Vars:** psr (3), php (2), ide (2), http (1), json (1)
> **CLI Commands:** php (2), composer (1), find (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Code Keywords:** let (2), function (1)
> **Cross-References:** go back to (1), in the last (1)
> **Non-Speech:** (computer mouse clicking) (2)
> **Documentation:** stack overflow (1)
> **UI Navigation:** toggle (1)

#### Installing and using PHP DebugBar
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=0)** - Some old PHP projects are hard to understand especially when chasing a performance problem.
>
> **[0:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=5)** Debug bar is a great tool to add a ton of helpful context very quickly.
>
> **[0:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=10)** This is a sample application that lists donuts and a description.
>
> **[0:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=14)** The problem is it's awfully slow, almost four seconds to list this page.
>
> **[0:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=18)** Now this app is built on Lumen, a Laravel micro-framework.
>
> **[0:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=22)** But the point is really not the framework.
>
> **[0:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=24)** We're going to look at what debug bar is useful for.
>
> **[0:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=27)** Generally, we know we shouldn't write code like this but there are a ton of legacy products that have a similar idea.
>
> **[0:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=31)** Each page includes the header and the footer markup And this class is just plain gross.
>
> **[0:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=38)** We've got commented code, we've got debug output, missing visibility on methods.
>
> **[0:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=45)** Let's start by requiring debug bar.
>
> **[0:48](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=48)** Note, that immediately after requiring the composer autoload PHP, we instantiate the debug bar, and then we set up a renderer.
>
> **[0:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=57)** Let's go add those to our header and footer.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=60)** So we've got our header and our footer, and now let's go look at the output.
>
> **[1:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=73)** At first glance, it's pretty underwhelming.
>
> **[1:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=75)** We used one megabyte of memory and the request was slow.
>
> **[1:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=78)** So we haven't actually learned anything.
>
> **[1:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=81)** Debug bar is most useful when we use collectors.
>
> **[1:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=84)** Since this is time-related, we're going to add some info to the time collector.
>
> **[1:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=93)** I'm going to add it on this page.
>
> **[1:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=96)** And then we're going to go add it within the get donut information.
>
> **[1:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=101)** Down here, we have this foreach that iterates over each donut.
>
> **[1:44](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=104)** Let's see if there's something there slowing us down.
>
> **[1:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=112)** And now on timeline, we quickly see that sometimes these donut formatter requests are taking 100 milliseconds and we hit this callback 50 times.
>
> **[2:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=128)** Donut formatter.
>
> **[2:11](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=131)** There's the donuts.
>
> **[2:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=135)** And yep, there it is some copy and pasted code that includes a remote kit.
>
> **[2:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=140)** Now this is obviously contrived example and we could have easily solved this had we just jumped into the ugly class and read through what was happening.
>
> **[2:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=149)** I really like debug bar when working on an older code base that has a lot of HTML partials mixed with global function calls.
>
> **[2:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=155)** If you're working on old legacy code with lots of misdirection, give debug bar a try.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), for. (1), function (1), try. (1)
> **CLI Commands:** php (2), composer (1)
> **Env Vars:** php (2), html (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - some (1)

#### Query Monitor for WordPress
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=0)** - [Narrator] Some of the success of WordPress must be attributed to the huge library of plugins and themes.
>
> **[0:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=5)** While these are immensely helpful they can mask bugs and performance issues.
>
> **[0:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=9)** One tool we can use is query monitor.
>
> **[0:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=12)** Query monitor is a WordPress plugin that can help provide insight to what is happening during a request.
>
> **[0:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=18)** (keyboard clicking) This is a basic WordPress 5.9 install using 2022 as the theme.
>
> **[0:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=31)** No cache, and only a few quality plugins are active.
>
> **[0:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=33)** A chorus quarry monitor is now one of them.
>
> **[0:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=35)** I'm logged in.
>
> **[0:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=37)** So you'll note the WP admin bar is visible.
>
> **[0:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=40)** On the right hand side, we see four new numbers.
>
> **[0:44](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=44)** From left to right these show how long the request took, how much memory it required, how long the DB queries took, and how many queries it ran.
>
> **[0:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=54)** I want to dig into this a bit further as this tool provides so much context.
>
> **[0:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=58)** Let's start with queries.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=60)** This view shows the 80 queries that were made during this request.
>
> **[1:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=66)** They can be sorted by time and how many rows they returned.
>
> **[1:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=72)** They can be filtered by where the query was called and what component made the call, In our nav on the left hand side there's a menu item for duplicate queries.
>
> **[1:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=85)** It's not uncommon to see these in WP but you'll need to determine the risk.
>
> **[1:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=89)** What I want to call your attention to is the potential troublemakers column.
>
> **[1:34](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=94)** If your query performance is slow this is a good place to start looking.
>
> **[1:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=98)** Another extremely useful area is hooks and actions.
>
> **[1:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=103)** If you've ever had to guess at what priority to run a hook, this is a game changer.
>
> **[1:48](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=108)** Let's look at admin from the hook, filter dropdown.
>
> **[1:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=112)** Note how we can see what was called and at what priority.
>
> **[1:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=117)** You can expand the callback to see where it was.
>
> **[2:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=121)** In addition, we can even highlight specific components like a plugin or theme.
>
> **[2:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=128)** If we have some idea on where the performance or bug issues might be, another area of value I'll point out is the HTTP API calls.
>
> **[2:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=136)** Often external calls to an API during a request can really slow things down.
>
> **[2:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=140)** Most developers will cache results.
>
> **[2:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=141)** So don't let the occasional slow HTTP API call mislead you.
>
> **[2:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=146)** Finally, I want to point out the query monitor can be extended.
>
> **[2:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=149)** In this example, the events calendar has added a menu item for their purposes.
>
> **[2:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=153)** So in addition to being a super useful general tool, it can also be extremely focused.
>
> **[2:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=158)** WordPress has some unique performance challenges.
>
> **[2:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=160)** We looked at queries, hooks and API calls, and query monitor.
>
> **[2:44](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=164)** If you're working on a theme or plugin, drop in query monitor and see what you can uncover.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), http (2)
> **Code Keywords:** let (3), finally, (1), super (1)
> **Definitions:** is a  (4)
> **Prerequisites:** install (1), you'll need (1)
> **Versions:** 5.9 (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### Ray: Dump debugging
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=0)** - Ray is a commercial app that is a super cool take on debugging.
>
> **[0:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=3)** Ray is a standalone app that accompanies are code execution.
>
> **[0:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=7)** In addition to sending data to Ray, you can filter it expand contract, large objects, even pause execution.
>
> **[0:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=13)** Before we dive into features, let's look at [myray.app](https://myray.app), and specifically the docs.
>
> **[0:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=20)** Ray works with many frameworks, as well as some non PHP projects.
>
> **[0:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=24)** This is a laravel app and this command is used to create some donut models.
>
> **[0:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=28)** I'm going to add a Ray function with just a simple string to show that we have executed the command in our terminal, we can run PHP, artisan, make donuts and see in Ray that we get the output we expected.
>
> **[0:48](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=48)** Note that the output also shows where it was sent from, and if we click it, we end up in the right spot in the IDE.
>
> **[0:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=54)** Ray has some features like adding colors to the output which we can use for filtering.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=60)** Here, we are adding blue.
>
> **[1:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=63)** We make the donuts, and let's do green when we are done, The blue tag and the green tag, so far this is just eye candy, but this is to show where this data is displayed.
>
> **[1:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=86)** Here's a fun use case.
>
> **[1:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=88)** If we add Ray caller, we can see the path something has been called from.
>
> **[1:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=93)** Here's our blue again, and our green.
>
> **[1:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=102)** And here's where this was called from.
>
> **[1:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=105)** Similarly, we can share a back trace by using the back trace method on Ray.
>
> **[1:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=114)** That is a pretty nicely formatted back trace.
>
> **[1:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=119)** Going back to our command, we can check out the measure method.
>
> **[2:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=125)** And we see here that Ray captures the Delta in memory and time between both measure method calls.
>
> **[2:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=144)** Ray has some laravel specific methods as well as WP specific.
>
> **[2:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=148)** I want to highlight two of them.
>
> **[2:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=149)** The first is Ray show queries, and here we see the queries that took place on that execution of the command.
>
> **[2:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=165)** This is useful, and can be paired with a stop showing queries to determine what might be happening to our models.
>
> **[2:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=172)** As I said earlier, Ray is great for dealing with large objects.
>
> **[2:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=176)** Let's clean this up a little.
>
> **[2:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=178)** Here we can expand in hide arrays.
>
> **[3:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=190)** We can see where objects are referenced.
>
> **[3:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=193)** Now, the way Ray handles large object is great, but it also has some nice output for models.
>
> **[3:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=200)** Note that the model display is basically the model object we'll be working with in laravel with fillable properties and whatnot.
>
> **[3:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=223)** One final piece to look at let's throw a fatal and see how Ray reacts.
>
> **[3:47](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=227)** We'll make this method first or whatever.
>
> **[3:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=234)** Of course, in the console we can tell we made a mistake, but looking at Ray, we can say that it handles this exception in a pretty beautiful way, including the stack trace.
>
> **[4:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=245)** The last item I want to note is that Ray will only transmit data in non-production environments.
>
> **[4:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=250)** This is helpful if you forget to remove a Ray function before deploy.
>
> **[4:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=253)** So, putting the pieces together, Ray might be a good solution to familiarize yourself with a new code base or in situations where automated testing just isn't possible.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), from. (2), super (1), from, (1)
> **Non-Speech:** (typing) (7)
> **CLI Commands:** make (3), php (2)
> **Definitions:** is a  (5)
> **Env Vars:** php (2), ide (1)
> **Warnings:** note that (2)
> **URLs:** [myray.app](https://myray.app) (1)
> **Documentation:** the docs (1)

#### Xdebug: Step debugging
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=0)** - [Instructor] Imagine how well you'd understand code.
>
> **[0:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=2)** if you could walk through every line as the PHP interpreter executes them.
>
> **[0:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=5)** This is what Xdebug does and using it is a game changer.
>
> **[0:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=9)** Many articles about Xdebug note that it can be difficult to install and configure.
>
> **[0:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=12)** Generally, using PECL is fine.
>
> **[0:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=15)** Just make sure you're installing it with the interpreter you use.
>
> **[0:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=18)** So in Docker or Vagrant.
>
> **[0:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=21)** In my case, I already have it installed.
>
> **[0:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=25)** Once installed, let's take a look at the ini files.
>
> **[0:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=33)** There are a few directives I want to call out.
>
> **[0:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=35)** First, mode.
>
> **[0:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=36)** You'll want this to be set to debug.
>
> **[0:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=38)** Next, start with request set to yes.
>
> **[0:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=42)** This takes out quite a bit of config at the expense of a little bit of overhead.
>
> **[0:46](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=46)** Now let's look at the settings in our IDE.
>
> **[0:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=49)** We have the port set, also force break at first line when no path mapping specified can be important.
>
> **[0:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=56)** during initial setup.
>
> **[0:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=57)** Xdebug works by emitting information from the interpreter via port 9003 and PhpStormacts as a client.
>
> **[1:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=64)** When the emitted information matches a break point, we stop execution.
>
> **[1:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=68)** Plus, it's a ton of info packed into this screen but we're going to break down what all that means.
>
> **[1:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=72)** First, break points.
>
> **[1:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=75)** Let's go directly to the artisan file.
>
> **[1:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=78)** And at the very top, we're going to add a break point.
>
> **[1:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=80)** We can click between the line number and the code to add this red dot.
>
> **[1:24](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=84)** This is a break point.
>
> **[1:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=85)** Next, we need to start listening for PHP debug connections and that's this telephone.
>
> **[1:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=91)** In our terminal, we'll run php artisan.
>
> **[1:34](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=94)** We're not even going to throw in the rest of the command and our IDE takes away focus.
>
> **[1:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=98)** And we have this new view in the bottom half.
>
> **[1:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=101)** Our code is in a pause state right now.
>
> **[1:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=103)** In addition, we can change in memory values and even evaluate code in the stack.
>
> **[1:47](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=107)** Some controls you'll need to know.
>
> **[1:49](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=109)** On the left, we have this continue button.
>
> **[1:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=111)** When I click this code, we'll run to the next break point.
>
> **[1:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=114)** Next we have stop, this just halts the entire request.
>
> **[1:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=118)** Below that is our list of break points.
>
> **[1:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=119)** So far we only have one.
>
> **[2:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=121)** On this line, we are calling the method make on app and we can use the Step Into button.
>
> **[2:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=126)** This takes us to the make method and illuminate foundation application file.
>
> **[2:11](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=131)** I want you to notice that when I click the Step Over, the variable list updates.
>
> **[2:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=138)** See how when we step over, we end up back in the artisan file and now kernel is blue indicating it's new.
>
> **[2:23](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=143)** Let's go ahead and finish this request by clicking resume.
>
> **[2:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=145)** And because we have no more break points, we are done.
>
> **[2:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=148)** Now to show the last couple of features, I want to create a new console command.
>
> **[2:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=159)** So we didn't clear our break points and now we are breaking again.
>
> **[2:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=162)** I'm going to view those and remove them all.
>
> **[2:50](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=170)** And we can see, if I used correct syntax, it would've created a command.
>
> **[2:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=176)** We'll fix that right quick.
>
> **[3:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=181)** And we're going to go setup this command.
>
> **[3:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=189)** I'm going to set it up to mirror input
>
> **[3:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=201)** and mirrors input string to output.
>
> **[3:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=209)** And then capture the input and display it.
>
> **[3:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=212)** Since this is a mirror, I guess we should just reverse it.
>
> **[3:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=213)** So we'll go to the handle and we'll do.
>
> **[3:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=237)** Now let's add a break point at this line and we're going to run our command.
>
> **[4:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=248)** We see here, we have input and that is correctly displaying the value of donut.
>
> **[4:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=252)** And we know to expect two nod on the output but what if we right click and set value to the string of waffle.
>
> **[4:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=265)** And we'll click resume.
>
> **[4:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=268)** In our output we see elffaw.
>
> **[4:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=270)** So this is one more cool feature of Xdebug is that you can actually manipulate the data in memory while running a request.
>
> **[4:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=277)** Our last demo is a conditional break point.
>
> **[4:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=280)** So we'll go back to this break point and we'll right click on it, and we can add simple logic.
>
> **[4:45](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=285)** So we'll say input equals donut.
>
> **[4:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=294)** There's also many more options when you click more.
>
> **[4:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=296)** You can remove it once hit, you can log it, et cetera.
>
> **[5:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=301)** Let's run our command one more time and we see that we've matched the condition.
>
> **[5:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=308)** and so we've paused again.
>
> **[5:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=310)** I hope that you have some ideas on how to put break points to use.
>
> **[5:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=312)** Xdebug can help you become extremely comfortable in your code base.
>
> **[5:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=316)** And the quick iterative approach can be very helpful in building a new feature.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (1), throw (1), continue (1), new. (1)
> **CLI Commands:** php (3), make (3), docker (1)
> **Env Vars:** php (2), ide (2), pecl (1)
> **Prerequisites:** setup (2), install (1), configure (1), you'll need (1)
> **Definitions:** is a  (4)
> **UI Navigation:** go to (1), click on (1)
> **Ports:** port 9003 (1)
> **Cross-References:** go back to (1)


### 3. Debugging on Non-Local Environments

#### What tools are available
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=0)** - [Instructor] While there are many tools available to help see into the execution paths of our apps locally, debugging on non-local instances can sometimes be tricky.
>
> **[0:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=8)** Full-service hosts will provide access logs and error logs.
>
> **[0:11](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=11)** If you're self-hosting, you can configure these as well.
>
> **[0:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=13)** But if your project has some traffic, you will quickly reach data overload.
>
> **[0:17](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=17)** Compounding the problem of too much data, some host configurations effectively make the log files ephemeral, meaning they are so hard to parse, they end up being only useful for recent issues.
>
> **[0:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=27)** So what do we do when faced with a bug we can't replicate locally?
>
> **[0:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=30)** I have a simple mental filter I like to use when reading a bug report.
>
> **[0:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=33)** If it seems impossible, I probably don't have enough understanding of the problem to replicate it locally.
>
> **[0:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=39)** The first thing I do in this situation is start making a list of all the data points I know about the bug.
>
> **[0:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=43)** Logged-in user, certain role, certain part of the day, certain part of the site, et cetera.
>
> **[0:48](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=48)** From there, I make a list of things that will be helpful to know.
>
> **[0:51](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=51)** Does this only affect new users?
>
> **[0:53](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=53)** Can I identify when this started?
>
> **[0:55](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=55)** Does it appear consistently or under load?
>
> **[0:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=58)** These are all helpful things to know, but we still haven't identified how to find these in the huge or dispersed log files.
>
> **[1:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=64)** How do we capture this data in a useful way?
>
> **[1:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=67)** Use or create a workflow that supports logging channels.
>
> **[1:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=70)** Channels can be context specific, and a channel can be anything.
>
> **[1:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=75)** For an annoying bug that happens once a month, maybe emailing yourself a stack trace is sufficient.
>
> **[1:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=80)** For a bug that appears frequently, a better solution might be a custom db table with columns for different parameters you might find helpful.
>
> **[1:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=87)** You don't have to log every occurrence if it's a frequent issue.
>
> **[1:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=90)** There are external services available that you can send logs to as well.
>
> **[1:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=93)** Remember, your goal is to get enough information so you can start replicating locally and fix it.
>
> **[1:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=98)** This is all fine, but you might be tempted to add some debug output directly to a page, either within HTML comments, or only displayed when a get parameter is present.
>
> **[1:46](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=106)** I want to encourage you not to take this approach, if at all possible.
>
> **[1:50](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=110)** If you're working on a project now, chances are, this won't be your last bug.
>
> **[1:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=114)** Put a system in place to help yourself and future developers when bugs arise.
>
> **[1:59](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=119)** Sometimes replicating a bug locally is impossible.
>
> **[2:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=122)** By filtering and refining what you log, you can hone in on how to replicate locally and squash it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Code Keywords:** self (1)
> **Env Vars:** html (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Safety concerns and precautions on remote servers
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=0)** - [Instructor] Debugging on production.
>
> **[0:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=2)** We all know not to do it.
>
> **[0:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=4)** but realistically there may be a time when you are tempted to check just one thing.
>
> **[0:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=8)** I'm going to start with a short story.
>
> **[0:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=10)** Several years ago, I was working on a project to launch multiple sites for a school system with 150 plus locations.
>
> **[0:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=16)** Prior to launch, we tested on staging, we walked through our go live plan.
>
> **[0:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=21)** On launch day, we made the DNS changes necessary, and monitored site traffic and performance.
>
> **[0:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=26)** Traffic was slightly higher than we expected, but not significant.
>
> **[0:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=30)** However, load times were much slower than we planned.
>
> **[0:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=32)** We were running multiple PHP servers with one shared file system.
>
> **[0:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=36)** And because this was production, we had disabled error logs.
>
> **[0:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=40)** I SSHed into one server and found via redistats that we were setting and missing on a lot of cash keys.
>
> **[0:46](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=46)** I immediately thought that it would be useful to see if I could identify, by key, what the issue might be and then can roll a quick fix.
>
> **[0:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=54)** I added one file on the server I was logged into to write the cash keys to a file.
>
> **[0:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=58)** And shortly after I saved the file the server I was on became unresponsive.
>
> **[1:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=63)** This would've been fine, but with a shared file system my change was now on all servers and each one was writing several hundred keys per second to a log file.
>
> **[1:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=73)** To get back to slow, we had to push a full redeploy which resulted in many minutes of complete downtime.
>
> **[1:19](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=79)** Talk about a bad launch, right?
>
> **[1:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=81)** I learned a lot from that experience.
>
> **[1:23](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=83)** There are many takeaways from the story but this isn't a DevOps conversation.
>
> **[1:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=87)** So as a developer, first, don't edit files on production.
>
> **[1:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=91)** Bad syntax could render the site unusable and you've circumvented your own version control system.
>
> **[1:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=96)** Future dev helpers will not be able to find context of before and after.
>
> **[1:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=101)** Second, any logging to an environment that has real load should be written defensively to do no harm.
>
> **[1:46](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=106)** Had I wrapped my logging and conditional to check for a "get" peram, my single request with that peram would be unlikely to cause the mayhem that I caused.
>
> **[1:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=114)** Finally, I panicked.
>
> **[1:56](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=116)** I wanted to meet our response time expectations and opted to try and fix it quickly rather than approach it analytically.
>
> **[2:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=122)** Don't live debug on prod, but if and when you, do make sure you do as much as possible to prevent your panicked self from making a mistake significantly worse.

> [!info]- Semantic Content
>
> **CLI Commands:** php (1), find (1), make (1)
> **Code Keywords:** finally, (1), self (1)
> **Env Vars:** dns (1), php (1)
> **Speakers:** - [instructor] (1)

#### Using Monolog
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=0)** - Sometimes it's hard to think through how to comprehensively log information on remote servers.
>
> **[0:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=5)** Fortunately, the Monolog package exists.
>
> **[0:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=8)** Monolog is useful as it provides contracts and ideas on how to handle and direct log data.
>
> **[0:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=13)** In addition, Monolog implements the "PSR-3" from the PHP Framework Interoperability Group.
>
> **[0:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=20)** PHP standard recommendations, PSRs, are often really well discussed interfaces to common problems.
>
> **[0:27](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=27)** Importantly, "PSR-3" implements the "RFC 5424".
>
> **[0:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=32)** A thrilling document title of the "Syslog Protocol".
>
> **[0:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=35)** The important bit here is that there are eight levels of log messages.
>
> **[0:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=39)** Looking back at Monolog, there are a few key concepts that we can apply safely in any environment, including production.
>
> **[0:47](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=47)** Each logger instance is considered a channel.
>
> **[0:50](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=50)** So if you're chasing a bug of a specific type you could stand up a logger for that specific bug type.
>
> **[0:55](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=55)** We see on line 12 here.
>
> **[0:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=57)** In addition, each logger can have one to x handlers.
>
> **[1:01](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=61)** The handlers can be thought of as a log destination DB, log file, et cetera.
>
> **[1:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=65)** Not completed, but here we show adding the native mailer handler.
>
> **[1:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=69)** These handlers can either resolve and block the message from continuation or bubble it up further.
>
> **[1:14](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=74)** Here we see in the abstract handler that the constructor takes the level and the boolean on bubble.
>
> **[1:19](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=79)** Every handler ultimately extends the abstract handler.
>
> **[1:23](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=83)** In addition, processors can be mixed in to add extra data.
>
> **[1:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=88)** Like tags, IP, user ID, et cetera.
>
> **[1:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=92)** In this case, we're adding requesting region with a function that doesn't exist.
>
> **[1:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=96)** But if we could append that on, we could return the record that has the requesting region.
>
> **[1:40](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=100)** Let's think through this workflow in debugging non-local environments.
>
> **[1:43](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=103)** Using an example of a bug that only surfaces when a user is logged in and visiting their profile page.
>
> **[1:48](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=108)** First, we could create an empty logging service for the profile page.
>
> **[1:52](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=112)** And this logger initially could have no handlers.
>
> **[1:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=114)** So if we ship this to production, it would have no impact.
>
> **[2:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=124)** I find it most helpful when chasing a specific kind of bug to create a custom handler.
>
> **[2:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=129)** Handlers can accept an associative array of context.
>
> **[2:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=132)** In a custom handler, we can map accordingly.
>
> **[2:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=136)** There's tons of handlers available.
>
> **[2:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=140)** And many to log to databases.
>
> **[2:23](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=143)** So putting all this together.
>
> **[2:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=145)** We could create a custom logging channel.
>
> **[2:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=146)** We could pass it one to many handlers.
>
> **[2:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=149)** Maybe even a null handler on environments that aren't useful.
>
> **[2:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=151)** And finally, we can modify the handler to accept context for specific filtering.
>
> **[2:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=156)** Applying Monolog gives us a framework for turning on and off logging.
>
> **[2:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=159)** Not just for current bugs but for future bugs as well.

> [!info]- Semantic Content
>
> **Code Keywords:** implements (2), abstract (2), type. (1), extends (1), case, (1)
> **Env Vars:** psr (2), php (2), rfc (1)
> **CLI Commands:** php (2), find (1)
> **Documentation:** rfc (1)
> **Speakers:** - sometimes (1)

#### Paid products
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=0)** - [Instructor] Once in production, we may find that our logs are too large to be useful.
>
> **[0:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=4)** We might call all that data, noise.
>
> **[0:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=6)** There are quite a few commercial products that can help us sift through that noise.
>
> **[0:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=9)** The first type of product I want to highlight is log file management.
>
> **[0:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=13)** Two options I'm familiar with are Papertrail and Sentry.
>
> **[0:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=16)** In both cases, you can log all or a percentage of requests with errors.
>
> **[0:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=21)** Generally, this data will be combined so you can jump into one error type and inspect each event that has been recorded.
>
> **[0:28](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=28)** These types of services become really useful for a team of developers.
>
> **[0:31](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=31)** You can identify the frequency of events and create tickets from there.
>
> **[0:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=35)** Log files are about specific issues.
>
> **[0:38](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=38)** The next service I want to point to helps identify trends.
>
> **[0:41](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=41)** In APM, or application performance monitor, aggregates all requests and can display performance trends, error rate, perceived user experience, and more.
>
> **[0:50](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=50)** New Relic is one of the better known APMs and some hosting services offer New Relic as part of their plan.
>
> **[0:55](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=55)** There are alternatives to New Relic, Datadog, SolarWinds, and many more.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=60)** APMs tell a story of what your app load looks like.
>
> **[1:03](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=63)** This makes it really easy to identify when something broke.
>
> **[1:06](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=66)** In addition, you can dig into individual requests and see function execution.
>
> **[1:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=70)** I want to warn you that APM data may not tell the entire story if you are experiencing timeouts or fatal errors that prevent some requests from being passed to the 8:00 PM.
>
> **[1:19](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=79)** These kinds of tools pair nicely with long-term projects.
>
> **[1:22](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=82)** They can expose patterns of risk before they impact the app performance.
>
> **[1:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=86)** If you can budget for them, I highly recommend researching the best solution for your team.

> [!info]- Semantic Content
>
> **Env Vars:** apm (2)
> **CLI Commands:** find (1)
> **Code Keywords:** function (1)
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980&t=0)** - [Instructor] Congratulations, we've reached the end of our walkthrough of our debugging techniques.
>
> **[0:05](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980&t=5)** We learned about built-in PHP tools that are available anywhere you run PHP.
>
> **[0:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980&t=9)** We examined different utilities for local debugging.
>
> **[0:12](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980&t=12)** And then we looked at how to deal with logging on non-local environments.
>
> **[0:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980&t=15)** Along the way we visited and revisited some concepts on how we think about our code.
>
> **[0:20](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980&t=20)** At this point, you should have a few new ideas you want to try out in your codebase.
>
> **[0:23](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980&t=23)** Debugging is a huge part of the process as a developer.
>
> **[0:26](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980&t=26)** Pay attention to how other projects approach debugging and chat with other developers.
>
> **[0:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980&t=30)** Now go write clean code and good luck!

> [!info]- Semantic Content
>
> **CLI Commands:** php (2)
> **Env Vars:** php (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Advance Your PHP Skills]]
← [[PHP Techniques- Pagination]] | **7 of 7**

## Appears In

- [[Advance Your PHP Skills]]

## Related Courses

_Courses sharing skills:_

- [[Essential Statamic for PHP and Laravel Developers]] — PHP
- [[Essential Jigsaw for PHP and Laravel Developers]] — PHP
- [[React- Testing and Debugging]] — Debugging
- [[PHP Techniques- Pagination]] — PHP
- [[PHP- User Authentication]] — PHP

---

[↑ Back to top](#)