import React from 'react'
import CircleButton from './CircleButton'
import SplitButtons from './SplitButtons'

function Buttons() {

    return (
        <>
            <h1 className="h3 mb-4 text-gray-800">Buttons</h1>
            <div className="row">
                <CircleButton />
                <SplitButtons />
            </div>
        </>
    )
}

export default Buttons