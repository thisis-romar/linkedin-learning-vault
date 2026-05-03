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
  - '[[Advance Your PHP Skills]]'
prev_courses:
  - '[[PHP Techniques- Pagination]]'
path_nav: '[{"path":"Advance Your PHP Skills","position":7,"total":7,"prev":"PHP Techniques- Pagination","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/software-development
  - topic/web-development
  - skill/debugging
  - skill/php
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Advanced%20PHP-%20Debugging%20Techniques.md)

![Advanced PHP: Debugging Techniques](https://media.licdn.com/dms/image/v2/C560DAQE0DmxKRMsmAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655837059078?e=2147483647&amp;v=beta&amp;t=9jrRyhWo-yOmdLSWZjLEZeWITCE8yBRynF6kxfsZ8Uk)

# Advanced PHP: Debugging Techniques

> PHP powers the back end of many of the world’s websites. But its extensive range of error levels makes it hard to know what’s what, especially when it comes to capturing relevant information and debugging errors in your code. In this course, instructor Gary Kovar shows you advanced techniques to improve your debugging workflow using both local and non-local tools. Learn how to use PHP to: Log and 

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698) | 1h 7m | Advanced | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Debugging and PHP](#debugging-and-php)
  - [What you should know](#what-you-should-know)
- [**1. Default Tools for Logging and Identifying Issues**](#1-default-tools-for-logging-and-identifying-issues) (7 videos)
  - [Exploring PHP errors](#exploring-php-errors)
  - [Default logging in popular frameworks](#default-logging-in-popular-frameworks)
  - [Configuring PHP error reporting](#configuring-php-error-reporting)
  - [What to log](#what-to-log)
  - [Logging errors to file](#logging-errors-to-file)
  - [Logging errors to other locations](#logging-errors-to-other-locations)
  - [Understanding back traces](#understanding-back-traces)
- [**2. Local Development Tools**](#2-local-development-tools) (9 videos)
  - [var_dump() debugging: Blue-collar debugging](#var_dump-debugging-blue-collar-debugging)
  - [What tools are available](#what-tools-are-available)
  - [WordPress CLI shell](#wordpress-cli-shell)
  - [Laravel artisan tinker](#laravel-artisan-tinker)
  - [Installing and using whoops](#installing-and-using-whoops)
  - [Installing and using PHP DebugBar](#installing-and-using-php-debugbar)
  - [Query Monitor for WordPress](#query-monitor-for-wordpress)
  - [Ray: Dump debugging](#ray-dump-debugging)
  - [Xdebug: Step debugging](#xdebug-step-debugging)
- [**3. Debugging on Non-Local Environments**](#3-debugging-on-non-local-environments) (4 videos)
  - [What tools are available](#what-tools-are-available)
  - [Safety concerns and precautions on remote servers](#safety-concerns-and-precautions-on-remote-servers)
  - [Using Monolog](#using-monolog)
  - [Paid products](#paid-products)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Debugging and PHP](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/debugging-and-php?u=76281980&t=0)** - [Gary Kovar] As a developer, it's always fun to create a new feature. And often a bit less fun to try and debug something. Especially when we are debugging unfamiliar code or old code. [[PHP]] being interpreted, provides tons of useful information for debugging. Sometimes it feels like too much. I'm going to walk through some ways to think about debugging and then we can use those ideas to capture exactly the data we need to fix the bug. I'm Gary Kovar. I've been debugging PHP at enterprise scale for the last seven years. If you ever feel like finding a bug is like looking for a needle in a haystack, this is the perfect PHP course for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3)
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Speakers:** - [gary (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-you-should-know?u=76281980&t=0)** - [Narrator] This course is for [[PHP]] developers and is designed to help you debug faster. It will be most helpful to PHP developers that have some experience in a code base or programmers coming from another language. You should be relatively comfortable with PHP syntax. Many of the examples will be in [[WordPress]] and [[Laravel]]. You don't need to be an expert in either of those frameworks, but should have some familiarity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[WordPress]] (1), [[Laravel]] (1)
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Speakers:** - [narrator] (1)


### 1. Default Tools for Logging and Identifying Issues

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring PHP errors](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=0)** - When we think about debugging the first thing we think about is errors. The [[PHP]] interpreter can log a lot of helpful information about the code that it runs. Being able to understand what the log files are telling us can help us quickly hone in on issues. PHP has less than 20 types of errors you could possibly run into, but usually we will see notice, warning, fatal error and deprecated. We are going to talk about each of those four types but it's worth noting that only fatal errors will halt code execution. Here is an excerpt of a few lines from different PHP error logs. Note that each line has the same consistent information. First, we have the timestamp followed by the type of error. We'll dig into those more in a moment but let's look at a single error line. The timestamp can help us identify execution order. Next, we see the error type. Following that is the error text. Sometimes this is pretty concise. And finally, we have the in for locating where the error originated from. Let's look at one more. This is a fatal error. It's a ton more information but now it follows the same format. We still have our timestamp. We have the error type, the error itself. In this case it is a stack trace followed by the where. Notices [php.net](https://php.net) tells us that a notice indicates that the script encountered something that could indicate an error but could also happen in the normal course of running a script. Notices can sometimes be byproducts of earlier issues in execution. Here is the notice from our log file. Let's look at why this is a notice. In the localized method of our PHP scripts, we see that the doc block expects the localization variable to be an array. In fact, if it's not an array
>
> **[1:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=96)** we call the doing it wrong function. And in that function, we have a trigger error function. That's actually responsible for writing the line. And the last parameter in the trigger error is E user notice making a notice error While notices can be helpful, warnings are actionable. These are non-fatal runtime errors but are likely impacting logic in your application. If they aren't impacting anything important at the moment they have the potential to in the future. This notice undefined index asks a lot of questions is display a required key? If it's not set, should we have a default? If it's not set should we continue execution in this function? If we asked ourselves, how could that ever not be set? We might need to look further up the log file to see if any notices related to it. PHP will continue to run warnings and notices. So your users may not even know something isn't working quite right, but fatal errors halt execution. Let's look at a fatal error. Starting on line 4 here. The first thing to call it with a fatal error is that it contains a lot of information but it's not as much as it seems. With fatal errors, sometimes the issue is apparent in the first few words call to undefined method, WP post, get ID. Lower I have an example of a [[Laravel]] fatal error. In this case, it runs from line 13 all the way down to 75.
>
> **[3:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/exploring-php-errors?u=76281980&t=180)** In this example, I can skip the first four lines because that is framework code. Then I get to a class that I wrote and now I know where to start fixing. PHP provides useful error context but sometimes it can be overly dense. When looking at errors it is helpful to read not just the error, but also the context. When did it happen and what happened right before or after it? If it is a notice, can it be causing the warning or fatal we are seeing later on?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), [[Laravel]] (1)
> **CLI Commands:** php (7)
> **Env Vars:** php (6)
> **Definitions:** is a  (4), is an  (1)
> **Warnings:** warning (2), note that (1)
> **URLs:** [php.net](https://php.net) (1)
> **Speakers:** - when (1)

#### [Default logging in popular frameworks](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=0)** - [Instructor] My first agency job worked out that we had the clients code but were still specing new features. As a result, my first few weeks were spent reading a log file and fixing notices and warnings. To confirm my fixes were actually fixes, I would first confirm that I knew how to create the logged error. Then I would write my fix and confirm the issue was no longer showing up in the debug log. To set up [[WordPress]] for logging we need to edit a few settings in our WP config file. By default, debugging is not enabled. This is a best practice so we don't actually share application information that could be abused. First, add the WP debug constant and set it to true. If this constant doesn't exist, WP assumes it to be false. During WP bootstrap, in the WP settings file WP debug mode function is called. Reading directly from these doc blocks WP debug mode uses three constants, WP debug, WP debug display and WP debug log. All three can be defined in WP config, by default WP debug and WP debug log are set to false and WP debug display is set to true, WP debug display and WP debug log perform no function unless WP debug is true. Because WP debug display defaults to true when this is active, errors will be displayed in browser. A [[Microsoft Word|word]] of warning though, don't rely exclusively on WP debug display as notices and warnings
>
> **[1:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=93)** in [[AJAX]], Cron, pretty much any NaN browser visible execution will not be visible to you. WP debug log can be a bool or a file path, when it is true, the default location is WP content debug log. But you can pass a string if you'd like to store the file elsewhere. Let's switch gears to [[Laravel]], similar to WordPress, enabling debug in Laravel is a config setting. For local development, Laravel should have an app debug set to true. Laravel approaches logging a bit differently than WordPress. Here we see the logging Laravel is capable of out of the box. But we also see that logging can be set to a lot of places. These are called channels, by default the simple channel is used and logs are stored at storage, logs, Laravel.logs. I want to point out one other interesting piece here in the logging config file. Note how each channel has a level, Laravel via monologue uses RFC 5424 spec meaning we have eight levels of debugging. In your production environment, you should always ensure you're not exposing logged info to your users. So on a WP site, WP debug display
>
> **[2:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/default-logging-in-popular-frameworks?u=76281980&t=178)** should be set to false and on Laravel app debug should be set to false. Most frameworks have simple config settings so logging setup should not be time consuming. Always keep in mind the environment you're working in before enabling log visibility in the browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (8), [[WordPress]] (3), [[Microsoft Word|Word]] (1), [[AJAX]] (1)
> **Definitions:** is a  (2), is called (1)
> **Documentation:** rfc (1), spec (1)
> **Best Practices:** best practice (1), you should always (1)
> **Warnings:** warning (1), keep in mind (1)
> **Prerequisites:** set up (1), setup (1)
> **Env Vars:** rfc (1)
> **Analogies:** similar to (1)

#### [Configuring PHP error reporting](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=0)** - In many cases, your error logging will work pretty much as you want it to. Most local development environments are pre-configured but there may be times you want to adjust what is logged so you can capture very few errors, extremely verbose errors, or anything in between. To see the configuration files in use, you can type [[PHP]]--ini. We see listed here a handful of INI files. Let's first look at the errors config in the php--ini file. Jumping down to error handling and logging, we see a ton of commenting. Thank you, PHP. We'll get into error reporting in a moment, but just above this value, I want to note the common values and default values. The error reporting directive accepts a bitmask of error types. The bitmask is a combination of the listed contents. Note that ampersand, pipe, and tilde are all available to create this bitmask. You can view lines 459 through 462 for explanations of how that works. Scrolling down a bit. In this INI file we have log errors enabled at error reporting E_ALL, but let's look at error log. It's commented out. It's not set. I've done no additional logging configuration in my INI. And yet the frameworks I've been using are logging errors to a file. For a moment, let's drop back to our terminal. Note the additional INI files, and specifically the Scan For Additional INI files in path. You can name the files in this path
>
> **[1:36](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/configuring-php-error-reporting?u=76281980&t=96)** whatever you want ending in .ini. They are processed after the initial php.ini file. Also, we don't see it here, but it is pretty common to prefix INI files with an integer, something like 10-[[MySQL]].ini, or 20opcache.ini This is because these files are parsed in alpha numeric order. There is an error log INI file listed there. Note the error log directive here. This overrides the value provided in the php.ini file. This is not unique to this directive. So as needed, you can override directives. I also want to point out a directive we haven't seen before. The log level directive is a PHP-FPM specific directive. Jumping into PHP-FPM is beyond the scope of this conversation, but know that it's paired with web requests. If we look again at our error log, a reminder that we see alerts, errors, warnings, notices, et cetera. In PHP-FPM, these can be configured with error, warning, notice, alert, and we already had debug. At this point, we should talk about environments. On our local machine while developing, displaying errors in the browser is probably fine. However, in production, you may want to log errors to a file and you'll definitely want to avoid displaying errors to your users. Most often, the default INI values are fine. They're probably configured by your web host or your local development tool. You may not need to change any error directives but knowing where they are and how to read them can be extremely helpful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (8), [[MySQL]] (1)
> **Env Vars:** ini (8), php (4), fpm (3), e_all (1)
> **CLI Commands:** php (8), mysql (1)
> **File Paths:** php.ini (2), 10-mysql.ini (1), 20opcache.ini (1)
> **Definitions:** is a  (2), is an  (1)
> **Warnings:** note that (1), warning (1)
> **Tools:** terminal (1)
> **Speakers:** - in (1)

#### [What to log](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=0)** - [Instructor] We know how [[PHP]] categorizes errors, and we know where logs are stored. Often context specific to our code would be useful to help reduce time sifting through debug logs. I'm sure it's not a surprise that PHP has core functions that allow us to add to logs. But before we do, let's discuss what context to log and the role context plays in debugging. Let's start thinking about our own log messages by looking at PHP messages. PHP messages have four parts, time, message type, message, and location. The timestamp tells us when, the message type tells us how serious, and the message and location are clues. But log lines never exist in a vacuum, and this is an important context to keep in mind when debugging. There is both explicit and implicit context in the message. If we expect it to log an error and didn't, that is useful context. If we expect it to log something three times in a loop, and instead have six, the implicit context is that the loop happened twice. The explicit context is whatever the log line messages are. Early on as a developer, it is easy to just var_dump and die. Don't get me wrong. Var_dump is cool, but what is var_dump missing? Context. Are there issues before and after the var_dump? If the var_dump appears correct but my feature still doesn't work, what's happening? I've often been assigned bug tickets, and when I read the ticket, I say, "That's not possible," but I'm usually wrong. The first thing I do in this situation is figure out what variables would have to have what value to replicate the bug. Once I know what those values would need to be, it's time to start working backwards. How did they get that way? And when you start down that path,
>
> **[1:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-to-log?u=76281980&t=92)** you find that you suddenly have a lot more variables that you need to understand, but it's much less time consuming to do this when I have the context in the message. Remember, when you log something, don't just dump a variable. Think about what you're trying to accomplish. Might it only be helpful to capture this variable if it's not greater than 10, or if it's not an object of a certain type? While the messages themselves are just strings, these messages can be packed with helpful context, and thinking through the context, both explicit and implicit, we can start to identify what is bug causing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4)
> **CLI Commands:** php (4), find (1)
> **Code Identifiers:** var_dump (4)
> **Env Vars:** php (4)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Logging errors to file](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=0)** - [Instructor] Knowing that [[PHP]] has different levels of messages, it's not surprising that we have a few core functions available to work with. Let's dig in and see what we can do. First, let's talk about the core PHP function, error log. Error log can be called within a script. Only one argument is required. It is the message to be logged and it must be of type string. This will log to the log file that is set up. Here, we have a function foo0 we are calling and in it we are logging a message. Just like PHP messages, we see a timestamp, but because we supply the message there is no type or file or line number. So our error log here could be less than helpful if we used it in multiple places in our app. But what kind of data would be helpful? Certainly file and line number. PHP has some constants that can help us here. File, line, function, class, and method. These all have double underscore on both sides. With these, we can construct our own useful message with whatever context is key. Let's add some context here. So we're going to add the file. And we're going to add the line number and let's add the function.
>
> **[1:25](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=85)** So here's that same message. But we have here in our file, which has line 15 is the location using function foo0. But wouldn't it be cool if we could identify the error as a notice warning or error? Great news, PHP has a built in function called trigger error. The second parameter in trigger error is the type. It can be E user error, E user warning or E user notice. Let's look and see what these do. So check this out, all the stuff we talked about adding for context and error log we get for free. We've got our PHP notice and it has the line. We've got our warning and location, and we've got our error in location. So trigger error is cool, but it becomes amazing when paired with set error handler. Set error handler takes a callable and what levels to handle. So we can set a custom error handler for our app and specifically a custom error handler for different error levels, including E user levels. Let's look at an example. Here, I'm setting a custom error handler for E user error. When I run my script that throws errors, the error handler will be used instead. So note that our second parameter here is a bit mask so it's not an or of two pipes. It's a bit wise operator, just a single pipe. And so this will actually work with E user notice and E user warning. Let's see what happens
>
> **[2:58](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=178)** with these bottom two as compared to the previous iteration. So this time, instead of putting out the string we actually did a full var dump on notice and warning and then error displayed the fatal error messaging. I want to look at the parameters on the logging function. Error number is the bit mask for the type, error string is the message we passed. Error file is the file in question and error line is the line number the error occurred on. These can all be used within the context of this callable. And a quick reminder, error log and trigger error expect a string. So while it's helpful to log variables, note that it has to be a string. PHP can coerce scaler types just fine, but objects and arrays need to be encoded as strings. Unless you declare strict types one at the top of file you're working on. Using strict types will help prevent weird type errors but I'll leave that to you to decide. Let's look at an example where we try to run error log on a non string with strict types enabled. My IDE is kind enough to to tell me this is not the correct type. And when we run it, we do no execution after line five because the type is not string. And I want to squeeze one more last item in here. Sometimes it would be helpful to view our messages apart from the messages that the full app is throwing. So if we're writing a [[WordPress]] plugin or providing a package or service to other devs
>
> **[4:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-file?u=76281980&t=270)** that the default log file may have a lot of noise. In these cases you can ini_set error log some file. You should probably do an ini get first. So you can set the value back to what it ought to be when you're done. In this case, I'm using standard out which is why it works in the terminal. I hope as you started thinking about set error handler and combining it with trigger error, you saw some possibilities in how to expose more useful information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), [[WordPress]] (1)
> **Env Vars:** php (7), ide (1)
> **CLI Commands:** php (7)
> **Warnings:** warning (5), note that (2)
> **Code Identifiers:** ini_set (1)
> **Cross-References:** we talked about (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### [Logging errors to other locations](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=0)** - [Instructor] We've explored the [[PHP]] error log directly. And in some situations, it's just not reasonable to capture to the log. The log becomes too large to find. It's not accessible to you. Here's an opportunity to get creative. I'll drop a reminder again that logging on production needs to be handled with care. I've certainly caused a server or two to become unresponsive as a result of a log file devouring all storage. When errors happen infrequently, logging to file can be problematic. How do you find it among the logs? Maybe instead of using error log, we could use mail or something. Nah, that sounds annoying and mail isn't always available. But as we've seen with log messages, it's really helpful when there's a structure. PHP, of course, has timestamp, error_level, message, and file. Those four values seem like a pretty good spot to start as we think through alternate logging. Here's an example creating a database table logging those four values. In a framework like [[WordPress]] or [[Laravel]], it's easy enough to create a model or custom post type to capture the error. In many cases, you'll be working with an app that is backed by a database. And that'll often be a good place to start storing that data. In this example, I'm registering a hidden, custom post type called debug_log. One benefit of logging to a database is that as you uncover more about the error, you can ship more focused logging. Recently, I had an issue on production that I initially couldn't figure out how to reproduce locally. Over the course of several deployments of more focused logging, I was able to uncover the combination of actions to reproduce. So here's how I refine my logging to uncover replication issues. The issue is observable at least once if the bug reports exist, even if not reproducible. In this example, I'm calling do_action,
>
> **[1:34](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=94)** logging to the database, and we'll look at the do_action in a moment. But in this case, I don't want to do it on every post. So I may add something like if first_letter_is uppercase, $post post_title.
>
> **[2:02](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/logging-errors-to-other-locations?u=76281980&t=122)** From this point, instead of calling error log, I'm calling my function. Or, in this example, do_action, that logs to the database. Using the PHP examples that initially were capturing time, error_level, message, and file. From there, we can iterate backwards as a variable coming in with an unexpected value. Here's an example doing the same by inserting custom post to the debug log, custom post type we created. Don't be afraid to update the table if it makes sense to add more context. Think through your app. What are different values at this point in the app? Things like, is the user logged in or if they have a certain role. The cool part about using a table is that it's queryable. You can start to tease out patterns and update your logging conditional to support more explicit situations. In this example, I'm searching where the message contains the [[Microsoft Word|word]] thing and it's happened in the last day. Whether database table is the correct location is not the question. Approaching error messages as a uniform set of facts means it doesn't matter much where you decide to log them, but that they are predictable and packed with explicit and implicit context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[WordPress]] (1), [[Laravel]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** do_action (3), error_level (2), debug_log (1), first_letter_is (1), post_title (1)
> **CLI Commands:** php (3), find (2)
> **Env Vars:** php (3)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Understanding back traces](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=0)** - [Presenter] [[PHP]] error messages fall into a few categories. Sometimes we end up with a stack trace or backtrace that is hundreds of lines long, but this wall of text contains a ton of useful information. Let's start by looking at a backtrace. The backtrace is a list of functions that were called to get to the error. The PHP interpreter keeps this info in a data type called a stack. You can imagine it as a stack of cards, a card either goes on top or gets taken from the top. Looking at line 7 to 15 here we see a [[WordPress]] backtrace and you notice number zero through six are the list of functions that were called and the data that was passed to them. As your app calls a function the interpreter puts the function on the stack. When the function returns the interpreter takes the function off the stack. So when something throws an exception or a fatal error and the interpreter can't really keep moving it says, "Here's everything I know." Remember the stack is like a deck of cards. The card on the bottom was the first card stored. On my screen now starting at line 17 is a [[Laravel]] stack trace. So, let's look at what that means. This is a back trace that was thrown in some automated testing. Starting at the bottom we see main and then we see namespace in phpunit. Scrolling up we see a lot of vendor files. I most likely don't need to debug those because they're not mine. And, aha! Here is a test I wrote. But this shows the assertion so let's drop back one level and we see test submitting an invalid order does not work.
>
> **[1:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=97)** So in this case we can assume this is fine, based on the title, but let's work our way up the stack a bit. I continue to skim until I see another file I own. Let's see. I see a Middleware. I see Controllers. So, because of the title of the test we already know we submitted an invalid order, but we see here on number five and number four the service passing something to a WooOrderValidator. So here's the order validator we pass the validate and then the validator calls validate method and that's line four above it. In this case, there was a lot of info to point out that this was an expected error during testing and honestly it looks like that, I'm just not sure how to handle that exception. So quickly, when we see this huge wall, that's the stack of the executed code to get to this fatal error, we simply skimmed and found the parts that we are responsible for to determine severity. The stack is extremely powerful context and we have direct access to it. The PHP interpreter has two functions that are interesting here. We have debug_print_backtrace and we have debug_backtrace. Let's jump to code and look at debug_print_backtrace. It takes two optional arguments. The first is a bit mask, DEBUG_BACKTRACE_IGNORE_ARGS. Whether or not to admit the args index and thus, all the function method arguments to save memory. So here we see the args argument is omitted.
>
> **[3:10](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=190)** Let's run that. So with that argument omitted, passed by the boolean show_mask, we see that it passed in example and the boolean of one, for true. Let's run it again with that set to false. Let's see the difference. So we see that foo_print_masked was called but the arguments are not included this time. Now, the second thing I want to look at is the second argument, which is how many lines to print. If we want run foo_print_redirection our expectation is that we will run foo_print_redirection which will run foo_print which will run debug_print_backtrace. That's two functions, we should have two lines. So we have line zero and line one. If we tell it to just deal with the first X lines, in this case one, we only see the last item. The item that's on the top of the stack. The second function is debug_backtrace. Instead of printing, this function returns the backtrace as an array of associative arrays. The keys aren't required, but they are function, line, file, class, object, type and args. So in our case, we obviously won't have a class or object. I want to strongly caution you, this is a debug function, should not be used for production. Sometimes in our app it would be helpful to know if something else has already taken place. Do not use this function for that. This function uses a lot of memory.
>
> **[4:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/understanding-back-traces?u=76281980&t=282)** Let's look at the output for var_dump on debug_backtrace. We see we have the file, line, the function and the args that we're called. You could, if so inclined, apply logic in your error handler to determine if the error is something you care about or if you should surface to the next handler. Next time you see a stack output I hope you were able to apply some quick logic to hone in on where the error is coming from and use debug_backtrace with great caution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[WordPress]] (1), [[Laravel]] (1)
> **Code Identifiers:** debug_backtrace (4), debug_print_backtrace (3), foo_print_redirection (2), show_mask (1), foo_print_masked (1)
> **Definitions:** is a  (6)
> **Env Vars:** php (3), debug_backtrace_ignore_args (1)
> **CLI Commands:** php (3)
> **Warnings:** caution (2)
> **Analogies:** imagine (1)
> **Speakers:** - [presenter] (1)


### 2. Local Development Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [var_dump() debugging: Blue-collar debugging](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=0)** - I want you to think back to some of the first [[PHP]] script you wrote. Once you supply the correct syntax, you likely ran into the problem of your script not doing what you wanted. And from there you likely discovered var dump. When you think back on that code you might think about how much you've learned since then. You might even be a little embarrassed. I am. You may still use var dump often or it might also feel a bit primitive. But var dump and its relative have some cool tricks. Why don't we work backwards? Here's some var dump output on an object that happens to contain an array of other objects. And it's very verbose. We see that the object cookie jar contains an array of cookie objects and each has two properties, a name and and an is healthy bool. Looking at this you can mostly build this code backwards in your head. Here's our cookie jar class and here's the cookie class. Let's go ahead and make the is healthy booly in public instead of private and run var dump again. And now we see that no visibility specified the default is public. It's worth noting that var dump takes multiple arguments of any type. So we could string together all these different cookies. It seems like we've explored all of what var dump can do. Maybe, more on that in a moment. var dump has a cousin called var export.
>
> **[1:32](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=92)** var export is a super useful tool for working with arrays. I specifically find myself using it in [[WordPress]] where many core components except an array of ARGs as a parameter, but VX export is really cool when paired with objects. Check out this output. Specifically the static method set state. We could open an interactive PHP shell and see what happens but I'll save the time and spoil it with call to undefined method. Cookie jar underscore, underscore, set state. Set state is a magic method. Just look at the var export output again. This is a way to sidestep the constructor. A warning var export does not check to see if set state is implemented. Let's look at the set state value in the cookie class. We get the array of state and our constructor takes a name and is healthy. So we return a new cookie from name and is healthy which matches the var export of name and is healthy. var export pairs really nicely with automated testing. However, if you're in a situation where you need to configure an object in a way to match some area you're observing this is also a great tool for that. A minute ago, I teased that var dump has some other tricks. Just like var export has set state, var dump has a magic method called debug info. Debug info must return an associative array but you can include any info you want in that array. Let's make this debug easier to read. We're going to include the first cookie, the last cookie and we're going to include a count. This gives us a lot more concise information about this object.
>
> **[3:07](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/var-dump-debugging-blue-collar-debugging?u=76281980&t=187)** So back to var dump and there we see our count. The first cookie and the last cookie. The last core function I want to quickly reference is print R, taking the same cookie jar variable and passing it to print R we see different output. For super dense objects, this can make output a bit less intimidating. Also know that print R respects our debug info method. Both var export and print R accept a second value for return. This is a bool. If set to true, it returns the value instead of printing that. So keep that in mind if you'd rather take this and put it in a log file instead of echoing. I hope you find a good balance of magic methods and the trio of debug functions PHP provides to be useful in your debugging.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[WordPress]] (1)
> **CLI Commands:** php (3), make (3), find (2)
> **Definitions:** is a  (4)
> **Env Vars:** php (3)
> **Analogies:** just like (1)
> **Warnings:** warning (1)
> **Prerequisites:** configure (1)
> **Speakers:** - i (1)

#### [What tools are available](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=0)** - There are many tools available to help see into the execution path of our apps. Adding these to our toolkit can prevent us from tedious reloading and skimming logs. This video is a quick survey of the types of available tools and some examples. The first tools I want to talk about are interactive shells. [[PHP]] ships with an interactive shell that is helpful for testing some really lightweight ideas. This is great, but sometimes a framework specific tool can add more specific context. (keyboard clicking)
>
> **[0:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=35)** WP [[CLI]] is a command line interface for working with [[WordPress]]. One of the available commands is WP shell. When I run WP shell in a WordPress installation I have access to all of the plugins, themes, WP core functions, and the database. So be careful. Useful though. Any WordPress functions you ordinarily would use are available to you. In the [[Laravel]] space we have artisan commands, and for interactive debugging we have tinker. Much like the WP CLI shell command, we can manipulate stored data. I find shell commands to be really useful when I know the function I want to use, and I want to see what data shape it returns. (keyboard clicking) The next category supplement the normal web developer workflow of right code, reload browser, fixed bugs. These are tools that help you see error related information where you're already focusing. Your browser. The first one I want to start with is Whoops! I love the name of this library, and it describes itself as PHP errors for cool kids. Whoops! cleans up traces and makes reading them a lot easier. It is installed in Laravel apps by default, and a composer package is available, so it can be included in any PHP project. We're all familiar with stack traces, and so this breaks down all the steps along the way. Another composer package is called Debug Bar. Now there's an outdated WordPress plugin called Debug Bar, but I'm talking specifically about PHP Debug Bar. The idea is fairly simple in that it puts a bit of status on the bottom of every page. You can see why this would be a local tool only.
>
> **[2:08](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=128)** Here we can see we accessed one view. We can see we use four megabytes, and the request was 69 point 17 milliseconds on PHP version 8.0.13. Rounding up my examples in this category is a WordPress specific plugin called Query Monitor. It shares a lot of the same information as Debug Bar, but leverages the admin bar, so it is initially only visible to admins. Lots of data here. Now I want to call out that these browser facing tools are great for local development and generally are out of the way enough to provide data when you need it and be ignored when you don't, but they should never be used on production. So far we looked at tools that help you understand what happened. The next tool set is about what is happening, and they can be game changers. These are commonly known as Step Debuggers. Ray is a commercial application but the utility it provides is really fantastic. It requires a composer package, but once installed and configured, it really helps frame what is happening in your application. I've added three callbacks here in my donut shop service called by the donut factory command. Let's see what Ray shows us. (keyboard clicking) So we show the total time, the memory usage. There's a Laravel specific dealing with the model. Next we have XD Bug. While XD Bug can be a bit trickier to configure and requires an IDE with some tooling, the value proposition is amazing. (keyboard clicking) As you step through your execution you have the entire state of your application available. This makes it really powerful. Learning XD Bug changed how I write code
>
> **[3:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available?u=76281980&t=222)** and think about debugging. We're used to seeing frames on fatal errors. With XD Bug, We can walk through the stack trace at any point in our execution. So the code is paused right here on this query. And we could even step to that one. Everything we've looked at so far is meant for local use, but our final category of tool is a bit more environment agnostic. These are logging or tracing aggregators. I'm not going to jump too heavily in any specific options here, but knowing these are available, and when to apply them is helpful. Basically these tools try to help you make sense of huge streams of log files. They're searchable and much easier to work with than an enormous production log file. Knowing what tools are available, and when they're most helpful, gives us a lot of options to approach our code with new visibility. Try a new one, and see if it improves your workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[WordPress]] (5), [[Laravel]] (3), [[CLI]] (2)
> **CLI Commands:** php (5), composer (3), find (1), make (1)
> **Env Vars:** php (5), cli (2), ide (1)
> **Definitions:** is a  (4), is called (1), known as (1)
> **Non-Speech:** (keyboard clicking) (4)
> **Versions:** version 8 (1), 0.13 (1)
> **Tools:** command line (1)
> **Warnings:** be careful (1)

#### [WordPress CLI shell](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=0)** - Local debugging can sometimes mean interactively trying out things. We can use WP-[[CLI]] Shell and interactively test code, either before adding to the code base, or to confirm a bug. Now you're probably wondering why WP Shell and not [[PHP]]-a . WP Shell loads [[WordPress]] up to the point that plugins and themes are loaded. Here we can see that the init action has run. We have the entire WP application available to us. This can be a ton of data, but it's also helpful to think about all the things that are specific as to why we are using the shell. Some quick highlights on how we interact with the shell. First, if you type incorrect syntax, it's game over.
>
> **[0:50](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=50)** But when you drop back into the shell, it's like bash. Your commands are still there. We can hit the Up Arrow to scroll back to previously run commands. Once we fix the command, we see the output looks a lot like a var dump. You can do things like access the WPDB global object and get the WPDB last query property,
>
> **[1:18](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=78)** or run arbitrary commands like WPDB, get results, show tables.
>
> **[1:30](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=90)** This is all super cool stuff. But before we jump into a real world example, I want to explain what is happening. WP shell is an REPL. Read, eval, print, loop. This describes what is happening. We are in a loop that is paused. We add some code, it evals it in the PHP interpreter, and prints it and waits for more and starts the loop again. When we pass something in the eval, it works as though it is code being executed in our code base. If we had a plugin that echoed something every time the init action runs, we see that it echoes every time. Annoying, right? I want to quickly show one of the problems with REPL. If we comment out the add action, and run init again, we see, oh, our action is still there. This is one of the drawbacks for WP shell. It's not quite interactive, but it's so quick to drop out and drop back in. In addition to WP Shell, we have two alternatives, but they have some quirks. First, WP eval.
>
> **[2:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/wordpress-cli-shell?u=76281980&t=174)** While I have WP core functions available, because it's not interactive, We can't slowly and refine. Also, typing and escaping something can be frustrating. In some cases, where we have a lot of string escaping, WP eval file is available, but also has the same problem of being a bit less iterative. Next time you're working on a plugin, I encourage you to test some of the ideas before moving to your IDE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[CLI]] (1), [[WordPress]] (1)
> **Env Vars:** wpdb (3), php (2), repl (2), cli (1), ide (1)
> **CLI Commands:** php (2)
> **Tools:** bash (1)
> **Definitions:** is an  (1)
> **Analogies:** it's like (1)
> **Speakers:** - local (1)

#### [Laravel artisan tinker](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=0)** - When we need to test things, interactive debugging is the way to go. [[Laravel]] includes an artisan command for this purpose. Tinker. Tinker drops us into an interactive shell after bootstrapping our Laravel app, manipulating and creating models, testing services, dispatching jobs, sending notifications. Okay. You get the idea. Tinker is very forgiving. When I pass an invalid argument or omit the trailing semicolon, we are an objected back into the shell and Tinker works just like your shell. You can use the up arrow to see previously run commands. When working with models, we can easily make a new model.
>
> **[1:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=60)** It's worth pausing here and noting that Tinker is REPL (Read, Eval, Print and Loop). This describes what is happening. We are in a loop that is paused. We add some code, it evals it in the [[PHP]] interpreter and prints and waits for more and starts the loop again. Often I find myself working with an external API. Sometimes I find it's easy to drop in Laravel to test an external API.
>
> **[1:35](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=95)** Tinker will format method returns as make sense. View body, we see the long [[JSON]] string. By using Response Json we get a much easier to read object output. Let's shift gears, and think about this from a debug perspective. Often we are writing our own endpoints. So testing these might be useful. Here, we can resolve an instance of a controller from our service container.
>
> **[2:15](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/laravel-artisan-tinker?u=76281980&t=135)** We can now call the index within Tinker. Controller. Index. Note that the second argument here is an array and it is our request object. So if you have specific request parameters you can pass them in a request object there. Adjacent to debugging, if you find your testing similar things repeatedly, it's probably a good opportunity to automate tests. Being comfortable writing PHP in your terminal can shorten the bug fix testing. And Tinker gives us a great conduit to quickly validate ideas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (3), [[PHP]] (2), [[JSON]] (2)
> **CLI Commands:** find (3), make (2), php (2)
> **Env Vars:** php (2), api (2), repl (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - when (1)

#### [Installing and using whoops](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=0)** - [Instructor] Often the easiest place to observe debug info is in the browser. Whoops is an open source composer package that provides a lot of debug utility and is visually very easy to parse. Let's start by looking at the output that whoops can provide. In this example, we are dealing with an exception. In the upper left section, the actual exception is listed underneath our search icons, [[Google]], DuckDuckGo and Stack Overflow along with a copy button. Underneath that is the Stack frame. This is no different than a normal trace. It shows the file and line number. (computer mouse clicking) Whoops tagline is [[PHP]] errors for cool kids. And to me, the right 2/3 of the browser is where it starts. We are looking at our code and the line the fatal originated from is highlighted. Line 36 here. Underneath our code, we have some environment information. I want to go back to the top though. Above our code, we have the file path labeled open. How cool is it that when clicked on this link drops us into our IDE right at the line number the error occurred from? And that doesn't work just in the last file in the Stack, but any file. Let's check it out. (computer mouse clicking) For this demo, I've opted to use Slim PHP. Slim is a micro framework. For showing off Whoops, it includes three very useful features. A router, middleware and being PSR-7 compliant. In addition, I've composed a required whoops.
>
> **[1:37](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-whoops?u=76281980&t=97)** The router is useful. As we can see here that we have the root route and my donuts route. You probably won't have an anonymous function as your second argument when registering a route. But for this example, it's fine and very easy to read. PSR-7 is a recommendation for how we deal with HTTP messages. Many frameworks have adopted PSR-7 and join it with middleware that allows us to modify the request or response. In the case of whoops, we can register whoops in the middleware. Whoops is catching exceptions. And if one is thrown, it returns output, instead of allowing the app to display the fatal error. On line 15 and 16, we can set up our IDE so that the open links that I demonstrated before work and toggle whether whoops is enabled. This might be something you want to do conditionally. The last thing I want to touch on with whoops is that the browser output is handled using, ready for this? A handler. This one that we view in the browser is called pretty page handler but both a plain text and [[JSON]] handler included in as well. If you find yourself working in a lightweight, unfamiliar code base, whoops provides a great way to format and display debug info in an easily digestible way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Google]] (1), [[JSON]] (1)
> **Env Vars:** psr (3), php (2), ide (2), http (1), json (1)
> **CLI Commands:** php (2), composer (1), find (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Cross-References:** go back to (1), in the last (1)
> **Non-Speech:** (computer mouse clicking) (2)
> **Documentation:** stack overflow (1)
> **UI Navigation:** toggle (1)

#### [Installing and using PHP DebugBar](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=0)** - Some old [[PHP]] projects are hard to understand especially when chasing a performance problem. Debug bar is a great tool to add a ton of helpful context very quickly. This is a sample application that lists donuts and a description. The problem is it's awfully slow, almost four seconds to list this page. Now this app is built on Lumen, a [[Laravel]] micro-framework. But the point is really not the framework. We're going to look at what debug bar is useful for. Generally, we know we shouldn't write code like this but there are a ton of legacy [[Microsoft Products|products]] that have a similar idea. Each page includes the header and the footer markup And this class is just plain gross. We've got commented code, we've got debug output, missing visibility on methods. Let's start by requiring debug bar. Note, that immediately after requiring the composer autoload PHP, we instantiate the debug bar, and then we set up a renderer. Let's go add those to our header and footer. So we've got our header and our footer, and now let's go look at the output.
>
> **[1:13](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/installing-and-using-php-debugbar?u=76281980&t=73)** At first glance, it's pretty underwhelming. We used one megabyte of memory and the request was slow. So we haven't actually learned anything. Debug bar is most useful when we use collectors. Since this is time-related, we're going to add some info to the time collector. I'm going to add it on this page. And then we're going to go add it within the get donut information. Down here, we have this foreach that iterates over each donut. Let's see if there's something there slowing us down. And now on timeline, we quickly see that sometimes these donut formatter requests are taking 100 milliseconds and we hit this callback 50 times. Donut formatter. There's the donuts. And yep, there it is some copy and pasted code that includes a remote kit. Now this is obviously contrived example and we could have easily solved this had we just jumped into the ugly class and read through what was happening. I really like debug bar when working on an older code base that has a lot of [[HTML]] partials mixed with global function calls. If you're working on old legacy code with lots of misdirection, give debug bar a try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Laravel]] (1), [[Microsoft Products|Products]] (1), [[HTML]] (1)
> **CLI Commands:** php (2), composer (1)
> **Env Vars:** php (2), html (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - some (1)

#### [Query Monitor for WordPress](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=0)** - [Narrator] Some of the success of [[WordPress]] must be attributed to the huge library of plugins and themes. While these are immensely helpful they can mask bugs and performance issues. One tool we can use is query monitor. Query monitor is a WordPress plugin that can help provide insight to what is happening during a request. (keyboard clicking) This is a basic WordPress 5.9 install using 2022 as the theme. No cache, and only a few quality plugins are active. A chorus quarry monitor is now one of them. I'm logged in. So you'll note the WP admin bar is visible. On the right hand side, we see four new numbers. From left to right these show how long the request took, how much memory it required, how long the DB queries took, and how many queries it ran. I want to dig into this a bit further as this tool provides so much context. Let's start with queries. This view shows the 80 queries that were made during this request. They can be sorted by time and how many rows they returned. They can be filtered by where the query was called and what component made the call, In our nav on the left hand side there's a menu item for duplicate queries. It's not uncommon to see these in WP but you'll need to determine the risk. What I want to call your attention to is the potential troublemakers column.
>
> **[1:34](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/query-monitor-for-wordpress?u=76281980&t=94)** If your query performance is slow this is a good place to start looking. Another extremely useful area is hooks and actions. If you've ever had to guess at what priority to run a hook, this is a game changer. Let's look at admin from the hook, filter dropdown. Note how we can see what was called and at what priority. You can expand the callback to see where it was. In addition, we can even highlight specific components like a plugin or theme. If we have some idea on where the performance or bug issues might be, another area of value I'll point out is the HTTP API calls. Often external calls to an API during a request can really slow things down. Most developers will cache results. So don't let the occasional slow HTTP API call mislead you. Finally, I want to point out the query monitor can be extended. In this example, the events calendar has added a menu item for their purposes. So in addition to being a super useful general tool, it can also be extremely focused. WordPress has some unique performance challenges. We looked at queries, hooks and API calls, and query monitor. If you're working on a theme or plugin, drop in query monitor and see what you can uncover.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4)
> **Env Vars:** api (4), http (2)
> **Definitions:** is a  (4)
> **Prerequisites:** install (1), you'll need (1)
> **Versions:** 5.9 (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### [Ray: Dump debugging](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=0)** - Ray is a commercial app that is a super cool take on debugging. Ray is a standalone app that accompanies are code execution. In addition to sending data to Ray, you can filter it expand contract, large objects, even pause execution. Before we dive into features, let's look at [myray.app](https://myray.app), and specifically the docs. Ray works with many frameworks, as well as some non [[PHP]] projects. This is a [[Laravel]] app and this command is used to create some donut models. I'm going to add a Ray function with just a simple string to show that we have executed the command in our terminal, we can run PHP, artisan, make donuts and see in Ray that we get the output we expected. Note that the output also shows where it was sent from, and if we click it, we end up in the right spot in the IDE. Ray has some features like adding colors to the output which we can use for filtering. Here, we are adding blue. We make the donuts, and let's do green when we are done, The blue tag and the green tag, so far this is just eye candy, but this is to show where this data is displayed. Here's a fun use case. If we add Ray caller, we can see the path something has been called from. Here's our blue again, and our green.
>
> **[1:42](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=102)** And here's where this was called from. Similarly, we can share a back trace by using the back trace method on Ray. That is a pretty nicely formatted back trace. Going back to our command, we can check out the measure method. And we see here that Ray captures the Delta in memory and time between both measure method calls. Ray has some laravel specific methods as well as WP specific. I want to highlight two of them. The first is Ray show queries, and here we see the queries that took place on that execution of the command. This is useful, and can be paired with a stop showing queries to determine what might be happening to our models. As I said earlier, Ray is great for dealing with large objects. Let's clean this up a little. Here we can expand in hide arrays. We can see where objects are referenced. Now, the way Ray handles large object is great,
>
> **[3:16](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/ray-dump-debugging?u=76281980&t=196)** but it also has some nice output for models. Note that the model display is basically the model object we'll be working with in laravel with fillable properties and whatnot. One final piece to look at let's throw a fatal and see how Ray reacts. We'll make this method first or whatever. Of course, in the console we can tell we made a mistake, but looking at Ray, we can say that it handles this exception in a pretty beautiful way, including the stack trace. The last item I want to note is that Ray will only transmit data in non-production environments. This is helpful if you forget to remove a Ray function before deploy. So, putting the pieces together, Ray might be a good solution to familiarize yourself with a new code base or in situations where automated testing just isn't possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (3), [[PHP]] (2)
> **Non-Speech:** (typing) (7)
> **CLI Commands:** make (3), php (2)
> **Definitions:** is a  (5)
> **Env Vars:** php (2), ide (1)
> **Warnings:** note that (2)
> **URLs:** [myray.app](https://myray.app) (1)
> **Documentation:** the docs (1)

#### [Xdebug: Step debugging](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=0)** - [Instructor] Imagine how well you'd understand code. if you could walk through every line as the [[PHP]] interpreter executes them. This is what Xdebug does and using it is a game changer. Many articles about Xdebug note that it can be difficult to install and configure. Generally, using PECL is fine. Just make sure you're installing it with the interpreter you use. So in Docker or Vagrant. In my case, I already have it installed. Once installed, let's take a look at the ini files. There are a few directives I want to call out. First, mode. You'll want this to be set to debug. Next, start with request set to yes. This takes out quite a bit of config at the expense of a little bit of overhead. Now let's look at the settings in our IDE. We have the port set, also force break at first line when no path mapping specified can be important. during initial setup. Xdebug works by emitting information from the interpreter via port 9003 and PhpStormacts as a client. When the emitted information matches a break point, we stop execution. Plus, it's a ton of info packed into this screen but we're going to break down what all that means. First, break points. Let's go directly to the artisan file. And at the very top, we're going to add a break point. We can click between the line number and the code to add this red dot. This is a break point. Next, we need to start listening for PHP debug connections and that's this telephone. In our terminal, we'll run php artisan.
>
> **[1:34](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=94)** We're not even going to throw in the [[Representational State Transfer (REST)|rest]] of the command and our IDE takes away focus. And we have this new view in the bottom half. Our code is in a pause state right now. In addition, we can change in memory values and even evaluate code in the stack. Some controls you'll need to know. On the left, we have this continue button. When I click this code, we'll run to the next break point. Next we have stop, this just halts the entire request. Below that is our list of break points. So far we only have one. On this line, we are calling the method make on app and we can use the Step Into button. This takes us to the make method and illuminate foundation application file. I want you to notice that when I click the Step Over, the variable list updates. See how when we step over, we end up back in the artisan file and now kernel is blue indicating it's new. Let's go ahead and finish this request by clicking resume. And because we have no more break points, we are done. Now to show the last couple of features, I want to create a new console command.
>
> **[2:39](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=159)** So we didn't clear our break points and now we are breaking again. I'm going to view those and remove them all. And we can see, if I used correct syntax, it would've created a command. We'll fix that right quick. And we're going to go setup this command.
>
> **[3:09](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=189)** I'm going to set it up to mirror input
>
> **[3:21](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=201)** and mirrors input string to output.
>
> **[3:29](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=209)** And then capture the input and display it. Since this is a mirror, I guess we should just reverse it. So we'll go to the handle and we'll do.
>
> **[3:57](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=237)** Now let's add a break point at this line and we're going to run our command. We see here, we have input and that is correctly displaying the value of donut. And we know to expect two nod on the output but what if we right click and set value to the string of waffle. And we'll click resume. In our output we see elffaw. So this is one more cool feature of Xdebug is that you can actually manipulate the data in memory while running a request. Our last demo is a conditional break point. So we'll go back to this break point and we'll right click on it, and we can add simple logic. So we'll say input equals donut.
>
> **[4:54](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/xdebug-step-debugging?u=76281980&t=294)** There's also many more options when you click more. You can remove it once hit, you can log it, et cetera. Let's run our command one more time and we see that we've matched the condition. and so we've paused again. I hope that you have some ideas on how to put break points to use. Xdebug can help you become extremely comfortable in your code base. And the quick iterative approach can be very helpful in building a new feature.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** php (3), make (3), docker (1)
> **Env Vars:** php (2), ide (2), pecl (1)
> **Prerequisites:** setup (2), install (1), configure (1), you'll need (1)
> **Definitions:** is a  (4)
> **UI Navigation:** go to (1), click on (1)
> **Ports:** port 9003 (1)
> **Cross-References:** go back to (1)


### 3. Debugging on Non-Local Environments

[↑ Back to Table of Contents](#table-of-contents)

#### [What tools are available](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=0)** - [Instructor] While there are many tools available to help see into the execution paths of our apps locally, debugging on non-local instances can sometimes be tricky. Full-service hosts will provide access logs and error logs. If you're self-hosting, you can configure these as well. But if your project has some traffic, you will quickly reach data overload. Compounding the problem of too much data, some host configurations effectively make the log files ephemeral, meaning they are so hard to parse, they end up being only useful for recent issues. So what do we do when faced with a bug we can't replicate locally? I have a simple mental filter I like to use when reading a bug report. If it seems impossible, I probably don't have enough understanding of the problem to replicate it locally. The first thing I do in this situation is start making a list of all the data points I know about the bug. Logged-in user, certain role, certain part of the day, certain part of the site, et cetera. From there, I make a list of things that will be helpful to know. Does this only affect new users? Can I identify when this started? Does it appear consistently or under load? These are all helpful things to know, but we still haven't identified how to find these in the huge or dispersed log files. How do we capture this data in a useful way? Use or create a workflow that supports logging channels. Channels can be context specific, and a channel can be anything. For an annoying bug that happens once a month, maybe emailing yourself a stack trace is sufficient. For a bug that appears frequently, a better solution might be a custom db table with columns for different parameters you might find helpful. You don't have to log every occurrence if it's a frequent issue. There are external services available that you can send logs to as well.
>
> **[1:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/what-tools-are-available-17465801?u=76281980&t=93)** Remember, your goal is to get enough information so you can start replicating locally and fix it. This is all fine, but you might be tempted to add some debug output directly to a page, either within [[HTML]] comments, or only displayed when a get parameter is present. I want to encourage you not to take this approach, if at all possible. If you're working on a project now, chances are, this won't be your last bug. Put a system in place to help yourself and future developers when bugs arise. Sometimes replicating a bug locally is impossible. By filtering and refining what you log, you can hone in on how to replicate locally and squash it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** html (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Safety concerns and precautions on remote servers](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=0)** - [Instructor] Debugging on production. We all know not to do it. but realistically there may be a time when you are tempted to check just one thing. I'm going to start with a short story. Several years ago, I was working on a project to launch multiple sites for a school system with 150 plus locations. Prior to launch, we tested on staging, we walked through our go live plan. On launch day, we made the DNS changes necessary, and monitored site traffic and performance. Traffic was slightly higher than we expected, but not significant. However, load times were much slower than we planned. We were running multiple [[PHP]] servers with one shared file system. And because this was production, we had disabled error logs. I SSHed into one server and found via redistats that we were setting and missing on a lot of cash keys. I immediately thought that it would be useful to see if I could identify, by key, what the issue might be and then can roll a quick fix. I added one file on the server I was logged into to write the cash keys to a file. And shortly after I saved the file the server I was on became unresponsive. This would've been fine, but with a shared file system my change was now on all servers and each one was writing several hundred keys per second to a log file. To get back to slow, we had to push a full redeploy which resulted in many minutes of complete downtime. Talk about a bad launch, right? I learned a lot from that experience. There are many takeaways from the story but this isn't a [[DevOps]] conversation. So as a developer, first, don't edit files on production. Bad syntax could render the site unusable
>
> **[1:33](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/safety-concerns-and-precautions-on-remote-servers?u=76281980&t=93)** and you've circumvented your own [[Version Control]] system. Future dev helpers will not be able to find context of before and after. Second, any logging to an environment that has real load should be written defensively to do no harm. Had I wrapped my logging and conditional to check for a "get" peram, my single request with that peram would be unlikely to cause the mayhem that I caused. Finally, I panicked. I wanted to meet our response time expectations and opted to try and fix it quickly rather than approach it analytically. Don't live debug on prod, but if and when you, do make sure you do as much as possible to prevent your panicked self from making a mistake significantly worse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (1), [[DevOps]] (1), [[Version Control]] (1)
> **CLI Commands:** php (1), find (1), make (1)
> **Env Vars:** dns (1), php (1)
> **Speakers:** - [instructor] (1)

#### [Using Monolog](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=0)** - Sometimes it's hard to think through how to comprehensively log information on remote servers. Fortunately, the Monolog package exists. Monolog is useful as it provides contracts and ideas on how to handle and direct log data. In addition, Monolog implements the "PSR-3" from the [[PHP]] Framework Interoperability Group. PHP standard recommendations, PSRs, are often really well discussed interfaces to common problems. Importantly, "PSR-3" implements the "RFC 5424". A thrilling document title of the "Syslog Protocol". The important bit here is that there are eight levels of log messages. Looking back at Monolog, there are a few key concepts that we can apply safely in any environment, including production. Each logger instance is considered a channel. So if you're chasing a bug of a specific type you could stand up a logger for that specific bug type. We see on line 12 here. In addition, each logger can have one to x handlers. The handlers can be thought of as a log destination DB, log file, et cetera. Not completed, but here we show adding the native mailer handler. These handlers can either resolve and block the message from continuation or bubble it up further. Here we see in the abstract handler that the constructor takes the level and the boolean on bubble. Every handler ultimately extends the abstract handler. In addition, processors can be mixed in to add extra data. Like tags, IP, user ID, et cetera. In this case, we're adding requesting region
>
> **[1:34](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=94)** with a function that doesn't exist. But if we could append that on, we could return the record that has the requesting region. Let's think through this workflow in debugging non-local environments. Using an example of a bug that only surfaces when a user is logged in and visiting their profile page. First, we could create an empty logging service for the profile page. And this logger initially could have no handlers. So if we ship this to production, it would have no impact.
>
> **[2:04](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/using-monolog?u=76281980&t=124)** I find it most helpful when chasing a specific kind of bug to create a custom handler. Handlers can accept an associative array of context. In a custom handler, we can map accordingly. There's tons of handlers available. And many to log to [[Databases]]. So putting all this together. We could create a custom logging channel. We could pass it one to many handlers. Maybe even a null handler on environments that aren't useful. And finally, we can modify the handler to accept context for specific filtering. Applying Monolog gives us a framework for turning on and off logging. Not just for current bugs but for future bugs as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Databases]] (1)
> **Env Vars:** psr (2), php (2), rfc (1)
> **CLI Commands:** php (2), find (1)
> **Documentation:** rfc (1)
> **Speakers:** - sometimes (1)

#### [Paid products](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/paid-products?u=76281980&t=0)** - [Instructor] Once in production, we may find that our logs are too large to be useful. We might call all that data, noise. There are quite a few commercial [[Microsoft Products|products]] that can help us sift through that noise. The first type of product I want to highlight is log file management. Two options I'm familiar with are Papertrail and Sentry. In both cases, you can log all or a percentage of requests with errors. Generally, this data will be combined so you can jump into one error type and inspect each event that has been recorded. These types of services become really useful for a team of developers. You can identify the frequency of events and create tickets from there. Log files are about specific issues. The next service I want to point to helps identify trends. In APM, or application performance monitor, aggregates all requests and can display performance trends, error rate, perceived [[User Experience (UX)|user experience]], and more. New Relic is one of the better known APMs and some hosting services offer New Relic as part of their plan. There are alternatives to New Relic, Datadog, SolarWinds, and many more. APMs tell a story of what your app load looks like. This makes it really easy to identify when something broke. In addition, you can dig into individual requests and see function execution. I want to warn you that APM data may not tell the entire story if you are experiencing timeouts or fatal errors that prevent some requests from being passed to the 8:00 PM. These kinds of tools pair nicely with long-term projects. They can expose patterns of risk before they impact the app performance. If you can budget for them, I highly recommend researching the best solution for your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** apm (2)
> **CLI Commands:** find (1)
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-php-debugging-techniques-14917698/next-steps?u=76281980&t=0)** - [Instructor] Congratulations, we've reached the end of our walkthrough of our debugging techniques. We learned about built-in [[PHP]] tools that are available anywhere you run PHP. We examined different utilities for local debugging. And then we looked at how to deal with logging on non-local environments. Along the way we visited and revisited some concepts on how we think about our code. At this point, you should have a few new ideas you want to try out in your codebase. Debugging is a huge part of the process as a developer. Pay attention to how other projects approach debugging and chat with other developers. Now go write clean code and good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2)
> **CLI Commands:** php (2)
> **Env Vars:** php (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Gary Kovar]]

## Resources

- Exercise files available

## Skills Covered

- Debugging
- PHP

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