---
type: course
slug: google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud
url: "https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud"
duration_minutes: 47
duration: 47m
level: Beginner
updated: 3/15/2024
learners: 3849
skills:
  - Cloud Security
  - Google Cloud Platform (GCP)
exercise_files: false
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/cloud-security
  - skill/google-cloud-platform-gcp
status: not-started
created: 2026-04-17
---

# Google Cloud Digital Leader Cert Prep: 5 Trust and Security with Google Cloud

> As organizations move their data and applications to the cloud, they must address new security challenges. This course explores the basics of cloud security, the value of Google Cloud's multilayered approach to infrastructure security, and how Google earns and maintains customer trust in the cloud. Learn about these topics and prepare for the Google Cloud Digital Leader certification exam—a certif

> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud) | 47m | Beginner | 4K learners

## Instructor

- [[Google Cloud]]

## Skills Covered

- Cloud Security
- Google Cloud Platform (GCP)

## Table of Contents

### Introduction

#### Course introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980&t=0)** - [Instructor] At Google Cloud, we understand the responsibility that comes with hosting, serving, and safeguarding our customers' valuable data.
>
> **[0:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980&t=8)** As organizations increasingly migrate their data and applications to the cloud, it becomes crucial to address the emerging security challenges.
>
> **[0:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980&t=17)** Trust and security lie at the heart of our product design and development philosophy.
>
> **[0:21](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980&t=21)** We firmly believe that customers own their data and have complete control over its usage.
>
> **[0:27](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980&t=27)** Although we've implemented robust security measures to defend against potential breaches, we also acknowledge that security is a dynamic and ongoing process that demands constant attention and investment.
>
> **[0:39](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980&t=39)** To support you in this journey, we provide a range of security products and services that enable you to detect, investigate, and mitigate cyber threats while aligning with your policy, regulatory, and business objectives.
>
> **[0:53](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980&t=53)** The objective of this course trust and security with Google Cloud is to equip you with the knowledge and skills necessary to discuss fundamental cloud security concepts, explain the business value of Google's multilayered approach to infrastructure security, and describe how Google Cloud earns and maintains customer trust in the cloud.
>
> **[1:13](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980&t=73)** Throughout the course, you're presented with graded knowledge assessments.
>
> **[1:16](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980&t=76)** You must pass these assessments to receive course credit.
>
> **[1:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-introduction?u=76281980&t=80)** Okay, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Trust and Security in the Cloud

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23232112?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23232112?u=76281980&t=0)** - [Instructor] In recent years, the rise of cloud computing has transformed the way that organizations store, process, and manage their data.
>
> **[0:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23232112?u=76281980&t=8)** However, with this increased reliance on the cloud, the need for robust security measures has become essential.
>
> **[0:15](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23232112?u=76281980&t=15)** Securing data, applications, and infrastructure in the cloud is a complex and ever-evolving challenge.
>
> **[0:22](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23232112?u=76281980&t=22)** As new threats and vulnerabilities emerge, organizations must stay ahead of the curve and adapt their security strategies to mitigate risks effectively.
>
> **[0:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23232112?u=76281980&t=32)** In this section of the course, you'll define key security terms and concepts.
>
> **[0:37](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23232112?u=76281980&t=37)** Describe the importance of confidentiality, integrity, availability, control, and compliance in a cloud security model.
>
> **[0:45](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23232112?u=76281980&t=45)** Differentiate between cloud security and traditional on-premises security.
>
> **[0:50](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23232112?u=76281980&t=50)** And describe today's top cybersecurity threats and business implications.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Key security terms and concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=0)** - [Instructor] In the field of cloud security, understanding the terminology is crucial to navigating the landscape effectively.
>
> **[0:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=7)** In this lesson, we introduce essential security terms and concepts that are commonly encountered when discussing cloud security.
>
> **[0:15](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=15)** Let's explore these terms and their significance.
>
> **[0:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=20)** The first three concepts relate to reducing the risk of unauthorized access to sensitive data.
>
> **[0:26](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=26)** The privileged access security model grants specific users access to a broader set of resources than ordinary users.
>
> **[0:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=33)** For example, a system administrator may have privileged access to perform tasks such as troubleshooting and data restoration.
>
> **[0:42](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=42)** However, the misuse of privileged access can pose risks, so it's essential to manage and monitor such access carefully.
>
> **[0:50](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=50)** The least privileged security principle advocates granting users only the access they need to perform their job responsibilities.
>
> **[0:58](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=58)** By providing the minimum required access, organizations can reduce the risk of unauthorized access to sensitive data.
>
> **[1:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=65)** For instance, a sales representative might only need access to a customer relationship management, CRM, system without requiring access to other systems like payroll or finance.
>
> **[1:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=78)** The zero-trust architecture security model assumes that no user or device can be trusted by default.
>
> **[1:25](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=85)** Every user and device must be authenticated and authorized before accessing resources.
>
> **[1:31](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=91)** Zero-rust architecture helps ensure robust security by implementing strict access controls and continuously verifying user identities.
>
> **[1:41](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=101)** The next three concepts relate to how an organization can protect itself from cyber threats.
>
> **[1:47](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=107)** Security by default is a principle that emphasizes integrating security measures into systems and applications from the initial stages of development.
>
> **[1:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=116)** By prioritizing security throughout the entire process, organizations can establish a strong security foundation in their cloud environments.
>
> **[2:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=125)** Security posture refers to the overall security status of a cloud environment.
>
> **[2:10](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=130)** It indicates how well an organization is prepared to defend against cyber attacks by evaluating their security controls, policies and practices.
>
> **[2:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=140)** Cyber resilience refers to an organization's ability to withstand and recover quickly from cyber attacks.
>
> **[2:26](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=146)** It involves identifying, assessing, and mitigating risks, responding to incidents effectively, and recovering from disruptions quickly.
>
> **[2:36](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=156)** Finally, let's explore essential security measures to protect cloud resources from unauthorized access.
>
> **[2:44](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=164)** A firewall is a network device that regulates traffic based on predefined security rules.
>
> **[2:49](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=169)** You can think of a firewall like a security guard for a network.
>
> **[2:53](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=173)** It follows certain rules to decide which traffic is allowed to enter or leave a network.
>
> **[2:59](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=179)** These rules help keep unauthorized people or harmful things away from important cloud resources such as servers, databases, and applications.
>
> **[3:09](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=189)** Following our previous analogy, a security guard checks everyone who wants to enter and only lets in those who have permission.
>
> **[3:16](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=196)** Similarly, a firewall checks the incoming and outgoing traffic in a network and only allows the ones that are safe and authorized.
>
> **[3:25](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=205)** Encryption is the process of converting data into an unreadable format by using an encryption algorithm.
>
> **[3:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=212)** Decryption, however, is the reverse process that uses an encryption key to restore encrypted data back to its original form.
>
> **[3:40](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=220)** Safeguarding the encryption key is crucial because it holds the secret algorithm necessary for decrypting the data.
>
> **[3:47](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=227)** Another way to think about encryption and decryption is writing a message in a secret language that only you and the person you want to send it to can understand.
>
> **[3:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/key-security-terms-and-concepts?u=76281980&t=236)** This way, even if someone intercepts the message, they won't be able to read it because they don't know the secret language.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), default. (1), finally, (1)
> **Definitions:** is a  (2), refers to (2)
> **Analogies:** such as (2), for example (1), for instance (1)
> **Env Vars:** crm (1)
> **Speakers:** - [instructor] (1)

