import React from 'react'

function ProgressSmallUtility() {
    return (
        <div class="card mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Progress Small Utility</h6>
            </div>
            <div class="card-body">
                <div class="mb-1 small">Normal Progress Bar</div>
                <div class="progress mb-4">
                    <div class="progress-bar" role="progressbar" style={{ width: '75%' }}
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="mb-1 small">Small Progress Bar</div>
                <div class="progress progress-sm mb-2">
                    <div class="progress-bar" role="progressbar" style={{ width: '75%' }}
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                Use the <code>.progress-sm</code> class along with <code>.progress</code>
            </div>
        </div>
    )
}

export default ProgressSmallUtility