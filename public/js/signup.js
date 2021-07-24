(() => {
    const signUpForm = $("form.signup");
    const usernameInput = $("input#username-input");
    const passwordInput = $("input#password-input");
    
    signUpForm.on("submit", (event) => {
        event.preventDefault();
        const userData = {
            userName: usernameInput.val().trim(),
            passwordInput: passwordInput.val().trim()
        };
        // if (!userData.userName || userData.password) return;
        // newUserData(userData.userName, userData.password);
        // usernameInput.val("");
        //   //  userName: usernameInput.val().trim(),
        //   //  passwordInput: passwordInput.val().trim()
        
        if (!userData.username || userData.password) return;
        newUserData(userData.username, userData.password);
        usernameInput.val("");

        passwordInput.val("");


    });

 
    function newUserData(username, password) {
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
});
