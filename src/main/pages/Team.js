import React from "react";
import { BigBanner } from "../BigBanner/BigBanner";
import { PageCaption } from "../PageCaption/PageCaption.js";
import { ExpertsList } from "../ExpertsList/ExpertsList.js";

export const Team = ({ team }) => {
   return (
      <div>
         <BigBanner caption={team.bannerCaption} />
         <PageCaption subtitle={team.subtitle} title={team.title} text={team.text} />
         <ExpertsList experts={team.experts} />
      </div>
   );
}


