---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: aws-quick-tips-for-developers
url: "https://www.linkedin.com/learning/aws-quick-tips-for-developers"
duration_minutes: 24
duration: 24m
level: Intermediate
updated: 3/4/2020
learners: 8106
skills:
  - Amazon Web Services (AWS)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFx0el_PyVw9w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668497463?e=2147483647&amp;v=beta&amp;t=vRRGtd4b9BYc4pyoM6tHtgFJiC3VWXQjcLDUxiQCQmg"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Getting Started as an AWS Developer](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20as%20an%20AWS%20Developer.md)'
prev_courses:
  - '[AWS for Developers- Identity Access Management (IAM)](AWS%20for%20Developers-%20Identity%20Access%20Management%20(IAM).md)'
path_nav: '[{"path":"Getting Started as an AWS Developer","position":4,"total":4,"prev":"AWS for Developers- Identity Access Management (IAM)","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - skill/amazon-web-services-aws
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/AWS%20Quick%20Tips%20for%20Developers.md)

![AWS Quick Tips for Developers](https://media.licdn.com/dms/image/v2/C4E0DAQFx0el_PyVw9w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668497463?e=2147483647&amp;v=beta&amp;t=vRRGtd4b9BYc4pyoM6tHtgFJiC3VWXQjcLDUxiQCQmg)

# AWS Quick Tips for Developers

> Amazon Web Services (AWS) boasts over 150 services for everything from storage to machine learning. This course provides helpful, condensed tips for working smarter with some of the most essential services in this popular cloud platform. Instructor Bear Cahill shares bite-sized answers to common questions developers have about AWS. Whether you're trying to monitor AWS billing, set user policies, o

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-quick-tips-for-developers) | 24m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Amazon Web Services Quick Tips**](#amazon-web-services-quick-tips) (21 videos)
  - [Amazon Web Services quick tips](#amazon-web-services-quick-tips)
  - [Triggering an AWS Lambda from DynamoDB](#triggering-an-aws-lambda-from-dynamodb)
  - [Scheduling a Lambda to run regularly](#scheduling-a-lambda-to-run-regularly)
  - [Generating an API Gateway for DynamoDB](#generating-an-api-gateway-for-dynamodb)
  - [Allowing RDS access for multiple servers](#allowing-rds-access-for-multiple-servers)
  - [Sending email from an AWS Lambda](#sending-email-from-an-aws-lambda)
  - [Monitoring AWS billing with alarms](#monitoring-aws-billing-with-alarms)
  - [Setting triggers for S3 bucket events](#setting-triggers-for-s3-bucket-events)
  - [Protecting an S3 bucket from deletion](#protecting-an-s3-bucket-from-deletion)
  - [Saving money with S3 Glacier](#saving-money-with-s3-glacier)
  - [Using CloudTrail for user action audits](#using-cloudtrail-for-user-action-audits)
  - [Setting user policies with IAM groups](#setting-user-policies-with-iam-groups)
  - [Hitting an AWS Lambda via API Gateway](#hitting-an-aws-lambda-via-api-gateway)
  - [Creating an SNS event with S3](#creating-an-sns-event-with-s3)
  - [Easily hosting a web app on S3](#easily-hosting-a-web-app-on-s3)
  - [Limiting access via IAM boundaries](#limiting-access-via-iam-boundaries)
  - [Enable MFA for root security](#enable-mfa-for-root-security)
  - [IAM credential report](#iam-credential-report)
  - [Cognito user pool triggers](#cognito-user-pool-triggers)
  - [SQS](#sqs)
  - [CloudFront](#cloudfront)

### Amazon Web Services Quick Tips

[↑ Back to Table of Contents](#table-of-contents)

#### [Amazon Web Services quick tips](https://www.linkedin.com/learning/aws-quick-tips-for-developers/amazon-web-services-quick-tips?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/amazon-web-services-quick-tips?u=76281980&t=3)** - I'm Bear Cahill, and I've put together a group of quick tips for developers using [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), or AWS. These videos are designed to give you some insights and new skills when working with AWS. Many services are self-contained but have some great ways to make things easier and better. In other cases, you'll learn how to quickly make services work together. Each video is about 60 to 90 seconds long and are independent of each other. So you can watch one here, there, out of order, or however you like. The videos contain tips on services like lambda functions, DynamoDB, S3 buckets, IAM, and more. Whether you use the tips and tricks with AWS or just watch the videos, you'll learn about some great concepts on harnessing the power of AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1)
> **CLI Commands:** aws (4), make (2)
> **Env Vars:** aws (4), iam (1)
> **Speakers:** - i (1)

#### [Triggering an AWS Lambda from DynamoDB](https://www.linkedin.com/learning/aws-quick-tips-for-developers/triggering-an-aws-lambda-from-dynamodb-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/triggering-an-aws-lambda-from-dynamodb-2?u=76281980&t=3)** - [Instructor] If you have a DynamoDB table, you might want to run some functionality whenever a row has been inserted, updated, or deleted. And you can do that by calling a Lambda. To do that, we can create a trigger. So go to the Triggers tab. And then under the Create Trigger button, you can create a new function or use an existing one. We already have an existing Lambda. Our Lambda is maryhadalittle, and we're going to create the trigger here. But we're going to get a problem, and that's because since our Lambda is reading DynamoDB-related data, it needs the right permissions. So I'm going to go to IAM. And in here, I'm going to select Roles. And I know the role for my Lambda is also called maryhadalittle. So I'll select that, and then I'm going to attach a new policy to it. We specifically want a policy that deals with DynamoDB tables, so I'll filter on DYN and select the AWS DynamoDB execution role, and attach that policy. Now I can go back and create the trigger. You might want to refresh first so it picks up any of the changes, and then you can go back to the Triggers tab, create, use the existing Lambda function, and create the trigger. Now when anything changes in your database table, your Lambda will get called and you can see the output in the logs or whatever other functionality your Lambda does.

> [!info]- Semantic Content
>
> **Env Vars:** iam (1), dyn (1), aws (1)
> **UI Navigation:** go to (2), select the (1)
> **CLI Commands:** aws (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Scheduling a Lambda to run regularly](https://www.linkedin.com/learning/aws-quick-tips-for-developers/scheduling-a-lambda-to-run-regularly?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/scheduling-a-lambda-to-run-regularly?u=76281980&t=3)** - [Instructor] If you have a Lambda, and you want to run it periodically like every hour, once a day overnight, or every five minutes, you can do that easily in CloudWatch. I have a function here that's just called Hello World. It doesn't really do anything, but it's good for this example. So I'm going to go to CloudWatch, and under Events, I'm going to select Rules. And here I'm going to create a rule and select Schedule for how often I want it to run. We can have a fixed rate of every minutes, hours, or days. If you're familiar with cron expressions, you can put that in here as well. Then we're going to add our target. For us, it's the Hello World example. We're not going to configure anything for the version or alias, we'll select the defaults. Also same for the input. And then we configure the details, which is just a name, like Hello Schedule, and a description like Hello. And now every five minutes, when I create this rule, it'll run my Lambda. Hopefully in your case, it'll do something meaningful.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), select the (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### [Generating an API Gateway for DynamoDB](https://www.linkedin.com/learning/aws-quick-tips-for-developers/generating-an-api-gateway-for-dynamodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/generating-an-api-gateway-for-dynamodb?u=76281980&t=3)** - [Narrator] Let's say you have a DynamoDB table and you want to provide access to it through an API, how can you create it when the table already exists? Well you can do it AppSync pretty easily. We have a table here that has four columns, id, active, which is a Boolean, name is a string, and SCORES which is a list of numbers. The id is also a string. So let's go to AppSync and set that up. So first I'm going to click Create API and I'm going to select Import DB table. Now we give it which table it is, PlayerRecord, and we'll let it create a New Role for us. So we'll import that and then have to specify the fields that we want to include in our API. Id is already in there so we can do name, which is a string, we'll make that required. We're not going to add active, but we are going to add the scores which is a list. So we select that it's an Integer list in this case, and click List. Now we can just create it by giving it a name. We'll name it ScoresAPI. We create this and then we have everything we need in AppSync to start using it in our apps. And you can get help on that here for IOS, [Android](../../Glossary/Sdk/Android.md), and [JavaScript](../../Skills/Software%20Development/JavaScript.md). And there you go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Android](../../Glossary/Sdk/Android.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** api (3), scores (1), ios (1)
> **Definitions:** is a  (5)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Allowing RDS access for multiple servers](https://www.linkedin.com/learning/aws-quick-tips-for-developers/allowing-rds-access-for-multiple-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/allowing-rds-access-for-multiple-servers?u=76281980&t=3)** - [Instructor] If you create an RDS database, it'll run on an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance, and you'll only be able to connect to it from the computer you were using when you created it. I beat my head against the wall on this one for a while, so hopefully it'll help you out. So from this machine, I can connect to it using [MySQL](../../Skills/Software%20Development/MySQL.md) Shell or MySQL Workbench, but nobody else from other machines can if they need to do some administration. If you go to the Connectivity & Security settings and scroll down, you'll see that the Inbound is set for the IP address of the computer that you're on. If you click on that and go to the EC2 Management console, and click on Inbound, you can edit this to allow connections from anywhere or specific IP addresses. But be careful, you may need that level of security and you may not want to make those changes. You need to talk to whoever's responsible for that type of thing, and if it's you, you should understand the risks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (2)
> **UI Navigation:** go to (2), click on (2), scroll down (1)
> **CLI Commands:** mysql (2), make (1)
> **Env Vars:** ec2 (2), rds (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Sending email from an AWS Lambda](https://www.linkedin.com/learning/aws-quick-tips-for-developers/sending-email-from-an-aws-lambda-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/sending-email-from-an-aws-lambda-2?u=76281980&t=3)** - [Instructor] If you want to be able to send email with your lambda function, you can do it pretty easy with SES, or Simple Email Service. And when you first set up here in the sandbox, which means you can only send emails to and from email addresses you verified with this button. It's also important to note that SES is only available in US East one, US West two, and EU West one, which we'll use in our code. In IAM, you're going to need to attach special permissions to your role that your lambda function uses. If you haven't created your role yet, you can come back and do this later. I already have this role for my lambda function, and I'm going to attach policies. I've created a custom policy here for sendemail that just allows for sending email with SES. You can see Allow, SendEmail, and SendRawEmail. You don't need both, but SendRawEmail allows you to attach headers if you want to do that in your email. Then in my lambda code, I'm using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3.7. And I import boto3 in the exceptions for error handling. Our lambda_handler ignores the event, so I can pass in anything in my test, but you could pass in to and from emails with a body. We set up our client, specifying SES in one of the regions where it's available. Then we call send_email and specify the to address, the body in [HTML](../../Skills/Web%20Development/HTML.md) and text, and the subject, and then finally the from email address as the source. We check for errors and look for the "message": "success" when we run it. I'm going to click Test. Scroll to the top. I see "message": "success" and the email's in my inbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** ses (4), iam (1), html (1)
> **Code Identifiers:** lambda_handler (1), send_email (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** python (1)
> **Versions:** python 3 (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Monitoring AWS billing with alarms](https://www.linkedin.com/learning/aws-quick-tips-for-developers/monitoring-aws-billing-with-alarms?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/monitoring-aws-billing-with-alarms?u=76281980&t=3)** - [Instructor] To keep an eye on how much you're spending on AWS, you'll want to go to the billing service. In here, you can get the estimated charge for your month, and just so you're never surprised, you can go to the billing preferences and sign up to receive billing alerts by checking this box and saving your preferences. Then, you can go to manage billing alerts. This brings up cloud watch, and under alarms you can click on billing, and then you can create a new alarm. You want to set the metric to be the billing service down here at the bottom, for the total estimate charge, in whatever currency you're interested in. Then, you can verify the different settings that you have automatically come up, and mainly, I'm concerned with setting my threshold to $25, and be notified if it's greater than that. I'll click next, and then I can select an existing SNS topic, or create a new topic, and I'll call this testtopic, and I'll add my email address to this. Then I create the topic, click next, and give a name to my alarm, and a description if I want. Click next again, verify everything, and at the bottom, click create an alarm. And now I'll be notified if my charges go over $25.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (1)
> **Env Vars:** aws (1), sns (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Setting triggers for S3 bucket events](https://www.linkedin.com/learning/aws-quick-tips-for-developers/setting-triggers-for-s3-bucket-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/setting-triggers-for-s3-bucket-events?u=76281980&t=3)** - [Instructor] If you have S3 buckets, you might want to be notified if something happens in that bucket, like a new file's added or deleted. Or you might want to kick off some functionality to occur in that event. Let's look at how to do that. I'm going to click on my bucket, then go to the Properties and scroll all the way to the bottom for Events. If I click on Events, I can add a notification. In here I can specify the name of my notification and also any type of events I'm interested in. Let's say for puts and delete marker created. I can also specify a prefix for the path of the files I'm interested in and a suffix for the type. Then you specify what type of notification you want. You might use an SNS topic to send out emails or SQS queue to send messages or a Lambda function. Once you get into Lambda functions, you can pretty much do anything. So from there, any time one of these events occurs it'll call your Lambda function and you can provide the functionality you need to manage your S3 bucket.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** sns (1), sqs (1)
> **Speakers:** - [instructor] (1)

#### [Protecting an S3 bucket from deletion](https://www.linkedin.com/learning/aws-quick-tips-for-developers/protecting-an-s3-bucket-from-deletion?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/aws-quick-tips-for-developers/protecting-an-s3-bucket-from-deletion?u=76281980&t=2)** - [Instructor] If you have an S3 bucket that you want to protect from being deleted from anyone, you can do that with the bucket policy. Let's look at that. I'm going to click on the bucket, go to Permissions, and Bucket Policy. I'm going to need the ARN in a minute, so I'm going to ahead and copy it now. This is where we need to past the policy, so we'll go to the Policy Generator. Under the Policy Generator, we want to specify an S3 Bucket Policy and we want to deny the permission to anyone, so we're going to put an asterisk in here. You could put specific IAM users with their ARNs. It already has S3 Server selected and for the actions we'll select Delete Bucket. And here's where I'll paste that ARN for the bucket that we're trying to protect. I'll add this statement to the policy, that's the only one we want, so we'll go ahead and generate the policy. I'm going to select all of that, copy it, and paste it into the policy that we were just editing on the bucket and click Save. Once it's saved, we can go back to the main area, select the bucket, select Delete, copy the name, and even if we click Confirm it won't delete. Now you can delete that policy later if you need to delete the bucket, but until then it's very safe.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (1), select the (1)
> **Env Vars:** arn (2), iam (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Saving money with S3 Glacier](https://www.linkedin.com/learning/aws-quick-tips-for-developers/saving-money-with-s3-glacier?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/saving-money-with-s3-glacier?u=76281980&t=3)** - [Instructor] If you have a folder in your S3 Bucket that's used for data, for backups or something you don't need to hardly ever access, you might want to turn on Glacier and save some money. So I'm going to click on my Bucket here, check the Folder and under Actions, select Change Storage Class. You want to be familiar with all the attributes of the different Storage Classes to make sure you pick the right one. Glacier's right here. You can also click on the pricing to see the different prices of the Storage Classes. Down here we can see that Glacier is less than half a penny per gig per month. That means you could store 250 gig and it would cost $1 a month. Of course you can't access it immediately but that's the price you pay other than the half a penny a month. I use Glacier for my backups for all my family photos. That way, I can get to them if I need to, it's cheap in the meanwhile and the only reason I need to get to 'em is if something catastrophic happened to my computer and my external hard dive backup. That would be pretty rare but if it did happen, I'm covered.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Using CloudTrail for user action audits](https://www.linkedin.com/learning/aws-quick-tips-for-developers/using-cloudtrail-for-user-action-audits?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/using-cloudtrail-for-user-action-audits?u=76281980&t=3)** - [Instructor] To view actions and changes to your AWS account, you can go to CloudTrail. CloudTrail keeps a record of the actions and changes for the last 90 days. It also records the username, or Lambda function that's performing the action. If you want to store these events in an ongoing way, CloudTrail can save those for you in an S3 bucket. We do that by creating a trail, so I'll click Create trail, I'm going to specify the trail name as east2, cause I only want to monitor this trail in east2 region. For management events you can click on the Learn more link to learn about the management events and specify what type you're interested in. For S3 you can monitor all buckets or individual buckets, and for Lambda functions you can also monitor for all current and future functions. Then you specify if you want to create a bucket or use an existing one. I'll use an existing one. I'm going to specify my donotdeletemeplz, and then under the Advanced I'm going to put east2 as the prefix and create other trails for other regions. You can also specify encryption, validation, and an SNS topic to receive a notification and then create the trail. Now we have the trail saving to our bucket, and we also want to make sure that we investigate the pricing so we understand how much this is going to cost us, we can use the TCO Calculator as well, and the Billing Management console. I hope that helps!

> [!info]- Semantic Content
>
> **Env Vars:** aws (1), sns (1), tco (1)
> **CLI Commands:** aws (1), make (1)
> **UI Navigation:** go to (1), click on (1)
> **Speakers:** - [instructor] (1)

#### [Setting user policies with IAM groups](https://www.linkedin.com/learning/aws-quick-tips-for-developers/setting-user-policies-with-iam-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/setting-user-policies-with-iam-groups?u=76281980&t=3)** - [Instructor] If you have a team of people working in your AWS account you should use different accounts for each person. And to manage the permissions on those accounts you can use groups. Groups allow you to specify permissions for any user in that group. We already have a group called Database with database permissions and Testers for the permissions they need. So it can be based off of a team, a role, or a concept. Lets create a new group called Buckets. We'll give it a name, click Next Step, and then we're going to search for S3 permissions. And we'll give them S3 full access. We'll click the Next Step and verify all the settings and create the group. Now from here, we can select Buckets and under Group Actions we can add users to the group and we can pick the users there or we can go to the specific users account and add a group to it under the Groups tab. They're already in the other group so I'm just going to add Buckets and now that users has access to all of our S3 buckets. So this is a great way to help manage your users permissions now and in the future. In case these permissions ever need to change, you only have to change them in one place.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hitting an AWS Lambda via API Gateway](https://www.linkedin.com/learning/aws-quick-tips-for-developers/hitting-an-aws-lambda-via-api-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/hitting-an-aws-lambda-via-api-gateway?u=76281980&t=3)** - [Instructor] If you have a Lambda function that you want to be able to call with a URL, you want to add an API Gateway trigger. Let's look at our Lambda function. It's basically just a simple function that returns the status, code headers, and bodies. We're using text/plain, but you could use application/[JSON](../../Skills/Web%20Development/JSON.md) or whatever else you need, but this format is important because when it creates the API Gateway for us it's going to use Lambda proxy and it'll expect this format. We can add the trigger, select the API Gateway trigger, set the security to Open and add it. Once it's been added, it'll give us a URL to call and notice it's only displaying the body. But if we wanted to change the API, we can take off the Lambda proxy integration in the Integration Request. We just unclick this box, click Okay and Okay, and then we have to redeploy our API. We'll pick our development stage, give it some description, and deploy it. And then, once it's finished deploying, we can refresh this page and see our entire message body. And there it is. I hope that helps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** api (5), url (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Creating an SNS event with S3](https://www.linkedin.com/learning/aws-quick-tips-for-developers/creating-an-sns-event-with-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/creating-an-sns-event-with-s3?u=76281980&t=3)** - [Instructor] The simple notification service allows for AWS services to publish to an SNS topic and then that topic can trigger subscribing services. Let's look at creating a topic to kick off Lambda when a fall is added to a bucket. So I'm going to click create topic and I'm going to name it kicker for Lambda kicker, and we have to change the access policy to allow anyone to publish to this topic. That updates our [JSON](../../Skills/Web%20Development/JSON.md) permissions here with the principle of asterisk. Then I'm going to create the topic. Once it's created, I can subscribe to it for my Lambda. I just have a simple Lambda here. I'm going to add the trigger, and from the dropdown, select SNS and it already has our kicker topic there so I'll just add that, and then from our bucket, we need to be able to publish, so I'm going to go to my properties, scroll down to events, add a notification, give it a name like new file, set put for the events and tell it to send to an SNS topic and we'll pick our kicker so I can save that. Now that we have all that set up, I'm going to upload a new file and we need to make sure that our Lambda gets called. So I'll upload this text file and then once it's uploaded, we can go to CloudWatch, refresh, and see the new file that our Lambda was kicked off. Once it's done, we can see that we got the notification from the S3 bucket and that all the details are in the body of the message in the call to the Lambda.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** sns (3), aws (1), json (1)
> **UI Navigation:** go to (2), dropdown (1), scroll down (1)
> **CLI Commands:** aws (1), make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Easily hosting a web app on S3](https://www.linkedin.com/learning/aws-quick-tips-for-developers/easily-hosting-a-web-app-on-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/easily-hosting-a-web-app-on-s3?u=76281980&t=3)** - [Instructor] If you want to host your web app on AWS, Amplify can do it for you. I have a basic [react](../../Skills/Web%20Development/React.js.md) app I created with the [npm](../../Skills/Web%20Development/npm.md) init react app command. You can find out more about that at the Create React App Getting Started page. Here's the command that I used and I added host me as my app name. Now I already have Amplify installed. If you don't you can go to the Amplify site, click get started, and learn about setting it up with the install and the configure. From the terminal, I'm already in the path from our project and I'm going to run Amplify in it. We're going to run the init and then we're going to add hosting and then we're going to publish it to AWS. So we have to confirm the project name, give it an environment name, and select a few other things like our default editor, the type of project, the source path, and so on. Now it'll do its magic once we tell it which profile to use that we set up during the configure of Amplify. Once it's initialized, we can run Amplify add hosting. We can specify development or production, the name of the bucket, and the other default should be fine. Now we can publish with Amplify publish. Once it's published, we have our same app running from AWS. Isn't that great?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3), [npm](../../Skills/Web%20Development/npm.md) (1)
> **CLI Commands:** aws (3), npm (1), find (1)
> **Prerequisites:** configure (2), getting started (1), install (1), set up (1)
> **Env Vars:** aws (3), npm (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Limiting access via IAM boundaries](https://www.linkedin.com/learning/aws-quick-tips-for-developers/limiting-access-via-iam-boundaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/limiting-access-via-iam-boundaries?u=76281980&t=3)** - [Instructor] If you use groups in IAM to manage your user's permissions, you know how easy it is to set them up in one place and it affects all the users in that group. It's great, but you also know one size doesn't fit all. So of this group we have the administrator access privileges and that's great and I can add my users to that because groups grant permissions. Very helpful, but I also have some exceptions. I want this user to only be an admin for other user accounts. I can assign those policies specifically, but then if I'm handling each exception as its own thing, I could probably never really use groups very well. Everything's going to be a little different and I'll lose the power of it. So instead what I'm going to do is I'm going to use permission boundaries. Boundaries limit, not grant, permissions. So they get the access from their policies, but in the boundary you can specify specific areas where their access is limited to. So now I set this boundary on a user for IAM full access and even though they have administrator access in their permissions, the boundary is going to limit them to only IAM. If they log in and try to go to another service, they will told they don't have access. You can think of it as a logical and. If they have a permission boundary, they need to have everything in their boundary and in their policy. Just putting it in their boundary is not going to give them permission. I hope that helps.

> [!info]- Semantic Content
>
> **Env Vars:** iam (3)
> **UI Navigation:** go to (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Enable MFA for root security](https://www.linkedin.com/learning/aws-quick-tips-for-developers/enable-mfa-for-root-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/enable-mfa-for-root-security?u=76281980&t=3)** - [Instructor] One way to keep your AWS account secure is by activating MFA. Notice I even have a warning here on my security status that I haven't activated it. I can click here and then click Manage MFA, or from pretty much anywhere in AWS under your user account, you can go to My Security Credentials. From here, you can continue on and then expand the [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) area and activate MFA. You have a few different options, including apps or [Hardware](../../Topics/Hardware.md) devices, and in each case, it'll step you through the process, even giving you some help in listing what applications are available and how much they cost. Once you've enabled it, you'll have MFA on your account and you'll be even more secure than ever.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** mfa (4), aws (2)
> **CLI Commands:** aws (2)
> **UI Navigation:** go to (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [IAM credential report](https://www.linkedin.com/learning/aws-quick-tips-for-developers/iam-credential-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/iam-credential-report?u=76281980&t=3)** - [Instructor] If you want to find out how often your users are logging in, changing their password, and who has access keys, you can see a variety of these things with the credential report. You can go to IAM and click on credential report. From here, you can download the report which is a CSV file. Once it's downloaded, you can open it up in most spreadsheet programs. With the report open, you can see for each user when the user was created, if their password is enabled, the last time they used their password, and the last time they changed their password. You can also see if they have MFA active, if they have access keys and so on. This is a great way to really quickly and easily see what your users are doing as far as logging in and how they're handling their account.

> [!info]- Semantic Content
>
> **Env Vars:** iam (1), csv (1), mfa (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Cognito user pool triggers](https://www.linkedin.com/learning/aws-quick-tips-for-developers/cognito-user-pool-triggers?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/cognito-user-pool-triggers?u=76281980&t=3)** - [Instructor] Many services in AWS allow you to create triggers to kick off a Lambda function at certain points and at certain actions. That includes Cognito user pools. I can click on Triggers on the left and see a variety of actions that can kick of triggers when they occur. I have a Lambda assigned to my pre-authentication. This is invoked when a user submits their information to be authenticated. This happens when a user tries to log in. I have my trigger associated with my maryhadalittle Lambda. If we look at that Lambda, we see that it's very simple. It just takes the event, logs it out, and returns the event. As long as I return the event, even if I've made changes, the user will be able to log in. So now when I log in with this user, they're able to log in. But if I change my Lambda to return something else or raise an exception, the user won't be able to log in. I'll be given a notification that pre-authentication failed with an error. Something went wrong, and that was my exception. You can also view what's being passed in the event in your CloudWatch logs.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [SQS](https://www.linkedin.com/learning/aws-quick-tips-for-developers/sqs?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/sqs?u=76281980&t=3)** - [Instructor] The AWS Simple Queue Service is a great way to send, store, and receive messages between software components without coupling them. So let's go create a queue. At the SQS Dashboard, I'm going to click Create New Queue, and I'm going to name it myq. And I'm going to select the Standard Queue over the First In First Out Queue, and you can read the differences here. I'll click Quick-Create Queue and now our queue's created. And I want to kick off a Lambda whenever there's a message in this queue. I've already got a Lambda function here that just prints out to the console. We need to make sure that its role has the right permissions, so I'll click View TestFunc-role, and down here we can see that it has the AWSLambdaSQSQueueExecutionRole, which allows it to receive messages, and so on. So back at the Lambda up at the top I'm going to click Add trigger, and I'll type sqs and select that. I'm going to clear out the current queue selection it has, and it doesn't have the new one yet so I'll refresh this and try again. Now it's got myq, and I'll leave the batch and enable the trigger. I'll add that and now I just need to send a message. So back at the queue, I'm going to select Queue Actions, Send Message, and then I'll just say test from queue, and send the message. Now I can go check the logs for my Lambda by clicking Monitoring, and View logs in CloudWatch. I'll do a refresh to make sure that I have the latest file, select that and look for the message. Now I can see that the body was test from q, and I've successfully sent my message.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), aws (1)
> **Env Vars:** aws (1), sqs (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [CloudFront](https://www.linkedin.com/learning/aws-quick-tips-for-developers/cloudfront?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/aws-quick-tips-for-developers/cloudfront?u=76281980&t=3)** - [Instructor] If you need to deliver your content around the world really quickly, Amazon CloudFront is a great option. It's a fast, highly secure programmable content delivery network. So let's look at an example. I have an S3 bucket here, and I want to distribute the files inside of it around the world, but only the files in this files folder, and in this files folder, I have one file, the highly-important index.[HTML](../../Skills/Web%20Development/HTML.md). So let's create a distribution for it. So at the CloudFront Dashboard, I'm going to click Create Distribution, and we have two options: web and RTMP. It depends on what types of files you're trying to deliver like html files versus media files. Ours is html, so I'll click Getting Started under Web. For the origin domain name, if you click on there, it will pre-populate it with a lot of options including our bucket name. When we select that, it'll pre-populate the origin ID. Now we just have to specify the path for the files folder, so I'll type /files, but not end with a slash. Then you can add things like custom headers, protocol policy, time to live options and so forth. And I highly recommend you check this Price Class because the more edge locations you have, the larger the cost, and then you click Create Distribution. I've already created one of these because it takes awhile for 'em to copy it around the world, so I'm just going to copy this domain, open a new tab, and I can go right to the files folder without even typing in. And there's the highly-important index.html.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4)
> **File Paths:** index.html (2)
> **Env Vars:** rtmp (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Bear Cahill](../../Instructors/Cloud%20Computing/Bear%20Cahill.md)

## Skills Covered

- Amazon Web Services (AWS)

## Path Context

### In [Getting Started as an AWS Developer](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20as%20an%20AWS%20Developer.md)
← [AWS for Developers- Identity Access Management (IAM)](AWS%20for%20Developers-%20Identity%20Access%20Management%20(IAM).md) | **4 of 4**

## Appears In

- [Getting Started as an AWS Developer](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20as%20an%20AWS%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [AWS- Monitoring, Logging, and Remediation (2021)](AWS-%20Monitoring%2C%20Logging%2C%20and%20Remediation%20(2021).md) — Amazon Web Services (AWS)
- [Complete Guide to AWS Software Deployment](Complete%20Guide%20to%20AWS%20Software%20Deployment.md) — Amazon Web Services (AWS)
- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Amazon Web Services (AWS)
- [AWS Essential Training for Architects](../DevOps/AWS%20Essential%20Training%20for%20Architects.md) — Amazon Web Services (AWS)
- [Building Intelligent Chatbots on AWS](../Artificial%20Intelligence%20(AI)/Building%20Intelligent%20Chatbots%20on%20AWS.md) — Amazon Web Services (AWS)

---

[↑ Back to top](#)