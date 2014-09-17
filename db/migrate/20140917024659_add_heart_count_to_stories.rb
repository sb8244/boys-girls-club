class AddHeartCountToStories < ActiveRecord::Migration
  def change
    add_column :stories, :heart_count, :integer, default: 0
  end
end
