document.getElementsByClassName('btn-speed')[0].addEventListener('click', () => {
    let distanceForSpeed = document.getElementsByClassName('distance-for-speed')[0].value;
    let speedTime = document.getElementsByClassName('speed-time')[0].value;
    if (isNaN(distanceForSpeed)) {
      alert('Enter a valid number into the Distance input.');
    } else if (isNaN(speedTime)) {
      alert('Enter a valid number into the Time input.');
    } else {
      let speedMeasurementSelect = document.getElementById('speed-measurement');
      let speedMeasurementSystem = speedMeasurementSelect.selectedIndex;
      let speedResult = distanceForSpeed / speedTime;
      document.getElementsByClassName('speed-result')[0].innerHTML = 'Speed: ' + speedResult + " " + speedMeasurementSelect.options[speedMeasurementSystem].text;
    }
  });
  
  //Calculates Acceleration
  document.getElementsByClassName('btn-acceleration')[0].addEventListener('click', () => {
    let initialV = document.getElementsByClassName('initial-v')[0].value;
    let finalV = document.getElementsByClassName('final-v')[0].value;
    let accelerationTime = document.getElementsByClassName('acceleration-time')[0].value;
    if (isNaN(initialV)) {
      alert('Enter a valid number into the Initial Velocity input.');
    } else if (isNaN(finalV)) {
      alert('Enter a valid number into the Final Velocity input.');
    } else if (isNaN(accelerationTime)) {
      alert('Enter a valid number into the Time input.');
    } else {
      let accelerationMeasurementSelect = document.getElementById('acceleration-measurement');
      let accelerationMeasurementSystem = accelerationMeasurementSelect.selectedIndex;
      let totalV = finalV - initialV;
      let accelerationResult = totalV / accelerationTime;
      document.getElementsByClassName('acceleration-result')[0].innerHTML = 'Acceleration: ' + accelerationResult + " " + accelerationMeasurementSelect.options[accelerationMeasurementSystem].text;
    }
  });
  
  //Calculates Force
  document.getElementsByClassName('btn-force')[0].addEventListener('click', () => {
    let mass = document.getElementsByClassName('mass')[0].value;
    let accelerationForForce = document.getElementsByClassName('acceleration-for-force')[0].value;
    if (isNaN(mass)) {
      alert('Enter a valid number into the Mass input.');
    } else if (isNaN(accelerationForForce)) {
      alert('Enter a valid number into the Acceleration input.');
    } else {
      let forceResult = mass * accelerationForForce;
      document.getElementsByClassName('force-result')[0].innerHTML = 'Force: ' + forceResult + " N" ;
    }
  });
  
  //Calculates Pressure
  document.getElementsByClassName('btn-pressure')[0].addEventListener('click', () => {
    let area = document.getElementsByClassName('area')[0].value;
    let forceForPressure = document.getElementsByClassName('force-for-pressure')[0].value;
    if (isNaN(area)) {
      alert('Enter a valid number into the Area input.');
    } else if (isNaN(forceForPressure)) {
      alert('Enter a valid number into the Force input.');
    } else {
      let pressureResult = forceForPressure / area;
      document.getElementsByClassName('pressure-result')[0].innerHTML = 'Pressure: ' + pressureResult + " Pa" ;
    }
  });
  
  //Calculates Work
  document.getElementsByClassName('btn-work')[0].addEventListener('click', () => {
    let forceForWork = document.getElementsByClassName('force-for-work')[0].value;
    let distanceForWork = document.getElementsByClassName('distance-for-work')[0].value;
    if (isNaN(forceForWork)) {
      alert('Enter a valid number into the Force input.');
    } else if (isNaN(distanceForWork)) {
      alert('Enter a valid number into the Distance input.');
    } else {
      let workResult = distanceForWork * forceForWork;
      document.getElementsByClassName('work-result')[0].innerHTML = 'Work: ' + workResult + " J" ;
    }
  });
  
  //Calculates Kinetic Energy
  document.getElementsByClassName('btn-kinetic-energy')[0].addEventListener('click', () => {
    let massForKineticEnergy = document.getElementsByClassName('mass-for-kinetic-energy')[0].value;
    let velocityForKineticEnergy = document.getElementsByClassName('velocity-for-kinetic-energy')[0].value;
    if (isNaN(massForKineticEnergy)) {
      alert('Enter a valid number into the Mass input.');
    } else if (isNaN(velocityForKineticEnergy)) {
      alert('Enter a valid number into the Velocity input.');
    } else {
      let kineticEnergyResult = .5 * massForKineticEnergy * (velocityForKineticEnergy ** 2) ;
      document.getElementsByClassName('kinetic-energy-result')[0].innerHTML = 'Kinetic Energy: ' + kineticEnergyResult + " J" ;
    }
  });
  
  //Calculates Power
  document.getElementsByClassName('btn-power')[0].addEventListener('click', () => {
    let energyForPower = document.getElementsByClassName('energy-for-power')[0].value;
    let timeForPower = document.getElementsByClassName('time-for-power')[0].value;
    if (isNaN(energyForPower)) {
      alert('Enter a valid number into the Energy input.');
    } else if (isNaN(timeForPower)) {
      alert('Enter a valid number into the Time input.');
    } else {
      let powerMeasurementSelect = document.getElementById('power-measurement');
      let powerMeasurementSystem = powerMeasurementSelect.selectedIndex;
      if (powerMeasurementSelect.options[powerMeasurementSystem].text == "Horsepower") {
        var powerResult = energyForPower / timeForPower / 745;
      } else {
        var powerResult = energyForPower / timeForPower;
      }
      document.getElementsByClassName('power-result')[0].innerHTML = 'Power: ' + powerResult + " " + powerMeasurementSelect.options[powerMeasurementSystem].text;
  
    }
  });