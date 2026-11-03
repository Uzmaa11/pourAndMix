import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  margin: 0;
  padding: 2rem 0 2rem;
  box-sizing: border-box;
  background-color: black;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

export default Wrapper
