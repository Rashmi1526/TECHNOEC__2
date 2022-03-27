import { Box, Button, Flex, Grid, GridItem, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Switch } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import MyMap from '../components/MyMap'
import MyTabs from '../components/MyTabs'
import MyOrders from '../components/MyOrders'

const App = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer {{eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI1MDM5MzksImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjQ4NDAzMDU1LCJleHAiOjE2NDkyNjcwNTUsIm5iZiI6MTY0ODQwMzA1NSwianRpIjoidDhudFd1Q0tKVVRPMmxFQSJ9.JybficuxifqgslkNgLKulS-oua_L2IA7rw8jjNgjk0Y}}");

    var raw = JSON.stringify({
    "order_id": "224-447",
    "order_date": "2019-07-24 11:11",
    "pickup_location": "Jammu",
    "channel_id": "",
    "comment": "Reseller: M/s Goku",
    "billing_customer_name": "Naruto",
    "billing_last_name": "Uzumaki",
    "billing_address": "House 221B, Leaf Village",
    "billing_address_2": "Near Hokage House",
    "billing_city": "New Delhi",
    "billing_pincode": "110002",
    "billing_state": "Delhi",
    "billing_country": "India",
    "billing_email": "naruto@uzumaki.com",
    "billing_phone": "9876543210",
    "shipping_is_billing": true,
    "shipping_customer_name": "",
    "shipping_last_name": "",
    "shipping_address": "",
    "shipping_address_2": "",
    "shipping_city": "",
    "shipping_pincode": "",
    "shipping_country": "",
    "shipping_state": "",
    "shipping_email": "",
    "shipping_phone": "",
    "order_items": [
        {
        "name": "Kunai",
        "sku": "chakra123",
        "units": 10,
        "selling_price": "900",
        "discount": "",
        "tax": "",
        "hsn": 441122
        }
    ],
    "payment_method": "Prepaid",
    "shipping_charges": 0,
    "giftwrap_charges": 0,
    "transaction_charges": 0,
    "total_discount": 0,
    "sub_total": 9000,
    "length": 10,
    "breadth": 15,
    "height": 20,
    "weight": 2.5
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

      return (
    <div>
        <Flex flexDirection="row">
            <Sidebar />
            <Box p={6}>
            <MyMap />
            <br />
            <MyTabs />
            <br />
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem><MyOrders order="324124" name="Barcelona" worth="$1000.00" status="Delivered"/></GridItem>
                <GridItem><MyOrders order="415133" name="Real Madrid" worth="$150.00" status="Returned"/></GridItem>
                <GridItem><MyOrders order="416846" name="Lionel Messi" worth="$2500.00" status="Shipped"/></GridItem>
                <GridItem><MyOrders order="213456" name="Ronaldo" worth="$120.00" status="In-Progress"/></GridItem>
            </Grid>
            </Box>
        </Flex>
    </div>
  )
}

export default App
