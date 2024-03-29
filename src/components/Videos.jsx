import React from 'react'
import {Stack, Box} from '@mui/material'
import { ChannelCard, VideoCard } from './';

const Videos = ({videos}) => {

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {
          videos.map((item, idx) => (
            <Box sx={{borderRadius: 'none', display: 'flex', width:{xs: '356px', md: '320px'} }}  key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.ChannelId && <ChannelCard channelDetails={item} />}
            </Box>
          ))
        }
    </Stack>
  )
}

export default Videos