#### Cloud security components
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=0)** - [Instructor] In this lesson, we learn about the components that make up a cloud security model and discover how they contribute to a robust security posture in today's digital landscape.
>
> **[0:11](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=11)** We'll first explore three essential aspects of security: Confidentiality, integrity, and availability.
>
> **[0:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=18)** These three principles form the foundation of the CIA triad, a widely used model for developing effective security systems.
>
> **[0:27](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=27)** The CIA triad emphasizes the importance of protecting sensitive information, ensuring data accuracy and trustworthiness, and maintaining uninterrupted access to resources and services.
>
> **[0:39](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=39)** By understanding and implementing measures to address these aspects, organizations can establish a strong security framework to safeguard their digital assets.
>
> **[0:49](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=49)** Confidentiality is about keeping important information safe and secret.
>
> **[0:54](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=54)** It ensures that only authorized people can access sensitive data no matter where it's stored or sent.
>
> **[1:01](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=61)** Confidentiality is of utmost importance in the cloud, and sensitive information stored and transmitted across cloud environments must be protected from unauthorized access or disclosure.
>
> **[1:13](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=73)** Encryption plays a crucial role in ensuring confidentiality in the cloud.
>
> **[1:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=77)** By using encryption techniques and safeguarding encryption keys, organizations can ensure that only authorized individuals can access and decrypt sensitive data, effectively mitigating the risk of data breaches in the cloud.
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=92)** Integrity means keeping data accurate and trustworthy.
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=95)** It ensures that information doesn't get changed or corrupted no matter where it's stored or how it's moved around.
>
> **[1:42](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=102)** You can think of it like making sure a message doesn't get altered during delivery.
>
> **[1:49](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=109)** Integrity in the cloud involves ensuring the accuracy and trustworthiness of data throughout its lifecycle.
>
> **[1:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=116)** Implementing data integrity controls, such as checksums or digital signatures, enables organizations to verify the authenticity and reliability of their data in the cloud.
>
> **[2:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=128)** This helps prevent unauthorized modifications or tampering, ensuring the integrity of critical information stored and processed in cloud environments.
>
> **[2:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=138)** Availability is all about making sure that cloud systems and services are always accessible and ready for use by the right people when needed.
>
> **[2:27](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=147)** It's like having a reliable electricity supply that never goes out.
>
> **[2:31](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=151)** Cloud environments must be designed with redundancy, failover mechanisms, and disaster recovery plans to maximize availability and minimize downtime.
>
> **[2:41](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=161)** By implementing these measures, organizations can ensure that their systems and applications in the cloud remain accessible whenever needed, promoting business continuity even in the face of potential disruptions.
>
> **[2:55](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=175)** Control refers to the measures and processes implemented to and mitigate security risks.
>
> **[3:01](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=181)** It involves establishing policies, procedures, and technical safeguards to protect against unauthorized access, misuse, and potential threats.
>
> **[3:11](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=191)** Control measures in the cloud include implementing robust authentication mechanisms, access restrictions, and security awareness training.
>
> **[3:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=200)** These measures help organizations manage and mitigate security risks associated with cloud-based systems.
>
> **[3:27](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=207)** By ensuring that only authorized individuals have access to sensitive data and systems in the cloud, organizations can reduce the risk of data breaches and unauthorized activities.
>
> **[3:38](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=218)** Finally, compliance relates to adhering to industry regulations, legal requirements, and organizational policies.
>
> **[3:46](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=226)** It involves ensuring that security practices and measures align with established standards and guidelines.
>
> **[3:53](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=233)** Meeting compliance standards in the cloud demonstrates an organization's commitment to data privacy and security, building trust with stakeholders, and minimizing legal and financial risks.
>
> **[4:04](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=244)** Cloud providers often offer compliance frameworks and certifications that organizations can leverage to meet their regulatory obligations.
>
> **[4:14](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-components?u=76281980&t=254)** By integrating these principles into a comprehensive cloud security model, organizations can establish a strong foundation for protecting their data, maintaining data integrity, and ensuring continuous access to critical resources.

