<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

include("DbConnect.php");
$conn = new DbConnect();
$db = $conn->connect();
$method = $_SERVER['REQUEST_METHOD'];
$param = explode("/", $_GET['type'], 2)[0];
switch ($param) {
    case 'save':
        switch ($method) {
            case 'POST':
                $user = json_decode(file_get_contents('php://input'));
                $sql = "INSERT INTO users(id, name, email, mobile, created_at) values(null, :name, :email, :mobile, :created_at)";
                $stmt = $db->prepare($sql);
                $date = date('Y-m-d');
                $stmt->bindParam(':name', $user->name);
                $stmt->bindParam(':email', $user->email);
                $stmt->bindParam(':mobile', $user->mobile);
                $stmt->bindParam(':created_at', $date);
                if ($stmt->execute()) {
                    $data = ['status' => 1, 'message' => "Record successfully created"];
                } else {
                    $data = ['status' => 0, 'message' => "Failed to create record."];
                }
                echo json_encode($data);
                break;
        }
        break;

    case 'view':
        switch ($method) {
            case "GET":
                $sql = "SELECT * FROM users";
                $path = explode('/', $_SERVER['REQUEST_URI']);
                if (isset($path[3]) && is_numeric($path[3])) {
                    $sql .= " WHERE id = :id";
                    $stmt = $db->prepare($sql);
                    $stmt->bindParam(':id', $path[3]);
                    $stmt->execute();
                    $users = $stmt->fetch(PDO::FETCH_ASSOC);
                } else {
                    $stmt = $db->prepare($sql);
                    $stmt->execute();
                    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
                }

                echo json_encode($users);
                break;
        }
        break;

    case 'upd':
        switch ($method) {
            case "PUT":
                $user = json_decode(file_get_contents('php://input'));
                $sql = "UPDATE users SET name= :name, email =:email, mobile =:mobile, updated_at =:updated_at WHERE id = :id";
                $stmt = $db->prepare($sql);
                $updated_at = date('Y-m-d');
                $stmt->bindParam(':id', $user->id);
                $stmt->bindParam(':name', $user->name);
                $stmt->bindParam(':email', $user->email);
                $stmt->bindParam(':mobile', $user->mobile);
                $stmt->bindParam(':updated_at', $updated_at);

                if ($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record updated successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to update record.'];
                }
                echo json_encode($response);
                break;
        }
        break;
}
