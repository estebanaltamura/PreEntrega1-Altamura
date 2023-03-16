import { CoverImage } from "../HomeBlocks/1-CoverImage/CoverImage"
import { CollectionsTitle } from "../HomeBlocks/2-CollectionsTitle/CollectionsTitle"
import { Collection1 } from "../HomeBlocks/3-Collection1/Collection1"
import { Collection1Title } from "../HomeBlocks/4-Collection1Title/Collection1Title"
import { Collection2 } from "../HomeBlocks/5-Collection2/Collection2"
import { Collection2Title } from "../HomeBlocks/6-Collection2Title/Collection2Title"
import { Collection3 } from "../HomeBlocks/7-Collection3/Collection3"
import { Collection3Title } from "../HomeBlocks/8-Collection3Title/Collection3Title"
import { WeParagraphTitle } from "../HomeBlocks/9-WeParagraphTitle/WeParagraphTitle"
import { WeParagraph1 } from "../HomeBlocks/10-WeParagraph1/WeParagraph1"
import { WeParagraph2 } from "../HomeBlocks/11-WeParagraph2/WeParagraph2"
import { OurCommunityTitle } from "../HomeBlocks/12-OurCommunityTitle/OurCommunityTitle"
import { OurCommunityImage } from "../HomeBlocks/13-OurCommunityImage/OurCommunityImage"
import { FoundationImage } from "../HomeBlocks/14-FoundationImage/FoundationImage"
import { FoundationParagraph1 } from "../HomeBlocks/15-FoundationParagraph1/FoundationParagraph1"
import { FoundationParagraph2 } from "../HomeBlocks/16-FoundationParagraph2/FoundationParagraph2"
import "./HomeContainer.css"

export const HomeContainer = ()=>{
    return(
        <div className="mainContainer">
            <CoverImage />
            <CollectionsTitle />
            <Collection1 /> 
            <Collection1Title /> 
            <Collection2 /> 
            <Collection2Title /> 
            <Collection3 /> 
            <Collection3Title /> 
            <WeParagraphTitle /> 
            <WeParagraph1 /> 
            <WeParagraph2 /> 
            <OurCommunityTitle /> 
            <OurCommunityImage /> 
            <FoundationImage /> 
            <FoundationParagraph1 /> 
            <FoundationParagraph2 />            
        </div>
    ) 
} 