// .allison-regular {
//     font-family: "Allison", serif;
//     font-weight: 400;
//     font-style: normal;
//   }

//   // <uniquifier>: Use a unique and descriptive class name
// // <weight>: Use a value from 400 to 900

// .playfair-display-<uniquifier> {
//     font-family: "Playfair Display", serif;
//     font-optical-sizing: auto;
//     font-weight: <weight>;
//     font-style: normal;
//   }

function hideSidebar () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}

function showSidebar () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}