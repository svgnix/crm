import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

function ContactManager() {
  const queryClient = useQueryClient();
  const [contact, setContact] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", jobTitle: "" });

  const { data: contacts, isLoading } = useQuery("contacts", () => axios.get("http://localhost:5000/contacts").then((res) => res.data));

  const addMutation = useMutation((newContact) => axios.post("http://localhost:5000/contacts", newContact), {
    onSuccess: () => queryClient.invalidateQueries("contacts"),
  });

  const deleteMutation = useMutation((id) => axios.delete(`http://localhost:5000/contacts/${id}`), {
    onSuccess: () => queryClient.invalidateQueries("contacts"),
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMutation.mutate(contact);
    setContact({ firstName: "", lastName: "", email: "", phone: "", company: "", jobTitle: "" });
  };

  return (
    <div>
      {/* Add Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={contact.firstName}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={contact.lastName}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={contact.phone}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={contact.company}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={contact.jobTitle}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white mt-4 px-4 py-2 rounded">
          Add Contact
        </button>
      </form>

      {/* Contacts Table */}
      <div className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Contacts List</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Job Title</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id}>
                  <td className="border px-4 py-2">{`${contact.firstName} ${contact.lastName}`}</td>
                  <td className="border px-4 py-2">{contact.email}</td>
                  <td className="border px-4 py-2">{contact.phone}</td>
                  <td className="border px-4 py-2">{contact.company}</td>
                  <td className="border px-4 py-2">{contact.jobTitle}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => deleteMutation.mutate(contact._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ContactManager;
