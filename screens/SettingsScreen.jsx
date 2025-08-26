import { SectionList, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
    return(
        <View style={styles.container}>
        <SectionList
            sections={[
                // Abschnitt1 (Section1)
                { title: 'Version', data: [{name: '1.0'}] },
                // Abschnitt1 (Section2)
                { title: 'Impressum', data: [{name: 'beeworx'},{name: '(c) 2025'}] },
            ]}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
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
    section:{
        backgroundColor: 'whitesmoke',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        fontSize: 18,
        padding: 5,
    },
});