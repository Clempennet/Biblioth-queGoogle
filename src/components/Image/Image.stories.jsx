import React from 'react';
import  Image from './Image';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from '../../component/AvionProjet.png';


export default {
    component: Image,
    title: 'component/Image',
};

const Template = (args) => <Image {...args} />

export  const Default = Template.bind({});

Default.args = {
    logo: img

}

