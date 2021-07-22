(() => {
    const signUpForm = $("form.signup");
    const emailInput = $("input#email-input");
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
        passwordInput.val("");


    });
    function signUpUser(email, password) {
        $.post("/signup", {
            email: email,
            password: password
        }).then ((

        ) => {
            window.location.replace("/landing");
        }).catch(err => {
            console.log(err);
        });
        
    }
})