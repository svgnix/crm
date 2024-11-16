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
    backgroundColor: theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark"
      ? theme.palette.grey[700]
      : theme.palette.grey[100],
  },
}));

const ContactTable = ({ contacts, onEdit, onDelete }) => {
  if (contacts.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 3 }}>
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
                {contact.email && (
                  <Box display="flex" gap={1}>
                    <Email fontSize="small" />
                    <Typography>{contact.email}</Typography>
                  </Box>
                )}
                {contact.phone && (
                  <Box display="flex" gap={1}>
                    <Phone fontSize="small" />
                    <Typography>{contact.phone}</Typography>
                  </Box>
                )}
              </StyledTableCell>
              <StyledTableCell>
                {contact.company && <Chip label={contact.company} size="small" />}
                {contact.jobTitle && <Chip label={contact.jobTitle} size="small" color="primary" />}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Tooltip title="Edit">
                  <IconButton onClick={() => onEdit(contact)} size="small">
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton onClick={() => onDelete(contact._id)} size="small" color="error">
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
