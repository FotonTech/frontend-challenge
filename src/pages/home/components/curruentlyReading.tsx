import React from "react";
import { Text, Box, Image } from "@chakra-ui/react";
import theme from "../../../theme";
import Circle from "../../../components/circle.png";
import RedRectangle from "../svgComponents/redRectangle";
import BlueCircle from "../svgComponents/blueCircle";
import { BookBeingReadType } from "../../../types/index";
import { useHistory } from "react-router";
// import { Container } from './styles';

type CurrentlyReadingBoxType = {
   currentBook: BookBeingReadType;
};

const bookNameProperties = {
   lineHeight: "26,66px",
   letterSpacing: "2px",
   fontSize: "20px",
   fontFamily: "'Playfair Display', sans-serif",
   fontWeight: "700",
};
const bookAuthorProperties = {
   lineHeight: "11,72px",
   letterSpacing: "1.29 px",
   fontSize: "10px",
   color: "grey",
   fontFamily: "Roboto, sans-serif",
};

let lowerZIndex = -10;

const CurrentlyReadingBox: React.FC<CurrentlyReadingBoxType> = ({ currentBook }) => {
   const history = useHistory();
   const onClickItem = () => {
      history.push(`/details/${currentBook?.book?.id}`);
   };

   return (
      <>
      <Box zIndex={lowerZIndex} display="flex" alignItems="center" color="black" height="136px">
         </Box >
         <Box position="absolute" zIndex="overlay">
            <Image
               boxShadow="sm"
               marginLeft="19px"
               borderRadius="1px"
               height="136px"
               w="91px"
               objectFit="fill"
               shadow="lg"
               src={currentBook?.book?.thumbnail}
               onClick={onClickItem}
               cursor="pointer"
            />
         </Box>

         <Box position="relative" backgroundColor="#EEF5DB" width="331px">
            <Box
               position="absolute"
               zIndex="overlay"
               marginLeft="223px"
               marginBottom="88px"
               marginRight="90px"
               marginTop="-6px"
            >
               <BlueCircle />
            </Box>

            <Box
               position="absolute"
               zIndex="overlay"
               marginLeft="308.2px"
               marginBottom="20.5px"
               marginRight="-22.8px"
               marginTop="64.5px"
            >
               <RedRectangle />
            </Box>

            <Box
               position="absolute"
               zIndex="overlay"
               marginLeft="295px"
               marginBottom="50px"
               marginRight="-33px"
               marginTop="-19px"
            >
               <Image width="69px" height="69px" src={Circle} />
            </Box>

            <Box marginLeft="118px">
               <Text
                  {...bookNameProperties}
                  marginTop="10px"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
               >
                  {currentBook?.book?.name ?? "Hooked"}
               </Text>
               <Text
                  {...bookAuthorProperties}
                  marginTop="5px"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
               >
                  by {currentBook?.book?.author ?? "Nir Eyal"}
               </Text>

               <Box fontSize="10px" lineHeight="11,93px" marginTop="22" marginBottom="12px">
                  <Box
                     display="inline"
                     as="svg"
                     width="16px"
                     marginRight="3px"
                     height="16px"
                     viewBox="0 0 16 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.66666 8.00002C4.66666 8.51822 5.23198 8.83829 5.67633 8.57168L7 7.77748L8.32367 8.57168C8.76802 8.83829 9.33333 8.51822 9.33333 8.00002V1.33335C9.33333 0.965164 9.03485 0.666687 8.66666 0.666687H5.33333C4.96514 0.666687 4.66666 0.965164 4.66666 1.33335V8.00002ZM6.657 6.42836L6 6.82256V2.00002H8V6.82256L7.34299 6.42836C7.13187 6.30169 6.86812 6.30169 6.657 6.42836Z"
                        fill="#E66CFF"
                        fill-opacity="0.98"
                     />
                     <path
                        d="M3.33333 2.00002H10.6667C11.7712 2.00002 12.6667 2.89545 12.6667 4.00002V12C12.6667 13.1046 11.7712 14 10.6667 14H4C3.63181 14 3.33333 14.2985 3.33333 14.6667C3.33333 15.0349 3.63181 15.3334 4 15.3334H10.6667C12.5076 15.3334 14 13.841 14 12V4.00002C14 2.15907 12.5076 0.666687 10.6667 0.666687H2.66667C2.29848 0.666687 2 0.965164 2 1.33335V12C2 12.3682 2.29848 12.6667 2.66667 12.6667C3.03486 12.6667 3.33333 12.3682 3.33333 12V2.00002Z"
                        fill="#9013FE"
                     />
                     <circle cx="10.6667" cy="12" r="0.666667" fill="#FF9F00" />
                  </Box>

                  <Text as="span">Chapter</Text>
                  <Text as="span" fontWeight="bold" color="orange.500">
                     {" " + currentBook?.currentChapter + " "}
                  </Text>
                  <Text as="span">from{" " + currentBook?.totalChapters}</Text>
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default CurrentlyReadingBox;
