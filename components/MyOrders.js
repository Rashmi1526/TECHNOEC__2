import React from 'react'
import { Badge, Box, Button, Flex } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { PhoneIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

function MyOrders(props) {
    const property = {
      reviewCount: 34,
      rating: 4,
    }
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
  
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>  
      <Flex flexDirection="row">
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              Pro
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              Order Id: {props.order}
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {props.name}
          </Box>
  
          <Box>
            <Box as='span' color='gray.300' fontSize='sm'>
              Order Worth :&nbsp;
            </Box>
            {props.worth}
          </Box>

  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
          </Box>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
              {props.status}
        </Badge>
        <Button
        size='xs'
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Buyer Details
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Buyer Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>Buyer Name: Utkarsh Goel</h1>
              <h1>Contact Number: 9999XXXXXX</h1>
              <h1>Address: DLF INDIA</h1>
              <h1>Order Amount: $1000</h1>
              <h1>Order Date: 23rd March 2022</h1>
              <h1>Payment Mode: PayTM</h1>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>
        <Box pl={12} pt={12}>
            <Button p={4} variant='outline' sx={{borderRadius: '2em'}}><PhoneIcon boxSize={6}/></Button>
        </Box>
        </Flex>
      </Box>
    )
  }
export default MyOrders