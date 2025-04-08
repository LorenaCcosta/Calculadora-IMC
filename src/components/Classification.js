// Importando o react native
import { Text, StyleSheet} from "react-native";



// Criei uma função que recebe o IMC e retorna a classificações com base no resutado
const getClassification = ({ imc }) => {
    if(imc < 18.5) return 'Abaixo do peso';
    if(imc < 24.9) return 'Peso normal';
    if(imc < 29.9) return 'Sobrepeso';
    if(imc < 34.9) return 'Obesidade grau 1';
    if(imc < 39.9) return 'Obesidade grau 2';

    // Se nenhuma das condições acima não for verdadeira, significa que o resultado do imc é maior ou igual a 40, então classificamos Obesidade grau 3 (Obesidade mórbida)
    return 'obesidade grau 3 (obsidade mórbida)';
};

//Componente que irá exibir a classificação
const Classification = ({ imc }) => {
    return (
        <Text style={styles.classification}>Classificação: {getClassification({ imc })}</Text>
    );
};

//Estilizando o componente Classificação
const styles = StyleSheet.create({
    classification: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#333',
    },
});

//Exportando o componente Classification
export default Classification;