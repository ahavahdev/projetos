import { recordShow, setAlarm, turnOffFan, turnOnFan, turnOffLight, turnOnLight 
} from 'assistantFunctions';

function myAssistant(time, callbackFunction) 
{
  console.log('Scheduling:');
  callbackFunction(time);
  console.log('Complete');
};
myAssistant('8am', turnOnFan);
myAssistant('10pm', turnOnFan);