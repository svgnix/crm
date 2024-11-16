import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Box,
  Tooltip,
  Chip,
  tableCellClasses
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Edit, Delete, Email, Phone } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.primary.main,
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? theme.palette.grey[800] 
      : theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? theme.palette.grey[700] 
      : theme.palette.grey[100],
  },
}));

const ContactTable = ({ contacts, onEdit, onDelete }) => {
  if (contacts.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 3 }}>
        <Typography variant="h6" color="text.secondary">
          No contacts found. Add your first contact!
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Contact Info</StyledTableCell>
            <StyledTableCell>Company Details</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <StyledTableRow key={contact._id}>
              <StyledTableCell>
                <Typography variant="subtitle1">
                  {contact.firstName} {contact.lastName}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {contact.email && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Email fontSize="small" color="action" />
                      <Typography variant="body2">{contact.email}</Typography>
                    </Box>
                  )}
                  {contact.phone && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Phone fontSize="small" color="action" />
                      <Typography variant="body2">{contact.phone}</Typography>
                    </Box>
                  )}
                </Box>
              </StyledTableCell>
              <StyledTableCell>
                {(contact.company || contact.jobTitle) && (
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {contact.company && (
                      <Chip 
                        label={contact.company} 
                        size="small" 
                        variant="outlined"
                      />
                    )}
                    {contact.jobTitle && (
                      <Chip 
                        label={contact.jobTitle} 
                        size="small" 
                        variant="outlined" 
                        color="primary"
                      />
                    )}
                  </Box>
                )}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Tooltip title="Edit">
                  <IconButton 
                    onClick={() => onEdit(contact)}
                    color="primary"
                    size="small"
                  >
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    onClick={() => onDelete(contact._id)}
                    color="error"
                    size="small"
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;