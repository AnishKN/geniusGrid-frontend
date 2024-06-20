import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 py-3">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">Coming Soon</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2"></h3>

                  <p>the page you are looking for is not avaible as of now!</p>
                    <a class="link_404">
                        <NavLink to={'/'} >
                            Go to Home
                        </NavLink>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
