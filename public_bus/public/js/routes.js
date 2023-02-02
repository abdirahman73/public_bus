 async function getRoutes(){
    try {
      const response = await fetch('http://localhost:3000/api/buses', {
        method: 'GET'
      })

        const allRoutes = await response.json();
      const data =  document.getElementById('data')
      for(let route of allRoutes){
        const row = document.createElement('tr')
        row.innerHTML = `
        <td> ${route.id} </td>
        <td> ${route.bus_no} </td>
        <td> ${route.from_city} </td>
        <td> ${route.to_city} </td>
        <td> ${route.date} </td>
        <td> ${route.time} </td>
        <td> ${route.price} </td>
        <td> <a href='/booking?id=${route.id}'>Book now </a> </td>
        `

        data.append(row)
      }
    } catch (error) {
        console.log(error)
    }
  
}

getRoutes()
