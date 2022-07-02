import React, { useState } from 'react'

function DropdownNoArrow() {
    const [isDrop, setIsDrop] = useState(false)
    return (
        <div class="card mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Dropdown - No Arrow</h6>
            </div>
            <div class="card-body">
                <div class={isDrop ? 'dropdown no-arrow mb-4 show' : 'dropdown no-arrow mb-4'}>
                    <button onClick={() => setIsDrop(!isDrop)} class="btn btn-secondary dropdown-toggle" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded={isDrop}>
                        Dropdown (no arrow)
                    </button>
                    <div class={isDrop ? 'dropdown-menu show dropdownNoArrow' : 'dropdown-menu'}
                        x-placement={isDrop ? 'bottom-start' : ''} aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                Add the <code>.no-arrow</code> class alongside the <code>.dropdown</code>
            </div>
        </div>
    )
}

export default DropdownNoArrow