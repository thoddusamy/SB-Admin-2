import React from 'react'

function BackgroundGradient() {
    const colorData = [
        {
            color: 'primary',
        },
        {
            color: 'secondary',
        },
        {
            color: 'success',
        },
        {
            color: 'info',
        },
        {
            color: 'warning',
        },
        {
            color: 'danger',
        },
        {
            color: 'light',
        },
        {
            color: 'dark',
        },
    ]
    return (
        <div class="col-lg-4">

            {/* <!-- Background Gradient Utilities --> */}
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities
                    </h6>
                </div>
                <div class="card-body">
                    {
                        colorData.map((item) => {
                            return <div class={`px-3 py-5 bg-gradient-${item.color} text-white`}>{`.bg-gradient-${item.color}`}</div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default BackgroundGradient