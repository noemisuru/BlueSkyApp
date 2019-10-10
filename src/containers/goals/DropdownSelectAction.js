import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'angular', text: 'VM', value: 'angular' },
    { key: 'css', text: 'Travel', value: 'css' },
    { key: 'design', text: 'Food', value: 'design' },
    { key: 'ember', text: 'Recycle', value: 'ember' },
]

const DropdownSelectAction = () => (
    <Dropdown placeholder='Activities' fluid multiple selection options={options} />
)

export default DropdownSelectAction;