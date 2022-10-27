import React from 'react';
import Navbar from './Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default {
    component: Navbar,
    title: 'component/Navbar'
};

const Template = (args) => <Navbar {...args} />

export  const Default = Template.bind({});

Default.args = {
    title: "BUB'AIR", 
    textButton1:' Acceuil', 
    textButton2:' Aéroport', 
    textButton3:' Contact',
}
