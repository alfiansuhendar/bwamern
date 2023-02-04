import React from 'react'
import { link } from 'react-router-dom'
import proptypes from 'prop-types'

export default function Button(props) {
  return <div></div>;
}

Button.proptypes = {
  type: proptypes.oneOf(["button", "link"]),
  onClick: proptypes.func,
  target: proptypes.string,
  className: proptypes.string,
  isDisabled: proptypes.bool,
  isLoading: proptypes.bool,
  isSmall: proptypes.bool,
  isLarge: proptypes.bool,
  isBlock: proptypes.bool,
  hasShadow: proptypes.bool,
}