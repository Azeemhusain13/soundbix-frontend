<template>
<p>This a Checkout Page</p>

<div class="success-page">
            <h1>Your Order Has Been Placed Successfully!</h1>
            <div class="order-details">
                <img src="https://www.svgrepo.com/show/96431/check-mark-in-a-circle.svg" class="image" >
            <p><center>Thank you for shopping with SoundBix!</center></p>
        </div></div>
</template>
<script>
</script>
<style>


.image {
            max-width: 100%;
            max-height: 200px; 
            margin-top: 20px;
            border-radius: 8px;
            display: block; /* Ensure the image is treated as a block element */
             margin-left: auto;
            margin-right: auto;
}


        .success-page {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
        }

        h1 {
            color: #ff9900;
            display: flex;
            justify-content: center;
        }

        .order-details {
            margin-top: 20px;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 4px;
        }

        p {
            margin: 10px 0;
        }

        strong {
            font-weight: bold;
        }

        p {
            font-size: 1.2em;
            color: #333;
            margin-top: 20px;
            justify-content: center;
        }
</style>
