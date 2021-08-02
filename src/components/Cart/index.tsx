/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '../../store'
import { toast } from 'react-toastify'
import { CartState, removeBet } from '../../store/ducks/Cart'
import { formatMoney } from '../../utils/formatValue'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { BsTrash } from 'react-icons/bs'
import { BetCard, CartContainer } from './styles'
import { BetState, saveBetsRequest } from '../../store/ducks/Bets'
import { NewBetProps } from '../../pages/NewBet'
import { useHistory } from 'react-router-dom'

const Cart: React.FC<NewBetProps> = ({ types }) => {
  const { totalBetValue, bets } = useSelector<AppStore, CartState>(
    state => state.Cart,
  )
  const { error, success } = useSelector<AppStore, BetState>(
    state => state.Bets,
  )
  const dispatch = useDispatch()
  const { push } = useHistory()

  const deleteBetHandler = (index: number) => {
    dispatch(removeBet(index))
  }
  const saveBetHandler = () => {
    if (types.length === 0) {
      toast.info(
        'Devido a um erro ao carregar os tipos de jogos não sera possível salvar seus jogos, pedimos desculpas',
        { autoClose: 8000 },
      )
      return
    }
    let minValue = 0
    bets.forEach(element => {
      const tempType = types.find(type => type.type === element.type)
      if (tempType!['min-cart-value'] > minValue) {
        minValue = tempType!['min-cart-value']
      }
    })
    if (minValue > totalBetValue) {
      toast.warn(`O valor minimo deve ser de ${formatMoney(minValue)}`)
      return
    }
    dispatch(saveBetsRequest(bets))
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
    if (success) {
      push('/recent-games')
    }
  }, [error, success])

  useEffect(() => {
    if (bets.length !== 0) {
      toast.info(
        'Quando você saiu esqueceu de salvar suas apostas, então as mantivemos para você',
      )
    }
  }, [])

  return (
    <CartContainer>
      <div className='content'>
        <h1>Cart</h1>
        <ul>
          {bets.map((bet, index) => (
            <BetCard key={index} color={bet.color}>
              <button onClick={deleteBetHandler.bind(null, index)}>
                <BsTrash size={20} />
              </button>
              <div className='container'>
                <strong>{bet.numbers.sort((a, b) => a - b).join(', ')}</strong>
                <p>
                  <strong>{bet.type}</strong>{' '}
                  <span>{formatMoney(bet.price)}</span>
                </p>
              </div>
            </BetCard>
          ))}
        </ul>
        {totalBetValue > 0 ? (
          <>
            <p className='total'>
              <strong>CART</strong> <span>TOTAL</span> :{' '}
              {formatMoney(totalBetValue)}
            </p>
          </>
        ) : (
          <p className='total'>Cart Empty </p>
        )}
      </div>

      {totalBetValue > 0 && (
        <div className='buttonContainer'>
          <button onClick={saveBetHandler}>
            Save <HiOutlineArrowRight />
          </button>
        </div>
      )}
    </CartContainer>
  )
}

export default Cart
