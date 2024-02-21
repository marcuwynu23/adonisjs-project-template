"use strict";

class HomeController {
  async index({ view }) {
    return view.render("home.index", { title: "Homepage" });
  }

  async create({ view }) {
    return view.render("home.create", { title: "Create" });
  }

  async store({ request, response }) {
    // store the data
  }

  async show({ params, view }) {
    // show single record
  }

  async edit({ params, view }) {
    // show edit form
  }

  async update({ params, request, response }) {
    // update the data
  }
}

module.exports = HomeController;
