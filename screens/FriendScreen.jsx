import { Image, ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native';

export default function FriendScreen({navigation, route}) {
    const {width} = useWindowDimensions();
    const imageWidth = width * 0.8;
    const { friend } = route.params;
    return(
        <ScrollView contentContainerStyle={styles.container} style={styles.ScrollView}>
            <Image style={{ width: imageWidth, height: imageWidth }} source={require('../assets/icon.png')}></Image>
            <Text>{friend.name.first} {friend.name.last}</Text>
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
});