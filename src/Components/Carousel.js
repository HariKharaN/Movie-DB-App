import React, { Component } from "react";
import "../Stylesheets/Carousel.css";
export default class Carousel extends Component {
  render() {
    return (
      <div className="container main-carou">
        <div className="row">
          <div className="col-7 mt-3 mx-5">
            <div
              id="carouselExampleCaptions"
              className="carousel  slide"
              data-bs-ride="carousel"
              data-interval="2000"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://wallpaperaccess.com/full/6993439.png"
                    className="d-block w-100"
                    alt="..."
                  />

                  {/* <div className="carousel-caption d-none d-md-block">
              <h5>Spiderman No way Home</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.koimoi.com/wp-content/new-galleries/2021/10/red-notice-actors-dwayne-johnson-gal-gadot-ryan-reynolds-expected-salary-for-their-work-will-blow-your-mind-001.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div> */}
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.thedirect.com/media/article_full/hawkeye-jeremy-renner-hailee-steinfeld-marvel-studios-disney-plus.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.filmibeat.com/img/2020/06/xmaster-audio-launch-1581596165-jpg-pagespeed-ic-vxyaf30jem-1586584267-1591334282.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.thedirect.com/media/article_full/wandavision-season-2.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className=" main-category col-3 mt-5">
            <div className="category">
              <h4 className="category-title">Genres</h4>

              <div className="cat-1">
                <h5>Action</h5>
                <h5>Thriller</h5>
              </div>
              <div className="cat-2 mt-1">
                <h5>Drama</h5>
                <h5>Horror</h5>
                <h5>Mystery</h5>
              </div>
              <div className="cat-2 mt-1">
                <h5>Romance</h5>
                <h5>Adventure</h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">
//     MovieDB
//   </a>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-toggle="collapse"
//     data-target="#navbarSupportedContent"
//     aria-controls="navbarSupportedContent"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="#">
//           Home <span className="sr-only">(current)</span>
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled" href="#">
//           Disabled
//         </a>
//       </li>
//     </ul>
//     <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
//       <input
//         className="form-control mr-sm-2 search"
//         type="text"
//         placeholder="Search..."
//         aria-label="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//         Search
//       </button>
//     </form>
//   </div>
// </nav>

// // ORIGINAL

// <div className="Navbar">
//         <span className="nav-brand">
//           <span className="movie-icon">
//             <IconButton>
//               <MovieRoundedIcon style={{ color: "white" }}></MovieRoundedIcon>
//             </IconButton>
//           </span>
//           <span className="logo" onClick={handleHome}>
//             MovieDB
//           </span>
//           <span className="actions">
//             <span className="mx-1" onClick={handleHome}></span>
//             <span className="nav-links mx-1" onClick={handleHome}>
//               Home
//             </span>
//             <span className="nav-links mx-1" onClick={handleHome}>
//               Popular
//             </span>
//             <span className="nav-links mx-1" onClick={handleHome}>
//               Trending
//             </span>
//           </span>
//         </span>
//         <header>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               className="search"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={handleChange}
//             />
//             <span className="search-icon">
//               <IconButton>
//                 <SearchIcon
//                   onClick={handleSubmit}
//                   style={{ color: "white" }}
//                 ></SearchIcon>
//               </IconButton>
//             </span>
//           </form>
//         </header>
//       </div>
