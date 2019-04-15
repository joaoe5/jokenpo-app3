import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, StyleSheet } from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component {

    constructor(props) {
        super(props);

        this.state = { escolhaUsuario: '', escolhaComputador: '', resultadoJogo: '' };
    }

    jokenpo(escolhaUsuario) {
        //gera numero aleatorio (0,1,2)
        const numAleatorio = Math.floor(Math.random() * 3);

        let escolhaComputador = '';

        switch (numAleatorio) {
           case 0: escolhaComputador = 'pedra'; break;
           case 1: escolhaComputador = 'papel'; break;
           case 2: escolhaComputador = 'tesoura'; break;
           default: escolhaComputador = '';
       }

        let resultadoJogo = '';

        if (escolhaComputador === 'pedra') {
            if (escolhaUsuario === 'pedra') {
                resultadoJogo = 'Empate';
            }
            if (escolhaUsuario === 'papel') {
                resultadoJogo = 'Você ganhou';
            }
            if (escolhaUsuario === 'tesoura') {
                resultadoJogo = 'Você perdeu';
            }
        } else if (escolhaComputador === 'papel') {
            if (escolhaUsuario === 'pedra') {
                resultadoJogo = 'Você perdeu';
            }
            if (escolhaUsuario === 'papel') {
                resultadoJogo = 'Empate';
            }
            if (escolhaUsuario === 'tesoura') {
                resultadoJogo = 'Você ganhou';
            }
        } else if (escolhaComputador === 'tesoura') {
            if (escolhaUsuario === 'pedra') {
                resultadoJogo = 'Você ganhou';
            }
            if (escolhaUsuario === 'papel') {
                resultadoJogo = 'Você perdeu';
            }
            if (escolhaUsuario === 'tesoura') {
                resultadoJogo = 'Empate';
            }
        }

        this.setState({ escolhaUsuario, escolhaComputador, resultadoJogo });

        // Quando a variavel tem nome diferente do que ta sendo atribuido.
        // this.setState({ escolhaUsuario: escolhaUser,
        //                 escolhaComputador: escolhaComp,
        //                 resultadoJogo: resultado
        //  });
    }

    render() {
        return (
            <View>
                <Topo />
                <View style={styles.painelAcoes}>
                    <View style={styles.btnEscolha}>
                        <Button title='Pedra' onPress={() => { this.jokenpo('pedra'); }} />
                    </View>

                    <View style={styles.btnEscolha}>
                        <Button title='Papel' onPress={() => { this.jokenpo('papel'); }} />
                    </View>

                    <View style={styles.btnEscolha}>
                        <Button title='Tesoura' onPress={() => { this.jokenpo('tesoura'); }} />
                    </View>
                </View>

                <View style={styles.palco}>
                    <Text style={styles.txtResultado}>{this.state.resultadoJogo}</Text>

                    <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
                    <Icone escolha={this.state.escolhaUsuario} jogador='Você' />

                </View>
                
            </View>
        );
    }

}

const styles = StyleSheet.create({
    btnEscolha: {
        width: '30%'
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    palco: {
        alignItems: 'center',
        marginTop: 10
    },
    txtResultado: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'blue'
        //height: 60
    },
    imagemJogada: {
        width: 60,
        height: 60
    }
});

AppRegistry.registerComponent('app3', () => app3);
