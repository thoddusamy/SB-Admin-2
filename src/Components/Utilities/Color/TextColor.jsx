import React from 'react'

function TextColor({ colorData }) {

    return (
        <div class="col-lg-4">
            {/* <!-- Custom Text Color Utilities --> */}
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                </div>
                <div class="card-body">
                    {
                        colorData.map((item) => {
                            return <p class={`text-gray-${item.count} p-3 ${item.count < 500 ? 'bg-dark' : ''} m-0`}>{`.text-gray-${item.count}`}</p>
                        })
                    }

                </div>
            </div>

            {/* <!-- Custom Font Size Utilities --> */}
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
                </div>
                <div class="card-body">
                    <p class="text-xs">.text-xs</p>
                    <p class="text-lg mb-0">.text-lg</p>
                </div>
            </div>
        </div>
    )
}

export default TextColor