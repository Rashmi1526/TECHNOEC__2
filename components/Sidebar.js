// import {
//     List,
//     ListItem,
//     ListIcon,
//     OrderedList,
//     UnorderedList,
//   } from '@chakra-ui/react';
// import {CheckCircleIcon} from '@chakra-ui/icons';
// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div>
//         <List spacing={3}>
//             <ListItem>
//                 <ListIcon as={CheckCircleIcon} color='green.500' />
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit
//             </ListItem>
//             <ListItem>
//                 <ListIcon as={CheckCircleIcon} color='green.500' />
//                 Assumenda, quia temporibus eveniet a libero incidunt suscipit
//             </ListItem>
//             <ListItem>
//                 <ListIcon as={CheckCircleIcon} color='green.500' />
//                 Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
//             </ListItem>
//             <ListItem>
//                 <ListIcon as={CheckCircleIcon} color='green.500' />
//                 Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
//             </ListItem>
//             </List>
//     </div>
//   )
// }

// export default Sidebar


import React, { useState } from 'react'
import { useColorMode} from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiBox,
    FiCheckSquare,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi';
import { IoPawOutline } from 'react-icons/io5'
import NavItem from '../components/NavItem'

export default function Sidebar() {
    const { toggleColorMode } = useColorMode()
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" active/>
                {/* <NavItem navSize={navSize} icon={FiBox} title="All Orders" active />
                <NavItem navSize={navSize} icon={FiCheckSquare} title="Active orders" /> */}
                {/* <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" /> */}
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                 <Switch p={4} colorScheme='teal' size='lg' onChange={toggleColorMode}/>
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">AthenaSquare</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
