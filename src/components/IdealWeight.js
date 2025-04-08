//Importando o react native
import { Text, StyleSheet, View } from "react-native";

//Calculando o peso maximo ideal e o peso minimo ideal com base na altura que for digitado
const IdealWeight = ({ altura }) => {
     const pesoMinimoIdeal = (18.5 * altura * altura).toFixed(2);
     const pesoMaximoIdeal = (24.9 * altura * altura).toFixed(2);


     //Vizualizar o peso minimo ideal e o peso maximo ideal
     return (
        <View style={styles.container}>
        <Text style={styles.IdealWeight}>Peso Mínimo Ideal: {pesoMinimoIdeal} Kg</Text>
    
        <Text style={styles.IdealWeight}>Peso Máximo Ideal: {pesoMaximoIdeal} Kg</Text>
        </View >
    
    );

};

//Estilizando os componente IdealWeight e o View
const styles = StyleSheet.create({
    IdealWeight: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#333',
        fontWeight:'bold'
    },
     container: {
         justifyContent: 'center',
         marginTop: 20,
         paddingBottom: 20,
         borderRadius: 10,
         backgroundColor: '#dcdcdc'
     },
});




//Exportando o componente IdealWeight
export default IdealWeight;

