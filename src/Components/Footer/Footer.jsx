import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

const Footer = ({ muscles, category, onSelect }) => {

    const index = category
        ? muscles.findIndex(group => group === category) + 1
        : 0

    const onIndexSelect = (e, index) => 
       onSelect(index === 0 ? '' : muscles[index - 1])

    return <div>
        <Paper square>
            <Tabs
                value={index}
                onChange={onIndexSelect}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="ALL" />
                {muscles.map(group =>
                    <Tab label={group} />
                )}
            </Tabs>
        </Paper>
    </div>
}

export default Footer