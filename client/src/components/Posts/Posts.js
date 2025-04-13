import React from 'react';
import { Grid, CircularProgress, Typography, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={3}>
        <Typography variant="h6" color="textSecondary">
          No posts found. Start sharing something!
        </Typography>
      </Box>
    );

  return isLoading ? (
    <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
      <CircularProgress size={60} />
    </Box>
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
