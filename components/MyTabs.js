import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react';
import React from 'react';

const MyTabs = () => {
  return (
    <div>
        <Tabs size='md' variant='enclosed'>
            <TabList>
                <Tab>All Orders</Tab>
                <Tab>Active Orders</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Delivery Details</TableCaption>
                    <Thead>
                        <Tr>
                        <Th>Name</Th>
                        <Th>Place</Th>
                        <Th isNumeric>Total Orders</Th>
                        <Th isNumeric>Completed</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                        <Td>Alex Hemsworth</Td>
                        <Td>IllePoda, kerala, India</Td>
                        <Td isNumeric>5</Td>
                        <Td isNumeric>3</Td>
                        </Tr>
                        <Tr>
                        <Td>Kaecilius</Td>
                        <Td>Time Square, NewYork, USA</Td>
                        <Td isNumeric>10</Td>
                        <Td isNumeric>8</Td>
                        </Tr>
                        <Tr>
                        <Td>Barak Obama</Td>
                        <Td>White House, USA</Td>
                        <Td isNumeric>5</Td>
                        <Td isNumeric>3</Td>
                        </Tr>
                        <Tr>
                        <Td>Bill Clinton</Td>
                        <Td>Angelia Port, Australia</Td>
                        <Td isNumeric>5</Td>
                        <Td isNumeric>3</Td>
                        </Tr>
                        <Tr>
                        <Td>Parvez Musharraf</Td>
                        <Td>Multan, Pakistan</Td>
                        <Td isNumeric>5</Td>
                        <Td isNumeric>3</Td>
                        </Tr>
                        <Tr>
                        <Td>Conor McGrenor</Td>
                        <Td>Las Vegas, USA</Td>
                        <Td isNumeric>5</Td>
                        <Td isNumeric>3</Td>
                        </Tr>
                        <Tr>
                        <Td>BloodSplash</Td>
                        <Td>Swiss Alps, Switzerland</Td>
                        <Td isNumeric>6</Td>
                        <Td isNumeric>5</Td>
                        </Tr>
                        <Tr>
                        <Td>Beckham Drigo</Td>
                        <Td>Tokyo, Japan</Td>
                        <Td isNumeric>3</Td>
                        <Td isNumeric>1</Td>
                        </Tr>
                        
                    </Tbody>
                    </Table>
                </TabPanel>
                <TabPanel>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Real-Time Delivery Details</TableCaption>
                    <Thead>
                        <Tr>
                        <Th>Name</Th>
                        <Th>Place</Th>
                        <Th isNumeric>Orders Id</Th>
                        <Th isNumeric>Order Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                        <Td>Alex Hemsworth</Td>
                        <Td>IllePoda, kerala, India</Td>
                        <Td isNumeric>789456</Td>
                        <Td isNumeric>Delivered</Td>
                        </Tr>
                        <Tr>
                        <Td>Kaecilius</Td>
                        <Td>Time Square, NewYork, USA</Td>
                        <Td isNumeric>104444</Td>
                        <Td isNumeric>In-Progrss</Td>
                        </Tr>
                        <Tr>
                        <Td>BloodSplash</Td>
                        <Td>Swiss Alps, Switzerland</Td>
                        <Td isNumeric>123456</Td>
                        <Td isNumeric>Returned</Td>
                        </Tr>
                        <Tr>
                        <Td>Beckham Drigo</Td>
                        <Td>Tokyo, Japan</Td>
                        <Td isNumeric>456123</Td>
                        <Td isNumeric>Delivered</Td>
                        </Tr>
                        
                    </Tbody>
                    </Table>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
  )
}

export default MyTabs