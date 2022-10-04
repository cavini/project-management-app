import { useMutation } from '@apollo/client'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Client } from '../../types/ClientType'
import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries'
import { GET_PROJECTS } from '../queries/projectQueries'

const ClientRow = (props: { client: Client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: props.client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({
    //     query: GET_CLIENTS,
    //   })
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   })
    // },
  })
  return (
    <tr>
      <td>{props.client.name}</td>
      <td>{props.client.email}</td>
      <td>{props.client.phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={() => deleteClient()}>
          <FaTrash />
        </button>
      </td>
    </tr>
  )
}

export default ClientRow
