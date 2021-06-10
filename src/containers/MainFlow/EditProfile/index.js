import React from 'react';
import EditProfileView from './view';

const EditProfile: () => React$Node = (props) => {
  const cardDetails = [
    {
      aboutTitle: 'Automated Trading',
      aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.'
    },
    {
      aboutTitle: 'Automated Trading',
      aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.'
    },
    {
      aboutTitle: 'Automated Trading',
      aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.'
    },
    {
      aboutTitle: 'Automated Trading',
      aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.'
    },
    {
      aboutTitle: 'Automated Trading',
      aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.'
    },
    {
      aboutTitle: 'Automated Trading',
      aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.'
    },
  ];

  const viewProps = {
    ...props,
    cardDetails,
  };

  return <EditProfileView {...viewProps} />;
};

export default EditProfile;

