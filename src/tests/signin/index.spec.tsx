'use client'
import React from 'react'
import { render } from '@testing-library/react'
import SignIn from '@app/app/(signin)'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('SignIn Module', () => {
  it('Should render SignIn page correctly', () => {
    render(<SignIn />)
  })
})
