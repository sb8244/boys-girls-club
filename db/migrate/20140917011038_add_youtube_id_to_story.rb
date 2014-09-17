class AddYoutubeIdToStory < ActiveRecord::Migration
  def change
    add_column :stories, :youtube, :string
  end
end
