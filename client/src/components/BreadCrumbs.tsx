import React from 'react'

interface Props {
  currentTitle: string;
}

export const BreadCrumbs: React.FC<Props> = ({currentTitle}) => {
  return (
    <div className="bread-crumbs">
    <h4>
      <a href="/">
        <span>Nákupní seznamy</span>
      </a>
      <i className="ri-arrow-right-s-line"></i>
      <span>{currentTitle}</span>
    </h4>
  </div>
  )
}