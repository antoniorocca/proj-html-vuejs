let app1 = new Vue({
  el:'#app1',
  data:{
    socials: [
      { 
        social: "fab fa-facebook-f", 
        link: "https://www.facebook.com", 
      },
      { 
        social: "fab fa-twitter", 
        link: "https://www.twitter.com", 
      },
      { 
        social: "fab fa-instagram", 
        link: "https://www.instagram.com", 
      },
      {
        social: "fab fa-youtube", 
        link: "https://www.youtube.com",
      },
    ],
    logo:'./imgs/logo-nav.png',
    menuNav: [
      {
        text: "Home",
        icon: "fas fa-chevron-down",
      },
      {
        text: "Shop",
        icon: "fas fa-chevron-down",
      },
      {
        text: "Products",
        icon: "fas fa-chevron-down",
      },
      {
        text: "Categories",
        icon: "fas fa-chevron-down",
      },
      {
        text: "News",
      },
      {
        text: "Elements",
        icon: "fas fa-chevron-down",
      },
    ]
  }
});

let app = new Vue({
  el: "#app2",
  data: {
    col1: {
      logo: "./imgs/logo-footer.png",
      contacts: [
        "12345 North Main Street,",
        "New York, NY 555555",
        "Phone: 1.800.555.6789",
        "Email: info@company.com",
        "Web: Theme-Fusion.com",
      ],
      socials: [
        { 
          social: "fab fa-facebook-f", 
          link: "https://www.facebook.com", 
        },
        { 
          social: "fab fa-twitter", 
          link: "https://www.twitter.com", 
        },
        { 
          social: "fab fa-instagram", 
          link: "https://www.instagram.com", 
        },
        {
          social: "fab fa-youtube", 
          link: "https://www.youtube.com",
        },
      ],
    },
    col2: {
      title: "TOP RATED PRODUCTS",
      info: [
        {
          description: "Leather Gloves",
          price: "$45", 
          picture: "./imgs/leather_gloves.jpg", 
        },
        {
          description: "Black Leather Jacket",
          discount: "$235",
          price: "$200",
          picture: "./imgs/black-elegant-jacket.jpg",
        },
        {
          description: "Spring Printed Dress",
          price: "$47",
          picture: "./imgs/spring-dress.jpg",
        },
      ],
    },
    col3: {
      title: "RECENT POSTS",
      text: [
        "Aenean lobortis sapien enim viverra",
        "Duis ac massa semper maximus",
        "Nunc fermint nulla eu justo sem id",
        "Aliquam posuere magna eget nibh",
        "Cras ac nulla ac consecte rutrum",
        "Fusce mattis nunc ut aliquam",
      ],
    },
    col4: {
      title: "TAGS",
      tags:[
        ["Black", "boots", "Brown", "Casual"],
        ["D&G", "Fabric", "flowers", "Grey"],
        ["hat", "Hipster", "lines"],
        ["multi-purpose", "New York"],
        ["Outdoors", "red", "responsive"],
        ["summer", "sweater", "Travel"],
        ["Warm", "White", "winter"],
      ]
    },
  },
});