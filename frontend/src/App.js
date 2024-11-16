import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { 
  Container, 
  IconButton, 
  Box, 
  Typography, 
  Paper,
  AppBar,
  Toolbar,
  Grid
} from "@mui/material";
import { Brightness4, Brightness7, ContactPhone } from "@mui/icons-material";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#dc004e',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
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
            prev.map((c) => (c._id === editingContact._id ? res.data : c))
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
      <Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <ContactPhone sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Contact Manager
            </Typography>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>
        
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <ContactForm
                  onSubmit={handleAddOrUpdate}
                  initialData={editingContact || {}}
                  buttonLabel={editingContact ? "Update Contact" : "Add Contact"}
                  onCancel={() => setEditingContact(null)}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <ContactTable
                  contacts={contacts}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;