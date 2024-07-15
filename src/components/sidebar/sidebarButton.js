import React from 'react'
import './sidebarButton.css';
import { Link } from 'react-router-dom';

export default function SidebarButton(props) {
  return (
   <Link to={props.to}>
   <div className='btn-body'>
    {props.icon}
    <p className='btn-title'>{props.title}</p>
   </div>
   </Link>
  )
}
