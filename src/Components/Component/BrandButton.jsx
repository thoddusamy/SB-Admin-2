import React from 'react'

function BrandButton() {
    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Brand Buttons</h6>
            </div>
            <div class="card-body">
                <p>Google and Facebook buttons are available featuring each company's respective
                    brand color. They are used on the user login and registration pages.</p>
                <p>You can create more custom buttons by adding a new color variable in the
                    <code>_variables.scss</code> file and then using the Bootstrap button variant
                    mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                    file.</p>
                <a href="#" class="btn btn-google btn-block"><i class="fab fa-google fa-fw"></i>
                    .btn-google</a>
                <a href="#" class="btn btn-facebook btn-block"><i
                    class="fab fa-facebook-f fa-fw"></i> .btn-facebook</a>

            </div>
        </div>
    )
}

export default BrandButton