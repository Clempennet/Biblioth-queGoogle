import React from 'react';
import  Button from './Button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default {
    component: Button,
    title: 'component/Button'
};

const Template = (args) => <Button {...args} />

export  const Default = Template.bind({});

Default.args = {
    children: 'Button',

}