> [!info]- Semantic Content
>
> **Analogies:** think of it like (1), such as (1), it's like (1)
> **Code Keywords:** protected (1), finally, (1)
> **Env Vars:** cia (2)
> **CLI Commands:** make (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### Cloud security vs. traditional on-premises security
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=0)** - [Host] In the past, businesses heavily relied on their own infrastructure and local data centers to manage and protect their digital assets.
>
> **[0:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=8)** They had complete control over their hardware, software, and network components fostering a sense of trust within their premises.
>
> **[0:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=17)** However, as organizations now connect digitally with customers, partners, and employees worldwide, new risks have emerged that require enhanced security measures.
>
> **[0:29](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=29)** This is where cloud security comes into play by offering a different approach compared to traditional on-premises security.
>
> **[0:36](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=36)** Let's explore these important differences.
>
> **[0:40](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=40)** The first is location.
>
> **[0:42](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=42)** Cloud security involves hosting and managing data and applications in offsite data centers operated by cloud service providers, the responsibility for securing the infrastructure and underlying hardware lies with the cloud provider.
>
> **[0:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=56)** Conversely, traditional on-premises, security involves hosting and managing data and applications locally on an organization's own servers and infrastructure, granting direct control and responsibility for securing the physical and virtual environment.
>
> **[1:12](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=72)** Next is responsibility.
>
> **[1:14](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=74)** In a cloud model, the cloud service provider is responsible for securing the infrastructure, network, and physical facilities.
>
> **[1:22](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=82)** The customer is typically responsible for securing their data applications, user access and configurations.
>
> **[1:29](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=89)** On the other hand, in an on-premises setup, the organization is responsible for securing the entire infrastructure, including hardware, network, operating systems, applications, and data.
>
> **[1:41](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=101)** The next difference is scalability.
>
> **[1:44](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=104)** Cloud security offers scalability and elasticity, which allows organizations to easily scale their resources up or down based on demand.
>
> **[1:53](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=113)** This flexibility is suitable for dynamic workloads and rapid growth.
>
> **[1:58](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=118)** In contrast on-premises, security requires organizations to provision and maintain their own infrastructure, which can be more time consuming and costly when they scale up or down.
>
> **[2:09](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=129)** Next is maintenance and updates.
>
> **[2:12](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=132)** Cloud service providers handle infrastructure maintenance, including security updates, patching, and software upgrades.
>
> **[2:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=140)** Customers can focus on managing their applications and data without worrying about the underlying infrastructure.
>
> **[2:26](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=146)** On-premises environments require organizations to maintain and update their own infrastructure involving regular tasks such as patching, software updates, and hardware upgrades.
>
> **[2:37](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=157)** The final difference is capital expenditure.
>
> **[2:40](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=160)** Cloud security follows an operational expenditure model, OpEx, where organizations pay for the services they consume on a subscription basis.
>
> **[2:49](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=169)** This eliminates the need for large upfront capital investments in physical security infrastructure.
>
> **[2:55](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=175)** Traditional on-premises security models involve significant capital expenditure CapEx because organizations must purchase and maintain their own security infrastructure.
>
> **[3:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=186)** Understanding these differences between cloud security and traditional on-premises security helps organizations make informed decisions about the most suitable approach for their specific needs.
>
> **[3:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=197)** Cloud security offers benefits such as offloading, infrastructure management, scalability, and cost flexibility.
>
> **[3:24](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=204)** However, traditional on-premises security provides direct control over the entire infrastructure.
>
> **[3:30](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cloud-security-versus-traditional-on-premises-security?u=76281980&t=210)** Organizations must carefully evaluate their requirements and consider factors such as data sensitivity, compliance regulations, and scalability to determine the most effective security strategy for their business.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), let (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [host] (1)

#### Cybersecurity threats
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=0)** - [Instructor] In today's fast-paced digital world, we're bombarded with attention-grabbing headlines.
>
> **[0:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=5)** CEOs Beware: The perils of career ending cyber attacks.
>
> **[0:10](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=10)** Retailer pays a hefty $179 million due to data breach fallout.
>
> **[0:16](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=16)** Credit agency settles US data breach, facing up to $700 million in penalties.
>
> **[0:22](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=22)** The realm of cyber attacks is evolving rapidly, and these threats can emerge from unexpected sources, even disguised as government entities.
>
> **[0:31](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=31)** So what are some common cybersecurity threats faced by organizations?
>
> **[0:36](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=36)** First is deceptive social engineering.
>
> **[0:39](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=39)** Imagine that a skilled manipulator is seeking to extract confidential system information from unsuspecting individuals.
>
> **[0:46](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=46)** These cyber criminals employ phishing attacks which collect personal details about you, your employees, or your students.
>
> **[0:55](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=55)** They skillfully craft tailored emails and mimic authenticity to deceive their targets.
>
> **[1:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=60)** Therefore, anyone within your organization can be tricked into inadvertently downloading malicious attachments, divulging passwords, or compromising sensitive data.
>
> **[1:11](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=71)** Next is physical damage.
>
> **[1:13](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=73)** Whether it be damage to hardware components, power disruptions, or natural disasters, such as floods, fires, and earthquakes, organizations are responsible for safeguarding data even in the face of physical adversity.
>
> **[1:27](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=87)** You can think of this as protecting precious assets amidst nature's unforgiving forces.
>
> **[1:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=93)** Another threat is malware, viruses, and ransomware.
>
> **[1:37](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=97)** These digital adversaries architect chaos within the cyber domain.
>
> **[1:41](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=101)** Employing malicious software, they aim to disrupt operations, inflict damage, or gain unauthorized access to computer systems.
>
> **[1:49](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=109)** The most insidious of these is ransomware, where crucial files are held hostage until a considerable ransom is paid.
>
> **[1:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=116)** It's like witnessing the digital equivalent of a calculated extortion scheme.
>
> **[2:02](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=122)** The next cybersecurity threat is vulnerable third party systems.
>
> **[2:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=126)** Imagine inviting a trusted ally into your domain only to discover that they inadvertently compromise your security.
>
> **[2:13](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=133)** Many organizations rely on third party systems for essential functions such as finance, inventory management, or account operations.
>
> **[2:22](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=142)** However, without adequate security measures and regular evaluations, these systems can transform into potential threats, leaving data security vulnerable.
>
> **[2:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=153)** It's like using a tool that unwittingly introduces risks to your own treasured possessions.
>
> **[2:39](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=159)** The final threat is configuration mishaps.
>
> **[2:42](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=162)** Even the most seasoned experts make mistakes.
>
> **[2:45](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=165)** Misconfiguration occurs when errors arise during the setup or configuration of resources, which inadvertently exposes sensitive data and systems to unauthorized access.
>
> **[2:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=176)** Surveys consistently identify misconfiguration as the most prominent threat to cloud security.
>
> **[3:03](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=183)** In turn, adopting principles of least privileged and privileged access are imperative because they allow resource access only when explicitly required and authorized.
>
> **[3:13](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=193)** This is like granting access only to those who have earned your trust.
>
> **[3:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/cybersecurity-threats?u=76281980&t=198)** As technology continues to advance at an astonishing pace, organizations must invest in the right expertise to assess, develop, implement, and maintain robust data security plans.

