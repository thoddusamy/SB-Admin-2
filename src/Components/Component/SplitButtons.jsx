import React from 'react'

function SplitButtons() {
    let splitBtnData = [
        {
            color: 'primary',
            icon: 'flag'
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
        {
            color: 'secondary',
            icon: 'arrow-right'
        },
        {
            color: 'light',
            icon: 'arrow-right'
        },
    ]
    return (
        <div class="col-lg-6">

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                </div>
                <div class="card-body">
                    <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                        the markup in the examples below. The examples below also use the
                        <code>.text-white-50</code> helper class on the icons for additional styling,
                        but it is not required.</p>
                    {
                        splitBtnData.map((item) => {
                            return (
                                <>
                                    <a href="#" class={`btn btn-${item.color} btn-icon-split`}>
                                        <span class="icon text-white-50">
                                            <i class={`fas fa-${item.icon}`}></i>
                                        </span>
                                        <span class="text" style={{ textTransform: 'capitalize' }}>{`Split Button ${item.color}`}</span>
                                    </a>
                                    <div class="my-2"></div>
                                </>
                            )
                        })
                    }

                    <div class="mb-4"></div>
                    <p>Also works with small and large button classes!</p>
                    <a href="#" class="btn btn-primary btn-icon-split btn-sm">
                        <span class="icon text-white-50">
                            <i class="fas fa-flag"></i>
                        </span>
                        <span class="text">Split Button Small</span>
                    </a>
                    <div class="my-2"></div>
                    <a href="#" class="btn btn-primary btn-icon-split btn-lg">
                        <span class="icon text-white-50">
                            <i class="fas fa-flag"></i>
                        </span>
                        <span class="text">Split Button Large</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default SplitButtons