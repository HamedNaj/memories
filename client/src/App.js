import React, {useState,useEffect} from 'react'
import {useDispatch} from "react-redux";
import {Container, Typography, AppBar, Grow, Grid} from '@material-ui/core'

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/memories.png'
import useStyles from './styles'

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch,currentId])
  return (
    <Container maxwidth='lg'>
      <AppBar position='static' color='inherit' className={classes.appBar}>
        <Typography variant='h2' align='center' className={classes.heading}>
          Memories
        </Typography>
        <img src={memories} alt='memories' height='60' className={classes.image}/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App