> [!info]- Semantic Content
>
> **Analogies:** imagine (2), such as (2), it's like (2)
> **CLI Commands:** make (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 2. Google’s Trusted Infrastructure

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction?u=76281980&t=0)** - [Narrator] At Google Cloud, we believe in going beyond reliance on a single technology for security.
>
> **[0:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction?u=76281980&t=5)** Our multi-layered strategy builds progressive security layers, combining global data centers, purpose-built servers, custom security hardware and software, and two-step authentication.
>
> **[0:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction?u=76281980&t=18)** This approach provides true defense in depth.
>
> **[0:21](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction?u=76281980&t=21)** In this section of the course, you'll learn about how Google designs and builds its own data centers by using purpose-built servers, networking, and custom security hardware and software.
>
> **[0:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction?u=76281980&t=33)** The role that encryption plays in securing an organization's data and the ways that it can protect data exposed to risks in different states, the differences between authentication, authorization, and auditing, the benefits of using two-step verification and cloud identity and access management, or IAM, how an organization can protect against network attacks by using Google products, in security operations in the cloud and its related business benefits.

> [!info]- Semantic Content
>
> **Env Vars:** iam (1)
> **Speakers:** - [narrator] (1)

#### Data centers
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=0)** - [Presenter] Data centers are more than just facilities filled with computers.
>
> **[0:04](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=4)** They're the backbone of round-the-clock operations for Google Services, including Search, Gmail and YouTube.
>
> **[0:11](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=11)** Moreover, they play a crucial role in storing and processing data for all the services provided on Google Cloud.
>
> **[0:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=18)** At present, Google operates over 30 state-of-the-art data centers worldwide, with some still under construction.
>
> **[0:25](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=25)** These advanced facilities are meticulously designed to deliver exceptional reliability, top-notch security, and outstanding efficiency, and they ensure that Google Services are always available when you need them, but it doesn't stop there.
>
> **[0:40](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=40)** Google is committed to minimizing the environmental impact of data centers.
>
> **[0:44](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=44)** By using cutting edge technologies and renewable energy sources, we strive to reduce our ecological footprint.
>
> **[0:52](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=52)** Let's explore the benefits of Google designing and building its own data centers using purpose-built servers, advanced networking solutions, and custom security hardware and software.
>
> **[1:03](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=63)** One of the greatest advantages of Google's data centers is the implementation of a zero-trust architecture, which ensures enhanced security at every level.
>
> **[1:12](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=72)** Our custom hardware and software are purpose-built, with features like tamper-evident hardware, secure boot, and hardware-based encryption, which establish a strong security posture within the data center environment.
>
> **[1:25](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=85)** Physical security is paramount as well, with robust access control measures and biometric authentication in place.
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=92)** By adopting the principle of lease privilege, only authorized personnel have access to the data centers, which minimizes the risk of physical breaches and maintains a privileged access framework.
>
> **[1:44](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=104)** Furthermore, our data centers embody the concept of security by default.
>
> **[1:48](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=108)** From the moment you step into a Google data center, you can trust that every aspect has been designed and implemented with your security in mind.
>
> **[1:57](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=117)** With cyber resilience as a core principle, our data centers are equipped to withstand and recover from potential security incidences and ensure the continuity and integrity of your data.
>
> **[2:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=128)** Efficiency is another important aspect of our data center design.
>
> **[2:12](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=132)** Purpose-built servers are optimized for specific tasks, which allows them to perform at great speed and with exceptional efficiency.
>
> **[2:19](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=139)** This reduces energy consumption, cuts down on operating costs, and saves resources in the environment.
>
> **[2:27](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=147)** In fact, we measure our success through the power usage effectiveness or PUE score.
>
> **[2:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=152)** By continually striving for the lowest PUE scores, we ensure maximum efficiency in our data centers, leading to significant cost savings and a reduced carbon footprint.
>
> **[2:43](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=163)** For instance, our data center in Hamina, Finland, stands out as one of the most advanced and efficient facilities in our fleet.
>
> **[2:51](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=171)** Its innovative cooling system, which uses sea water from the Bay of Finland, sets a new standard for energy efficiency worldwide.
>
> **[3:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=180)** Scalability is another benefit.
>
> **[3:02](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=182)** Our data centers can quickly and seamlessly accommodate new hardware and servers, which allows us to scale up computing resources on demand.
>
> **[3:11](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=191)** This flexibility is critical for Google to handle massive data volumes and traffic without any disruptions to services.
>
> **[3:19](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=199)** Furthermore, managing our own servers and network provides us with unparalleled customization capabilities.
>
> **[3:26](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=206)** This level of flexibility empowers us to deliver unique services and capabilities that are not available from other providers, giving you access to exclusive features and innovations.
>
> **[3:36](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=216)** Although designing and building data centers requires significant upfront investment, the long-term benefits are substantial.
>
> **[3:43](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-centers?u=76281980&t=223)** By optimizing resources for efficiency and scalability, Google can significantly reduce energy consumption and operating costs, which results in remarkable savings over time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), default. (1)
> **Env Vars:** pue (2)
> **Analogies:** for instance (1)
> **Speakers:** - [presenter] (1)

