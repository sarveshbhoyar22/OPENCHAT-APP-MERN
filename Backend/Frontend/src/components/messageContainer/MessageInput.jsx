import React, {useState} from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";


function MessageInput() {

  const [message, setMessage] = useState("")
  const {loading, sendMessage} = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form className="px-4 my-3 " onSubmit={handleSubmit}>
      <div className="w-full flex justify-between items-center gap-2 ">
        <input
          type="text"
          className="w-full border text-sm text-white block rounded p-2.5 bg-gray-800 input input-bordered "
          placeholder="Send a Message !"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="bg-sky-600 transition-all p-1 flex items-center rounded-xl hover:cursor-pointer hover:bg-sky-800">
          <button>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <IoIosSend className="w-8 h-8 hover:scale-110 transition-all rounded-full hover:cursor-pointer" />
            )}

            {/* <IoIosSend /> */}
          </button>
        </div>
      </div>
    </form>
  );
}

export default MessageInput;



/*
function MessageInput() {
  return (
    <form className="px-4 my-3 ">
      <div className="w-full flex justify-between items-center gap-2 ">
        <input
          type="text"
          className="w-full border text-sm text-white block rounded p-2.5 bg-gray-800 input input-bordered "
          placeholder="Send a Message !"
        />
        <div>
          <IoMdSend className="w-5 h-5 " />
        </div>
      </div>
    </form>
  );
}

export default MessageInput;
*/
