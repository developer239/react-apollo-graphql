import sinon from 'sinon'
import { handleDoubleCounterComplete } from '../index'


const consoleLogFake = sinon.fake()
sinon.replace(console, 'log', consoleLogFake);

describe('CounterPage Component', () => {
  it('handleDoubleCounterComplete works correctly', () => {
    handleDoubleCounterComplete({ doubleCounterValueAsync: { counterValue: 2 } })
    expect(consoleLogFake.calledWith('new value ', 2)).toEqual(true)
  })
})
