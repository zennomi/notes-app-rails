// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "../stylesheets/application"


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

require("trix")
require("@rails/actiontext")

document.addEventListener('turbolinks:load', () => {
  document.addEventListener('click', () => {
    let element = event.target.closest('.text-content')
    if (!element) return;

    element.classList.add('d-none')
    element.nextElementSibling.classList.remove('d-none')
  })

  document.addEventListener('click', () => {
    if (!event.target.matches('.cancel')) return;

    event.preventDefault();

    let element = event.target.closest('.form-content')

    element.classList.add('d-none')
    element.previousElementSibling.classList.remove('d-none')
  })
})

import "controllers"

/*!
    * Start Bootstrap - SB Admin Pro v2.0.4 (https://shop.startbootstrap.com/product/sb-admin-pro)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under SEE_LICENSE (https://github.com/StartBootstrap/sb-admin-pro/blob/master/LICENSE)
    */
window.addEventListener('DOMContentLoaded', event => {
  // Activate feather
  feather.replace();

  // Enable tooltips globally
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Enable popovers globally
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
  });

  // Activate Bootstrap scrollspy for the sticky nav component
  const stickyNav = document.body.querySelector('#stickyNav');
  if (stickyNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#stickyNav',
          offset: 82,
      });
  }

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      //     document.body.classList.toggle('sidenav-toggled');
      // }
      sidebarToggle.addEventListener('click', event => {
          event.preventDefault();
          document.body.classList.toggle('sidenav-toggled');
          localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sidenav-toggled'));
      });
  }

  // Close side navigation when width < LG
  const sidenavContent = document.body.querySelector('#layoutSidenav_content');
  if (sidenavContent) {
      sidenavContent.addEventListener('click', event => {
          const BOOTSTRAP_LG_WIDTH = 992;
          if (window.innerWidth >= 992) {
              return;
          }
          if (document.body.classList.contains("sidenav-toggled")) {
              document.body.classList.toggle("sidenav-toggled");
          }
      });
  }

  // Add active state to sidbar nav links
  let activatedPath = window.location.pathname.match(/([\w-]+\.html)/, '$1');

  if (activatedPath) {
      activatedPath = activatedPath[0];
  } else {
      activatedPath = 'index.html';
  }

  const targetAnchors = document.body.querySelectorAll('[href="' + activatedPath + '"].nav-link');

  targetAnchors.forEach(targetAnchor => {
      let parentNode = targetAnchor.parentNode;
      while (parentNode !== null && parentNode !== document.documentElement) {
          if (parentNode.classList.contains('collapse')) {
              parentNode.classList.add('show');
              const parentNavLink = document.body.querySelector(
                  '[data-bs-target="#' + parentNode.id + '"]'
              );
              parentNavLink.classList.remove('collapsed');
              parentNavLink.classList.add('active');
          }
          parentNode = parentNode.parentNode;
      }
      targetAnchor.classList.add('active');
  });
});