#### Secure storage
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=0)** - [Presenter] Previously, we learned that encryption is like a secret code that transforms data into an unreadable format using special algorithms.
>
> **[0:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=8)** This process ensures that only those with the right key or password can make sense of the data.
>
> **[0:13](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=13)** It's like using a secret language to protect your information.
>
> **[0:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=17)** By encrypting your data, you can protect it from various risks, such as unauthorized access, loss, or damage.
>
> **[0:24](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=24)** Imagine your data is locked away in a safe.
>
> **[0:27](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=27)** Without the right key, no one can steal it, tamper with it, or even understand the information inside.
>
> **[0:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=33)** Let's take a closer look at how encryption protects your data In different states.
>
> **[0:38](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=38)** When data is at rest, it's stored on physical devices like computers or servers.
>
> **[0:44](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=44)** By encrypting data at rest, even if someone gains physical access to the device, they won't be able to decipher the data without the encryption key.
>
> **[0:52](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=52)** At Google Cloud, we automatically encrypt all customer content at rest without any effort required from you.
>
> **[1:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=60)** It's a free and built-in feature that adds an extra layer of protection to your valuable data.
>
> **[1:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=65)** And if you prefer to manage your encryption keys yourself, you can use our Cloud Key Management Service, Cloud KMS, for added control.
>
> **[1:14](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=74)** When data is in transit, it's moving over networks or the internet.
>
> **[1:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=78)** Encryption plays a crucial role here by shielding your data from interception by cyber criminals or unauthorized parties.
>
> **[1:25](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=85)** It's like sending your information in a locked box that only the intended recipient can open.
>
> **[1:31](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=91)** At Google Cloud, we employ robust security measures to ensure the authenticity, integrity, and privacy of your data during transit.
>
> **[1:40](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=100)** We encrypt and authenticate data at multiple network layers, especially when it travels outside the physical boundaries we control.
>
> **[1:47](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=107)** This way, your information remains safe and secure as it journeys through the digital world.
>
> **[1:52](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=112)** Data in use refers to data being actively processed by a computer.
>
> **[1:57](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=117)** Encrypting data in use adds another layer of protection, especially against unauthorized users who might physically access the computer.
>
> **[2:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=125)** We use a technique called memory encryption, which locks your data inside the computer's memory, making it nearly impossible for unauthorized users to gain access to it.
>
> **[2:15](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=135)** When it comes to encryption algorithms, the advanced encryption standard, AES, take center stage.
>
> **[2:22](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=142)** AES is a powerful encryption algorithm trusted by governments and businesses worldwide.
>
> **[2:28](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=148)** It's like having a top secret encryption method that keeps your data safe from prying eyes.
>
> **[2:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=153)** So whether your data is resting, traveling, or actively in use, encryption acts as your loyal guardian because it ensures its confidentiality and protection.
>
> **[2:44](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/secure-storage?u=76281980&t=164)** At Google Cloud, we take encryption seriously to provide you with a secure storage solution you can trust.

> [!info]- Semantic Content
>
> **Analogies:** it's like (3), such as (1), imagine (1)
> **Env Vars:** aes (2), kms (1)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [presenter] (1)

#### Identity
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=0)** - [Instructor] Often referred to as the 3As, authentication. authorization and auditing are important aspects of cloud identity management used to ensure secure access, manage user privileges, and monitor resource usage.
>
> **[0:14](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=14)** Let's begin with the first A, authentication.
>
> **[0:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=18)** It serves as a gatekeeper because it verifies the identity of users or systems that seek access.
>
> **[0:24](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=24)** Authentication involves presenting unique credentials such as passwords, physical tokens, or biometric data like fingerprints or voice recognition.
>
> **[0:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=33)** Think of it as presenting your identification card before entering a restricted area.
>
> **[0:37](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=37)** By validating the credentials provided, the server confirms that you are who you claim to be.
>
> **[0:43](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=43)** Two-step verification, which you may also hear being referred to as two-factor authentication or multi-factor authentication is a security feature that adds an extra layer of protection to cloud-based systems.
>
> **[0:55](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=55)** With two SV enabled, users need to provide two different pieces of information to log in.
>
> **[1:01](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=61)** For example, it could be a combination of a password and a code sent to their phone through text message, voice call, or an app like Google Authenticator.
>
> **[1:10](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=70)** This powerful feature makes unauthorized access more difficult even if someone manages to obtain your password.
>
> **[1:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=77)** The second A is authorization.
>
> **[1:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=80)** After a user's identity is authenticated, authorization steps in to determine what that user or system is allowed to do within the system.
>
> **[1:29](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=89)** Think of it as the access control mechanism.
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=92)** Different permissions are assigned to individuals or groups based on their roles, responsibilities, and organizational hierarchy.
>
> **[1:40](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=100)** For example, a system administrator might have the authority to create and remove user accounts, whereas a standard user might only be able to view a list of other users.
>
> **[1:50](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=110)** This fine-grain control ensures that each user has the appropriate level of access to perform their tasks while preventing unauthorized actions.
>
> **[1:59](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=119)** The third A, auditing, sometimes referred to as accounting, plays a critical role in monitoring and tracking user activities within a system.
>
> **[2:09](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=129)** By collecting and analyzing logs of user activity, system events, and other data, auditing helps organizations detect anomalies, security breaches, and policy violations.
>
> **[2:21](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=141)** It provides a comprehensive record of actions taken on a system or resource, which proves invaluable during security incident investigations, compliance tracking, and system performance evaluation.
>
> **[2:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=153)** Just like the surveillance cameras in a shopping mall, auditing keeps a watchful eye on activities happening within your system.
>
> **[2:42](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=162)** To provide granular control over who has access to Google Cloud resources and what they can do with those resources, organizations can use Identity and Access Management or IAM.
>
> **[2:52](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=172)** With IAM, you can create and manage user accounts, assign roles to users, grant and revoke permissions to resources, audit user activity, and monitor your security position.
>
> **[3:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=185)** It provides a centralized and efficient approach to managing access control within your Google Cloud environment.
>
> **[3:12](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=192)** Imagine IAM as your organization's security headquarters equipped with robust tools to manage and safeguard your digital assets.
>
> **[3:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=200)** By integrating IAM into your Google Cloud Security Strategy, you can ensure fine-grained access control, enhanced visibility, and centralized resource management.
>
> **[3:30](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/identity?u=76281980&t=210)** This empowers you to protect your organization's sensitive data and resources effectively.

