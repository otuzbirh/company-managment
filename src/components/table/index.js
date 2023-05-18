import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import {Table, Menu, MenuItem, Button} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../confirmModal';
import companiesApi from '../../http/companies';


export default function TableComponent({columns, createData, rows}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const navigate = useNavigate()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedIdEdit, setSelectedIdEdit] = useState(0);
  const [selectedIdDelete, setSelectedIdDelete] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [modalState, setModalState] = useState(false)


  useEffect(() => {
    setPage(0); // Reset the page to the first page when the data changes
  }, [rows]);


  const handleClick = (event, id, name) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
    setSelectedName(name)
  };

  function handleEditButton() {
    // setSelectedIdEdit(selectedId)
    navigate(`/application/companies/edit/${selectedId}`)
    
  }

  function handleSubmit() {
    setModalState(false)
    console.log("submitted")
    companiesApi().deleteCompany(selectedId)
    .then((response) => {
        alert('You deleted company successfully');
      
          window.location.reload()

      })
      .catch((error) => {
        alert('Error occurred while deleting company: ' + error.message);
      });
  }

  function handleCloseModal() {
    setModalState(false)
  }

  return (
    <>
    <ConfirmModal open={modalState} handleSubmit={handleSubmit} handleClose={handleCloseModal} name={selectedName}  />

      <TableContainer sx={{ maxHeight: 440 }} key={rows.companyId}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No data
                </TableCell>
              </TableRow>
            ) : (
            rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                     <TableCell align="right">
                        <Button
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={(event) => {
                            // setSelectedId(row.companyId); 
                            handleClick(event, row.companyId, row.companyName);
                            console.log("id", selectedId)
                            console.log("name", selectedName)
                          }}
                        >
                          <MoreVertIcon sx={{color: '#253237'}} />
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem 
                          onClick={handleEditButton}
                          >
                            Edit
                          </MenuItem>
                          <MenuItem 
                          onClick={() => {
                            setSelectedIdDelete(selectedId)
                            setModalState(true)
                          }
                          }
                          >
                            Delete
                          </MenuItem>
                        </Menu>
                      </TableCell>
                  </TableRow>
                );
              }))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10,15,20, 25, 100]}
        component="div"
        count={rows?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </>
  );
}