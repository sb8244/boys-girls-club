class Api::HeartsController < Api::BaseController
  def index
    render json: Heart.where(uuid: params[:uuid])
  end

  def toggle
    # If the story can't be saved, then we shouldn't be able to heart this
    Heart.transaction do
      if heart
        heart.destroy
        story.update!(heart_count: story.heart_count - 1)
        render json: "decrease"
      else
        Heart.create!(heart_params)
        story.update!(heart_count: story.heart_count + 1)
        render json: "increase"
      end
    end
  end

  private

  def heart
    Heart.find_by(uuid: params[:uuid], story_id: params[:story_id])
  end

  def story
    Story.find(params[:story_id])
  end

  def heart_params
    params.permit(:uuid, :story_id)
  end
end
