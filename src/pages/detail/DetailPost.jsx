import React from 'react'
import './detailpost.css'
import SideBar from './../../components/sidebar/SideBar';
import Detail from '../../components/detail/Detail';

export default function DetailPost() {
  return (
    <div className='detailPost'>
        {/* post */}
        <Detail />
        <SideBar />
    </div>
  )
}
