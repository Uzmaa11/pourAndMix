import styled from 'styled-components'
import singleBg from '../images/images3.jpg'

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  margin: 0;
  padding: 2rem 0 2rem;
  box-sizing: border-box;
  background-position: center;
  background: url(${singleBg}) center center / cover no-repeat;

  background-color: black;

  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
      border-radius: var(--borderRadius);
      background: rgb(243, 243, 243, 89%);
      padding: 2rem;
      margin: 0 6rem;
    }
    .drink-info {
      padding-top: 0;
    }
  }
  .back-icon {
    font-size: 0.8rem;
    margin-right: 0.4rem;
  }
`

export default Wrapper
