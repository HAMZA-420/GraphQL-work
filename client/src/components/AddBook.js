import React, { Component, useState } from 'react';
import { graphql } from 'react-apollo';
import {getAuthorsQuery, addBookMutation} from "../queries/queries";
import {flowRight as compose} from 'lodash';



function AddBook(props) {
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthorId] = useState("")


    function displayAuthors(){
        var data = props.getAuthorsQuery;
        if(data.loading){
            return( <option disabled>Loading authors</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        }
    }

    function submitForm(e) {
        e.preventDefault();
        props.addBookMutation();
    }

        return(
            <form id="add-book" onSubmit={submitForm}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e) => setGenre(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => setAuthorId(e.target.value)}>
                        <option>Select author</option>
                        { displayAuthors() }
                    </select>
                </div>
                <button type="submit">+</button>

            </form>
        );
    }

export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);