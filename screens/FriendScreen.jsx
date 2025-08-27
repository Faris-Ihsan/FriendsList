import { Image, StyleSheet, Text, ScrollView } from 'react-native';

export default function FriendScreen({navigation, route}) {
    const { name } = route.params
    return(
        <ScrollView contentContainerStyle={styles.container} style={styles.ScrollView}>
            <Image style={styles.image} source={require('../assets/icon.png')}></Image>
            <Text>{name}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ScrollView: {
        backgroundColor: '#ffff',
    },
    image: {
        width: 250,
        height: 250,
    },
});