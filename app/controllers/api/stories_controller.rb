class Api::StoriesController < Api::BaseController
  def index
    list = stories.order(heart_count: :desc)
    if params[:uuid]
      list.each do |h|
        h.hearted = true if hearted.include?(h)
      end
    end

    respond_with :api, list
  end

  def show
    story.hearted = true if story.hearts.where(uuid: params[:uuid]).exists?
    respond_with :api, story
  end

  def create
    respond_with :api, Story.create(story_params)
  end

  private

  def stories
    @stories ||= Story.where(featured: featured?)
  end

  def story
    @story ||= Story.find(params[:id])
  end

  def hearted
    params[:uuid] ? stories.joins(:hearts).where(hearts: { uuid: params[:uuid] }) : []
  end

  def featured?
    params.fetch(:featured, true)
  end

  def story_params
    params.permit(:name, :age, :field, :content, :image, :role, :gender, :ethnicity, :youtube)
  end
end
