const cars = [
  {
    brand: 'Toyota',
    model: 'Camry',
    type: 'car',
    year: 2022,
    img: 'imags/cars/camry.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Camry',
    type: 'car',
    year: 2022,
    img: 'imags/cars/camry2.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Camry',
    type: 'car',
    year: 2022,
    img: 'imags/cars/camry3.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Camry',
    type: 'car',
    year: 2022,
    img: 'imags/cars/camry4.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Camry',
    type: 'car',
    year: 2022,
    img: 'imags/cars/camry.jpg'
  },

  {
    brand: 'Honda',
    model: 'Civic',
    type: 'car',
    year: 2021,
    img: 'imags/cars/civic.jpg'
  },
  {
    brand: 'Honda',
    model: 'Civic',
    type: 'car',
    year: 2021,
    img: 'imags/cars/civic2.jpg'
  },
  {
    brand: 'Honda',
    model: 'Civic',
    type: 'car',
    year: 2021, img: 'imags/cars/civic3.jpg'
  },
  {
    brand: 'Honda',
    model: 'Civic',
    type: 'car',
    year: 2021,
    img: 'imags/cars/civic4.jpg'
  },
  {
    brand: 'Honda',
    model: 'Civic',
    type: 'car',
    year: 2021,
    img: 'imags/cars/civic.jpg'
  },


  {
    brand: 'Toyota',
    model: 'Corolla',
    type: 'car',
    year: 2020,
    img: 'imags/cars/corolla.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Corolla',
    type: 'car',
    year: 2020,
    img: 'imags/cars/corolla2.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Corolla',
    type: 'car',
    year: 2020,
    img: 'imags/cars/corolla3.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Corolla',
    type: 'car',
    year: 2020,
    img: 'imags/cars/corolla4.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Corolla',
    type: 'car',
    year: 2020,
    img: 'imags/cars/corolla.jpg'
  },

  {
    brand: 'Honda',
    model: 'Accord',
    type: 'car', year: 2022,
    img: '/imags/cars/accord.jpg'
  },
  {
    brand: 'Honda',
    model: 'Accord',
    type: 'car',
    year: 2022,
    img: '/imags/cars/accord2.jpg'
  },
  {
    brand: 'Honda',
    model: 'Accord',
    type: 'car',
    year: 2022,
    img: '/imags/cars/accord3.jpg'
  },
  {
    brand: 'Honda',
    model: 'Accord',
    type: 'car',
    year: 2022,
    img: '/imags/cars/accord4.jpg'
  },
  {
    brand: 'Honda',
    model: 'Accord',
    type: 'car',
    year: 2022,
    img: '/imags/cars/accord.jpg'
  },

  {
    brand: 'Honda',
    model: 'Accord',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/hsuv1.avif'
  },
  {
    brand: 'Honda',
    model: '2023 Honda Passport',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/hsuv2.jpg'
  },
  {
    brand: 'Honda',
    model: '2023 Honda Pilot',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/hsuv3.jpg'
  },
  {
    brand: 'Honda',
    model: '2023 Honda CR-V',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/hsuv4.jpg'
  },
  {
    brand: 'Honda',
    model: 'Honda HR-V',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/hsuv5.jpg'
  },

  {
    brand: 'Toyota',
    model: 'Toyota RAV4',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/tsuv1.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Toyota Corolla Cross',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/tsuv2.jpeg'
  },
  {
    brand: 'Toyota',
    model: 'bZ4X',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/tsuv3.avif'
  },
  {
    brand: 'Toyota',
    model: 'Toyota bZ4X',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/tsuv4.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Venza',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/tsuv5.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/tsuv6.jpg'
  },
  {
    brand: 'Toyota',
    model: 'Highlander',
    type: 'suv',
    year: 2023,
    img: '/imags/suv/tsuv7.jpg'
  },

];
function filterCars(brand, type) {
  if (brand) {
    const filteredCars = cars.filter(
      car => car.brand.toLowerCase() === brand.toLowerCase() &&
        car.type.toLowerCase() == type.toLowerCase()
    );
    displayCars(filteredCars);
  }else{
    displayCars(cars);
  }
}
function displayCars(cars) {
  const container = document.getElementById('carContainer');
  container.innerHTML = '';
  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-3';
    card.innerHTML = `
      <card class="card shadow" style="height:370px">
        <div class="card-body">
        <img src="${car.img}" class="card-img-top">
        <hr>
          <h5 class="card-title">${car.brand} ${car.model}</h5>
          <p class="card-text text-danger">Year: ${car.year}</p>
        </div>
      `;
    container.appendChild(card);
  });
}
displayCars(cars);