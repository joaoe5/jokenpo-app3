import React, { Component } from 'react';
import { View, Image } from 'react-native';
// eslint-disable global-require  USAR ESSE COMANDO PRA DESABILIAR O REQUIRE
const imagem = require('../../imgs/jokenpo.png');

class Topo extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                    <Image source={imagem} />
            </View>
        );
    }
}

export default Topo;