> [!info]- Semantic Content
>
> **Analogies:** think of it as (2), for example (2), such as (1), just like (1), imagine (1)
> **Env Vars:** iam (4)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Network security
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=0)** - [Instructor] When you expand your network to include cloud environments, security considerations take on a whole new dimension.
>
> **[0:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=6)** Unlike traditional on-premises setups with clear perimeters, the cloud brings new possibilities and challenges.
>
> **[0:14](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=14)** Let's explore some strategies to secure your organization's network and ensure the safety of your valuable data and workloads in Google Cloud.
>
> **[0:23](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=23)** Embrace the power of zero-trust networks.
>
> **[0:26](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=26)** In the world of security, trust shouldn't be given freely.
>
> **[0:30](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=30)** With Google Cloud's BeyondCorp Enterprise, you can implement a zero-trust security model.
>
> **[0:36](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=36)** It means that every access request is thoroughly verified and both the user's identity and contexts are considered.
>
> **[0:43](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=43)** This way you maintain strict control over who can access your network and resources both inside and outside your organization.
>
> **[0:51](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=51)** Secure your connections to on-premises and multi-cloud environments.
>
> **[0:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=56)** Many organizations have a mix of cloud and on-premises workloads, or they use multiple cloud providers for resiliency.
>
> **[1:03](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=63)** Ensuring secure connectivity across these environments is crucial.
>
> **[1:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=67)** Google Cloud provides private access methods through services like Cloud VPN and Cloud Interconnect, which let you establish secure connections between your on-premises networks and Google Cloud resources.
>
> **[1:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=80)** Protect your perimeter with Google Cloud's powerful tools.
>
> **[1:23](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=83)** Google Cloud offers various methods to help secure your perimeter, including firewalls and virtual private cloud, VPC, service controls, which help you divide your cloud into different sections and keep them secure.
>
> **[1:36](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=96)** You can also utilize Shared VPC, which is like having a large fence that separates each Google Cloud project so they can work independently and safely.
>
> **[1:45](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=105)** With these tools, you can keep your cloud environment protected and give different teams their own space to work in.
>
> **[1:53](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=113)** Stay ahead with a web application firewall.
>
> **[1:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=116)** External web applications and services are often targeted by cyber threats, including DDoS attacks.
>
> **[2:03](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=123)** DDoS, which stands for distributed denial of service, is a cyber attack that uses multiple compromised computer systems to flood a target with more traffic than it can handle, which causes a denial of service to legitimate users.
>
> **[2:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=137)** Google Cloud Armor comes to the rescue by providing robust DDoS protection.
>
> **[2:22](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=142)** It's like a force field that stops harmful attacks and keeps your website or application safe from things that can make it stop working properly.
>
> **[2:31](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=151)** Automate infrastructure provisioning for enhanced security.
>
> **[2:35](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=155)** By adopting automation tools, you can create immutable infrastructure, which means that it can't be changed after provisioning.
>
> **[2:43](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=163)** Think of infrastructure provisioning tools as your personal assistance for setting up and maintaining your cloud environment.
>
> **[2:50](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=170)** When you use tools like Terraform, Jenkins, and Cloud Build, they handle all the behind the scenes work to create a secure and reliable cloud environment.
>
> **[2:59](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=179)** It's like having a team of efficient workers who build and organize everything you need to run your environment smoothly.
>
> **[3:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=186)** With these tools, your cloud environment becomes a well-designed workspace where everything has its place and functions perfectly, and the best part is when it's set up, it stays that way.
>
> **[3:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=197)** No unexpected changes or disruptions.
>
> **[3:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=200)** If anything does go wrong, these tools are there to quickly identify and fix any issue and ensure that your cloud environment keeps running smoothly.
>
> **[3:30](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=210)** These examples illustrate just a few of the ways organizations use Google Cloud to fortify their networks against attacks.
>
> **[3:37](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/network-security?u=76281980&t=217)** Your specific network setup and security measures will depend on your unique business requirements and risk tolerance.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (2), protected (1)
> **Definitions:** means that (2), stands for (1), is a  (1)
> **Env Vars:** vpc (2), vpn (1)
> **CLI Commands:** make (1), terraform (1)
> **Analogies:** it's like (2)
> **Prerequisites:** set up (1), setup (1)
> **Speakers:** - [instructor] (1)

#### Security operations
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=0)** - [Instructor] SecOps, short for Security Operations, is all about protecting your organization's data and systems in the cloud.
>
> **[0:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=7)** It involves a combination of processes and technologies that help reduce the risk of data breaches, system outages, and other security incidents.
>
> **[0:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=17)** Think of it as your secret weapon for keeping your valuable data safe.
>
> **[0:21](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=21)** Let's explore some of the essential activities involved in SecOps.
>
> **[0:26](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=26)** Vulnerability management is the process of identifying and fixing security vulnerabilities in cloud infrastructure and applications.
>
> **[0:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=34)** It's like regularly checking your castle walls for weak spots.
>
> **[0:38](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=38)** Google Cloud's Security Command Center or SCC provides a centralized view of your security posture.
>
> **[0:45](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=45)** It helps to identify and fix vulnerabilities, and it ensures that your infrastructure remains solid and protected.
>
> **[0:53](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=53)** Another crucial activity is log management.
>
> **[0:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=56)** It's like having a watchful eye on your castle grounds, looking out for any suspicious activity.
>
> **[1:02](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=62)** Google Cloud offers cloud logging, a service to collect and analyze security logs from your entire Google Cloud environment.
>
> **[1:10](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=70)** It helps you detect or respond to any signs of trouble and ensures you anticipate any potential threats.
>
> **[1:16](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=76)** Of course, being prepared for security incidents is equally important.
>
> **[1:21](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=81)** This is where incident response comes in.
>
> **[1:24](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=84)** Imagine having a team of knights ready to defend your castle at a moment's notice.
>
> **[1:29](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=89)** Google Cloud has expert incident responders across various domains who are equipped with the knowledge and tools to tackle any security incident swiftly and effectively.
>
> **[1:39](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=99)** Another crucial aspect of SecOps is educating your employees on security best practices.
>
> **[1:45](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=105)** Just like teaching everyone in the castle to be vigilant and lock the gates, security awareness training helps prevent incidents by raising awareness and empowering employees to protect themselves and the organization.
>
> **[1:58](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=118)** Now, you might be wondering, why should your organization implement SecOps?
>
> **[2:02](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=122)** Well, here are the benefits.
>
> **[2:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=125)** Reduced risk of data breaches.
>
> **[2:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=128)** SecOps helps identify and fixed vulnerabilities, which significantly reduces the risk of data breaches≥ Increased uptime.
>
> **[2:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=137)** A swift and effective incident response minimizes the impact of outages on your business operations, which ensures smoother and uninterrupted services.
>
> **[2:27](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=147)** Improved compliance.
>
> **[2:30](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=150)** SecOps helps with meeting security regulations such as the General Data Protection Regulation or GDPR and keeps your organization in good standing.
>
> **[2:40](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=160)** Enhanced employee productivity.
>
> **[2:43](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=163)** By educating employees on security best practices, SecOps minimizes the risk of human error and promotes a more secure and productive work environment.
>
> **[2:53](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=173)** SecOps is an integral part of your organization's security strategy.
>
> **[2:57](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/security-operations?u=76281980&t=177)** By implementing SecOps practices, you can fortify your defenses, reduce security risks, and protect your data in the ever-changing landscape of cloud security.

