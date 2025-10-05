🌟 What is a Promise?

A Promise in JavaScript is like a “guarantee for a future value.”
It’s used when something takes time — like fetching data from a server — and you don’t want your program to just wait doing nothing.

A promise says:
“I don’t have the result yet, but I promise I’ll give it to you later — either success or failure.”

💬 Real-life example:

Imagine you order pizza 🍕 online.
You place the order (that’s when the Promise is created)
The pizza shop says: “We’ll deliver soon” (Pending)
Later, either:
The pizza arrives (Resolved / Fulfilled) ✅
Or they cancel your order (Rejected) ❌
That’s exactly how a Promise works in JS.

⚙️ Promise States

A Promise has 3 states:
Pending → waiting for the result
Fulfilled → operation successful
Rejected → operation fa

🕑 Why do we need Promises?

Because JS is asynchronous — it doesn’t wait for slow things (like API calls, file reading, etc.).
Promises help us handle such delayed operations in a cleaner way (compared to old “callback hell”).

promise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Order completed (no matter what).");
  });
  
  promise ->1. fullfilled => .then();
            2. failed => .catch()
   