// import { ReactPropTypes } from "react"

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps ={
    version: 'primary',
    type: 'button',
    isDisabled: false
}

// Button.ReactPropTypes = {
//     children: ReactPropTypes.node.isRequired,
//     version: ReactPropTypes.string,
//     type: ReactPropTypes.string,
//     isDisabled: ReactPropTypes.bool,
// }

export default Button