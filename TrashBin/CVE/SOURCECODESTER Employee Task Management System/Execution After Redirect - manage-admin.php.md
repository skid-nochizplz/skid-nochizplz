# SOURCECODESTER / Employee Task Management System - Execution After Redirect manage-admin.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)

## Vendor Homepage:
> https://www.sourcecodester.com/php/17217/employee-management-system-php-and-mysql-free-download.html

## Affected Component
> /manage-admin.php

## Code
```php
if ($user_id == NULL || $security_key == NULL) {
    header('Location: index.php');
}
```

## Tools
Burp Suite

## Proof of Concept
1. Using Burp, intercept the GET request to /manage-admin.php.
>![img.png](Execution%20After%20Redirect%20-%20manage-admin%20-%20images%2Fimg.png)
2. After capturing the GET request to /manage-admin.php, intercept the response to the request and forward the request.
>![img_1.png](Execution%20After%20Redirect%20-%20manage-admin%20-%20images%2Fimg_1.png)
3. Change the response HTTP status from "302 Found" to "200 OK" and click forward.
>![img_2.png](Execution%20After%20Redirect%20-%20manage-admin%20-%20images%2Fimg_2.png)
>![img_3.png](Execution%20After%20Redirect%20-%20manage-admin%20-%20images%2Fimg_3.png)
4. Now you can successfully access /manage-admin.php without authentication.
>![img_4.png](Execution%20After%20Redirect%20-%20manage-admin%20-%20images%2Fimg_4.png)





