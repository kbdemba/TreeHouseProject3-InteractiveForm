          /// Variables ///

const email = document.getElementById("mail")
const name = document.getElementById('name');
const jobtitle = document.getElementById('title');

const nameErr = document.createElement('div');
const emailErr = document.createElement('div');
const activitiesErr = document.createElement('div');
const ccErr = document.createElement('div');

const masterError = document.getElementById('masterError')
const otherTitle = document.getElementById('other-title')
const design = document.getElementById('design');
const size = document.getElementById('size');
const color = document.getElementById('color');
const colordiv = document.getElementById('colors-js-puns');

const options = color.children
const opt1 = options[0]
const opt2 = options[1]
const opt3 = options[2]
const opt4 = options[3]
const opt5 = options[4]
const opt6 = options[5]

const activities = document.querySelectorAll(".activities")[0]
const activitiesToDo = document.querySelectorAll(".activities label input")
const totalDiv = document.createElement('div');
let total = 0;

const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const creditCard = document.getElementById('credit-card');
const payment = document.getElementById('payment');

const form = document.querySelectorAll("form")[0];
const userName = document.getElementById("name");
const ccnum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');


function addErrDivs(theErr, errDiv) {
  errDiv.classList.add('ErrorMessage')
  const parent = theErr.parentNode
  parent.insertBefore(errDiv, theErr);
}

        ///FUNCTIONS///

//FUNCTION TO DO INITIAL THINGS WHEN THE PAGE JUST LOADS
function InitialThings() {
  name.focus();

  otherTitle.style.display = 'none';
  colordiv.style.display = 'none'; // hide the color
  activities.appendChild(totalDiv); // put a div where you will display the total

  paypal.style.display = 'none';
  bitcoin.style.display = 'none';
  payment.value = "credit_card" //set the payment to credit card by default

  //create Error divs
  addErrDivs(name,nameErr)
  addErrDivs(email,emailErr)
  addErrDivs(activities.firstElementChild, activitiesErr)
  addErrDivs(creditCard, ccErr)
}

// function to see if the values are all numbers
function isAllNumbers(value) {
  const numbers = ['1','2','3','4','5','6','7','8','9','0'];
  for (var i = 0; i < value.length; i++) {
    if (numbers.indexOf(value[i]) < 0) {
      return false;
    }
  }
  return true
}

//function to see if no activity is checked
function noActivityChecked() {
  for (var i = 0; i < activitiesToDo.length; i++){
    if (activitiesToDo[i].checked) {
      return false;
    }
  }
  return true;
}

//CALL THIS FUNCTION TO DO THE DEFAULT THINGS YOU WANT
InitialThings()

      // EVENT LISTENERS //


jobtitle.addEventListener("change", (e)=>{
  //CHECK TO SEE IF VALUE IS OTHER AND NO INPUT HAS BEEN APPENDED YET
  if (jobtitle.value === 'other') {
    otherTitle.style.display = ''
    /*const input = document.createElement("input");
    input.type = 'text';
    input.id = 'other-title';
    input.placeholder = "Your Job Role"
    const parent = jobtitle.parentNode
    parent.appendChild(input)*/
  }else{
    otherTitle.style.display = 'none'
  }
})

design.addEventListener("change", (e)=>{
  //REMOVE THE COLOR DISPLAY FROM NONE
  colordiv.style.display = '';
  if (design.value ==='js puns') {
    color.removeChild(opt4)
    color.removeChild(opt5)
    color.removeChild(opt6)
    if (options.length < 3) {
      color.appendChild(opt1)
      color.appendChild(opt2)
      color.appendChild(opt3)

    }

  } else if (design.value ==='heart js') {
    color.removeChild(opt1)
    color.removeChild(opt2)
    color.removeChild(opt3)
    if (options.length < 3) {
      color.appendChild(opt4)
      color.appendChild(opt5)
      color.appendChild(opt6)
    }
  }

});
//

