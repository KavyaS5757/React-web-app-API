import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { Box, Typography, Grid } from '@mui/system';
import { styled } from '@mui/system';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';


const StyledBox = styled(Box)(({ theme, isHovered }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    color: 'Highlight',
    backgroundColor: isHovered ? theme.palette.secondary.main : 'ButtonFace',
    transition: 'background-color 0.3s, transform 0.3s',
    transform: isHovered ? 'scale(1.05)' : 'none',
    boxShadow: isHovered ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        transform: 'scale(1.10)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    animation: 'slideIn 0.5s',
    '@keyframes slideIn': {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
    },

}));


const ApiIntegration = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [notes, setNotes] = useState([]);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.gyanibooks.com/library/get_dummy_notes'
        );
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(notes);
  return (
    <Box sx={{ padding: '2rem' }}>
      <Grid container spacing={2}>
        {notes.map((note, index) => (
          <Grid 
          item 
          xs={4}
          sm={6}
          md={4} 
          key={note.id} 
          sx={{ 
            animationDelay: `${index * 0.2}s`,
            display: 'flex',
            justifyContent: 'center', 
            }}>
            <StyledBox
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              isHovered={hoveredIndex === index}
              sx={{ animation: animate ? 'slideIn 0.5s' : 'none', width: '100%',}}
            >
              <Typography variant={isMobile ? 'subtitle1' : 'h6'}>{note.title}</Typography>
            </StyledBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ApiIntegration;
