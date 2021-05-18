import React from "react";
import LeftmostRedCircle from "../svgComponents/leftmostRedCircle";
import MiddleDashedCircle from "../svgComponents/middleDashedCircle";
import MiddleLargeBlackCircle from "../svgComponents/middleLargeBlackCircle";
import UpperRightBlackCircle from "../svgComponents/upperRightBlackCircle";
import UpperRightDashedCircle from "../svgComponents/upperRightDashedCircle";

/**
 * Exporta os svgs de underlay combinados
 */
const UnderlayCircles: React.FC = () => {
   return (
      <>
         <LeftmostRedCircle />
         <MiddleDashedCircle />
         <MiddleLargeBlackCircle />
         <UpperRightBlackCircle />
         <UpperRightDashedCircle />
      </>
   );
};

export default UnderlayCircles;