activities.addEventListener("change", (e)=>{
  if (e.target.type === 'checkbox') {
    const checked = e.target.checked
    if (checked) {
      if (e.target.name === 'all') {
        total += 200;
      }
      else if (e.target.name === 'js-frameworks') {
        activitiesToDo[3].disabled = true;
        activitiesToDo[3].parentNode.style.color = 'grey';
        total += 100;
      }
      else if (e.target.name === 'js-libs') {
        activitiesToDo[4].disabled = true;
        activitiesToDo[4].parentNode.style.color = 'grey';
        total += 100;
      }
      else if (e.target.name === 'express') {
        activitiesToDo[1].disabled = true;
        activitiesToDo[1].parentNode.style.color = 'grey';
        total += 100;
      }
      else if (e.target.name === 'node') {
        activitiesToDo[2].disabled = true;
        activitiesToDo[2].parentNode.style.color = 'grey';
        total += 100;
      }
      else if (e.target.name === 'build-tools') {
        total += 100;
      }
      else if (e.target.name === 'npm') {
        total += 100;
      }


    }else if (!checked) {
      if (e.target.name === 'all') {
        total -= 200;
      }
      else if (e.target.name === 'js-frameworks') {
      activitiesToDo[3].disabled = false;
      activitiesToDo[3].parentNode.style.color = '';
      total -=100;
      }
      else if (e.target.name === 'js-libs') {
        activitiesToDo[4].disabled = false;
        activitiesToDo[4].parentNode.style.color = '';
        total -=100;
      }
      else if (e.target.name === 'express') {
        activitiesToDo[1].disabled = false;
        activitiesToDo[1].parentNode.style.color = '';
        total -=100;
      }
      else if (e.target.name === 'node') {
        activitiesToDo[2].disabled = false;
        activitiesToDo[2].parentNode.style.color = '';
        total -=100;
      }
      else if (e.target.name === 'build-tools') {
        total -= 100;
      }
      else if (e.target.name === 'npm') {
        total -= 100;
      }

   }


  }//e.target
  totalDiv.innerHTML = "Total: $" + total ;
})

payment.addEventListener("change", (e)=>{
  if (payment.value === "credit_card") {
    creditCard.style.display = '';
    bitcoin.style.display = 'none';
    paypal.style.display = 'none';
  }
  else if (payment.value === "paypal") {
    paypal.style.display = '';
    creditCard.style.display = 'none';
    bitcoin.style.display = 'none';
  }
  else if (payment.value === "bitcoin") {
    bitcoin.style.display = '';
    creditCard.style.display = 'none';
    paypal.style.display = 'none';
  }

})

