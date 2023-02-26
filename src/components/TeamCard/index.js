import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachList} = props
  const {id, name, teamImageUrl} = eachList
  return (
    <li className="item">
      <Link to={`/team-matches/${id}`} className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-logo-image" />
        <p className="team-logo-para">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
