import React, { Component, Fragment } from 'react'
import Papa from 'papaparse'
import Header from './components/Header'
import Search from './components/Search'

const locations = require('./config/locations.json')

class App extends Component {
  state = {
    data: {},
  }

  componentDidMount() {
    const filelist = locations.locations
    ;(async () => {
      const dataPromises = filelist.map(file => {
        return new Promise((resolve, reject) => {
          Papa.parse(`/data/${file}`, {
            download: true,
            header: true,
            complete: result => resolve(result),
          })
        })
      })

      const data = await Promise.all(dataPromises)
      this.setState({ data }, () => {
        console.log(data)
      })
    })()
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Search />
      </Fragment>
    )
  }
}

export default App
