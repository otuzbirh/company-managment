import React, { useState, useEffect } from 'react';
import { Paper, Box } from '@mui/material';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import companiesApi from '../../../http/companies';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DragCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompanies, setNewCompanies] = useState([])

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

//   const newState = [];

const handleDrop = (index, item, source) => {
    if (source === 'companies') {
      const temp = companies.splice(index, 1)[0];
      setCompanies([...companies]);
      setNewCompanies([...newCompanies, temp]);
    } else if (source === 'newCompanies') {
      const temp = newCompanies.splice(index, 1)[0];
      setNewCompanies([...newCompanies]);
      setCompanies([...companies, temp]);
    }
  };

  const CompanyBox = ({ item, index, source }) => {
    const [{ isDragging }, drag] = useDrag({
      item: {  item, index, source },
      type: ItemTypes.BOX,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const opacity = isDragging ? 0.1 : 1;

    return (
      <Paper ref={drag} sx={{ opacity: opacity, width: '70%', height: '20%', padding: 1, marginBottom: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} elevation={5}>
        {item.companyName}
      </Paper>
    );
  };

  const TargetBox = ({ children }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
      accept: ItemTypes.BOX,
      drop: (item) => handleDrop(item.index, item.item, item.source),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });

    const isActive = canDrop && isOver;
    const backgroundColor = isActive ? '#fffff9' : 'white';

    return (
      <Paper ref={drop} style={{ backgroundColor }} elevation={5}  sx={{width: '30%', height: '90%', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 1, overflowY: 'scroll'}}>
        {children}
      </Paper>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', height: '90%', overflow: 'hidden' }}>
      
         <TargetBox source="companies">
          {companies?.map((item, index) => (
            <CompanyBox key={item.companyId} item={item} index={index}  source="companies"/>
          ))}
        </TargetBox>
      
        <TargetBox source="newCompanies">
          {newCompanies?.map((item, index) => (
            <CompanyBox key={item.companyId} item={item} index={index} source="newCompanies" />
          ))}
        </TargetBox>
      </Box>
    </DndProvider>
  );
};

export default DragCompanies;
