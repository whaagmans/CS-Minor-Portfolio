---
title: Security By Design
---



### What is the OWASP top 10

The OWASP Top 10 is an online document on the OWASP website that ranks the top 10 most critical web application security vulnerabilities and offers recommendations. The report is based on a global agreement of security professionals. The risks are ranked according to the frequency of security flaws discovered, the severity of the flaws, and the extent of their possible consequences. The goal of the study is to provide developers and security experts with insight into the most common security risks so that they may implement the report's findings and suggestions into their security procedures and reduce the presence of known risks in their applications. The OWASP top 10 is based on their new ranking from 2021, which is detailed below.


#### 1 Broken Access Control

Because access control enforces rules, users cannot act outside of their designated permissions. Unauthorized information disclosure, alteration, or destruction of all data, as well as the execution of a business function outside of the user's capabilities, are all common outcomes of failures. Common access control vulnerabilities include the following[[2]](#references):

* Violation of the principle of least privilege or deny by default, where access should only be granted for particular capabilities, roles, or users but is available to anyone.
* Bypassing access control checks by modifying the URL (parameter tampering or force browsing), internal application state, HTML page, or an attack tool modifying API requests.
* Permitting viewing or editing someone else's account by providing its unique identifier (insecure direct object references)
* Accessing API with missing access controls for POST, PUT and DELETE.
* Elevation of privilege. Acting as a user without being logged in or acting as an admin when logged in as a user.
* Metadata manipulation, such as replaying or tampering with a JSON Web Token (JWT) access control token, or a cookie or hidden field manipulated to elevate privileges or abusing JWT invalidation.
* CORS misconfiguration allows API access from unauthorized/untrusted origins.
* Force browsing to authenticated pages as an unauthenticated user or select pages as a standard user.
<br/>

**Prevention**

