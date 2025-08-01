import { Tooltip } from '@patternfly/react-core'
import { InfoCircleIcon } from '@patternfly/react-icons/dist/esm/icons/info-circle-icon'
import React, { useRef } from 'react'
import './Properties.css'
import { Property } from './property'

export const PropertiesTooltippedName: React.FunctionComponent<{
  property: Property
}> = ({ property }) => {
  const tooltipRef = useRef<HTMLSpanElement>(null)

  return (
    <React.Fragment>
      {property.name}

      <span ref={tooltipRef} className='properties-name-tooltip-button'>
        <InfoCircleIcon />
      </span>
      <Tooltip
        id={`camel-properties-${property.id}-tooltip`}
        triggerRef={tooltipRef}
        content={<div>{property.description}</div>}
      />
    </React.Fragment>
  )
}
