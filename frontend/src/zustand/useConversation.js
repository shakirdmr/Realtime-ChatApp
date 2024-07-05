import {create} from 'zustand';


const useConversation = create( (set)=>({

    selectedConversation:null,
    setSelectedConversation: (selectedConversation)=> set({selectedConversation}),
    

    convoToShow:[],
    setConvoToShow: (convoToShow)=>set({convoToShow}),

    messages : [],
    setMessages : (messages)=> set({messages})

})
)


export default useConversation




