import React from 'react'
import CircleButton from './CircleButton'
import SplitButtons from './SplitButtons'

function Buttons() {

    return (
        <>
            <h1 class="h3 mb-4 text-gray-800">Buttons</h1>
            <div class="row">
                <CircleButton />
                <SplitButtons />
            </div>
        </>
    )
}

export default Buttons