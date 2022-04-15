const button = document.getElementById("btn");

button.addEventListener('click', ()=>{
    let temp = document.getElementById('temp').value;
    let speed = document.getElementById('speed').value;
    const temp_unit = document.getElementById('temp_unit').value;
    const speed_unit = document.getElementById('speed_unit').value;

    //Transform different temperature units to Fahrenheit
    if(temp_unit === "C"){
        temp = (parseFloat(temp)*1.8)+32;
    }else if(temp_unit === "K"){
        temp = 1.8*(parseFloat(temp)-273)+32;
    }

    //Transform different speed units to mph
    if(speed_unit === "km/h"){
        speed = parseFloat(speed)/1.609344;
    }else if(speed_unit === "m/s"){
        speed = parseFloat(speed)*2.23693629;
    }
    const V = Math.pow(speed, 0.16);
    const Wind_chill = 35.74 + 0.6215*temp - 35.75*V + 0.4275*temp*V;
    document.getElementById("result").innerHTML = "It will feel like " + Math.ceil(Wind_chill) + "&#176;F";

    let Advice;
    if(Wind_chill > 15){
        Advice = "Dress warmly, with the outside temperature in mind.";
    }else if(Wind_chill > -15){
        Advice = "There is a risk of hypothermia if you stay outside for long periods of time without adequate protection. Dress in layers of warm clothing. A thin, wicking layer to remove perspiration from the skin is a good start, followed by a thicker layer of fleece, polyester, or wool that will insulate the body. The outer layer should be wind-resistant, and ideally waterproof depending on the weather. Wear a hat, mittens, and scarf."
    }else if(Wind_chill > -50){
        Advice = "There is a risk of frostbite on exposed skin and a risk of hypothermia if you stay outside for long periods of time without adequate protection. Similar to how you would dress in 15 to -15°F, a thin wicking base layer, fleece, wind, and water-resistant outer layer should be worn. Cover all exposed skin, particularly the face and hands. Layers can be added if necessary, such as a synthetic or down jacket for further insulation."
    }else if(Wind_chill > -75){
        Advice = "Exposed skin may freeze (frostbite) in minutes, which can cause lasting, potentially permanent damage. There is a serious risk of hypothermia if you stay outside for too long. Dress in layers of very warm clothing, as described in the previous temperature ranges, with more insulating layers, and a wind and water-resistant outer layer. Cover all exposed skin, particularly the face and hands. Limit outdoor activities to short periods of time or, ideally, cancel outdoor activities entirely."
    }else{
        Advice = "Outdoor conditions are hazardous. Exposed skin may freeze in less than two minutes. Stay indoors."
    }

    document.getElementById("advice").innerHTML = Advice;
})