class CrawlersController < ApplicationController
  layout false

  def story
    @story = Story.find(params[:id])
    @route = route
  end

  private

  def route
    request.original_url#.split("?")[0]
  end
end