> [!info]- Semantic Content
>
> **Analogies:** it's like (2), think of it as (1), imagine (1), just like (1), such as (1)
> **Code Keywords:** let (1), protected (1)
> **Env Vars:** scc (1), gdpr (1)
> **Definitions:** short for (1), is an  (1)
> **Speakers:** - [instructor] (1)


### 3. Google Cloud’s Trust Principles and Compliance

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23227177?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23227177?u=76281980&t=0)** - [Narrator] At Google, we know that privacy plays a critical role in earning and maintaining trust.
>
> **[0:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23227177?u=76281980&t=5)** Customers need to be sure that their data and applications are safe and secure, and so Google Cloud has a strong set of trust principles and compliance programs in place, which are designed to protect customer data and meet the needs of a wide range of customers, from small businesses to large enterprises.
>
> **[0:23](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/introduction-23227177?u=76281980&t=23)** In this final section of the course, you learn about Google's seven trust principles, data residency and data sovereignty options with Google Cloud, and how the Google Cloud Compliance Resource Center and Compliance Reports Manager support industry and regional compliance needs.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### The Google Cloud trust principles and transparency reports
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=0)** - [Narrator] At Google, we believe in transparency and want you to have complete confidence in our services.
>
> **[0:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=6)** Google Cloud's trust principles are designed to empower you and ensure that the security and control of your business data isn't compromised.
>
> **[0:14](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=14)** Let's review these principles.
>
> **[0:16](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=16)** One, you own your data, not Google.
>
> **[0:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=20)** We prioritize your control and let you access, export, delete, and manage data permissions within Google Cloud.
>
> **[0:28](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=28)** Two, Google does not sell customer data to third parties.
>
> **[0:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=33)** We safeguard your data from being used for Google's marketing or advertising purposes.
>
> **[0:38](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=38)** Three, Google Cloud does not use customer data for advertising.
>
> **[0:43](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=43)** Your data remains confidential, because Google Cloud ensures that it's never utilized to target ads.
>
> **[0:49](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=49)** Four, all customer data is encrypted by default.
>
> **[0:53](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=53)** Your data is protected with robust encryption, because Google Cloud safeguards it even in the unlikely event of unauthorized access.
>
> **[1:02](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=62)** Five, we guard against insider access to your data.
>
> **[1:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=67)** We implement stringent security measures to prevent unauthorized employee access to customer data.
>
> **[1:13](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=73)** Six, we never give any government entity backdoor access.
>
> **[1:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=78)** Your data remains secure and no government entity can access it without proper authorization.
>
> **[1:25](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=85)** And seven, our privacy practices are audited against international standards.
>
> **[1:30](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=90)** We undergo regular audits to ensure compliance with rigorous privacy standards.
>
> **[1:37](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=97)** Transparency reports and independent audits transparency are a core element of our commitment to trust.
>
> **[1:44](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=104)** We provide valuable insights and accountability through our transparency reports, which shed light on government and corporate actions that affect privacy, security, and access to information.
>
> **[1:55](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=115)** These reports let you stay informed and maintain trust in our services.
>
> **[2:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=120)** Additionally, Google Cloud undergoes independent third party audits and certifications.
>
> **[2:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=126)** This verification process ensures that our data protection practices align with our commitments and industry standards.
>
> **[2:14](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/the-google-cloud-trust-principles-and-transparency-reports?u=76281980&t=134)** Our participation in initiatives like the EU Cloud Code of Conduct further reinforces our dedication to accountability, compliance support, and robust data protection principles.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), export, (1), delete (1), default. (1), protected (1)
> **Speakers:** - [narrator] (1)

#### Data residency and data sovereignty
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=0)** - [Narrator] When it comes to storing data and keeping it secure, data sovereignty and data residency are two important concepts to understand.
>
> **[0:09](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=9)** Data sovereignty refers to the legal concept that data is subject to the laws and regulations of the country where it resides.
>
> **[0:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=18)** For example, the General Data Protection Regulation, GDPR, in the European Union requires companies to comply with data protection laws when processing or storing personal data of EU citizens regardless of their location.
>
> **[0:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=33)** This ensures that individuals have control over their personal data and its usage.
>
> **[0:39](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=39)** In contrast, data residency refers to the physical location where data is stored or processed.
>
> **[0:46](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=46)** Some countries or regions have laws or regulations that require data to be stored within their borders.
>
> **[0:52](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=52)** For instance, some countries mandate that personal data of its citizens must be stored on servers within the country.
>
> **[1:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=60)** This ensures data remains within the jurisdiction of local laws.
>
> **[1:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=65)** Now let's explore how Google Cloud addresses data residency requirements.
>
> **[1:10](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=70)** We offer a range of options to control the physical location of your data through regions.
>
> **[1:17](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=77)** Each region consists of one or more data centers, which lets you choose where your data resides.
>
> **[1:23](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=83)** For example, within the European Union, you can select regions located in various countries like the UK, Belgium, Germany, Finland, Switzerland, and the Netherlands.
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=95)** By configuring your resources in specific regions, Google ensures that your data is stored only within the selected region as stated in our service specific terms.
>
> **[1:46](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=106)** Additionally, Google Cloud provides organization policy constraints coupled with IAM configuration to prevent accidental data storage in the wrong region.
>
> **[1:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=116)** These controls offer peace of mind and reinforce your data residency requirements.
>
> **[2:02](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=122)** Furthermore, Google Cloud offers features like VPC Service Controls, which lets you restrict network access to data based on defined perimeters.
>
> **[2:12](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=132)** You can limit user access through IP address filtering, even if they have authorization.
>
> **[2:18](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=138)** Google Cloud Armor lets you restrict traffic locations for your external load balancer by adding an extra layer of protection.
>
> **[2:25](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/data-residency-and-data-sovereignty?u=76281980&t=145)** By using these capabilities, organizations can adhere to data residency and data sovereignty requirements, ensure compliance, and maintain control over their valuable data within the Google Cloud ecosystem.

> [!info]- Semantic Content
>
> **Env Vars:** gdpr (1), iam (1), vpc (1)
> **Analogies:** for example (2), for instance (1)
> **Code Keywords:** require (1), let (1)
> **Definitions:** refers to (2)
> **Speakers:** - [narrator] (1)

