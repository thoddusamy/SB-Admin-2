import React, { useState } from 'react'

function GrowInAnimationUtilty() {

    const [isDrop, setIsDrop] = useState(false)

    return (
        <div class="col-lg-6">

            <div class="card position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <code>.animated--grow-in</code>
                    </div>
                    <div class="small mb-1">Navbar Dropdown Example:</div>
                    <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a onClick={() => setIsDrop(!isDrop)} class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                    role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded={isDrop}>
                                    Dropdown
                                </a>
                                <div class={isDrop ? 'dropdown-menu dropdown-menu-right animated--grow-in show' : 'dropdown-menu dropdown-menu-right animated--grow-in'}
                                    aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <p class="mb-0 small">Note: This utility animates the CSS transform property,
                        meaning it will override any existing transforms on an element being animated!
                        In this theme, the grow in animation is only being used on dropdowns within the
                        navbar.</p>
                </div>
            </div>

        </div>
    )
}

export default GrowInAnimationUtilty