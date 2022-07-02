import React from 'react'
import DropdownNoArrow from './Other/DropdownNoArrow'
import OverflowHiddenUtilty from './Other/OverflowHiddenUtilty'
import ProgressSmallUtility from './Other/ProgressSmallUtility'
import RotationUtilities from './Other/RotationUtilities'

function Other() {
    return (
        <>
            <h1 class="h3 mb-1 text-gray-800">Other Utilities</h1>
            <p class="mb-4">Bootstrap's default utility classes can be found on the official <a
                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.</p>
            <div class="row">
                <div class="col-lg-6">
                    <OverflowHiddenUtilty />
                    <ProgressSmallUtility />
                    <DropdownNoArrow />
                </div>
                <div class="col-lg-6">
                    <RotationUtilities />
                </div>
            </div>
        </>
    )
}

export default Other