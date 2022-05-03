import React,{useState} from 'react';
import { Alert,Box,Text,VStack,HStack,Collapse,IconButton,CloseIcon} from "native-base";

export default (props)=>{
    const setShow=(bool)=>{
        props.setShowAlert(bool);
    }

    return (
        <Box w={props.width===undefined || props.width==='' ?'100%':props.width} alignItems="center" margin={5}>
            {props.showAlert &&
            <Collapse isOpen={props.showAlert}>
                <Alert w="100%"  status="error">
                <VStack space={1} flexShrink={1} w="100%">
                    <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                    <HStack flexShrink={1} space={2} alignItems="center">
                        <Alert.Icon />
                        <Text fontSize="md" fontWeight="medium" _dark={{
                        color: "coolGray.800"
                    }}>
                        {props.alertTitle}
                        </Text>
                    </HStack>
                    <IconButton variant="unstyled" icon={<CloseIcon size="3" color="coolGray.600" />} onPress={() => setShow(false)} />
                    </HStack>
                    <Box pl="6" _dark={{
                        _text: {
                        color: "coolGray.600"
                        }
                    }}>
                    {props.alertDescription}
                    </Box>
                </VStack>
                </Alert>
            </Collapse>
            }
        </Box>
    )
}