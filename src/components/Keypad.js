// Code Keypad Component Here

function Keypad() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Entering password...");
    }

    return (
        <div>
            <form onChange={handleSubmit}>
                <input type="password" name="keypad" placeholder="Enter password..." />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Keypad;