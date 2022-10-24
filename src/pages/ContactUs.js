import React from "react";
import { useRef, useState, useEffect } from "react";
import ContactList from "../components/ContactList";

function clearLocalStorage() {
  localStorage.clear();
}

// clearLocalStorage();
let list = localStorage.getItem("ContactUs")
  ? JSON.parse(localStorage.getItem("ContactUs"))
  : []; //should be a global variable when parsing

const ContactUs = () => {
  let firstRefName = useRef("");
  let lastRefName = useRef("");
  let emailRef = useRef("");
  let messageRef = useRef("");
  let [id, setId] = useState(Date.now);
  let [infoList, setInfoList] = useState(list);

  const handleSubmit = (event) => {
    event.preventDefault();
    let info = {
      id: id,
      firstName: firstRefName.current.value,
      lastName: lastRefName.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    let filter = infoList.filter((item) => {
      return item.id === info.id;
    });

    if (filter.length == 0) {
      setInfoList([...infoList, info]);
    } else {
      infoList.forEach((item, index) => {
        if (item.id === info.id) {
          infoList.splice(index, 1, info);
          setInfoList(infoList);
        }
      });
    }

    // setInfoList([...infoList, info]);
    setId(Date.now);
    firstRefName.current.value = "";
    lastRefName.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  //remove  in the array,  the object with same id
  const handleRemove = (e) => {
    let num = parseInt(e.target.id);
    let remove = [...infoList].filter((item) => {
      return item.id !== num;
    });
    console.log(remove);
    setInfoList(remove);
  };
  const deleteAll = () => {
    let result = window.confirm("Are you sure you want to delete all data?");
    result ? (infoList = []) : (infoList = infoList);
    // infoList = [];
    setInfoList(infoList);
  };

  const handleUpdate = (e) => {
    let num = parseInt(e.target.id);
    let updateFiltered = [...infoList].filter((item) => {
      return item.id === num;
    });
    console.log(updateFiltered);
    updateFiltered.map((update) => {
      setId(update.id);
      firstRefName.current.value = update.firstName;
      lastRefName.current.value = update.lastName;
      emailRef.current.value = update.email;
      messageRef.current.value = update.message;
    });
  };

  useEffect(
    () => localStorage.setItem("ContactUs", JSON.stringify(infoList)),
    [infoList]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <br></br>
        <input
          tabIndex={1}
          id="firstName"
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          ref={firstRefName}
          required
        ></input>
        <br></br>
        <label for="lastName">Last Name</label>
        <br></br>
        <input
          tabIndex={2}
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          ref={lastRefName}
          required
        ></input>
        <br></br>
        <label for="email">Email</label>
        <br></br>
        <input
          tabIndex={3}
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email"
          ref={emailRef}
          required
        ></input>
        <br></br>
        <label for="message">Message</label>
        <br></br>
        <textarea
          tabIndex={4}
          id="message"
          type="text"
          name="message"
          ref={messageRef}
          placeholder="Enter your message here"
          rows={5}
          required
        ></textarea>
        <br></br>
        <button className="btn btn-warning" type="submit">
          Submit
        </button>
      </form>
      <ContactList
        infolist={infoList}
        handleRemove={handleRemove}
        deleteAll={deleteAll}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default ContactUs;
