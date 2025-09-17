import React from 'react'
import ConversationElement from './ConversationElement'
import useGetConversation from '../../hooks/useGetConversation';

function Conversation() { 
  const {loading,conversations} = useGetConversation();
  console.log("CONVERSATIONS: " , conversations);
  return (
    <div className="flex flex-col overflow-auto py-2">
      {conversations.map((convo, idx) => (
        <ConversationElement
          key={convo._id}
          conversation={convo}
          // emoji  
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className=" loading loading-spinner "></span> : null}
    </div>
  );
}

export default Conversation


/*function Conversation() {
  return (
    <div className='flex flex-col overflow-auto py-2'>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
        <ConversationElement/>
    </div>
  )
}

export default Conversation*/