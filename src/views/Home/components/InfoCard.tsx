import React from 'react'
import './infocard.css'

interface InfoCardProps {
  number: string
  title: string
  image: any
}

export const InfoCard: React.FC<InfoCardProps> = ({ number, title, image }) => {
  return (
    <div className="info-card">
      <div className="card-title">
        <span className="card-number">{number}</span>
        <h3>{title}</h3>
      </div>
      <div className="card-image">{image}</div>
    </div>
  )
}