#### Industry and regional compliance
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=0)** - [Narrator] As the organizations migrate to the cloud, it becomes essential to protect sensitive workloads while ensuring compliance with diverse regulatory requirements and guidelines.
>
> **[0:12](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=12)** Compliance is a critical aspect of the cloud journey because not meeting regulatory obligations can have far-reaching consequences.
>
> **[0:20](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=20)** To assist you in achieving compliance, Google Cloud offers robust resources and tools tailored to support your specific needs.
>
> **[0:28](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=28)** First, let's explore the Google Cloud Compliance Resource Center.
>
> **[0:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=33)** This comprehensive hub provides detailed information on the certifications and compliance standards we satisfy.
>
> **[0:41](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=41)** You can find mappings of our security, privacy, and compliance controls to global standards.
>
> **[0:47](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=47)** This transparency lets you validate our adherence to industry-leading practices.
>
> **[0:53](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=53)** The Resource Center also offers valuable documentation on regional and sector-specific regulations, and empowers you to navigate complex compliance landscapes.
>
> **[1:04](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=64)** Imagine you're a healthcare organization subject to HIPAA regulations, which protect sensitive patient health information from being disclosed without the patient's consent or knowledge.
>
> **[1:15](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=75)** The Resource Center equips you with the necessary insights and documentation to align your compliance efforts with HIPAA requirements.
>
> **[1:24](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=84)** Similarly, if you operate within the financial sector, you'll find guidance on meeting regulations like PCI DSS, which stands for Payment Card Industry Data Security Standard.
>
> **[1:36](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=96)** Google Cloud's compliance resource center is your go-to source for actionable information and support.
>
> **[1:43](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=103)** In addition to the resource center, we provide the Compliance Reports Manager, a powerful tool at your disposal.
>
> **[1:50](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=110)** This intuitive platform offers easy, on-demand access to critical compliance resources at no extra cost.
>
> **[1:58](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=118)** Within the Compliance Reports Manager, you'll discover our latest ISO/IEC certificates, SOC reports and self-assessments.
>
> **[2:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=127)** These resources provide evidence of our adherence to rigorous compliance standards, and help streamline your own reporting and compliance efforts.
>
> **[2:16](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=136)** Imagine you're an enterprise seeking ISO/IEC 27001 certification.
>
> **[2:23](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=143)** The Compliance Reports Manager lets you access the necessary documentation efficiently, and it saves you time and effort in the certification process.
>
> **[2:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=152)** With this tool, we aim to simplify your compliance journey and empower you to meet your regulatory obligations effectively.
>
> **[2:40](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=160)** By using the Google Cloud Compliance Resource Center and the Compliance Reports Manager, you can navigate the complex realm of industry and regional compliance with confidence.
>
> **[2:50](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=170)** Our dedicated teams of engineers and compliance experts work hand in hand with you to address your specific regulatory needs.
>
> **[2:58](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=178)** Together we create an integrated controls and governance framework, while we ensure a robust compliance posture.
>
> **[3:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=186)** You can visit the compliance resource center at cloud.[google.com/security/compliance](https://google.com/security/compliance).
>
> **[3:13](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/industry-and-regional-compliance?u=76281980&t=193)** And explore the Compliance Reports Manager at cloud.[google.com/security/compliance](https://google.com/security/compliance)/ compliance-reports-manager.

> [!info]- Semantic Content
>
> **Env Vars:** hipaa (2), iso (2), iec (2), pci (1), dss (1)
> **CLI Commands:** find (2)
> **Code Keywords:** let (1), self (1)
> **URLs:** [google.com](https://google.com) (2)
> **Definitions:** is a  (1), stands for (1)
> **Analogies:** imagine (2)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Course summary
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-summary?u=76281980&t=0)** - [Instructor] This brings us to the end of the Trust and Security with Google Cloud course.
>
> **[0:04](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-summary?u=76281980&t=4)** Let's do a quick recap.
>
> **[0:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-summary?u=76281980&t=6)** In the first section of the course, titled Trust and Security in the Cloud, you explored important security terms and concepts, the difference between cloud security and traditional on-premises security, today's top cybersecurity threats and business implications, and the importance of control, compliance, confidentiality, integrity, and availability in a cloud security model.
>
> **[0:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-summary?u=76281980&t=33)** In the second section of the course, titled Google's Trusted Infrastructure, you learned about how Google designs and builds data centers, the role encryption plays in securing an organization's data, the differences between authentication, authorization, and auditing, the benefits of using two-step verification in IAM, ways to protect against network attacks by using Google products, and security operations in the cloud and its related business benefits.
>
> **[1:05](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-summary?u=76281980&t=65)** And finally, in the third section of the course, titled Google Cloud's Trust Principles and Compliance, you examined Google seven trust principles, data residency and data sovereignty options with Google Cloud and how the Google Cloud compliance resource center and Compliance Reports Manager support industry and regional compliance needs.
>
> **[1:27](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-summary?u=76281980&t=87)** Now that you had a comprehensive introduction to trust and security on Google Cloud, you can move on to the final course in the Cloud Digital Leader series, Scaling with Google Cloud Operations, where you'll learn about how Google Cloud supports an organization's financial governance and ability to control their cloud costs, the basic concepts of modern operations, reliability, and resilience in the cloud, and how Google Cloud helps organizations meet sustainability goals and reduce environmental impact.
>
> **[1:56](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-5-trust-and-security-with-google-cloud/course-summary?u=76281980&t=116)** We'll see you next time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Env Vars:** iam (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Prepare for the Google Cloud Digital Leader Certification]]
← [[Google Cloud Digital Leader Cert Prep- 4 Modernize Infrastructure and Applications with Google Cloud]] | **5 of 6** | [[Google Cloud Digital Leader Cert Prep- 6 Scaling with Google Cloud Operations]] →

## Appears In

- [[Prepare for the Google Cloud Digital Leader Certification]]

## Related Courses

_Courses sharing skills:_

- [[Google Cloud Security for Beginners- Tools and Services]] — Cloud Security, Google Cloud Platform (GCP)
- [[Leveraging Google Cloud Developer and DevOps Tools]] — Google Cloud Platform (GCP)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Google Cloud Platform (GCP)
- [[Google Cloud Data and Storage Foundations]] — Google Cloud Platform (GCP)
- [[Google Cloud Foundations]] — Google Cloud Platform (GCP)
