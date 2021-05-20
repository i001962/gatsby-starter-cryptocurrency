import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

const NavSubItemLink = ({ path, anchors, location, idRange }) => (
    <ul>
      {anchors.map(item => {
        const link = `${path}#${item.id}`

        return (
          <li
            key={link}
            className={classNames('submenu-item__link', {
              current: location.hash !== '' && `#${item.id}` === location.hash
            })}
          >
            <Link to={link}>{item.title}</Link>
            {item.anchors && (
              <NavSubItemLink
                path={path}
                anchors={item.anchors}
                title={item.title}
                location={location}
              />
            )}
          </li>
        )
      })}
    </ul>
  )

export default NavSubItemLink
