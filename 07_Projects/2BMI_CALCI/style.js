const form = document.querySelector('form');
//bohot log height weight ko bahar hi declare kr dete h that leads to generate empty value 
//  const height = parseInt(document.querySelector('#height'). value)
//  const weight = parseInt(document.querySelector('#weight'). value)

//values string milti h isliye int me parse kara diya
form.addEventListener('submit', function(e) {
    e.preventDefault()
   const height = parseInt(document.querySelector('#height'). value)
   const weight = parseInt(document.querySelector('#weight'). value)
   const results = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Insert valid Number ${height}`; 
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Insert valid Number ${weight}`; 
    }
    else{
       const bmi = (weight / ((height*height) / 10000)).toFixed(2)
      if (bmi < 18.6) {
            results.innerHTML = `<span>Its ${bmi} → You are Underweight 😟</span>`;
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>Its ${bmi} → Heyy, you are Fit!! 😊</span>`;
        }
        else {
            results.innerHTML = `<span>Its ${bmi} → Oops!! Overweight 😬</span>`;
        }
    }

});