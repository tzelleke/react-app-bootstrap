import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <Button
          variant="outline-primary"
          size="lg"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <span className={styles.value}>{count}</span>
        <Button
          variant="outline-primary"
          size="lg"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Form.Control
          className="text-center flex-grow-0 mx-1 bg-white"
          style={{
            width: `${incrementAmount.length + 4}ch`,
          }}
          size="lg"
          type="text"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          className="mx-1"
          variant="outline-primary"
          size="lg"
          aria-label="Increment value by amount"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </Button>
        <Button
          className={`${styles.asyncButton} position-relative mx-1`}
          variant="outline-primary"
          size="lg"
          aria-label="Asynchronously increment value by amount"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>
        <Button
          className="mx-1"
          variant="outline-primary"
          size="lg"
          aria-label="Increment value by amount if value is odd"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </Button>
      </div>
    </div>
  )
}
