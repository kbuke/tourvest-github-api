import "../index.css"

export function FormGroup({
    errorMessage = "",
    children
}) {
    return(
        <div
            className={`form-group ${errorMessage.length > 0 ? "form-error" : ""}`}
        >
            {children}
            {errorMessage.length > 0 && 
            <div
                className="msg"
            >
                {errorMessage}
            </div>}
        </div>
    )
}