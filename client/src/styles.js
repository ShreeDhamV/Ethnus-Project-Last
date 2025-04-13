import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
  appBar: {
    borderRadius: 20,
    margin: '40px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6', // light grayish background
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '10px 20px',
  },
  heading: {
    color: '#5B21B6', // deep purple
    fontWeight: 600,
    fontSize: '2rem',
  },
  image: {
    marginLeft: '20px',
    height: '50px',
  },
}));
