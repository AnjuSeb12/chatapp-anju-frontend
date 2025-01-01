import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: {},
    conversation: [],
    selectedConversation:false,
    getContact:[]
}

const chatSlice = createSlice({
    initialState: initialState,
    name: "chat",
    reducers: {
        addNewMessage: (state, action) => {
            if (state.messages[action.payload.conversationId]) {
                state.messages[action.payload.conversationId].push(action.payload.newMessage)

            }
            else {
                state.messages[action.payload.conversationId] = [action.payload.newMessage]
                state.conversation.push(action.payload.newConversation)
            }
        },
        setMessage: (state, action) => {
            state.messages[action.payload.conversationId] = action.payload.messages

        },
        setConversation: (state, action) => {
            state.conversation = action.payload
        },
        selectedConversation: (state, action) => {
            state.selectedConversation=action.payload

        },
        setContacts:(state,action)=>{
            state.getContact=action.payload
        }



    }
})
export const { addNewMessage, sentMessage, setConversation,selectedConversation,setContacts } = chatSlice.actions
export default chatSlice.reducer
