class AddFieldsToStories < ActiveRecord::Migration
  def change
    add_column :stories, :gender, :string
    add_column :stories, :ethnicity, :string
  end
end
