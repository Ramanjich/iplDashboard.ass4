import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true, bId: ''}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()
    const teamBannerUrl = data.team_banner_url

    const recentMatches = data.recent_matches

    const latestMatches = data.latest_match_details

    const latest = {
      umpires: latestMatches.umpires,
      result: latestMatches.result,
      manOfTheMatch: latestMatches.man_of_the_match,
      id: latestMatches.id,
      date: latestMatches.date,
      venue: latestMatches.venue,
      competingTeam: latestMatches.competing_team,
      competingTeamLogo: latestMatches.competing_team_logo,
      firstInnings: latestMatches.first_innings,
      secondInnings: latestMatches.second_innings,
      matchStatus: latestMatches.match_status,
    }

    const list = recentMatches.map(eachOne => ({
      umpires: eachOne.umpires,
      result: eachOne.result,
      manOfTheMatch: eachOne.man_of_the_match,
      id: eachOne.id,
      date: eachOne.date,
      venue: eachOne.venue,
      competingTeam: eachOne.competing_team,
      competingTeamLogo: eachOne.competing_team_logo,
      firstInnings: eachOne.first_innings,
      secondInnings: eachOne.second_innings,
      matchStatus: eachOne.match_status,
    }))
    const formatdata = {
      teamBanner: teamBannerUrl,
      latestMatchDetails: latest,
      recentMatchDetails: list,
    }

    this.setState({
      teamMatchesData: formatdata,
      isLoading: false,
      bId: id,
    })
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBanner, latestMatchDetails, recentMatchDetails} = teamMatchesData

    return (
      <>
        <div className="team-banner-con">
          <img
            src={teamBanner}
            alt="team banner"
            className="team-banner-image"
          />
        </div>
        <h1 className="latest-match-heading">Latest Matches</h1>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />

        <ul className="recent-match-items-container">
          {recentMatchDetails.map(eachCard => (
            <MatchCard eachCard={eachCard} key={eachCard.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading, bId} = this.state
    const lower = bId.toLowerCase()

    return (
      <div className={`team-matches-container ${lower}`}>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
