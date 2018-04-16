import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="field">
            <div class="control has-icons-left">
              <input
                class="input is-large"
                type="text"
                placeholder="Enter town/city, e.g. Tacloban City"
              />
              <span class="icon is-medium is-left">
                <i class="fas fa-search" />
              </span>
            </div>
          </div>
          <div className="field">
            <div class="control">
              <a class="button is-info is-large">Search</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
