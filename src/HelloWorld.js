import React from 'react';

export function HelloWorld() {
  return (
    /*   <div>
        <head>
          <meta charset="utf-8">
          <title>Sparlex - Spa Website Template</title>
          <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
          <meta content="" name="keywords" />
          <meta content="" name="description" />
  
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=PT+Serif:wght@400;700&display=swap" rel="stylesheet"/>
  
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
  
          <link href="lib/animate/animate.min.css" rel="stylesheet"/>
          <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet"/>
          <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
  
  
          <link href="css/bootstrap.min.css" rel="stylesheet">
  
          <link href="css/style.css" rel="stylesheet">
      </head>
   */
    <body>

      <div id="spinner" class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" role="status"></div>
      </div>


      <div class="container-fluid sticky-top px-0">
        <div class="container-fluid topbar d-none d-lg-block">
          <div class="container px-0">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <div class="d-flex flex-wrap">
                  <a href="#" class="me-4 text-light"><i class="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                  <a href="#" class="me-4 text-light"><i class="fas fa-phone-alt text-primary me-2"></i>+01234567890</a>
                  <a href="#" class="text-light"><i class="fas fa-envelope text-primary me-2"></i>Example@gmail.com</a>
                </div>

              </div>
              <div class="col-lg-4">
                <div class="d-flex align-items-center justify-content-end">
                  <a href="#" class="me-3 btn-square border rounded-circle nav-fill"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="me-3 btn-square border rounded-circle nav-fill"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="me-3 btn-square border rounded-circle nav-fill"><i class="fab fa-instagram"></i></a>
                  <a href="#" class="btn-square border rounded-circle nav-fill"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid bg-light">
          <div class="container px-0">
            <nav class="navbar navbar-light navbar-expand-xl">
              <a href="index.html" class="navbar-brand">
                <h1 class="text-primary display-4">Sparlex</h1>
              </a>
              <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars text-primary"></span>
              </button>
              <div class="collapse navbar-collapse bg-light py-3" id="navbarCollapse">
                <div class="navbar-nav mx-auto border-top">
                  <a href="index.html" class="nav-item nav-link active">Home</a>
                  <a href="about.html" class="nav-item nav-link">About</a>
                  <a href="service.html" class="nav-item nav-link">Services</a>
                  <a href="price.html" class="nav-item nav-link">Price</a>
                  <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu m-0 bg-secondary rounded-0">
                      <a href="team.html" class="dropdown-item">Team</a>
                      <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                      <a href="gallery.html" class="dropdown-item">Gallery</a>
                      <a href="appointment.html" class="dropdown-item">Appointment</a>
                      <a href="404.html" class="dropdown-item">404 page</a>
                    </div>
                  </div>
                  <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                </div>
                <div class="d-flex align-items-center flex-nowrap pt-xl-0">
                  <button class="btn-search btn btn-primary btn-primary-outline-0 rounded-circle btn-lg-square" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search"></i></button>
                  <a href="appointment.html" class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-4 ms-4">Book Appointment</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>



      <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h4 class="modal-title mb-0" id="exampleModalLabel">Search by keyword</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex align-items-center">
              <div class="input-group w-75 mx-auto d-flex" />
              <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
              <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>


    ,


    <div class="container-fluid carousel-header px-0">
      <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img src="img/carousel-3.jpg" class="img-fluid" alt="Image" />
            <div class="carousel-caption">
              <div class="p-3" style="max-width: 900px;">
                <h4 class="text-primary text-uppercase mb-3">Spa & Beauty Center</h4>
                <h1 class="display-1 text-capitalize text-dark mb-3">Massage Treatment</h1>
                <p class="mx-md-5 fs-4 px-4 mb-5 text-dark">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum</p>
                <div class="d-flex align-items-center justify-content-center">
                  <a class="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" href="#">Get Start</a>
                  <a class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="img/carousel-2.jpg" class="img-fluid" alt="Image" />
            <div class="carousel-caption">
              <div class="p-3" style="max-width: 900px;">
                <h4 class="text-primary text-uppercase mb-3" style="letter-spacing: 3px;">Spa & Beauty Center</h4>
                <h1 class="display-1 text-capitalize text-dark mb-3">Facial Treatment</h1>
                <p class="mx-md-5 fs-4 px-5 mb-5 text-dark">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum</p>
                <div class="d-flex align-items-center justify-content-center">
                  <a class="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" href="#">Get Start</a>
                  <a class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="img/carousel-1.jpg" class="img-fluid" alt="Image" />
            <div class="carousel-caption">
              <div class="p-3" style="max-width: 900px;">
                <h4 class="text-primary text-uppercase mb-3" style="letter-spacing: 3px;">Spa & Beauty Center</h4>
                <h1 class="display-1 text-capitalize text-dark">Cellulite Treatment</h1>
                <p class="mx-md-5 fs-4 px-5 mb-5 text-dark">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum</p>
                <div class="d-flex align-items-center justify-content-center">
                  <a class="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" href="#">Get Start</a>
                  <a class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>



    ,



    <div class="container-fluid services py-5">
      <div class="container py-5">
        <div class="mx-auto text-center mb-5" style="max-width: 800px;">
          <p class="fs-4 text-uppercase text-center text-primary">Our Service</p>
          <h1 class="display-3">Spa & Beauty Services</h1>
        </div>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="services-item bg-light border-4 border-end border-primary rounded p-4">
              <div class="row align-items-center">
                <div class="col-8">
                  <div class="services-content text-end">
                    <h3>Skin Care</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</a>
                  </div>
                </div>
                <div class="col-4">
                  <div class="services-img d-flex align-items-center justify-content-center rounded">
                    <img src="img/services-1.jpg" class="img-fluid rounded" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="services-item bg-light border-4 border-start border-primary rounded p-4">
              <div class="row align-items-center">
                <div class="col-4">
                  <div class="services-img d-flex align-items-center justify-content-center rounded">
                    <img src="img/services-2.jpg" class="img-fluid rounded" alt="" />
                  </div>
                </div>
                <div class="col-8">
                  <div class="services-content text-start">
                    <h3>Face Masking</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="services-item bg-light border-4 border-end border-primary rounded p-4">
              <div class="row align-items-center">
                <div class="col-8">
                  <div class="services-content text-end">
                    <h3>Stream Bath</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</a>
                  </div>
                </div>
                <div class="col-4">
                  <div class="services-img d-flex align-items-center justify-content-center rounded">
                    <img src="img/services-3.jpg" class="img-fluid rounded" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="services-item bg-light border-4 border-start border-primary rounded p-4">
              <div class="row align-items-center">
                <div class="col-4">
                  <div class="services-img d-flex align-items-center justify-content-center rounded">
                    <img src="img/services-4.jpg" class="img-fluid rounded" alt="" />
                  </div>
                </div>
                <div class="col-8">
                  <div class="services-content text-start">
                    <h3>Facial Therapy</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="services-item bg-light border-4 border-end border-primary rounded p-4">
              <div class="row align-items-center">
                <div class="col-8">
                  <div class="services-content text-end">
                    <h3>Body Massage</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</a>
                  </div>
                </div>
                <div class="col-4">
                  <div class="services-img d-flex align-items-center justify-content-center rounded">
                    <img src="img/services-5.jpg" class="img-fluid rounded" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="services-item bg-light border-4 border-start border-primary rounded p-4">
              <div class="row align-items-center">
                <div class="col-4">
                  <div class="services-img d-flex align-items-center justify-content-center rounded">
                    <img src="img/services-6.jpg" class="img-fluid rounded" alt="" />
                  </div>
                </div>
                <div class="col-8">
                  <div class="services-content text-start">
                    <h3>Aroma Therapy</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="services-item bg-light border-4 border-end border-primary rounded p-4">
              <div class="row align-items-center">
                <div class="col-8">
                  <div class="services-content text-end">
                    <h3>Mineral Baths</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</a>
                  </div>
                </div>
                <div class="col-4">
                  <div class="services-img d-flex align-items-center justify-content-center rounded">
                    <img src="img/services-3.jpg" class="img-fluid rounded" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="services-item bg-light border-4 border-start border-primary rounded p-4">
              <div class="row align-items-center">
                <div class="col-4">
                  <div class="services-img d-flex align-items-center justify-content-center rounded">
                    <img src="img/services-1.jpg" class="img-fluid rounded" alt="" />
                  </div>
                </div>
                <div class="col-8">
                  <div class="services-content text-start">
                    <h3>Stone Therapy</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="services-btn text-center">
              <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5">Service More</a>
            </div>
          </div>
        </div>
      </div>
    </div>


    ,


    <div class="container-fluid about py-5">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5">
            <div class="video">
              <img src="img/about-1.jpg" class="img-fluid rounded" alt="" />
              <div class="position-absolute rounded border-5 border-top border-start border-white" style="bottom: 0; right: 0;;">
                <img src="img/about-2.jpg" class="img-fluid rounded" alt="" />
              </div>
              <button type="button" class="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                <span></span>
              </button>
            </div>
          </div>
          <div class="col-lg-7">
            <p class="fs-4 text-uppercase text-primary">About Us</p>
            <h1 class="display-4 mb-4">Your Best Spa, Beauty & Skin Care Center</h1>
            <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            </p>
            <div class="row g-4">
              <div class="col-md-6">
                <div class="d-flex align-items-center">
                  <i class="fab fa-gitkraken fa-3x text-primary"></i>
                  <div class="ms-4">
                    <h5 class="mb-2">Special Offers</h5>
                    <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center">
                  <i class="fas fa-gift fa-3x text-primary"></i>
                  <div class="ms-4">
                    <h5 class="mb-2">Special Offers</h5>
                    <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5">Explore More</a>
          </div>
        </div>
      </div>
    </div>

    ,

    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="ratio ratio-16x9">
              <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                allow="autoplay"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    ,

    <div class="container-fluid appointment py-5">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="appointment-form p-5">
              <p class="fs-4 text-uppercase text-primary">Get In Touch</p>
              <h1 class="display-4 mb-4 text-white">Get Appointment</h1>
              <form>
                <div class="row gy-3 gx-4">
                  <div class="col-lg-6">
                    <input type="text" class="form-control py-3 border-white bg-transparent text-white" placeholder="First Name" />
                  </div>
                  <div class="col-lg-6">
                    <input type="email" class="form-control py-3 border-white bg-transparent text-white" placeholder="Email" />
                  </div>
                  <div class="col-lg-6">
                    <select class="form-select py-3 border-white bg-transparent" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-lg-6">
                    <input type="date" class="form-control py-3 border-white bg-transparent" />
                  </div>
                  <div class="col-lg-12">
                    <textarea class="form-control border-white bg-transparent text-white" name="text" id="area-text" cols="30" rows="5" placeholder="Write Comments"></textarea>
                  </div>
                  <div class="col-lg-12">
                    <button type="button" class="btn btn-primary btn-primary-outline-0 w-100 py-3 px-5">SUBMIT NOW</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="appointment-time p-5">
              <h1 class="display-5 mb-4">Opening Hours</h1>
              <div class="d-flex justify-content-between fs-5 text-white">
                <p>Saturday:</p>
                <p>09:00 am – 10:00 pm</p>
              </div>
              <div class="d-flex justify-content-between fs-5 text-white">
                <p>Sunday:</p>
                <p>09:00 am – 10:00 pm</p>
              </div>
              <div class="d-flex justify-content-between fs-5 text-white">
                <p>Monday:</p>
                <p>09:00 am – 10:00 pm</p>
              </div>
              <div class="d-flex justify-content-between fs-5 text-white">
                <p>Tuesday:</p>
                <p>09:00 am – 10:00 pm</p>
              </div>
              <div class="d-flex justify-content-between fs-5 text-white">
                <p>Wednes:</p>
                <p>09:00 am – 08:00 pm</p>
              </div>
              <div class="d-flex justify-content-between fs-5 text-white mb-4">
                <p>Thursday:</p>
                <p>09:00 am – 05:00 pm</p>
              </div>
              <div class="d-flex justify-content-between fs-5 text-white mb-4">
                <p>Friday:</p>
                <p>CLOSED</p>
              </div>
              <p class="text-dark">Check out seasonal discounts for best offers.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid counter-section">
        <div class="container py-5">
          <div class="row g-5 justify-content-center">
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="counter-item p-5">
                <div class="counter-content bg-white p-4">
                  <i class="fas fa-globe fa-5x text-primary mb-3"></i>
                  <h5 class="text-primary">Worldwide Clients</h5>
                  <div class="svg-img">
                    <svg width="100" height="50">
                      <polygon points="55, 10 85, 55 25, 55 25," style="fill: #DCCAF2;" />
                    </svg>
                  </div>
                </div>
                <div class="counter-quantity">
                  <span class="text-white fs-2 fw-bold" data-toggle="counter-up">379</span>
                  <span class="h1 fw-bold text-white">+</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="counter-item p-5">
                <div class="counter-content bg-white p-4">
                  <i class="fas fa-spa fa-5x text-primary mb-3"></i>
                  <h5 class="text-primary">Wellness & Spa</h5>
                  <div class="svg-img">
                    <svg width="100" height="50">
                      <polygon points="55, 10 85, 55 25, 55 25," style="fill: #DCCAF2;" />
                    </svg>
                  </div>
                </div>
                <div class="counter-quantity">
                  <span class="text-white fs-2 fw-bold" data-toggle="counter-up">829</span>
                  <span class="h1 fw-bold text-white">+</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="counter-item p-5">
                <div class="counter-content bg-white p-4">
                  <i class="fas fa-users fa-5x text-primary mb-3"></i>
                  <h5 class="text-primary">Happy Customers</h5>
                  <div class="svg-img">
                    <svg width="100" height="50">
                      <polygon points="55, 10 85, 55 25, 55 25," style="fill: #DCCAF2;" />
                    </svg>
                  </div>
                </div>
                <div class="counter-quantity">
                  <span class="text-white fs-2 fw-bold" data-toggle="counter-up">713</span>
                  <span class="h1 fw-bold text-white">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


    ,


    <div class="container-fluid gallery py-5">
      <div class="container py-5">
        <div class="text-center mx-auto mb-5" style="max-width: 800px;">
          <p class="fs-4 text-uppercase text-primary">Our Gallery</p>
          <h1 class="display-4 mb-4">Let's See Our Gallery</h1>
        </div>
        <div class="tab-class text-center">
          <ul class="nav nav-pills d-inline-flex justify-content-center mb-5">
            <li class="nav-item">
              <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                <span class="text-dark" style="width: 150px;">All Gallery</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                <span class="text-dark" style="width: 150px;">Skin Care</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                <span class="text-dark" style="width: 150px;">Stream Bath</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                <span class="text-dark" style="width: 150px;">Stone Therapy</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                <span class="text-dark" style="width: 150px;">Face Massage</span>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="row g-4">
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-1.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Skin Care</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-1.jpg" data-lightbox="Gallery-1" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-2.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stream Bath</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-2.jpg" data-lightbox="Gallery-2" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-3.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stone Therapy</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-3.jpg" data-lightbox="Gallery-3" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-4.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Face Massage</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-4.jpg" data-lightbox="Gallery-4" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-5.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Skin Care</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-5.jpg" data-lightbox="Gallery-5" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-6.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stream Bath</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-6.jpg" data-lightbox="Gallery-6" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-7.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stone Therapy</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-7.jpg" data-lightbox="Gallery-7" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-8.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Face Massage</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-8.jpg" data-lightbox="Gallery-8" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-2" class="tab-pane fade show p-0">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="row g-4">
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-9.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Skin Care</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-9.jpg" data-lightbox="Gallery-9" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-10.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Skin Care</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-10.jpg" data-lightbox="Gallery-10" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-5.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Skin Care</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-5.jpg" data-lightbox="Gallery-11" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-1.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Skin Care</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-1.jpg" data-lightbox="Gallery-12" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-3" class="tab-pane fade show p-0">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="row g-4">
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-11.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stream Bath</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-11.jpg" data-lightbox="Gallery-13" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-12.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stream Bath</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-12.jpg" data-lightbox="Gallery-14" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-2.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stream Bath</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-2.jpg" data-lightbox="Gallery-15" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-6.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stream Bath</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-6.jpg" data-lightbox="Gallery-16" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-4" class="tab-pane fade show p-0">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="row g-4">
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-13.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stone Therapy</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-13.jpg" data-lightbox="Gallery-17" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-2.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stone Therapy</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-2.jpg" data-lightbox="Gallery-18" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-3.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stone Therapy</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-3.jpg" data-lightbox="Gallery-19" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-7.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Stone Therapy</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-7.jpg" data-lightbox="Gallery-20" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-5" class="tab-pane fade show p-0">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="row g-4">
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-4.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Face Massage</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-4.jpg" data-lightbox="Gallery-21" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-6.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Face Massage</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-6.jpg" data-lightbox="Gallery-22" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-8.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Face Massage</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-8.jpg" data-lightbox="Gallery-23" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-14.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Face Massage</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-14.jpg" data-lightbox="Gallery-24" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-4.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Face Massage</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-4.jpg" data-lightbox="Gallery-25" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="img/gallery-8.jpg" alt="" />
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Face Massage</h4>
                        </div>
                        <div class="search-icon">
                          <a href="img/gallery-8.jpg" data-lightbox="Gallery-26" class="my-auto"><i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    ,

    <div class="container-fluid pricing py-5">
      <div class="container py-5">
        <div class="owl-carousel pricing-carousel">
          <div class="pricing-item">
            <div class="rounded pricing-content">
              <div class="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                <h1 class="display-4 mb-0">
                  <small class="align-top text-muted" style="font-size: 22px; line-height: 45px;">$</small>49<small class="text-muted" style="font-size: 16px; line-height: 40px;">/Mo</small>
                </h1>
                <h5 class="text-primary text-uppercase m-0">Basic Plan</h5>
              </div>
              <div class="p-4">
                <p><i class="fa fa-check text-primary me-2"></i>Full Body Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Deep Tissue Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Hot Stone Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Tissue Body Polish</p>
                <p><i class="fa fa-check text-primary me-2"></i>Foot & Nail Care</p>
                <a href="" class="btn btn-primary btn-primary-outline-0 rounded-pill my-2 px-4">Order Now</a>
              </div>
            </div>
          </div>
          <div class="pricing-item">
            <div class="pricing-content rounded">
              <div class="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                <h1 class="display-4 mb-0">
                  <small class="align-top text-muted" style="font-size: 22px; line-height: 45px;">$</small>99<small class="text-muted" style="font-size: 16px; line-height: 40px;">/Mo</small>
                </h1>
                <h5 class="text-primary text-uppercase m-0">Family Plan</h5>
              </div>
              <div class="p-4">
                <p><i class="fa fa-check text-primary me-2"></i>Full Body Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Deep Tissue Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Hot Stone Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Tissue Body Polish</p>
                <p><i class="fa fa-check text-primary me-2"></i>Foot & Nail Care</p>
                <a href="" class="btn btn-primary btn-primary-outline-0 rounded-pill my-2 px-4">Order Now</a>
              </div>
            </div>
          </div>
          <div class="pricing-item">
            <div class="pricing-content rounded">
              <div class="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                <h1 class="display-4 mb-0">
                  <small class="align-top text-muted" style="font-size: 22px; line-height: 45px;">$</small>149<small class="text-muted" style="font-size: 16px; line-height: 40px;">/Mo</small>
                </h1>
                <h5 class="text-primary text-uppercase m-0">VIP Plan</h5>
              </div>
              <div class="p-4">
                <p><i class="fa fa-check text-primary me-2"></i>Full Body Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Deep Tissue Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Hot Stone Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Tissue Body Polish</p>
                <p><i class="fa fa-check text-primary me-2"></i>Foot & Nail Care</p>
                <a href="" class="btn btn-primary btn-primary-outline-0 rounded-pill my-2 px-4">Order Now</a>
              </div>
            </div>
          </div>
          <div class="pricing-item">
            <div class="pricing-content rounded">
              <div class="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                <h1 class="display-4 mb-0">
                  <small class="align-top text-muted" style="font-size: 22px; line-height: 45px;">$</small>199<small class="text-muted" style="font-size: 16px; line-height: 40px;">/Mo</small>
                </h1>
                <h5 class="text-primary text-uppercase m-0">Most Plan</h5>
              </div>
              <div class="p-4">
                <p><i class="fa fa-check text-primary me-2"></i>Full Body Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Deep Tissue Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Hot Stone Massage</p>
                <p><i class="fa fa-check text-primary me-2"></i>Tissue Body Polish</p>
                <p><i class="fa fa-check text-primary me-2"></i>Foot & Nail Care</p>
                <a href="" class="btn btn-primary btn-primary-outline-0 rounded-pill my-2 px-4">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    ,

    <div class="container-fluid team py-5">
      <div class="container py-5">
        <div class="text-center mx-auto mb-5" style="max-width: 800px;">
          <p class="fs-4 text-uppercase text-primary">Spa Specialist</p>
          <h1 class="display-4 mb-4">Spa & Beauty Specialist</h1>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="team-item">
              <div class="team-img rounded-top">
                <img src="img/team-1.png" class="img-fluid w-100 rounded-top bg-light" alt="" />
              </div>
              <div class="team-text rounded-bottom text-center p-4">
                <h3 class="text-white">Oliva Mia</h3>
                <p class="mb-0 text-white">Spa & Beauty Expert</p>
              </div>
              <div class="team-social">
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle" href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="team-item">
              <div class="team-img rounded-top">
                <img src="img/team-2.png" class="img-fluid w-100 rounded-top bg-light" alt="" />
              </div>
              <div class="team-text rounded-bottom text-center p-4">
                <h3 class="text-white">Charlotte Ross</h3>
                <p class="mb-0 text-white">Spa & Beauty Expert</p>
              </div>
              <div class="team-social">
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle" href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="team-item">
              <div class="team-img rounded-top">
                <img src="img/team-3.png" class="img-fluid w-100 rounded-top bg-light" alt="" />
              </div>
              <div class="team-text rounded-bottom text-center p-4">
                <h3 class="text-white">Amelia Luna</h3>
                <p class="mb-0 text-white">Spa & Beauty Expert</p>
              </div>
              <div class="team-social">
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle" href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="team-item">
              <div class="team-img rounded-top">
                <img src="img/team-4.png" class="img-fluid w-100 rounded-top bg-light" alt="" />
              </div>
              <div class="team-text rounded-bottom text-center p-4">
                <h3 class="text-white">Isabella Evelyn</h3>
                <p class="mb-0 text-white">Spa & Beauty Expert</p>
              </div>
              <div class="team-social">
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle" href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    ,

    <div class="container-fluid testimonial py-5">
      <div class="container py-5">
        <div class="text-center mx-auto mb-5" style="max-width: 800px;">
          <p class="fs-4 text-uppercase text-primary">Testimonial</p>
          <h1 class="display-4 mb-4 text-white">What Our Clients Say!</h1>
        </div>
        <div class="owl-carousel testimonial-carousel">
          <div class="testimonial-item rounded p-4">
            <div class="row">
              <div class="col-4">
                <div class="d-flex flex-column mx-auto">
                  <div class="rounded-circle mb-4" style="border: dashed; border-color: var(--bs-white);">
                    <img src="img/testimonial-1.jpg" class="img-fluid rounded-circle" alt="" />
                  </div>
                  <div class="text-center">
                    <h4 class="mb-2 text-primary">Person Name</h4>
                    <p class="m-0 text-white">Profession</p>
                  </div>
                </div>
              </div>
              <div class="col-8">
                <div class="position-absolute" style="top: 20px; right: 25px;">
                  <i class="fa fa-quote-right fa-2x text-secondary"></i>
                </div>
                <div class="testimonial-content">
                  <div class="d-flex mb-4">
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <p class="fs-5 mb-0 text-white">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-item rounded p-4">
            <div class="row">
              <div class="col-4">
                <div class="d-flex flex-column mx-auto">
                  <div class="rounded-circle mb-4" style="border: dashed; border-color: var(--bs-white);">
                    <img src="img/testimonial-2.jpg" class="img-fluid rounded-circle" alt="" />
                  </div>
                  <div class="text-center">
                    <h4 class="mb-2 text-primary">Person Name</h4>
                    <p class="m-0 text-white">Profession</p>
                  </div>
                </div>
              </div>
              <div class="col-8">
                <div class="position-absolute" style="top: 20px; right: 25px;">
                  <i class="fa fa-quote-right fa-2x text-secondary"></i>
                </div>
                <div class="testimonial-content">
                  <div class="d-flex mb-4">
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <p class="fs-5 mb-0 text-white">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-item rounded p-4">
            <div class="row">
              <div class="col-4">
                <div class="d-flex flex-column mx-auto">
                  <div class="rounded-circle mb-4" style="border: dashed; border-color: var(--bs-white);">
                    <img src="img/testimonial-3.jpg" class="img-fluid rounded-circle" alt="" />
                  </div>
                  <div class="text-center">
                    <h4 class="mb-2 text-primary">Person Name</h4>
                    <p class="m-0 text-white">Profession</p>
                  </div>
                </div>
              </div>
              <div class="col-8">
                <div class="position-absolute" style="top: 20px; right: 25px;">
                  <i class="fa fa-quote-right fa-2x text-secondary"></i>
                </div>
                <div class="testimonial-content">
                  <div class="d-flex mb-4">
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <p class="fs-5 mb-0 text-white">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    ,

    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="row g-4 align-items-center">
          <div class="col-12">
            <div class="row g-4">
              <div class="col-lg-4">
                <div class="d-inline-flex bg-light w-100 border border-primary p-4 rounded">
                  <i class="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Address</h4>
                    <p class="mb-0">123 North tower New York, USA</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="d-inline-flex bg-light w-100 border border-primary p-4 rounded">
                  <i class="fas fa-envelope fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Mail Us</h4>
                    <p class="mb-0">info@example.com</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="d-inline-flex bg-light w-100 border border-primary p-4 rounded">
                  <i class="fa fa-phone-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Telephone</h4>
                    <p class="mb-0">(+012) 3456 7890 123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="rounded">
              <iframe class="rounded-top w-100"
                style="height: 450px; margin-bottom: -6px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class=" text-center p-4 rounded-bottom bg-primary">
              <h4 class="text-white fw-bold">Follow Us</h4>
              <div class="d-flex align-items-center justify-content-center">
                <a href="#" class="btn btn-light btn-light-outline-0 btn-square rounded-circle me-3"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="btn btn-light btn-light-outline-0 btn-square rounded-circle me-3"><i class="fab fa-twitter"></i></a>
                <a href="#" class="btn btn-light btn-light-outline-0 btn-square rounded-circle me-3"><i class="fab fa-instagram"></i></a>
                <a href="#" class="btn btn-light btn-light-outline-0 btn-square rounded-circle"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    ,

    <div class="container-fluid footer py-5">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item">
              <h4 class="mb-4 text-white">Newsletter</h4>
              <p class="text-white">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in tempor dui, non consectetur enim.</p>
              <div class="position-relative mx-auto rounded-pill">
                <input class="form-control rounded-pill border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"></input>
                <button type="button" class="btn btn-primary btn-primary-outline-0 rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
              <h4 class="mb-4 text-white">Our Services</h4>
              <a href=""><i class="fas fa-angle-right me-2"></i> Facials</a>
              <a href=""><i class="fas fa-angle-right me-2"></i> Waxing</a>
              <a href=""><i class="fas fa-angle-right me-2"></i> Message</a>
              <a href=""><i class="fas fa-angle-right me-2"></i> Minarel baths</a>
              <a href=""><i class="fas fa-angle-right me-2"></i> Body treatments</a>
              <a href=""><i class="fas fa-angle-right me-2"></i> Aroma Therapy</a>
              <a href=""><i class="fas fa-angle-right me-2"></i> Stone Spa</a>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
              <h4 class="mb-4 text-white">Schedule</h4>
              <p class="text-muted mb-0">Monday: <span class="text-white"> 09:00 am – 10:00 pm</span></p>
              <p class="text-muted mb-0">Saturday: <span class="text-white"> 09:00 am – 08:00 pm</span></p>
              <p class="text-muted mb-0">Sunday: <span class="text-white"> 09:00 am – 05:00 pm</span></p>
              <h4 class="my-4 text-white">Address</h4>
              <p class="mb-0"><i class="fas fa-map-marker-alt text-secondary me-2"></i> 123 ranking street North tower New York, USA</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
              <h4 class="mb-4 text-white">Follow Us</h4>
              <a href=""><i class="fas fa-angle-right me-2"></i> Faceboock</a>
              <a href=""><i class="fas fa-angle-right me-2"></i> Instagram</a>
              <a href=""><i class="fas fa-angle-right me-2"></i> Twitter</a>
              <h4 class="my-4 text-white">Contact Us</h4>
              <p class="mb-0"><i class="fas fa-envelope text-secondary me-2"></i> info@example.com</p>
              <p class="mb-0"><i class="fas fa-phone text-secondary me-2"></i> (+012) 3456 7890 123</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    ,

    <div class="container-fluid copyright py-4">
      <div class="container">
        <div class="row g-4 align-items-center">
          <div class="col-md-4 text-center text-md-start mb-md-0">
            <span class="text-light"><a href="#"><i class="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
          </div>
          <div class="col-md-4">
            <div class="d-flex justify-content-center">
              <a href="" class="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i class="fab fa-facebook-f"></i></a>
              <a href="" class="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i class="fab fa-twitter"></i></a>
              <a href="" class="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i class="fab fa-instagram"></i></a>
              <a href="" class="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-0"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>



    ,



    <a href="#" class="btn btn-primary btn-primary-outline-0 btn-md-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>


    ,


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    ,
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    ,
    <script src="lib/wow/wow.min.js"></script>
    ,
    <script src="lib/easing/easing.min.js"></script>
    ,
    <script src="lib/waypoints/waypoints.min.js"></script>
    ,
    <script src="lib/counterup/counterup.min.js"></script>
    ,
    <script src="lib/lightbox/js/lightbox.min.js"></script>
    ,
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    ,

    <script src="js/main.js"></script>);
  body > ;;
}
