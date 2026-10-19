import Wrapper from '../assets/wrappers/SearchForm'
import { Form, useNavigation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method="GET" className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
          placeholder="Search..."
        />

        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : <FaSearch className="icon" />}
        </button>
      </Form>
    </Wrapper>
  )
}
export default SearchForm
