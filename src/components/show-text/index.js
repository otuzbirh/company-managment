import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';

const ShowMoreText = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncatedText = expanded ? text : text.slice(0, maxLength);

  return (
    <div>
      <Typography variant="body1" gutterBottom>
        {truncatedText}
      </Typography>
      {text.length > maxLength && (
        <Button onClick={toggleExpanded}>
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </div>
  );
};

export default ShowMoreText;
