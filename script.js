VANTA.WAVES({
  el: "#header",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x0,
});

const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
const images = document.querySelectorAll(".img-certificates");
const sidemenu = document.querySelector("#sidemenu");


function opentab(tabname) {  
  tablinks.forEach((tablink) => {
    tablink.classList.remove("active-link");
  });
  tabcontents.forEach((tabcontent) => {
    tabcontent.classList.remove("active-tab");
  });
  
  const currentTabLink = document.querySelector(`[data-tab="${tabname}"]`);
  currentTabLink.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

tablinks.forEach((tablink) => {
  tablink.addEventListener("click", function () {
    const tabname = this.getAttribute("data-tab");
    opentab(tabname);
  });
});


images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.classList.add("zoomed");
  });

  image.addEventListener("mouseout", () => {
    image.classList.remove("zoomed");
  });
});

document.querySelector("#toggle-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const extraProjects = document.querySelector("#extra-projects");
  const toggleBtn = document.querySelector("#toggle-btn");

  extraProjects.classList.remove("hidden");

  toggleBtn.style.display = "none";
});

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {      
      form.reset();
      Swal.fire("The message was successfully sent!");
      
    } else {
      Swal.fire("The message failed to send.");      
    }
  })
  .catch(error => {
    alert("Error: " + error.message);
  });
});
