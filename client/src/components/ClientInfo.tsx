import React from 'react'
import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa'
import { Client } from '../../types/ClientType'
const ClientInfo = (props: { client: Client }) => {
  return (
    <>
      <h5 className='mt-5'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge className='icon' /> {props.client.name}
        </li>
        <li className='list-group-item'>
          <FaEnvelope className='icon' /> {props.client.email}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {props.client.phone}
        </li>
      </ul>
    </>
  )
}

export default ClientInfo
