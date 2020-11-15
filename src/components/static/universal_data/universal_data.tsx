import React from 'react'
import UniversalStaticData from '../../../helpers/static_data/universal_data'
import { UniversalData } from '../../../models/app'
import UniversalCard from './universal_card'
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
                           <UniversalCard universalData={data}  />
                       </div>
                   ) 
                })
            }
        </div> 
    )
}

export default UniversalDataPage