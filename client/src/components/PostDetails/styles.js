import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxWidth:'600px',
    maxHeight: '600px',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '100%',
      maxWidth: '100%',
      width: 'auto'
    }

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    overflowX: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  recommendedPostsItems: {
    margin: '20px',
    cursor: 'pointer',
    minWidth: '200px',
    maxWidth: '200px',
    [theme.breakpoints.down('sm')]: {
    maxWidth: 'auto',
      minWidth:'auto',
      width:'200px'
    }
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%'
    },
  },
  commentsTextField: {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));
