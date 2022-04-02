import React from "react";

import { useSelector } from "react-redux";
import { parseISO, format } from "date-fns";
const About = () => {
  const { user } = useSelector((state) => {
    return state.authReducers;
  });
  console.log(user);
  const { profile } = useSelector((state) => {
    return state.profileReducers;
  });
  return (
    <section>
      <div class="gap gray-bg">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="row" id="page-contents">
                <div class="col-lg-3">
                  <aside class="sidebar static">
                    <div class="widget">
                      <h4 class="widget-title">Socials</h4>
                      <ul class="socials">
                        <li class="facebook">
                          <a title="" href="#">
                            <i class="fa fa-facebook"></i> <span>facebook</span>{" "}
                            <ins>45 likes</ins>
                          </a>
                        </li>
                        <li class="twitter">
                          <a title="" href="#">
                            <i class="fa fa-twitter"></i> <span>twitter</span>
                            <ins>25 likes</ins>
                          </a>
                        </li>
                        <li class="google">
                          <a title="" href="#">
                            <i class="fa fa-google"></i> <span>google</span>
                            <ins>35 likes</ins>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                {/* sidebar  */}
                <div class="col-lg-6">
                  <div class="central-meta">
                    <div class="about">
                      <div class="personal">
                        <h5 class="f-title">
                          <i class="ti-info-alt"></i> Personal Info
                        </h5>
                        <p></p>
                      </div>
                      <div class="d-flex flex-row mt-2">
                        <ul class="nav nav-tabs nav-tabs--vertical nav-tabs--left">
                          <li class="nav-item">
                            <a
                              href="#basic"
                              class="nav-link active"
                              data-toggle="tab"
                            >
                              Basic info
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#location"
                              class="nav-link"
                              data-toggle="tab"
                            >
                              location
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#work" class="nav-link" data-toggle="tab">
                              work and education
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#interest"
                              class="nav-link"
                              data-toggle="tab"
                            >
                              interests
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#lang" class="nav-link" data-toggle="tab">
                              languages
                            </a>
                          </li>
                        </ul>
                        <div class="tab-content">
                          <div class="tab-pane fade show active" id="basic">
                            <ul class="basics">
                              <li>
                                <i class="ti-user"></i>sarah grey
                              </li>
                              <li>
                                <i class="ti-map-alt"></i>live in Dubai
                              </li>
                              <li>
                                <i class="ti-mobile"></i>+1-234-345675
                              </li>
                              <li>
                                <i class="ti-email"></i>
                                <a
                                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                  class="__cf_email__"
                                  data-cfemail="3c4553494e515d55507c59515d5550125f5351"
                                >
                                  [email&#160;protected]
                                </a>
                              </li>
                              <li>
                                <i class="fa-solid fa-cake-candles"></i>

                                {format(parseISO(profile.birthday), "P")}
                              </li>
                            </ul>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="location"
                            role="tabpanel"
                          >
                            <div class="location-map">
                              <div id="map-canvas"></div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="work" role="tabpanel">
                            <div>
                              <a href="#" title="">
                                Envato
                              </a>
                              <p>
                                work as autohr in envato themeforest from 2013
                              </p>
                              <ul class="education">
                                <li>
                                  <i class="ti-facebook"></i> BSCS from Oxford
                                  University
                                </li>
                                <li>
                                  <i class="ti-twitter"></i> MSCS from Harvard
                                  Unversity
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="interest"
                            role="tabpanel"
                          >
                            <ul class="basics">
                              <li>Footbal</li>
                              <li>internet</li>
                              <li>photography</li>
                            </ul>
                          </div>
                          <div class="tab-pane fade" id="lang" role="tabpanel">
                            <ul class="basics">
                              <li>english</li>
                              <li>french</li>
                              <li>spanish</li>
                            </ul>
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
    </section>
  );
};

export default About;
