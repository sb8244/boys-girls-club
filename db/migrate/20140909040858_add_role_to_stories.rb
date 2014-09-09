class AddRoleToStories < ActiveRecord::Migration
  def change
    add_column :stories, :role, :string
  end
end
