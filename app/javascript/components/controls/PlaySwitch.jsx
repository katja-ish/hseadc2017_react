import React from 'react'
import classnames from 'classnames'

export default class PlaySwitch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, value, handleToggleClick } = this.props

    const classes = classnames({
      PlaySwitch: true,
      [`${name}`]: true,
      switchOn: !value,
      switchOff: value
    })

    return <div className={classes} onClick={handleToggleClick}></div>
  }
}
