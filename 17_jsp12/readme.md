⚡ What is async and await?

async and await are used with Promises to make asynchronous code look clean and easy to read — like normal (synchronous) code.

🧠 Basic idea:

async makes a function return a Promise
await pauses the code inside that function until the Promise is resolved
👉 So basically,
await = “wait here until the Promise gives a result.”
async = tells JS “this function will use await inside.”

await doesn’t stop your whole program.
It just pauses that particular async function while other code continues running in the background.
That’s why it’s called non-blocking.


btn.addEventListener("click", async ()=>{   // async here allows you to use 'await' inside
    let fact = await getfacts();            // waits for getfacts() to finish
    let p = document.querySelector("#result");
    p.innerText = fact;
})
Here’s what happens step by step:
You click the button.
The function calls getfacts().
getfacts() uses axios.get() — which is asynchronous (it takes time to fetch data).
If you don’t use await, the function doesn’t wait for the result — it just gets a Promise immediately.
By marking your listener function as async, you can use await to pause until the cat fact arrives.
So, async lets you use await, and await gives you the actual result instead of a Promise.
If you remove async and await, your fact variable will just store:

Promise {<pending>}








