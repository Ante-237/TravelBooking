
let root = document.getElementById('search-results');
let elementOne = document.createElement('div');
let elementTwo = document.createElement('div');
let elementImg = document.createElement('img');
const searchBtn = document.getElementById('search-id');
const clearBtn = document.getElementById('clear-id');

let clear = false;

let datas = {
    "countries": [
      {
        "id": 1,
        "name": "Australia",
        "cities": [
          {
            "name": "Sydney, Australia",
            "imageUrl": "sydney.jpg",
            "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
          },
          {
            "name": "Melbourne, Australia",
            "imageUrl": "melbourne.jpg",
            "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
          }
        ]
      },
      {
        "id": 2,
        "name": "Japan",
        "cities": [
          {
            "name": "Tokyo, Japan",
            "imageUrl": "tokyo.jpg",
            "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
          },
          {
            "name": "Kyoto, Japan",
            "imageUrl": "kyoto.jpg",
            "description": "Known for its historic temples, gardens, and traditional tea houses."
          }
        ]
      },
      {
        "id": 3,
        "name": "Brazil",
        "cities": [
          {
            "name": "Rio de Janeiro, Brazil",
            "imageUrl": "RiodeJaneiro.jpg",
            "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
          },
          {
            "name": "São Paulo, Brazil",
            "imageUrl": "SaoPaulo.jpg",
            "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
          }
        ]
      }
    ],
    "temples": [
      {
        "id": 1,
        "name": "Angkor Wat, Cambodia",
        "imageUrl": "AngkorWay.jpg",
        "description": "A UNESCO World Heritage site and the largest religious monument in the world."
      },
      {
        "id": 2,
        "name": "Taj Mahal, India",
        "imageUrl": "TajMahal.jpg",
        "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
      }
    ],
    "beaches": [
      {
        "id": 1,
        "name": "Bora Bora, French Polynesia",
        "imageUrl": "BoraBora.jpg",
        "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
      },
      {
        "id": 2,
        "name": "Copacabana Beach, Brazil",
        "imageUrl": "CopacabanaBeach.jpg",
        "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
      }
    ]
  }
  

// https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

// "C:\Users\akuma\2025\TravelBooking\travelRecommendation\travel_recommendation.json"

function GetData(){

    // fetch('travel_recommendation.json')   
    // .then(response => response.json())
    // .then(data => {
    //     elementDiv.innerHTML = data.countries;
    //     root.appendChild(elementDiv);
    // })
    // .catch(error => {
    //     console.log('Error fetching data:', error);
    // });

     let searchData = document.getElementById('Input').value;
     if(clear == true){
        searchData = "";
        if(root.contains(elementOne)){
            root?.removeChild(elementOne);
        }

        if(root.contains(elementTwo)){
            root?.removeChild(elementTwo);
        }
       
        root.querySelectorAll('.extra').forEach(e => e.remove());
        
      
        clear = false;
     }

      datas.countries.forEach(data => {
        
        if(data.name.toLowerCase() === searchData.toLowerCase()){
            elementOne.innerHTML = `<div style=
            "border: 1px solid white; padding: 10px; margin: 10px; background-color: #333"  class="extra"> 
            <img src="./Images/${data.cities[0].imageUrl}" width="300" height="200" style="border-radius: 5px">
            <h3 style="color: white">${data.cities[0].name}</h3>
            <p style="color: white">${data.cities[0].description}</p>
            <button style="padding: 10px; background-color: green; border-radius: 5px; margin:10px; color: white"> Visit </button>
            <div>`;

            root.appendChild(elementOne);

            elementTwo.innerHTML = `<div style=
            "border: 1px solid white; padding: 10px; margin: 10px; background-color: #333"  class="extra"> 
            <img src="./Images/${data.cities[1].imageUrl}" width="300" height="200" style="border-radius: 5px">
            <h3 style="color: white">${data.cities[1].name}</h3>
            <p style="color: white">${data.cities[1].description}</p>
            <button style="padding: 10px; background-color: green; border-radius: 5px; margin:10px; color: white"> Visit </button>
            <div>`;

            root.appendChild(elementTwo);
        }  
    });

    datas.temples.forEach(data => {

      
        
        if("temples" === searchData.toLowerCase()){
            if(root.contains(elementOne)){
                root?.removeChild(elementOne);
            }

            if(root.contains(elementTwo)){
                root?.removeChild(elementTwo);
            }
           

            let elementLocal = document.createElement('div');
            elementLocal.innerHTML = `<div style=
            "border: 1px solid white; padding: 10px; margin: 10px; background-color: #333"  class="extra"> 
            <img src="./Images/${data.imageUrl}" width="300" height="200" style="border-radius: 5px">
            <h3 style="color: white">${data.name}</h3>
            <p style="color: white">${data.description}</p>
            <button style="padding: 10px; background-color: green; border-radius: 5px; margin:10px; color: white"> Visit </button>
            <div>`;

            root.appendChild(elementLocal);
        }  

       
    });


    
    datas.beaches.forEach(data => {
        
        if("beaches" === searchData.toLowerCase()){
           
          

            let elementLocal = document.createElement('div');

            elementLocal.innerHTML = `<div style=
            "border: 1px solid white; padding: 10px; margin: 10px; background-color: #333" class="extra"> 
            <img src="./Images/${data.imageUrl}" width="300" height="200" style="border-radius: 5px">
            <h3 style="color: white">${data.name}</h3>
            <p style="color: white">${data.description}</p>
            <button style="padding: 10px; background-color: green; border-radius: 5px; margin:10px; color: white"> Visit </button>
            <div>`;

            root.appendChild(elementLocal);
        }  
    });
    

    
   const temp = document.getElementById('Input');
   temp.value = "";


}

searchBtn.addEventListener('click', GetData);
clearBtn.addEventListener('click', () => {
    clear = true;
    GetData();
     });

