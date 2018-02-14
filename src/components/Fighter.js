import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Fighter.css';
import Title from './Title';
import LikeButton from './LikeButton';

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

class Fighter extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    pride: PropTypes.bool,
    strikeforce: PropTypes.bool,
    ufc: PropTypes.bool,
    wec: PropTypes.bool,
    bellator: PropTypes.bool,
    pancrase: PropTypes.bool
  }


  render() {
    const { photo, name, country, flag, bio, pride, strikeforce, ufc, wec, bellator, pancrase, liked } = this.props

    return (
      <article className="fighter">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${ photo || PLACEHOLDER })` }} />
            <Title content={name} className="level-2" />
            <h2>{ country } <img src={ flag } alt="flag" /></h2>
        </header>
          <div>
              <p className="bio">{ bio }</p>
              <ul>
                { pride && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/a_38/v1518021555/1393300992_014_ek7ifr.ico" alt="Pride"/></li> }
                { strikeforce && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,h_40,w_50/v1518021708/New-Strikeforce-Logo-Medium_vmmvid.ico" alt="Strikeforce" /></li> }
                { ufc && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021749/ufc-400x372_sj7crk.ico" alt="UFC" /></li> }
                { wec && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021499/wec_kzs24e.ico" alt="WEC" /></li> }
                { bellator && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021410/bellator_jkrfbd.ico" alt="Bellator" /></li> }
                { pancrase && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021376/Pancrase_Hybrid_Wrestling_logo_omxk0d.ico" alt="Pancrase" /></li> }
              </ul>
          </div>
          <footer>
            <LikeButton onChange={this.toggleLike} liked={liked} />
          </footer>
      </article>
    )
  }
}

export default Fighter
