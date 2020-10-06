import { Box, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import BasicsContent from './basics/basics';
import DefenseContent from './defense/defense';
import NeutralContent from './neutral/neutral';
import OffenseContent from './offense/offense';
import './learning.scss'


interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function learningTabProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box className="learning-tab-box" p={3}>
            {children}
          </Box>
        )}
      </div>
    );
  }

const LearningPage = () => {
    const [currentContent, setCurrentcontent] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, content: number) => {
        setCurrentcontent(content)
    }
    return (
        <div className="kame-container">
            <div className="kame-row">
                <div className="kame-details">
                    <p>
                        Where did the Z-fighters go when they were first learning how to fight? Where did Goku get his start? Who created the greatest move ever? The Turtle Hermit School! Come on down to Kame House, and learn the ways of the fight.
                    </p>
                    <p>
                        Whether you are a veteran to fighting games, or just joining in because you love Dragonball. This resource is meant to help you power-up and jump into the fray.
                    </p>
                </div>
                <div className="kame-image">
                    <img className="img-fluid" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/Kamehouse.jpg" alt="Kame House"></img>
                </div>
            </div>
            <div className="kame-page-details">
                <Paper className={'details-paper'}>
                    <Tabs
                        value={currentContent}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Basics" {...learningTabProps(0)} />
                        <Tab label="Neutral" {...learningTabProps(1)} />
                        <Tab label="Offense" {...learningTabProps(2)} />
                        <Tab label="Defense" {...learningTabProps(3)} />
                    </Tabs>
                </Paper>
                <TabPanel value={currentContent} index={0} >
                    <BasicsContent />
                </TabPanel>
                <TabPanel value={currentContent} index={1} >
                    <NeutralContent />
                </TabPanel>
                <TabPanel value={currentContent} index={2} >
                    <OffenseContent />
                </TabPanel>
                <TabPanel value={currentContent} index={3} >
                    <DefenseContent />
                </TabPanel>                
            </div>
        </div>
        
    )
}

export default LearningPage