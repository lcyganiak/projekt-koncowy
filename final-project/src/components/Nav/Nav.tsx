
import { Link, useHistory } from 'react-router-dom';
import { FC } from 'react';

// interface global

import { navElements } from '../../HelperInterface/Navigation'

interface PropsNav {
  children?: JSX.Element | JSX.Element[],
  navElements: navElements[]
}
export const Nav: FC<PropsNav> = (props) => {
  const history = useHistory()

  const handlePath = (path: string) => {
    console.log(path)
    console.log(history)
    history.push(path)
  }
  const elementLi = props.navElements.map((item, index) => {
    return (
      <li key={index}>
        <button onClick={() => handlePath(item.path)}>{item.name}</button>
      </li>
    )
  })
  return (
    <nav>
      <ul>
        {elementLi}
      </ul>
    </nav>
  )
};
