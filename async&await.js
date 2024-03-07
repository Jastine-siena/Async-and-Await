// promise
function checkData(name) {
    let promise = new Promise((resolve,reject) => {
        let message =" ";

        if (name === "Jastine",true){
            message = `There was a data for ${name}`
            resolve(message);
        }else{
            message = `There was no data for ${name}`
            reject(message)
        }
    })

    promise.then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })
}

checkData("jaStine");

const numb = (number) => {
    let message1 = "";
    let promise2 = new Promise((resolve, reject) => {

        if(number === 1){
            message1 = `The number is equal to ${number}`;
            resolve(message1);
        } else {
            message1 = `The number is not equal to ${number}`;
            reject(message1);
        }
    });

    promise2
        .then((data2) => {
            console.log(data2);
        })
        .catch((error) => {
            console.log(error);
        });
};

numb(2)



//async and await
const checkdata = async (name) => {
    let promise = new Promise ((resolve, reject) => {
        let message = ""
        //To make it case insensitive use toUpperCase() or toLowerCase()
        if (name.toUpperCase() === "JASTINE") { 
            message = `There is data for ${name}`;
            resolve(message);
        } else {
            message = `There is no data for ${name}`;
            reject(message);
        }
    });

    try {
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

checkdata("JsTIne")
//this is for async and await with promise
const getusers = () =>{
    const promise = fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    }).catch(error => {
        console.log(error);
    })
}
getusers()

//cleaniest way
 const getusers = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/users');

    const fetchdata = await promise.json();
    console.log(fetchdata)
}
getusers();

//to put an setTimeout()

const delayedGetUsers = () => {
    setTimeout(async () => {
        const getusers = async () => {
            const promise = await fetch('https://jsonplaceholder.typicode.com/users');
            const fetchdata = await promise.json();
            console.log(fetchdata);
        };
        getusers();
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
};

delayedGetUsers();