import React from 'react';
import  MiniImage from './MiniImage';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


export default {
    component: MiniImage,
    title: 'component/MiniImage'
};

const Template = (args) => <MiniImage {...args} />

export  const Bookmark = Template.bind({});

Bookmark.args = {
    modif: "fa fa-bookmark",
}

export  const Plane = Template.bind({});

Plane.args = {
    modif: "fa fa-fighter-jet",
}

export  const Contact = Template.bind({});

Contact.args = {
    modif: "fa fa-address-book-o",
}
