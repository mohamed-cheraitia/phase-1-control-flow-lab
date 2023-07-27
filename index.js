function scuberGreetingForFeet(ride){
  // Write your code here!
  let result;
  if (ride <= 400){
    result = 'This one is on me!';

  }
  else if ( ride > 400 && ride < 2000  ){
    result = 'That will be twenty bucks.'
  }
  else if (ride <= 2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else[
    result = 'No can do.'
  ]
  return result;
}

function ternaryCheckCity(destination){
  // Write your code here!
  let response = destination === "NYC"
  ? "Ok, sounds good." : "No go.";
  return response;
  
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}