import React from "react";

const ContactList = ({ infolist, handleRemove, deleteAll, handleUpdate }) => {
  let contacts = infolist;
  return (
    <div>
      <table className="table table-info">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>
              Action<br></br>
              <button type="button" onClick={deleteAll}>
                Delete All
              </button>
            </th>
          </tr>
        </thead>
        {contacts.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>{data.message}</td>
            <td>
              <button
                className="btn btn-danger text-dark"
                type="button"
                id={data.id}
                onClick={handleRemove}
              >
                Remove
              </button>
              <button
                className="btn btn-warning text-dark"
                type="button"
                id={data.id}
                onClick={handleUpdate}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ContactList;
