import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamList: formattedData, isLoading: false})
  }

  renderHome = () => {
    const {teamList} = this.state
    return (
      <>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="teamcard-items-container">
          {teamList.map(eachList => (
            <TeamCard eachList={eachList} key={eachList.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderHome()
        )}
      </div>
    )
  }
}

export default Home
