import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Digite o que deseja pesquisar');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="search"
            name="searchTerm"
            className='search'
            value={searchTerm}
            placeholder="Comece a escrever..."
            onChange={handleInputChange}
            autoComplete="off"
            onBlur={handleSearch}
          />
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        </Form.Group>
      </Form>
      {searchTerm.length > 0 && (
      <div className="content">
        <h3>Resultados encontrados para {searchTerm}</h3>
      </div>
      )}
    </div>
  );
};

export default SearchForm;
