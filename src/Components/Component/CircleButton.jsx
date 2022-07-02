import React from 'react'
import BrandButton from './BrandButton'

function CircleButton() {
    let buttonsData = [
        {
            color: 'primary',
            icon: 'facebook-f'
        },
        {
            color: 'success',
            icon: 'check'
        },
        {
            color: 'info',
            icon: 'info-circle'
        },
        {
            color: 'warning',
            icon: 'exclamation-triangle'
        },
        {
            color: 'danger',
            icon: 'trash'
        },
    ]
    return (
        <div class="col-lg-6">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                </div>
                <div class="card-body">
                    <p>Use Font Awesome Icons (included with this theme package) along with the circle
                        buttons as shown in the examples below!</p>
                    {/* <!-- Circle Buttons (Default) --> */}
                    <div class="mb-2">
                        <code>.btn-circle</code>
                    </div>
                    {
                        buttonsData.map((item) => {
                            return (
                                <a href="#" class={`btn btn-${item.color} btn-circle mr-1`}>
                                    <i class={`${item.icon == 'facebook-f' ? 'fab' : 'fas'} fa-${item.icon}`}></i>
                                </a>
                            )
                        })
                    }
                    {/* <!-- Circle Buttons (Small) --> */}
                    <div class="mt-4 mb-2">
                        <code>.btn-circle .btn-sm</code>
                    </div>
                    {
                        buttonsData.map((item) => {
                            return (
                                <a href="#" class={`btn btn-${item.color} btn-circle btn-sm mr-1`}>
                                    <i class={`${item.icon == 'facebook-f' ? 'fab' : 'fas'} fa-${item.icon}`}></i>
                                </a>
                            )
                        })
                    }

                    {/* <!-- Circle Buttons (Large) --> */}
                    <div class="mt-4 mb-2">
                        <code>.btn-circle .btn-lg</code>
                    </div>
                    {
                        buttonsData.map((item) => {
                            return (
                                <a href="#" class={`btn btn-${item.color} btn-circle btn-lg mr-1`}>
                                    <i class={`${item.icon == 'facebook-f' ? 'fab' : 'fas'} fa-${item.icon}`}></i>
                                </a>
                            )
                        })
                    }

                </div>
            </div>
            <BrandButton />
        </div>
    )
}

export default CircleButton