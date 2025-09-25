console.log("hey")
let input = document.body.querySelector("form input")
let btn = document.body.querySelector("form button")
let password = document.getElementById("password")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const mainfunc = async () => {
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "apiKey" : "123456rx-ecourier123456"
            },
            body: JSON.stringify({
                email: input.value,
                password: password.value,

            }),
        }
        let promise = await fetch(`https://turbodashdelivery.ae/api/v10/deliveryman/login`, options)
        let response = await promise.json()
        console.log(response)
        if(response.success = "true"){
              window.location.href = "/newpage.html";
        }
        else if(response.success = "false"){
            
              alert(response.message)
        }
    }
    mainfunc()
})

