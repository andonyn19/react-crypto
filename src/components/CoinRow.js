import React from 'react'

export default function CoinRow({ value, index }) {
  console.log(value, index)
  return (
    <tr>
      <td>
        {index}
      </td>
      <td>
        <img src={value.image} alt={value.name} style={{width: '25px'}} className='img-fluid me-4'/>
        <span>{value.name}</span>
        <span className='ms-3 text-muted text-uppercase'>{value.symbol}</span>
      </td>
      <td>
        $ {value.current_price}
      </td>
      <td className={value.price_change_percentage_24h > 0 ? 'text-success': 'text-danger'}>
        {value.price_change_percentage_24h} %
      </td>
      <td>
        $ {value.total_volume}
      </td>
    </tr>
  )
}
