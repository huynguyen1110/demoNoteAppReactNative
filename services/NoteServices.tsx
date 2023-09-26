import axios from 'axios';
import { BASE_URL, getAllNotesUrl, postAllNotesUrl } from './Api';
import { Note } from './interfaces/CommonInterfaces';


export const getNotes = () => {
    const responseData = axios({
        method: 'get',
        url: getAllNotesUrl
    })
    return responseData
}

export const addNewNote = ({title, content} : Note) => {
    const responseData = axios({
        method: 'post',
        url: postAllNotesUrl,
        data: {
            title,
            content
        }
    })
    return responseData
}

export const updateNote = ({title, content} : Note, {id}) => {
    const responseData = axios({
        method: 'put',
        url: postAllNotesUrl.concat(id),
        data: {
            title,
            content
        }
    })
    return responseData
}

export const getNoteById = ( id: string ) => {
    const responseData = axios({
        method: 'get',
        url: getAllNotesUrl.concat("/").concat(id)
    })
    return responseData
}