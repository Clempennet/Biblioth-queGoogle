import React from 'react';
import Checkbox from './Checkbox';

export default {
    component: Checkbox,
    title: 'component/Checkbox'
};

const Template = (args) => <Checkbox {...args} />

export  const Default = Template.bind({});

function handleChange(event) {
    console.log(event.target.value);
  }
  
Default.args = {
 
children :'bonjour',
}

//https://www.youtube.com/watch?v=SSXA2XluIBU