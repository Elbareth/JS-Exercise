fetch('https://randomuser.me/api/')
	.then(response => response.json()
	)    
    .then((it)=>{
  	    let myPerson = it.results[0];
        let myPersonString = JSON.stringify(myPerson);
        let paragraph = document.getElementById("myPerson");
        paragraph.innerText = myPersonString;
    })
    .catch((err) => {
        console.error(err)
    });