function InputUserName(){
    return(
        <div className="label-input-container">
            <label htmlFor="text">Write below your name to get information</label>
                <input   className="input" type="text" id="text" required
                    minLength="50" maxLength="200" size="100" />
        </div>
    )
}
export default InputUserName;