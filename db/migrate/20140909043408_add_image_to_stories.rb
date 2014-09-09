class AddImageToStories < ActiveRecord::Migration
  def up
    remove_column :stories, :image
    add_attachment :stories, :image
  end

  def down
    remove_attachment :stories, :image
    add_column :stories, :image, :text, null: false
  end
end
