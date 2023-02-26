import './index.css'

const MatchCard = props => {
  const {eachCard} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = eachCard
  const colorAdd = matchStatus === 'Won'

  const statusColor = colorAdd ? 'won-style' : 'lost-style'
  return (
    <li className="recent-items-container">
      <div className="recent-match-image-con">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="recent-match-image"
        />
      </div>
      <p className="recent-team">{competingTeam}</p>
      <p className="recent-result">{result}</p>
      <p className={`recent-status ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
