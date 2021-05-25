import React from "react";
import { Text, Box, Image } from "@chakra-ui/react";

// import { Container } from './styles';

const ReviewBox: React.FC<{ videoUrl?: string }> = ({ videoUrl = "https://www.youtube.com/watch?v=vBzBgewl4ac" }) => {
   const youtubeVideo = videoUrl;
   const youtubeId = youtubeVideo.split("?v=")[1];
   const youtubeThumbnail = `http://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

   return (
      <Box paddingLeft="21px" paddingRight="20px" borderRadius="5px">
         <a href={youtubeVideo} referrerPolicy="no-referrer" target="_black">
            {" "}
            <Image objectFit="cover" borderRadius="5px" height="181px" width="335px" src={youtubeThumbnail} />
         </a>
      </Box>
   );
};

export default ReviewBox;
