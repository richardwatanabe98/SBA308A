let v_response;
let v_data;

/// [0].card_images[0].image_url // 

const initialLoad = async () => {
    v_response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    v_data = await v_response.json()
    console.log(v_data);
}

initialLoad();


// Populate selection button
const populateSelectButton = () => {
    
    //get select button
    const selectbutton = document.querySelector('select')
    // create option element
    const optionEl = document.createElement("option")
    // for each element in data, populate option element and append to select button
    v_data.forEach((card_section) => {
        
    })

}

// load card image

// remove card image