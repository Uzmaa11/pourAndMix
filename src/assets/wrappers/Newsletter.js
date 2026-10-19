import styled from 'styled-components'
import newsBg from '../images/images2.jpg'

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  margin: 0;
  padding: 2rem 0 2rem;
  box-sizing: border-box;
  background-position: center;
  background: url(${newsBg}) center center / cover no-repeat;

  .heading4 {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 500;
  }
  .form {
    padding: 3rem 2.5rem;
    max-width: 500px;
    background: rgb(243, 243, 243, 89%);
  }
`

export default Wrapper
