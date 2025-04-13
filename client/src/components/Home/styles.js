import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 8,
    marginBottom: '1.5rem',
    display: 'flex',
    padding: '20px',
    backgroundColor: '#f4f6f9', // Adding a light background color
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for better contrast
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  pagination: {
    borderRadius: 8,
    marginTop: '1.5rem',
    padding: '20px',
    backgroundColor: '#fff', // Clean white background
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Adding a shadow for visual depth
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton: {
    marginTop: '10px',
    padding: '10px 20px',
    borderRadius: '20px', // Rounded corners for a more modern look
    textTransform: 'none',
    fontWeight: 'bold',
    backgroundColor: '#3498db', // Vibrant blue background for the search button
    color: '#fff', // White text color for contrast
    '&:hover': {
      backgroundColor: '#2980b9', // Slightly darker blue on hover
    },
  },
  searchTitle: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    color: '#2c3e50',
    marginBottom: '10px',
  },
}));

