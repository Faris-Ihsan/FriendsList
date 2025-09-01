import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FriendListItem from '../components/FriendListItem';

// keine Daten
// warten --> langsame Internetverbindung
// Ladeprobleme
const dummyData = [
        { first: 'Alice', last: 'Schmichael', email: 'test1@example.com'}, 
        { first: 'Bob', last: 'Schmichael', email: 'test2@example.com'}, 
        { first: 'Asep', last: 'Schmichael', email: 'test3@example.com'}, 
        { first: 'Udin', last: 'Schmichael', email: 'test4@example.com'},
    ]

export default function HomeScreen({navigation}) {
    const [data, setData] = useState([]);

    return(
        <View style={styles.container}>
            <FlatList data={data} renderItem={({item}) => (
                <FriendListItem friend={item} onPress={()=> navigation.navigate('Friend', { friend: item })}/>
            )}
            keyExtractor={(item) => item.email}
            ItemSeparatorComponent={<View style={styles.listSeparator}/>}
            ListEmptyComponent={<Text style={styles.listEmpty}>Keine Daten geladen</Text>}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    listSeparator:{
        height: StyleSheet.hairlineWidth, 
        backgroundColor: 'lightgray',
    },
    listEmpty: {
        fontSize: 32,
        paddingTop: 100, 
        textAlign: 'center',
    },
});