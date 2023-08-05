/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fab } from '../components/Fab';
import { Header } from '../components/Header';

export const ContadorScreen = () => {

    const valor:number = 1;
    const [contador, setContador] = useState(valor);

    const [color, setColor] = useState(cambiarColor());

    return (
        <View style={ [styles.container, {backgroundColor: color} ]}>
            <View style={{ position: 'absolute', top: 25, left: 10 }}>
                <Text>
                    <Header saludo="Hector Aramboles 2019-0821" />
                </Text>
            </View>

            <View style={{position: 'absolute', top: 12, left: 150}}>
                <TouchableOpacity onPress={() => setColor(cambiarColor())}>
                    <View style={styles.caja}/>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{fontSize: 40, color: 'white', left: 100}}>
                    Contador: <Text style={{color: '#FF00FF'}}> {contador} </Text>
                </Text>
            </View>

            {
                contador % 10 === 0 ?
                    <Text
                        style={{
                            position: 'absolute',
                            color: 'white',
                            bottom: 140,
                            left: 60,
                            fontSize: 30,
                        }}
                    >
                        Has contado hasta {contador}
                    </Text>
                : contador === 1 ?
                    <Text
                        style={{
                            position: 'absolute',
                            color: 'white',
                            bottom: 140,
                            left: 60,
                            fontSize: 30,
                        }}
                    >
                        Empieza a contar
                    </Text>
                : null
            }

            <Fab
                title="+1"
                onPress={ () => setContador( contador + 1 ) }
            />

            <Fab
                title="R"
                position="bc"
                onPress={ () => setContador( valor ) }
            />

            <Fab
                title="-1"
                position="bl"
                onPress={ () => setContador( contador - 1 ) }
            />
        </View>
    );
};

const cambiarColor = () => {
    const colores = ['red', 'blue', 'green', 'purple', 'black', 'yellow', 'orange'];
    const random = Math.floor(Math.random() * colores.length);
    return colores[random];
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    caja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'gray',
        top: 100,
    },
});
