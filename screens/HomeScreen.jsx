import { FlatList, StyleSheet, View } from 'react-native';
import FriendListItem from '../components/FriendListItem';

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <FlatList data={[
                { first: 'Alice', last: 'Schmichael', email: 'test1@example.com'}, 
                { first: 'Bob', last: 'Schmichael', email: 'test2@example.com'}, 
                { first: 'Asep', last: 'Schmichael', email: 'test3@example.com'}, 
                { first: 'Udin', last: 'Schmichael', email: 'test4@example.com'},
            ]} renderItem={({item}) => (
                <FriendListItem friend={item} onPress={()=> navigation.navigate('Friend', { friend: item })}/>
            )}
            keyExtractor={(item) => item.email}
            ItemSeparatorComponent={<View style={styles.listSeparator}/>}
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
});