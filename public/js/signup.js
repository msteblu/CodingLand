(() => {
    const signUpForm = $("form.signup");
    const usernameInput = $("input#username-input");
    const passwordInput = $("input#password-input");
    
    signUpForm.on("submit", (event) => {
        event.preventDefault();
        const userData = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };
        if (!userData.username || userData.password) return;
        signUpUser(userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");


    });
    function signUpUser(username, password) {
        $.post("/signup", {
            username: username,
            password: password
        }).then ((

        ) => {
            window.location.replace("/landing");
        }).catch(err => {
            console.log(err);
        });
        
    }
})