form.addEventListener("submit", (e)=>{
  let IsError = false; //to see if there is any error
  let eMessage = ''
  let ccMessage = '' // to show if one of the cc info is incorrect
  if (userName.value === '') {
    e.preventDefault()
    //userName.focus();
    nameErr.textContent = 'please provide a name'
    eMessage += "Name <br>"
    userName.style.borderColor = "red"
    //return false;
    isError = true;
    console.log('111')
  }else {
    userName.style.borderColor = ""
    nameErr.textContent = ""
  }
  console.log('222')
  const atpos = email.value.indexOf("@");
  const dotpos = email.value.lastIndexOf(".");
  // check to see if the email is correcetly formatted
  if (atpos<1 || dotpos < atpos + 1 || dotpos + 1 >= email.value.length){
    e.preventDefault()
    emailErr.textContent = "Please provide a full valid email address"
    eMessage += "Email<br>"
    //email.focus()
    email.style.borderColor = "red"
    //return false;
    isError = true;
  }else {
    email.style.borderColor = "";
    emailErr.textContent = "";
  }
  //check to see if no actvity is checked in the activities
  if (noActivityChecked()) {
    e.preventDefault()
    //activitiesToDo[0].focus();
    activities.style.border = "red solid 2px"
    eMessage += "Activity<br>"
    activitiesErr.textContent = "Please select atleast one activity"
    //return false
    isError = true;
  }else {
      activities.style.border = "";
      activitiesErr.textContent = "";
  }
  //first check if the payment is credit card then check for invalidy in
  //the info provided:
  if (payment.value === "credit_card"){
    let ccDetailedMessage = ''
    if (ccnum.value === "") {
      e.preventDefault()
      //ccnum.focus()
      window.location.hash = '#top';//////
      ccnum.style.borderColor = "red"
      ccMessage = "Credit card Info<br>"
      ccDetailedMessage += 'Provide a cc number <br>';
      isError = true;
    }
    //check if the cc # only has numbers
    console.log(isAllNumbers(ccnum.value))
    if (!isAllNumbers(ccnum.value)) {
      e.preventDefault()
      //ccnum.focus()
      console.log('kkkkkkk')
      ccnum.style.borderColor = "red"
      ccMessage = "Credit card Info<br>"
      ccDetailedMessage += 'xxxxxCC Number should only be numbers <br>';
      isError = true;
      //return false;
    }
    //check to see if the cc# is between 13-16 long
    if (ccnum.value.length < 13 || ccnum.value.length > 16) {
      e.preventDefault()
      //ccnum.focus()
      ccnum.style.borderColor = "red"
      ccMessage = "Credit card Info<br>"
      ccDetailedMessage += 'CC Number should be bw 13- 16 digits <br>';
      //return false;
      isError = true;
    }else { // remove the red border
      ccnum.style.borderColor = ""
    }
    //check if the zip only has numbers and not 5 digits long
    if (!isAllNumbers(zip.value) || zip.value.length != 5) {
      e.preventDefault()
      console.log("njnnjn")
      //zip.focus()
      zip.style.borderColor = "red"
      ccMessage = "Credit card Info<br>"
      ccDetailedMessage += 'zip should only be numbers and 5 digits long <br>';
      //return false;
      isError = true;
    }
    else { // remove the red border
      zip.style.borderColor = ""
    }
    //check if the ccv only has numbers and is not 3 digits long
    if (!isAllNumbers(cvv.value) || cvv.value.length != 3) {
      e.preventDefault()
      //cvv.focus()
      cvv.style.borderColor = "red"
      ccMessage = "Credit card Info<br>"
      ccDetailedMessage += "CVV should only be numbers and 5 digits long <br>"
      //return false;
      isError = true;
    }
    else { // remove the red border
      cvv.style.borderColor = ""
    }

    if (isError) {
      ccErr.innerHTML = ccDetailedMessage;
      eMessage += ccMessage;
      masterError.innerHTML = "Faild to submit due to error in the following fields: <br> " + eMessage;
    }


  } // if payment == creditCard
  //return true;

});

//Real time update for invalidity of email

email.addEventListener("keyup", (e)=>{
  let err = '';
  emailErr.innerHTML = ""
  const atpos = email.value.indexOf("@");
  const dotpos = email.value.lastIndexOf(".");
  console.log(email.value)
  if (email.value === '') {
    err += "Provide a full valid email<br>";
    console.log('7mmmmmmmmm')
  }if (atpos < 0) {
    err += "Include an '@' in your email address<br>";
    console.log('6mmmmmmmmm')
  }if (atpos === 0) {
    samba += "Enter a part followed by '@' <br>";
    console.log('5mmmmmmmmm')
  }if (dotpos < 0 ) {//IF THERE IS A DOT POS
    err += "there should be a '.' included in your email<br>";
    console.log('4mmmmmmmmm')
  }if (atpos > dotpos) {
    err += "Enter a part and '.' after '@' <br>";
    console.log('3mmmmmmmmm')
  }if ((dotpos - atpos) <= 1) {
    err += "Enter a part between '@' and '.'<br>";
    console.log('2mmmmmmmmm')
  }if (dotpos + 1 >= email.value.length) {
    err += "Enter a part following '.' <br>";
  }
  emailErr.innerHTML = err;
})
