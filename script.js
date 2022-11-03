// let launchRocket = ["The rocket has launch successfully!"]
// function launchRocket () {
//   "The rocket has launch successfully!"
// }

// let launchRocket = "The rocket has launch successfully!"

const containerElement = document.getElementById("container")
// const responseElement = document.getElementById("response")
//  responseElement.innerText += launchRocket


//   console.log(containerElement)

containerElement.innerHTML = "<button onclick='launchRocket()'> LAUNCH ROCKET! </button>"

function launchRocket() {
  containerElement.innerHTML += "<br>The rocket has launched successfully!"
}


// responseElement.addEventListener("click", function launchRocket() {
//   launchRocket.push(responseElement.value)
//     console.log(launchRocket)
// })

