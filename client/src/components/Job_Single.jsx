import React from 'react'
import back from '../images/bg_1.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Job_Single = () => {
  return (
    <>
      <div className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${back})` }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-start">
            <div className="col-md-12  text-center mb-5">
              <p className="breadcrumbs mb-0"><span className="mr-3"><a href="/">Home <ArrowForwardIosIcon /></a></span> <span>Job Post</span></p>
              <h1 className="mb-3 bread">Browse Job</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 heading-section text-center ">
              <span className="subheading">Job Categories</span>
              <h2 className="mb-0">Top Categories</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 ">
              <ul className="category text-center">
                <li><a href="#">Web Development <br /><span className="number">354</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Graphic Designer <br /><span className="number">143</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Multimedia <br /><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Advertising <br /><span className="number">90</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
              </ul>
            </div>
            <div className="col-md-3 ">
              <ul className="category text-center">
                <li><a href="#">Education &amp; Training <br /><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">English <br /><span className="number">200</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Social Media <br /><span className="number">300</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Writing <br /><span className="number">150</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
              </ul>
            </div>
            <div className="col-md-3 ">
              <ul className="category text-center">
                <li><a href="#">PHP Programming <br /><span className="number">400</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Project Management <br /><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Finance Management <br /><span className="number">222</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Office &amp; Admin <br /><span className="number">123</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
              </ul>
            </div>
            <div className="col-md-3 ">
              <ul className="category text-center">
                <li><a href="#">Web Designer <br /><span className="number">324</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Customer Service <br /><span className="number">564</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Marketing &amp; Sales <br /><span className="number">234</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Software Development <br /><span className="number">425</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-md-7 text-center heading-section ">
              <span className="subheading">Browse Jobs</span>
              <h2 className="mb-4">Advance Search</h2>
            </div>
          </div>
          <div className="row">
            <div className="ftco-search">
              <div className="row">
                <div className="col-md-12 nav-link-wrap">
                  <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Find a Job</a>

                    <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Find a Candidate</a>

                  </div>
                </div>
                <div className="col-md-12 tab-wrap">

                  <div className="tab-content p-4" id="v-pills-tabContent">

                    <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                      <form action="#" className="search-job">
                        <div className="row no-gutters">
                          <div className="col-md mr-md-2">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-briefcase"></span></div>
                                <input type="text" className="form-control" placeholder="eg. Garphic. Web Developer" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md mr-md-2">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="select-wrap">
                                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                  <select name="" id="" className="form-control">
                                    <option value="">Category</option>
                                    <option value="">Full Time</option>
                                    <option value="">Part Time</option>
                                    <option value="">Freelance</option>
                                    <option value="">Internship</option>
                                    <option value="">Temporary</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md mr-md-2">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-map-marker"></span></div>
                                <input type="text" className="form-control" placeholder="Location" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <button type="submit" className="form-control btn btn-primary">Search</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                      <form action="#" className="search-job">
                        <div className="row">
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-user"></span></div>
                                <input type="text" className="form-control" placeholder="eg. Adam Scott" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="select-wrap">
                                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                  <select name="" id="" className="form-control">
                                    <option value="">Category</option>
                                    <option value="">Full Time</option>
                                    <option value="">Part Time</option>
                                    <option value="">Freelance</option>
                                    <option value="">Internship</option>
                                    <option value="">Temporary</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-map-marker"></span></div>
                                <input type="text" className="form-control" placeholder="Location" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field border">
                                <button type="submit" className="form-control btn btn-primary">Search</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 pr-lg-4">
              <div className="row">
                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Partime</span>
                        <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3"><span className="icon-layers"></span> <a href="#">Facebook, Inc.</a></div>
                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a href="/job_single" className="btn btn-primary py-2">Apply Job</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Fulltime</span>
                        <h2 className="mr-3 text-black"><a href="#">Full Stack Developer</a></h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3"><span className="icon-layers"></span> <a href="#">Google, Inc.</a></div>
                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a href="/job_single" className="btn btn-primary py-2">Apply Job</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Freelance</span>
                        <h2 className="mr-3 text-black"><a href="#">Open Source Interactive Developer</a></h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3"><span className="icon-layers"></span> <a href="#">New York Times</a></div>
                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a href="/job_single" className="btn btn-primary py-2">Apply Job</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Partime</span>
                        <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3"><span className="icon-layers"></span> <a href="#">Facebook, Inc.</a></div>
                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a href="/job_single" className="btn btn-primary py-2">Apply Job</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Temporary</span>
                        <h2 className="mr-3 text-black"><a href="#">Open Source Interactive Developer</a></h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3"><span className="icon-layers"></span> <a href="#">New York Times</a></div>
                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a href="/job_single" className="btn btn-primary py-2">Apply Job</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Fulltime</span>
                        <h2 className="mr-3 text-black"><a href="#">Full Stack Developer</a></h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3"><span className="icon-layers"></span> <a href="#">Google, Inc.</a></div>
                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a href="/job_single" className="btn btn-primary py-2">Apply Job</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Freelance</span>
                        <h2 className="mr-3 text-black"><a href="#">Open Source Interactive Developer</a></h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3"><span className="icon-layers"></span> <a href="#">New York Times</a></div>
                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a href="/job_single" className="btn btn-primary py-2">Apply Job</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Internship</span>
                        <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3"><span className="icon-layers"></span> <a href="#">Facebook, Inc.</a></div>
                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a href="/job_single" className="btn btn-primary py-2">Apply Job</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Temporary</span>
                        <h2 className="mr-3 text-black"><a href="#">Open Source Interactive Developer</a></h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3"><span className="icon-layers"></span> <a href="#">New York Times</a></div>
                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a href="/job_single" className="btn btn-primary py-2">Apply Job</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li><a href="#">&lt;</a></li>
                      <li className="active"><span>1</span></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 sidebar">
              <div className="sidebar-box bg-white p-4 ">
                <h3 className="heading-sidebar">Browse Category</h3>
                <form action="#" className="search-form mb-3">
                  <div className="form-group">
                    <span className="icon icon-search"></span>
                    <input type="text" className="form-control" placeholder="Search..." />
                  </div>
                </form>
                <form action="#" className="browse-form">
                  <label for="option-job-1"><input type="checkbox" id="option-job-1" name="vehicle" value="" checked /> Website &amp; Software</label><br />
                  <label for="option-job-2"><input type="checkbox" id="option-job-2" name="vehicle" value="" /> Education &amp; Training</label><br />
                  <label for="option-job-3"><input type="checkbox" id="option-job-3" name="vehicle" value="" /> Graphics Design</label><br />
                  <label for="option-job-4"><input type="checkbox" id="option-job-4" name="vehicle" value="" /> Accounting &amp; Finance</label><br />
                  <label for="option-job-5"><input type="checkbox" id="option-job-5" name="vehicle" value="" /> Restaurant &amp; Food</label><br />
                  <label for="option-job-6"><input type="checkbox" id="option-job-6" name="vehicle" value="" /> Health &amp; Hospital</label><br />
                </form>
              </div>

              <div className="sidebar-box bg-white p-4 ">
                <h3 className="heading-sidebar">Select Location</h3>
                <form action="#" className="search-form mb-3">
                  <div className="form-group">
                    <span className="icon icon-search"></span>
                    <input type="text" className="form-control" placeholder="Search..." />
                  </div>
                </form>
                <form action="#" className="browse-form">
                  <label for="option-location-1"><input type="checkbox" id="option-location-1" name="vehicle" value="" checked /> Sydney, Australia</label><br />
                  <label for="option-location-2"><input type="checkbox" id="option-location-2" name="vehicle" value="" /> New York, United States</label><br />
                  <label for="option-location-3"><input type="checkbox" id="option-location-3" name="vehicle" value="" /> Tokyo, Japan</label><br />
                  <label for="option-location-4"><input type="checkbox" id="option-location-4" name="vehicle" value="" /> Manila, Philippines</label><br />
                  <label for="option-location-5"><input type="checkbox" id="option-location-5" name="vehicle" value="" /> Seoul, South Korea</label><br />
                  <label for="option-location-6"><input type="checkbox" id="option-location-6" name="vehicle" value="" /> Western City, UK</label><br />
                </form>
              </div>

              <div className="sidebar-box bg-white p-4 ">
                <h3 className="heading-sidebar">Job Type</h3>
                <form action="#" className="browse-form">
                  <label for="option-job-type-1"><input type="checkbox" id="option-job-type-1" name="vehicle" value="" checked /> Partime</label><br />
                  <label for="option-job-type-2"><input type="checkbox" id="option-job-type-2" name="vehicle" value="" /> Fulltime</label><br />
                  <label for="option-job-type-3"><input type="checkbox" id="option-job-type-3" name="vehicle" value="" /> Intership</label><br />
                  <label for="option-job-type-4"><input type="checkbox" id="option-job-type-4" name="vehicle" value="" /> Temporary</label><br />
                  <label for="option-job-type-5"><input type="checkbox" id="option-job-type-5" name="vehicle" value="" /> Freelance</label><br />
                  <label for="option-job-type-6"><input type="checkbox" id="option-job-type-6" name="vehicle" value="" /> Fixed</label><br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Job_Single