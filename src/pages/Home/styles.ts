import styled from 'styled-components'
import { colors } from '../../constants/colors'
import { HomeContainer } from '../../styles/HomeContainer'

export const Home = styled(HomeContainer)`
  .notFound {
    text-align: center;
    h1 {
      font-size: 78px;
      color: ${colors.gray};
    }
  }
`
