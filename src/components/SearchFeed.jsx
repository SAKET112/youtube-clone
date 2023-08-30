import React, {useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import {Videos} from './';


const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} sx={{overflow: "auto", height: "90vh", flex: 2}} >
        <Typography varient="h4" fontWeight="bold" mb={2} sx={{color: 'white'}} >
          Search Results for: <span style={{color: '#f31503'}} >{searchTerm}</span> Videos
        </Typography>

        <Videos videos={videos} />

      </Box>
  )
}

export default SearchFeed