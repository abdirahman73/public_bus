 async function getRoutes(){
    try {
        var response = await fetch('http://localhost:3000/api/buses', {method: 'GET'})
        const allRoutes = await response.json();
      const data =  document.getElementById('data')
        
    } catch (error) {
        console.log(error)
    }
  
}

getRoutes()