const expect = require('expect')
const React= require('react')
const ReactDOM = require('react-dom')
const TestUtils = require('react-addons-test-utils')
const $ = require('jQuery')

const Countdown = require('Countdown')

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist()
  })

//   describe('handleSetCountdown', () => {
//     it('should set state to started and countdown', (done) =>  {
//       const countdown = TestUtils.renderIntoDocument(<Countdown/>)
//       countdown.handleSetCountdown(10)
//
//       expect(countdown.state.count).toBe(10)
//       expect(countdown.state.countdownStatus).toBe('started')
//
//       setTimeout(() => {
//         expect(countdown.state.count).toBe(9)
//         // mocha does not support asynchronous, that's why we are passing are calling done
//         done()
//
//       }, 1001)
//     })
//   })
//   describe('handleSetCountdown', () => {
//     it('should never be a less than 0 or negative number', (done) =>  {
//       const countdown = TestUtils.renderIntoDocument(<Countdown/>)
//       countdown.handleSetCountdown(1)
//
//       setTimeout(() => {
//         expect(countdown.state.count).toBe(0)
//         // mocha does not support asynchronous, that's why we are passing and calling done
//         done()
//
//       }, 3001)
//     })
//     it('should pause countdown on paused status', (done) => {
//       const countdown = TestUtils.renderIntoDocument(<Countdown/>)
//       countdown.handleSetCountdown(3)
//       countdown.handleStatusChange('paused')
//
//       setTimeout(() => {
//         expect(countdown.state.count).toBe(3)
//         expect(countdown.state.countdownStatus).toBe('paused')
//         done()
//       }, 1001)
//     })
//
//     it('should reset count on stopped ', (done) => {
//       const countdown = TestUtils.renderIntoDocument(<Countdown/>)
//       countdown.handleSetCountdown(3)
//       countdown.handleStatusChange('stopped')
//
//       setTimeout(() => {
//         expect(countdown.state.count).toBe(0)
//         expect(countdown.state.countdownStatus).toBe('stopped')
//         done()
//       }, 1001)
//     })
//   })
// })
