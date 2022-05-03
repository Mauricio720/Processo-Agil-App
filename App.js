import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StateProvider } from './src/contexts/StateContext';
import MainStacks from './src/stacks/MainStacks';
import { NativeBaseProvider } from "native-base";

export default ()=>{
  return (
        <NativeBaseProvider>
            <StateProvider>
              <NavigationContainer>
                  <MainStacks/>
              </NavigationContainer>  
            </StateProvider>
      </NativeBaseProvider>
    )
}