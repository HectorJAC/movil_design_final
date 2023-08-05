/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  saludo: string;
}

export const Header = ({saludo}: Props) => {
    return (
        <View>
            <Text style={{
              fontSize: 28,
              textAlign: 'center',
              color: 'white',
            }} >
              { saludo }
            </Text>
        </View>
    );
};