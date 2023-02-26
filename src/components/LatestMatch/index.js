import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    date,
    firstInnings,
    secondInnings,
    venue,
    umpires,
    result,
    manOfTheMatch,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="container-1">
        <p className="latest-match-para">{competingTeam}</p>
        <p className="latest-match-para">{date}</p>
        <p className="latest-match-para">{venue}</p>
        <p className="latest-match-para">{result}</p>
      </div>

      <div className="container-2">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-team-image"
        />
      </div>

      <hr className="separator" />

      <div className="container-3">
        <p className="latest-match-para">First Innings</p>
        <p className="latest-match-para">{firstInnings}</p>
        <p className="latest-match-para">Second Innings</p>
        <p className="latest-match-para">{secondInnings}</p>
        <p className="latest-match-para">Man Of The Matches</p>

        <p className="latest-match-para">{manOfTheMatch}</p>
        <p className="latest-match-para">Umpire</p>
        <p className="latest-match-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
