import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");

  const {selectedConversation ,setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();
   
  const outputSearch = React.useRef(null);
  // useEffect(() => {
  //     setTimeout(() => {
  //       outputSearch.current?.scrollIntoView({ behaviour: "smooth" });
  //     }, 100);
  //   }, [search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(search.length < 3){
      return toast.error("Search term must me at least 3 characeter long")
    }

    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("");
    }else toast.error("NO such User Found !")
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 justify-center p-2">
        <input
          type="text "
          placeholder="Search"
          className="input input-bordered input-info rounded-full"
          valuev={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-border btn-circle bg-sky-600">
          <IoMdSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;


/*
function SearchInput() {
  return (
    <div>
      <form className="flex items-center gap-2 justify-center p-2">
        <input
          type="text "
          placeholder="Search"
          className="input input-bordered input-info rounded-full"
        />
        <button type="submit" className="btn btn-border btn-circle bg-sky-600">
          <IoMdSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
*/