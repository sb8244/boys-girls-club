class CrawlersController < ApplicationController
  layout false

  def story
    @story = Story.find(params[:id])
  end
end
