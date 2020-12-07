import React from 'react'
import UniversalStaticData from '../../../helpers/static_data/universal_data'
import { UniversalData } from '../../../models/app'
import UniversalCardDesktop from './universal_card_desktop'
import UniversalCardMobile from './universal_card_mobile'
import UniversalCardTablet from './universal_card_tablet'

import './universal.scss'



interface OwnProps {
    mediaType: string;
}

type UniversalDataProps = OwnProps;

const UniversalDataPage = (props: UniversalDataProps) => {
    const { mediaType } = props;
    return (
        <div className={`universals-container ${mediaType}`}>
            {
                UniversalStaticData.map((data: UniversalData, key: number) => {
                   return (
                       <div key={key}>
                            {
                                mediaType === 'mobile' 
                                ? 
                                <UniversalCardMobile universalData={data} />
                                :
                                mediaType === 'tablet'
                                ?
                                <UniversalCardTablet universalData={data} />
                                :
                                <UniversalCardDesktop universalData={data} />
                            }
                       </div>
                   ) 
                })
            }
        </div> 
    )
}

export default UniversalDataPage