Access control is only effective in trustworthy server-side code or server-less APIs, where the access control check or metadata cannot be modified by the attacker[[2]](#references).

* Except for public resources, denied by default.
* Implement access control mechanisms once and reuse them throughout the application, including minimizing Cross-Origin Resource Sharing (CORS) usage.
* Model access controls should enforce record ownership rather than accepting that the user can create, read, update, or delete any record.
* Unique application business limit requirements should be enforced by domain models.
* Disable webserver directory listing and ensure file metadata (e.g., .git) and backup files are not present within web roots.
* Log access control failures, alert admins when appropriate (e.g., repeated failures).
* Rate limit API and controller access to minimize the harm from automated attack tooling.
* Stateful session identifiers should be invalidated on the server after logout. Stateless JWT tokens should rather be short-lived so that the window of opportunity for an attacker is minimized. For longer-lived JWTs, following the OAuth standards is highly recommended to revoke access.
<br/>

#### 2 Cryptographic Failures

Cryptographic failures are problems with cryptography or the absence of cryptography altogether. This item was previously known as Sensitive Data Exposure. It was invalid, however, because it was a symptom and effect rather than a cause. Cryptographic failure, which occurs frequently, can reveal data.

This type of failure affects the security and confidentiality of data in transit and at rest. Authentication parameters, such as usernames and passwords, are common but personally identifiable information (PII), such as personal and financial information, health records, trade secrets, and other sensitive information.

Failures occur for various causes, and man-in-the-middle attacks are frequently used to exploit weaknesses. The following are some of the most common causes of cryptographic flaws[[3]](#references):

* Is any data transmitted in clear text? This concern protocols such as HTTP, SMTP, and FTP using TLS upgrades like STARTTLS. External internet traffic is hazardous. Verify all internal traffic, e.g., between load balancers, web servers, or backend systems.
* Are any old or weak cryptographic algorithms or protocols used by default or in older code?
* Are default crypto keys in use, weak crypto keys generated or reused, or is proper key management or rotation missing? Are crypto keys checked into source code repositories?
* Is encryption not enforced, e.g., are any HTTP headers (browser) security directives or headers missing?
* Are the received server certificates and the trust chain adequately validated?
* Are initialization vectors ignored, reused, or not generated sufficiently secure for the cryptographic mode of operation? Is an insecure mode of operation such as ECB in use? Is encryption used when authenticated encryption is more appropriate?
* Are passwords being used as cryptographic keys without a password-based key derivation function?
* Is randomness used for cryptographic purposes not designed to meet cryptographic requirements? Even if the correct function is chosen, does it need to be seeded by the developer? If not, has the developer over-written the robust seeding functionality built into it with a seed that lacks sufficient entropy/unpredictability?
* Are deprecated hash functions such as MD5 or SHA1 in use, or are non-cryptographic hash functions used when cryptographic hash functions are needed?
* Are deprecated cryptographic padding methods such as PKCS number 1 v1.5 in use?
* Are cryptographic error messages or side-channel information exploitable, for example, in the form of padding oracle attacks?
<br/>

**Prevention**

At a minimum, do the following tasks and review the references[[3]](#references):

* Classify data processed, stored, or transmitted by an application. According to privacy laws, regulatory requirements, or business needs, identify which data is sensitive.
* Do not store sensitive data unnecessarily. Discard it as soon as possible or use PCI DSS compliant tokenization or even truncation. Data that is not retained cannot be stolen.
* Make sure to encrypt all sensitive data at rest.
* Ensure up-to-date and robust standard algorithms, protocols, and keys are in place; use proper key management.
* Encrypt all data in transit with security protocols such as TLS with forward secrecy (FS) ciphers, cipher prioritization by the server, and security parameters. Enforce encryption using directives like HTTP Strict Transport Security (HSTS).
* Disable caching for a response that contains sensitive data.
* Apply required security controls as per the data classification.
* Do not use legacy protocols such as FTP and SMTP for transporting sensitive data.
* Store passwords using strong adaptive and salted hashing functions with a work factor (delay factor), such as Argon2, scrypt, bcrypt, or PBKDF2.
* Initialization vectors must be chosen appropriately for the mode of operation. This means using a CSPRNG (cryptographically secure pseudo-random number generator). The initialization vector (IV) does not need a CSPRNG for modes that require a nonce. The IV should never be used twice for a fixed key in all cases.
* Always use authenticated encryption instead of just encryption.
* Keys should be generated cryptographically randomly and stored in memory as byte arrays. If a password is used, it must be converted to a key via an appropriate password-based key derivation function.
* Ensure that cryptographic randomness is used where appropriate and has not been seeded in a predictable way or with low entropy. Most modern APIs do not require the developer to seed the CSPRNG to get security.
* Avoid deprecated cryptographic functions and padding schemes, such as MD5, SHA1, PKCS number 1 v1.5.
* Verify the effectiveness of configuration and settings independently.
<br/>

#### 3 Injection

An injection attack is when an application receives untrusted data and executes commands. Then, an attacker inserts such data or malicious code, jeopardizing data or the entire application. SQL injections and cross-site scripting (XSS) attacks are the most prevalent injection attacks.

When the following conditions exist, an application is vulnerable to attack[[4]](#references):

* User-supplied data is not validated, filtered, or sanitized by the application.
* Dynamic queries or non-parameterized calls without context-aware escaping are used directly in the interpreter.
* Hostile data is used within object-relational mapping (ORM) search parameters to extract additional, sensitive records.
* Hostile data is directly used or concatenated. The SQL or command contains the structure and malicious data in dynamic queries, commands, or stored procedures.
<br/>
SQL, NoSQL, OS commands, Object Relational Mapping (ORM), LDAP, and Expression Language (EL) or Object Graph Navigation Library (OGNL) injections are some of the most popular injections. The idea is the same for all interpreters. The best way to find out if an application is vulnerable to injections is to look at the source code. All parameters, headers, URLs, cookies, JSON, SOAP, and XML data inputs should be automated tested. Static (SAST), dynamic (DAST), and interactive (IAST) application security testing tools can be integrated into the CI/CD pipeline to uncover introduced injection problems before they are deployed in production.

**Prevention**

Data not being kept separate from instructions and queries is the fundamental vulnerability to an injection attack. Here is what can be done  to avoid getting an injection[[4]](#references):

* The preferred option is to use a safe API, which avoids using the interpreter entirely, provides a parameterized interface, or migrates to Object Relational Mapping Tools (ORMs).
* Use positive server-side input validation. This is not a complete defense as many applications require special characters, such as text areas or APIs for mobile applications.
* For any residual dynamic queries, escape special characters using the specific escape syntax for that interpreter.
* Use LIMIT and other SQL controls within queries to prevent mass disclosure of records in case of SQL injection.

#### 4 Insecure Design

This vulnerability category focuses on the dangers associated with design and architecture defects. These are distinct from the hazards associated with implementation flaws, according to OWASP. Even if an unsafe design is well-implemented, it is still subject to assaults.

Insecure design refers to a lack of security controls and business risk profiling in software development and a lack of adequate identification of the level of security design required.

**Prevention**

The actions an organization can take to prevent the damage insecure design can do to the organization are[[5]](#references):

* Establish and use a secure development lifecycle with AppSec professionals to help evaluate and design security and privacy-related controls.
* Establish and use a library of secure design patterns or paved road ready to use components.
* Use threat modeling for critical authentication, access control, business logic, and key flows.
* Integrate security language and controls into user stories.
* Integrate plausibility checks at each tier of your application (from frontend to backend).
* Write unit and integration tests to validate that all critical flows are resistant to the threat model. Compile use-cases and misuse-cases for each tier of your application.
* Segregate tier layers on the system and network layers depending on the exposure and protection needs.
* Segregate tenants robustly by design throughout all tiers.
* Limit resource consumption by user or service.
<br/>

#### 5 Secure Misconfiguration

Security measures that are not secured or configured correctly are referred to as security misconfiguration. One of the following factors typically contributes to this vulnerability[[6]](#references):

* Missing appropriate security hardening across any part of the application stack or improperly configured permissions on cloud services.
* Unnecessary features are enabled or installed (e.g., unnecessary ports, services, pages, accounts, or privileges).
* Default accounts and their passwords are still enabled and unchanged.
* Error handling reveals stack traces or other overly informative error messages to users.
* The latest security features are disabled or not configured securely for upgraded systems.
* The security settings in the application servers, application frameworks (e.g., Struts, Spring, ASP.NET), libraries, databases, etc., are not set to secure values.
* The server does not send security headers or directives, or they are not set to secure values.
* The software is out of date or vulnerable.
<br/>

Systems are more vulnerable without a concerted, repeatable application security configuration process.

**Prevention**

Secure installation processes include[[6]](#references):

* A repeatable hardening process makes it fast and easy to deploy another environment that is appropriately locked down. Development, QA, and production environments should all be configured identically, with different credentials used in each environment. This process should be automated to minimize the effort required to set up a new secure environment.
* A platform without any unnecessary features, components, documentation, and samples. Remove or do not install unused features and frameworks.
* A task to review and update the configurations appropriate to all security notes, updates, and patches as part of the patch management process. Review cloud storage permissions (e.g., S3 bucket permissions).
* A segmented application architecture provides effective and secure separation between components or tenants, with segmentation, containerization, or cloud security groups (ACLs).
* Sending security directives to clients, e.g., Security Headers.
* An automated process to verify the effectiveness of the configurations and settings in all environments.
<br/>

#### 6 Vulnerable and Outdated Components

This type of vulnerability arises when the app's components, such as libraries and frameworks, virtually always run with full rights. If a susceptible component is exploited, the hacker's task of causing catastrophic data loss or server takeover is made easier.

You are probably at risk if your project contains any of the following[[7]](#references):

* If you do not know the versions of all components you use (both client-side and server-side). This includes components you directly use as well as nested dependencies.
* If the software is vulnerable, unsupported, or out of date. This includes the OS, web/application server, database management system (DBMS), applications, APIs and all components, runtime environments, and libraries.
* If you do not scan for vulnerabilities regularly and subscribe to security bulletins related to the components you use.
* If you do not fix or upgrade the underlying platform, frameworks, and dependencies in a risk-based, timely fashion. This commonly happens in environments when patching is a monthly or quarterly task under change control, leaving organizations open to days or months of unnecessary exposure to fixed vulnerabilities.
* If software developers do not test the compatibility of updated, upgraded, or patched libraries.
* If you do not secure the components' configurations.
<br/>

**Prevention**

To avoid the risks that come with using such components, you should[[7]](#references):

* Remove unused dependencies, unnecessary features, components, files, and documentation.
* Continuously inventory the versions of both client-side and server-side components (e.g., frameworks, libraries) and their dependencies using tools like versions, OWASP Dependency-Check, retire.js, etc. Continuously monitor sources like Common Vulnerability and Exposures (CVE) and National Vulnerability Database (NVD) for vulnerabilities in the components. Use software composition analysis tools to automate the process. Subscribe to email alerts for security vulnerabilities related to components you use.
* Only obtain components from official sources over secure links. Prefer signed packages to reduce the chance of including a modified, malicious component (See A08:2021-Software and Data Integrity Failures).
* Monitor for unmaintained libraries and components or do not create security patches for older versions. If patching is not possible, consider deploying a virtual patch to monitor, detect, or protect against the discovered issue.
<br/>

#### Identification and Authentication failures

To guard against authentication-related threats, it is crucial to confirm the user's identity, authenticate them, and manage their sessions. Authentication flaws may exist if the application[[8]](#references):

* Permits automated attacks such as credential stuffing, where the attacker has a list of valid usernames and passwords.
* Permits brute force or other automated attacks.
* Permits default, weak, or well-known passwords, such as "Password1" or "admin/admin."
* Uses weak or ineffective credential recovery and forgot-password processes, such as "knowledge-based answers," which cannot be made safe.
* Uses plain text, encrypted, or weakly hashed passwords data stores.
* Has missing or ineffective multi-factor authentication.
* Exposes session identifier in the URL.
* Reuse session identifier after successful login.
* Does not correctly invalidate Session IDs. User sessions or authentication tokens (mainly single sign-on (SSO) tokens) are not correctly invalidated during logout or a period of inactivity.
<br/>

**Prevention**

OWASP recommends the following preventative measures[[8]](#references):

* Where possible, implement multi-factor authentication to prevent automated credential stuffing, brute force, and stolen credential reuse attacks.
* Do not ship or deploy with any default credentials, particularly for admin users.
* Implement weak password checks, such as testing new or changed passwords against the top 10,000 worst passwords list.
* Align password length, complexity, and rotation policies with the National Institute of Standards and Technology (NIST) 800-63b's guidelines in section 5.1.1 for Memorized Secrets or other modern, evidence-based password policies.
* Ensure registration, credential recovery, and API pathways are hardened against account enumeration attacks by using the same messages for all outcomes.
* Limit or increasingly delay failed login attempts, but be careful not to create a denial of service scenario. Log all failures and alert administrators when credential stuffing, brute force, or other attacks are detected.
* Use a server-side, secure, built-in session manager that generates a new random session ID with high entropy after login. Session identifier should not be in the URL, be securely stored, and invalidated after logout, idle, and absolute timeouts.
<br/>

#### 8 Software and Data Integrity Failures

Software and data integrity failures are defined as code and infrastructure that do not protect against integrity violations. This is an example of software that uses plugins, libraries, or modules from untrusted sources, repositories, or content delivery networks (CDNs). An unprotected CI/CD pipeline might result in unauthorized access, malicious code, or system compromise. Finally, many programs now feature auto-update capabilities, allowing updates to be downloaded and deployed to previously trusted applications without the need for additional integrity checks.

**Prevention**

OWASP recommends the following measures to protect against unsafe deserialization[[9]](#references):

* Use digital signatures or similar mechanisms to verify that the software or data is from the expected source and has not been altered.
* Ensure libraries and dependencies, such as npm or Maven, consume trusted repositories. If you have a higher risk profile, consider hosting an internal known-good repository that's vetted.
* Ensure that a software supply chain security tool, such as OWASP Dependency-Check or OWASP CycloneDX, is used to verify that components do not contain known vulnerabilities
* Ensure a review process for code and configuration changes to minimize the chance that malicious code or configuration could be introduced into your software pipeline.
* Ensure that your CI/CD pipeline has proper segregation, configuration, and access control to ensure the integrity of the code flowing through the build and deploy processes.
* Ensure that unsigned or unencrypted serialized data is not sent to untrusted clients without some form of integrity check or digital signature to detect tampering or replay of the serialized data.
<br/>

#### 9 Security Logging and Monitoring Failures

While testing, logging, and monitoring are complex, it is necessary because failures can affect accountability, visibility, incident alerting, and forensics.

Failures in logging, detection, monitoring and operational response occur when the following conditions exist[[10]](#references):

* Auditable events, such as logins, failed logins, and high-value transactions, are not logged.
* Warnings and errors generate no, inadequate, or unclear log messages.
* Logs of applications and APIs are not monitored for suspicious activity.
* Logs are only stored locally.
* Appropriate alerting thresholds and response escalation processes are not in place or effective.
* Penetration testing and scans by dynamic application security testing (DAST) tools (OWASP ZAP) do not trigger alerts.
* The application cannot detect, escalate, or alert for active attacks in real-time or near real-time.
<br/>

**Prevention**

OWASP suggests implementing the following security measures, depending on the degree of the risk, to mitigate the vulnerabilities that can develop as a result of these failures[[10]](#references):

* Ensure all login, access control, and server-side input validation failures can be logged with sufficient user context to identify suspicious or malicious accounts and held for enough time to allow delayed forensic analysis.
* Ensure that logs are generated in a format that log management solutions can easily consume.
* Ensure log data is encoded correctly to prevent injections or attacks on the logging or monitoring systems.
* Ensure high-value transactions have an audit trail with integrity controls to prevent tampering or deletion, such as append-only database tables or similar.
* DevSecOps teams should establish effective monitoring and alerting to detect and respond to suspicious activities quickly.
* Establish or adopt incident response and recovery plans, such as the National Institute of Standards and Technology (NIST) 800-61r2 or the current latest.
<br/>

#### 10 Server-Side Request Forgery (SSRF)

Server-side request forgery happens when a web application accesses a remote resource without validating the user-supplied URL. Even if a firewall, VPN, or other network access control list protects the program, attackers can force it to submit a faked request to an unexpected site.

Fetching a URL is a common aspect of modern web applications, which has resulted in an increase in SSRF situations. Furthermore, due to the increasing complexity of designs and cloud services, difficulties are becoming more serious.

**Prevention**

For each layer that could be exploited, developers can prevent SSRF by providing some or all of the following security measures[[11]](#references):

**Network Layer**:

* Segment remote resource access functionality in separate networks to reduce the impact of SSRF
* Enforce "deny by default" firewall policies or network access control rules to block all but essential intranet traffic.
<br/>

**Application Layer**:

* Sanitize and validate all client-supplied input data
* Enforce the URL schema, port, and destination with a positive allow list
* Do not send raw responses to clients.
* Disable HTTP redirections
* Be aware of the URL consistency to avoid attacks such as DNS rebinding and "time of check, time of use" (TOCTOU) race conditions.
<br/>

**Additional measures:**

* Do not deploy other security-relevant services on front systems (e.g., OpenID). Control local traffic on these systems (e.g., localhost)
* For frontends with dedicated and manageable user groups, use network encryption (e.g., VPNs) on independent systems to consider very high protection needs.
<br/>

## References

1. OWASP Top Ten Web Application Security Risks | OWASP. (n.d.-b). OWASP. Retrieved January 14, 2022, from <https://owasp.org/www-project-top-ten/>.
2. A01 Broken Access Control - OWASP Top 10:2021. (n.d.). OWASP. Retrieved January 14, 2022, from <https://owasp.org/Top10/A01_2021-Broken_Access_Control/>
3. A02 Cryptographic Failures - OWASP Top 10:2021. (n.d.). OWASP. Retrieved January 14, 2022, from <https://owasp.org/Top10/A02_2021-Cryptographic_Failures/>
4. A03 Injection - OWASP Top 10:2021. (n.d.). OWASP. Retrieved January 14, 2022, from <https://owasp.org/Top10/A03_2021-Injection/>
5. A04 Insecure Design - OWASP Top 10:2021. (n.d.). OWASP. Retrieved January 14, 2022, from <https://owasp.org/Top10/A04_2021-Insecure_Design/>
6. A05 Security Misconfiguration - OWASP Top 10:2021. (n.d.). OWASP. Retrieved January 14, 2022, from <https://owasp.org/Top10/A05_2021-Security_Misconfiguration/>
7. A06 Vulnerable and Outdated Components - OWASP Top 10:2021. (n.d.). OWASP. Retrieved January 14, 2022, from <https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/>
8. A07 Identification and Authentication Failures - OWASP Top 10:2021. (n.d.). OWASP. Retrieved January 14, 2022, from <https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/>
9. A08 Software and Data Integrity Failures - OWASP Top 10:2021. (n.d.). OWASP. Retrieved January 14, 2022, from <https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/>
10. A09 Security Logging and Monitoring Failures - OWASP Top 10:2021. (n.d.). OWASP. Retrieved January 14, 2022, from <https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/>
11. A10 Server Side Request Forgery (SSRF) - OWASP Top 10:2021. (n.d.). OWASP. Retrieved January 14, 2022, from [https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery/](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)
