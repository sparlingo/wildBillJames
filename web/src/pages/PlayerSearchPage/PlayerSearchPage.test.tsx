import { render } from '@redwoodjs/testing/web'

import PlayerSearchPage from './PlayerSearchPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlayerSearchPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerSearchPage />)
    }).not.toThrow()
  })
})
