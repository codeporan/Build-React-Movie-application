import React, { Component } from "react";

export default class Actor extends Component {
  render() {
    return (
      <div>
        <div class="grey_column">
          <div id="left_column" class="column left_column">
            <section class="facts left_column">
              <h3 class="space">
                <bdi>Personal Info</bdi>
              </h3>
              <p>
                <strong>
                  <bdi>Known For</bdi>
                </strong>{" "}
                Acting
              </p>
              <p>
                <strong>
                  <bdi>Gender</bdi>
                </strong>{" "}
                Male
              </p>
              <p>
                <strong>
                  <bdi>Known Credits</bdi>
                </strong>{" "}
                73
              </p>
              <p>
                <strong>
                  <bdi>Birthday</bdi>
                </strong>{" "}
                1960-10-03
              </p>

              <p>
                <strong>
                  <bdi>Place of Birth</bdi>
                </strong>{" "}
                Chatham, Kent, England, UK
              </p>

              <p>
                <strong>
                  <bdi>Official Site</bdi>
                </strong>{" "}
                -
              </p>
              <p class="no_pad">
                <strong>
                  <bdi>Also Known As</bdi>
                </strong>
              </p>
              <ul>
                <li>-</li>
              </ul>

              <div class="">
                <p class="rounded new_button pad">
                  <a class="" href="/person/39185-kevin-eldon/edit">
                    edit page
                  </a>
                </p>
              </div>

              <div class="keyboard_shortcut_text">
                <p>
                  <a id="keyboard_shortcuts" class="no_click" href="#">
                    Keyboard Shortcuts
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>

        <section id="section_header" class="header no_image profile ">
          <div class="title" dir="auto">
            <a href="/person/39185-kevin-eldon">
              <h2>Kevin Eldon</h2>
            </a>

            <span class="social_links" />
          </div>

          <h3 dir="auto">Biography</h3>
          <div dir="auto" class="biography false">
            <p>We don't have a biography for Kevin Eldon.</p>
          </div>

          <div dir="auto" id="biography_window" class="hide" />

          <div class="content_wrapper full_width bottom_border">
            <ul class="shortcut_bar">
              <li
                data-sub-menu="sub_menu_discussions"
                class="no_hover"
                style={{ zIndex: 2 }}
              >
                <a
                  class="no_click"
                  href="/person/39185-kevin-eldon/discuss"
                  title="Discussions"
                >
                  Discussions
                </a>{" "}
                <span class="k-icon k-i-arrow-60-down" />
              </li>
              <li class="" style={{ zIndex: 3 }}>
                <a
                  href="/person/39185-kevin-eldon/images/profiles"
                  title="Images"
                >
                  Images
                </a>
              </li>
              <li class="" style={{ zIndex: 4 }}>
                <a href="/person/39185-kevin-eldon/changes" title="Changes">
                  Changes
                </a>
              </li>
              <li style={{ zIndex: 5 }}>
                <a
                  class="no_click report"
                  window="person"
                  href="#"
                  title="Report"
                >
                  Report
                </a>
              </li>
              <li style={{ zIndex: 6 }}>
                <a id="share" class="no_click" href="#" title="Share">
                  Share
                </a>
              </li>

              <li style={{ zIndex: 7 }}>
                <a
                  class="keyboard_s edit_page"
                  href="/person/39185-kevin-eldon/edit?active_nav_item=primary_facts"
                  title="Edit"
                >
                  Edit
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
