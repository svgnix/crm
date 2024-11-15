import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, IconButton, Box, Typography } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    axios.get("http://localhost:5000/contacts").then((res) => {
      setContacts(res.data);
    });
  }, []);

  const handleAddOrUpdate = (contact) => {
    if (editingContact) {
      axios
        .put(`http://localhost:5000/contacts/${editingContact._id}`, contact)
        .then((res) => {
          setContacts((prev) =>
            prev.map((c) =>
              c._id === editingContact._id ? res.data : c
            )
          );
          setEditingContact(null);
        });
    } else {
      axios.post("http://localhost:5000/contacts", contact).then((res) => {
        setContacts((prev) => [...prev, res.data]);
      });
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/contacts/${id}`).then(() => {
      setContacts((prev) => prev.filter((c) => c._id !== id));
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">Contact Manager</Typography>
          <IconButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
        <ContactForm
          onSubmit={handleAddOrUpdate}
          initialData={editingContact || {}}
          buttonLabel={editingContact ? "Update" : "Add"}
        />
        <ContactTable
          contacts={contacts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
