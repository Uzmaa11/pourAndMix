import styled from 'styled-components'
import newsBg from '../images/images1.jpg'

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  margin: 0;
  padding: 2rem 0 2rem;
  box-sizing: border-box;
  background-position: center;
  background: url(${newsBg}) center center / cover no-repeat;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

export default Wrapper
