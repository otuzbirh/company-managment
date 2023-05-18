import React, {useState, useEffect} from 'react'
import TableComponent from '../../../components/table'
import companiesApi from '../../../http/companies';
import { Paper } from '@mui/material';

const Companies = () => {

  const columns = [
    { id: 'companyId', label: 'ID', minWidth: 170 },
    { id: 'companyName', label: 'Company Name', minWidth: 170 },
   
  ];
  
  function createData(companyId, companyName) {
    return { companyId, companyName };
  }


  const [companies, setCompanies] = useState([]);

  const fetchData = () => {
    return companiesApi()
      .listCompanies()
      .then((response) => {
        setCompanies(response.data.items);
      })
      .catch((error) => {
        alert('Error occurred while fetching companies: ' + error.message);
      });
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const rows  =  companies?.map( (item) => {
    return createData(item?.companyId, item?.companyName)
  })

  return (
    <Paper elevation={2} sx={{width: '95%',  display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', flexDirection: 'column'}}>
          <TableComponent rows={rows} columns={columns} createData={createData} />

    </Paper>
  )
}

export default Companies