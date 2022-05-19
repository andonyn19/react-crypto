import React from 'react'
import CoinRow from './CoinRow'

export default function TableCoins({ coins, search, }) {

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))

  const TITLES = ['#', "Coin", "Price", "PriceChange", "24h Volume"];

  return (
    <table className='table table-dark mt-4 table-hover'>

      <thead>
        <tr>
          {
            TITLES.map((title, index) => {
              return (
                <td key={index}>{title}</td>
              )
            })
          }

        </tr>
      </thead>

      <tbody>
        {
          filteredCoins.map((coin, index) => {
            return (
              <CoinRow
                key={index}
                index={index + 1}
                value={coin}
              />
            )
          })
        }
      </tbody>

    </table>
  )
}
