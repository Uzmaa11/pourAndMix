import styled from 'styled-components'
import aboutBg from '../images/images.jpg'

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  margin: 0;
  padding: 2rem 0 2rem;
  box-sizing: border-box;
  background-position: center;
  background: url(${aboutBg}) center center / cover no-repeat;

  .about_page {
    margin: 2rem 3rem 3rem 7rem;
    padding: 2rem;
    width: 40%;
    border-radius: var(--borderRadius);
    text-align: center;
    background: rgb(243, 243, 243, 89%);
  }
  .heading4 {
    color: black;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    /* font-family: 'Georgia', serif; */
  }
  p {
    line-height: 2;
    color: black;
    /* width: 500px;
    margin: 2rem auto auto 100px; */
  }
`

export default Wrapper
