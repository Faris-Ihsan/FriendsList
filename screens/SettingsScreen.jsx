import { SectionList, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
    return(
        <View style={styles.container}>
        <SectionList
            sections={[
                // Abschnitt1 (Section1)
                {title: 'Abscnitt1', data: [{name: 'Alice'},{name: 'Bob'}]},
                // Abschnitt1 (Section2)
                {title: 'Abscnitt2', data: [{name: 'Asep'},{name: 'Ujang'}]},
            ]}
            renderItem={({item}) => <Text>{item.name}</Text>}
        />
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