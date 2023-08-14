import React from "react";
import { GamesTop } from "./Games_Top";
import { SocialBattle } from "./Social_Battle";
import { Features } from "./Features";
import { SystemRequirements } from "./System_Requirements";
import { PressQuotes } from "./Press_Quotes";
import { NewSletterSub } from "./NewsletterSUBSCRIBE";
import { FooterMenu } from "./FooterMenu";

export const Games: React.FC = (): JSX.Element => {
    return (
        <div className="Games">
                <GamesTop />
                <SocialBattle />
                <Features />
                <SystemRequirements />
                <PressQuotes />
                <NewSletterSub/>
                <FooterMenu/>
        </div>
    )
}