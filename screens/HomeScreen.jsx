import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <FlatList data={[
                {name: 'Alice'}, 
                {name: 'Bob'}, 
                {name: 'Asep'}, 
                {name: 'Udin'},
            ]} renderItem={({item}) => {
                // return <Text>{item.name}</Text>
                return <Button title={`Gehe zu ${item.name}`} onPress={()=> navigation.navigate('Friend', {name: item.name})}/>
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
});