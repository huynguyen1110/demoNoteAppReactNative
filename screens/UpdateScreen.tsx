import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {useState, useEffect} from 'react'
import { addNewNote, getNoteById } from '../services/NoteServices'
import { Note } from '../services/interfaces/CommonInterfaces'

const UpdateScreen = ( {navigation, route} ) => {

    const noteId = route.params.noteId
    const [note, setNote] = useState<Note>()


    const noteData = async  () => {
        try {
            const response = await getNoteById(noteId)
            const data = {response}
            // setNote(data)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        noteData()
    }, [noteId])

    

    return(
        <View style={styles.container}>
            <View style={styles.container_form}>
                <Text style={styles.text_heading}>update your note</Text>
                <Text style={styles.common_text_style}>Title:</Text>
                <TextInput style={styles.text_input_style} multiline />
                <Text style={styles.common_text_style}>Content:</Text>
                <TextInput style={styles.text_input_style} numberOfLines={7} multiline 
                 />
                <TouchableOpacity  style={styles.button_style}>
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    container_form: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#84a9e0',
        width: 250,
        height: 300,
        borderWidth: 2,
        borderRadius: 2
    },
    text_heading: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 8
    },
    common_text_style: {
        fontSize: 18,
        marginBottom: 8
    },
    text_input_style: {
        borderWidth: 1,
        borderRadius: 3,
        borderEndColor: 'black'
    },
    button_style: {
        width: '100%',
        backgroundColor: '#13f29d',
        height: 28,
        marginVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default UpdateScreen