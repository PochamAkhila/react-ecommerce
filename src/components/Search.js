import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Search(props) {
  function onSearch(event) {
    props.onSearch(event.target.value);
  }
  return (
    <>
      <Container>
        <InputGroup className="mb-3 mt-3">
          <Form.Control
            placeholder="search" onKeyUp={(event) => onSearch(event)}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            <span className="material-icons-outlined text-primary">search</span>
          </InputGroup.Text>
        </InputGroup>
      </Container>
    </>
  );
}

export default Search;
