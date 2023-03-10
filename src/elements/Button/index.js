import React from 'react'
import { link } from 'react-router-dom'
import proptypes from 'prop-types'

export default function Button(props) {
  const className = [props.className]
  if (props.isPrimary) className.push("btn-primary")
  if (props.isLarge) className.push("btn-lg")
  if (props.isSmall) className.push("btn-sm")
  if (props.isBlock) className.push("btn-block")
  if (props.isShadow) className.push("btn-shadow")

  const onClick = () => {
    if(props.onClick) props.onClick()
  };

  if(props.isDisabled || props.isLoading){
    if(props.isDisabled) className.push("disabled")
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );}

  if(props.type === "link"){
    if(props.isExtrnal) {
      return(
        <a 
          href={props.href} 
          className={className.join(" ")} 
          style={props.style} 
          target={props.target === "_blank" ?"_blank":undefined} 
          rel={props.target ==="_blank" ?"noopener noreferrer":undefined}
        >
          {props.children}
        </a>
      );
    } else {
        return (
          <link 
            to={props.href} 
            className={className.join(" ")} 
            style={props.style}
            onClick={onClick}
          >
            {props.children}
          </link>
        );
      }
    }

  return (
    <button className={className.join(" ")} 
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.proptypes = {
  type: proptypes.oneOf(["button", "link"]),
  onClick: proptypes.func,
  href: proptypes.string,
  target: proptypes.string,
  className: proptypes.string,
  isDisabled: proptypes.bool,
  isLoading: proptypes.bool,
  isSmall: proptypes.bool,
  isLarge: proptypes.bool,
  isBlock: proptypes.bool,
  hasShadow: proptypes.bool,
}