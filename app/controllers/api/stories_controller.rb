class Api::StoriesController < Api::BaseController
  def index
    respond_with :api, stories
  end

  def show
    respond_with :api, story
  end

  def create
    respond_with :api, Story.create!(story_params)
  end

  private

  def stories
    Story.where(featured: featured?)
  end

  def story
    Story.find(params[:id])
  end

  def featured?
    params.fetch(:featured, true)
  end

  def story_params
    params.permit(:name, :age, :field, :content, :image, :role)
  end
end
