<?php
session_start();

if (!isset($_SESSION['favorites'])) {
    $_SESSION['favorites'] = array();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $productId = $_POST['productId'];
    $productName = $_POST['productName'];
    $productPrice = $_POST['productPrice'];

    // Add the product to the favorites array
    $_SESSION['favorites'][] = array(
        'id' => $productId,
        'name' => $productName,
        'price' => $productPrice,
    );

    // Send a success response
    echo json_encode(['success' => true]);
} else {
    // Send a failure response if the request method is not POST
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
