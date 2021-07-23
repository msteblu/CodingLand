(() => {
    const signUpForm = $("form.signup");
    const emailInput = $("input#email-input");
    const usernameInput = $("input#username-input");
    const passwordInput = $("input#password-input");
    
    signUpForm.on("submit", (event) => {
        event.preventDefault();
        const userData = {
            email: emailInput.val().trim(),
            passwordInput: passwordInput.val().trim()
        };
        if (!userData.email || userData.password) return;
        signUpUser(userData.email, userData.password);
        emailInput.val("");
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };
        if (!userData.username || userData.password) return;
        signUpUser(userData.username, userData.password);
        usernameInput.val("");

        passwordInput.val("");


    });

    function signUpUser(email, password) {
        $.post("/signup", {
            email: email,

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