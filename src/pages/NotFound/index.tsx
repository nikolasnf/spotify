import React from 'react'
import { NotfoundContainer } from './styles'

const NotFoundPage: React.FC = () => {
  return (
    <NotfoundContainer>
      <div className='notFound'>
        <h1>Page Not Found</h1>
      </div>
    </NotfoundContainer>
  )
}

export default NotFoundPage
