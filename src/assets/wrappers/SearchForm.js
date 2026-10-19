import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 1.5rem 1.5rem;
    margin: auto;
  }
  .form-input {
    border-top-right-radius: 0;
    padding: 0.6rem 0.75rem;
    border-bottom-right-radius: 0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .icon {
    margin-left: 0px;
  }
`

export default Wrapper
