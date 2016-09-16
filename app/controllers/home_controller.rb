class HomeController < ApplicationController
  def about
  end

  def grid
  end

  def index
    @candidates = Candidate.all
  end

  def platform
  end

  def submit
  end
end