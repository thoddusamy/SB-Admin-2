import React, { useState } from 'react'

function FadeInAnimationUtilty() {
    const [isDrop, setIsDrop] = useState(false)
    const [isDrop2, setIsDrop2] = useState(false)
    return (
        <div class="col-lg-6">

            <div class="card position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <code>.animated--fade-in</code>
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
                                <div class={isDrop ? 'dropdown-menu dropdown-menu-right animated--fade-in show' : 'dropdown-menu dropdown-menu-right animated--fade-in'}
                                    aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div class="small mb-1">Dropdown Button Example:</div>
                    <div class="dropdown mb-4">
                        <button onClick={() => setIsDrop2(!isDrop2)} class="btn btn-primary dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded={isDrop2}>
                            Dropdown
                        </button>
                        <div class={isDrop2 ? 'dropdown-menu animated--fade-in show' : 'dropdown-menu animated--fade-in'}
                            aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <p class="mb-0 small">Note: This utility animates the CSS opacity property, meaning
                        it will override any existing opacity on an element being animated!</p>
                </div>
            </div>

        </div>
    )
}

export default FadeInAnimationUtilty