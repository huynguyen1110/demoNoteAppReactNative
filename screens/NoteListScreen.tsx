import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getNotes } from '../services/NoteServices';
import { Note } from '../services/interfaces/CommonInterfaces';


const NoteListScreen = ( {navigation} ) => {

    const [notes, setNotes] = useState<Note[]>()

    const notesData = async () => {
        try {
            const dataResponse = await getNotes()
            const { data } = dataResponse
            setNotes(data)
            // console.log(data)
        } catch (err) {
            console.log(err.messagge)
        }
        return notesData
    }
    

    const renderNote = ( {item} : {item : Note} ) => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate("UpdateScreen", {noteId: item.id})
            }}>
            <View style={styles.item_style}>
                <Text style={styles.heading_style} >Title: {item.title}</Text>
                <Text style={styles.content_style}>Content: {item.content}</Text>
            </View>
            </TouchableOpacity> 
        )
    }

    const addNewBtn = () => {
        navigation.navigate("AddNewScreen")
    }
    
    useEffect(() => {
        notesData()
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            notesData()
        }, [])
    )

    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.button_style} onPress={addNewBtn}>
                <Text style={styles.text_style}>Add new</Text>
            </TouchableOpacity>
            <FlatList style={styles.flatlist_style}
            data={notes}
            renderItem={(item) => renderNote(item)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "gray",
    },
    flatlist_style: {
        alignSelf: "center",
        width: "100%"
    },
    item_style: {
        marginVertical: 12,
        borderWidth: 2,
        borderBottomColor: "black"
    },
    heading_style: {
        fontWeight: 'bold',
        fontSize: 24
    },
    content_style: {
        fontSize: 20
    },
    button_style: {
        alignItems: "center",
        width: "100%",
        backgroundColor: "#52dea8",
        height: 30
    },
    text_style: {
        fontSize: 20,
        fontWeight: '800'
    }
})

export default NoteListScreen
